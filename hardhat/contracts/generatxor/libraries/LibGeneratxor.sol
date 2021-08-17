// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {IERC20} from '../../shared/interfaces/IERC20.sol';
import {LibAppStorage, GeneratxorCollateralTypeInfo, AppStorage, Generatxor, ItemType, NUMERIC_TRAITS_NUM, EQUIPPED_WEARABLE_SLOTS, PORTAL_GENERATXORS_NUM} from './LibAppStorage.sol';
import {LibERC20} from '../../shared/libraries/LibERC20.sol';
import {LibMeta} from '../../shared/libraries/LibMeta.sol';
import {IERC721} from '../../shared/interfaces/IERC721.sol';
import {LibERC721} from '../../shared/libraries/LibERC721.sol';
import {LibItems, ItemTypeIO} from '../libraries/LibItems.sol';

struct GeneratxorCollateralTypeIO {
    address collateralType;
    GeneratxorCollateralTypeInfo collateralTypeInfo;
}

struct GeneratxorInfo {
    uint256 tokenId;
    string name;
    address owner;
    uint256 randomNumber;
    uint256 status;
    int16[NUMERIC_TRAITS_NUM] numericTraits;
    int16[NUMERIC_TRAITS_NUM] modifiedNumericTraits;
    uint16[EQUIPPED_WEARABLE_SLOTS] equippedWearables;
    address collateral;
    address escrow;
    uint256 stakedAmount;
    uint256 minimumStake;
    uint kinship;
    uint256 lastInteracted;
    uint256 experience; //How much XP this Generatxor has accrued. Begins at 0.
    uint256 toNextLevel;
    uint256 usedSkillPoints; //number of skill points used
    uint256 level; //the current generatxor level
    uint256 hauntId;
    uint256 baseRarityScore;
    uint256 modifiedRarityScore;
    bool locked;
    ItemTypeIO[] items;
}

struct PortalGeneratxorTraitsIO {
    uint256 randomNumber;
    int16[NUMERIC_TRAITS_NUM] numericTraits;
    address collateralType;
    uint256 minimumStake;
}

struct InternalPortalGeneratxorTraitsIO {
    uint256 randomNumber;
    int16[NUMERIC_TRAITS_NUM] numericTraits;
    address collateralType;
    uint256 minimumStake;
}
library LibGeneratxor {
    uint8 constant STATUS_CLOSED_PORTAL = 0;
    uint8 constant STATUS_VRF_PENDING = 1;
    uint8 constant STATUS_OPEN_PORTAL = 2;
    uint8 constant STATUS_GENERATXOR = 3;

    event GeneratxorInteract(uint256 indexed _tokenId, uint256 kinship);

    function toNumericTraits(uint256 _randomNumber, int16[NUMERIC_TRAITS_NUM] memory _modifiers)
        internal
        pure
        returns (int16[NUMERIC_TRAITS_NUM] memory numericTraits_)
    {
        for (uint256 i; i < NUMERIC_TRAITS_NUM; i++) {
            uint256 value = uint8(uint256(_randomNumber >> (i * 8)));
            if (value > 99) {
                value /= 2;
                if (value > 99) {
                    value = uint256(keccak256(abi.encodePacked(_randomNumber, i))) % 100;
                }
            }
            numericTraits_[i] = int16(int256(value)) + _modifiers[i];
        }
    }

    function rarityMultiplier(int16[NUMERIC_TRAITS_NUM] memory _numericTraits) internal pure returns (uint256 multiplier) {
        uint256 rarityScore = LibGeneratxor.baseRarityScore(_numericTraits);
        if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
    }

    function singlePortalGeneratxorTraits(
        uint256 _hauntId,
        uint256 _randomNumber,
        uint256 _option
    ) internal view returns (InternalPortalGeneratxorTraitsIO memory singlePortalGeneratxorTraits_) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        uint256 randomNumberN = uint256(keccak256(abi.encodePacked(_randomNumber, _option)));
        singlePortalGeneratxorTraits_.randomNumber = randomNumberN;

        address collateralType = s.hauntCollateralTypes[_hauntId][randomNumberN % s.hauntCollateralTypes[_hauntId].length];
        singlePortalGeneratxorTraits_.numericTraits = toNumericTraits(randomNumberN, s.collateralTypeInfo[collateralType].modifiers);
        singlePortalGeneratxorTraits_.collateralType = collateralType;

        GeneratxorCollateralTypeInfo memory collateralInfo = s.collateralTypeInfo[collateralType];
        uint256 conversionRate = collateralInfo.conversionRate;

        //Get rarity multiplier
        uint256 multiplier = rarityMultiplier(singlePortalGeneratxorTraits_.numericTraits);

        //First we get the base price of our collateral in terms of DAI
        uint256 collateralDAIPrice = ((10**IERC20(collateralType).decimals()) / conversionRate);

        //Then multiply by the rarity multiplier
        singlePortalGeneratxorTraits_.minimumStake = collateralDAIPrice * multiplier;
    }

    function portalGeneratxorTraits(uint256 _tokenId)
        internal
        view
        returns (PortalGeneratxorTraitsIO[PORTAL_GENERATXORS_NUM] memory portalGeneratxorTraits_)
    {
        AppStorage storage s = LibAppStorage.diamondStorage();
        require(s.generatxors[_tokenId].status == LibGeneratxor.STATUS_OPEN_PORTAL, "GeneratxorFacet: Portal not open");

        uint256 randomNumber = s.tokenIdToRandomNumber[_tokenId];

        uint256 hauntId = s.generatxors[_tokenId].hauntId;

        for (uint256 i; i < portalGeneratxorTraits_.length; i++) {
            InternalPortalGeneratxorTraitsIO memory single = singlePortalGeneratxorTraits(hauntId, randomNumber, i);
            portalGeneratxorTraits_[i].randomNumber = single.randomNumber;
            portalGeneratxorTraits_[i].collateralType = single.collateralType;
            portalGeneratxorTraits_[i].minimumStake = single.minimumStake;
            portalGeneratxorTraits_[i].numericTraits = single.numericTraits;
        }
    }


    function getGeneratxor(uint256 _tokenId) internal view returns (GeneratxorInfo memory generatxorInfo_) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        generatxorInfo_.tokenId = _tokenId;
        generatxorInfo_.owner = s.generatxors[_tokenId].owner;
        generatxorInfo_.randomNumber = s.generatxors[_tokenId].randomNumber;
        generatxorInfo_.status = s.generatxors[_tokenId].status;
        generatxorInfo_.hauntId = s.generatxors[_tokenId].hauntId;
        if (generatxorInfo_.status == STATUS_GENERATXOR) {
            generatxorInfo_.name = s.generatxors[_tokenId].name;
            generatxorInfo_.equippedWearables = s.generatxors[_tokenId].equippedWearables;
            generatxorInfo_.collateral = s.generatxors[_tokenId].collateralType;
            generatxorInfo_.escrow = s.generatxors[_tokenId].escrow;
            generatxorInfo_.stakedAmount = IERC20(generatxorInfo_.collateral).balanceOf(generatxorInfo_.escrow);
            generatxorInfo_.minimumStake = s.generatxors[_tokenId].minimumStake;
            generatxorInfo_.kinship = kinship(_tokenId);
            generatxorInfo_.lastInteracted = s.generatxors[_tokenId].lastInteracted;
            generatxorInfo_.experience = s.generatxors[_tokenId].experience;
            generatxorInfo_.toNextLevel = xpUntilNextLevel(s.generatxors[_tokenId].experience);
            generatxorInfo_.level = generatxorLevel(s.generatxors[_tokenId].experience);
            generatxorInfo_.usedSkillPoints = s.generatxors[_tokenId].usedSkillPoints;
            generatxorInfo_.numericTraits = s.generatxors[_tokenId].numericTraits;
            generatxorInfo_.baseRarityScore = baseRarityScore(generatxorInfo_.numericTraits);
            (generatxorInfo_.modifiedNumericTraits, generatxorInfo_.modifiedRarityScore) = modifiedTraitsAndRarityScore(_tokenId);
            generatxorInfo_.locked = s.generatxors[_tokenId].locked;
            generatxorInfo_.items = LibItems.itemBalancesOfTokenWithTypes(address(this), _tokenId);
        }
    }

    //Only valid for claimed generatxors
    function modifiedTraitsAndRarityScore(uint256 _tokenId)
        internal
        view
        returns (int16[NUMERIC_TRAITS_NUM] memory numericTraits_, uint256 rarityScore_)
    {
        AppStorage storage s = LibAppStorage.diamondStorage();
        require(s.generatxors[_tokenId].status == STATUS_GENERATXOR, "GeneratxorFacet: Must be claimed");
        Generatxor storage generatxor = s.generatxors[_tokenId];
        numericTraits_ = getNumericTraits(_tokenId);
        uint256 wearableBonus;
        for (uint256 slot; slot < EQUIPPED_WEARABLE_SLOTS; slot++) {
            uint256 wearableId = generatxor.equippedWearables[slot];
            if (wearableId == 0) {
                continue;
            }
            ItemType storage itemType = s.itemTypes[wearableId];
            //Add on trait modifiers
            for (uint256 j; j < NUMERIC_TRAITS_NUM; j++) {
                numericTraits_[j] += itemType.traitModifiers[j];
            }
            wearableBonus += itemType.rarityScoreModifier;
        }
        uint256 baseRarity = baseRarityScore(numericTraits_);
        rarityScore_ = baseRarity + wearableBonus;
    }

    function getNumericTraits(uint256 _tokenId) internal view returns (int16[NUMERIC_TRAITS_NUM] memory numericTraits_) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        //Check if trait boosts from consumables are still valid
        int256 boostDecay = int256((block.timestamp - s.generatxors[_tokenId].lastTemporaryBoost) / 24 hours);
        for (uint256 i; i < NUMERIC_TRAITS_NUM; i++) {
            int256 number = s.generatxors[_tokenId].numericTraits[i];
            int256 boost = s.generatxors[_tokenId].temporaryTraitBoosts[i];

            if (boost > 0 && boost > boostDecay) {
                number += boost - boostDecay;
            } else if ((boost * -1) > boostDecay) {
                number += boost + boostDecay;
            }
            numericTraits_[i] = int16(number);
        }
    }

    function kinship(uint256 _tokenId) internal view returns (uint256 score_) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        Generatxor storage generatxor = s.generatxors[_tokenId];
        uint256 lastInteracted = generatxor.lastInteracted;
        uint256 interactionCount = generatxor.interactionCount;
        uint256 interval = block.timestamp - lastInteracted;

        uint256 daysSinceInteraction = interval / 24 hours;

        if (interactionCount > daysSinceInteraction) {
            score_ = interactionCount - daysSinceInteraction;
        }
    }

    function xpUntilNextLevel(uint256 _experience) internal pure returns (uint256 requiredXp_) {
        uint256 currentLevel = generatxorLevel(_experience);
        requiredXp_ = ((currentLevel**2) * 50) - _experience;
    }

    function generatxorLevel(uint256 _experience) internal pure returns (uint256 level_) {
        if (_experience > 490050) {
            return 99;
        }

        level_ = (sqrt(2 * _experience) / 10);
        return level_ + 1;
    }

    function interact(uint256 _tokenId) internal returns (bool) {
        AppStorage storage s = LibAppStorage.diamondStorage();
        uint256 lastInteracted = s.generatxors[_tokenId].lastInteracted;
        // if interacted less than 12 hours ago
        if (block.timestamp < lastInteracted + 12 hours) {
            return false;
        }

        uint256 interactionCount = s.generatxors[_tokenId].interactionCount;
        uint256 interval = block.timestamp - lastInteracted;
        uint256 daysSinceInteraction = interval / 1 days;
        uint256 l_kinship;
        if (interactionCount > daysSinceInteraction) {
            l_kinship = interactionCount - daysSinceInteraction;
        }

        uint256 hateBonus;

        if (l_kinship < 40) {
            hateBonus = 2;
        }
        l_kinship += 1 + hateBonus;
        s.generatxors[_tokenId].interactionCount = l_kinship;

        s.generatxors[_tokenId].lastInteracted = uint40(block.timestamp);
        emit GeneratxorInteract(_tokenId, l_kinship);
        return true;
    }

    //Calculates the base rarity score, including collateral modifier
    function baseRarityScore(int16[NUMERIC_TRAITS_NUM] memory _numericTraits) internal pure returns (uint256 _rarityScore) {
        for (uint256 i; i < NUMERIC_TRAITS_NUM; i++) {
            int256 number = _numericTraits[i];
            if (number >= 50) {
                _rarityScore += uint256(number) + 1;
            } else {
                _rarityScore += uint256(int256(100) - number);
            }
        }
    }

    // Need to ensure there is no overflow of _ghst
    function purchase(address _from, uint256 _ghst) internal {
        AppStorage storage s = LibAppStorage.diamondStorage();
        //33% to burn address
        uint256 burnShare = (_ghst * 33) / 100;

        //17% to Pixelcraft wallet
        uint256 companyShare = (_ghst * 17) / 100;

        //40% to rarity farming rewards
        uint256 rarityFarmShare = (_ghst * 2) / 5;

        //10% to DAO
        uint256 daoShare = (_ghst - burnShare - companyShare - rarityFarmShare);

        // Using 0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF as burn address.
        // GHST token contract does not allow transferring to address(0) address: https://etherscan.io/address/0x3F382DbD960E3a9bbCeaE22651E88158d2791550#code
        address ghstContract = s.ghstContract;
        LibERC20.transferFrom(ghstContract, _from, address(0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF), burnShare);
        LibERC20.transferFrom(ghstContract, _from, s.pixelCraft, companyShare);
        LibERC20.transferFrom(ghstContract, _from, s.rarityFarming, rarityFarmShare);
        LibERC20.transferFrom(ghstContract, _from, s.dao, daoShare);
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function validateAndLowerName(string memory _name) internal pure returns (string memory) {
        bytes memory name = abi.encodePacked(_name);
        uint256 len = name.length;
        require(len != 0, "LibGeneratxor: name can't be 0 chars");
        require(len < 26, "LibGeneratxor: name can't be greater than 25 characters");
        uint256 char = uint256(uint8(name[0]));
        require(char != 32, "LibGeneratxor: first char of name can't be a space");
        char = uint256(uint8(name[len - 1]));
        require(char != 32, "LibGeneratxor: last char of name can't be a space");
        for (uint256 i; i < len; i++) {
            char = uint256(uint8(name[i]));
            require(char > 31 && char < 127, "LibGeneratxor: invalid character in Generatxor name.");
            if (char < 91 && char > 64) {
                name[i] = bytes1(uint8(char + 32));
            }
        }
        return string(name);
    }

    // function addTokenToUser(address _to, uint256 _tokenId) internal {}

    // function removeTokenFromUser(address _from, uint256 _tokenId) internal {}

    function transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) internal {
        AppStorage storage s = LibAppStorage.diamondStorage();
        // remove
        uint256 index = s.ownerTokenIdIndexes[_from][_tokenId];
        uint256 lastIndex = s.ownerTokenIds[_from].length - 1;
        if (index != lastIndex) {
            uint32 lastTokenId = s.ownerTokenIds[_from][lastIndex];
            s.ownerTokenIds[_from][index] = lastTokenId;
            s.ownerTokenIdIndexes[_from][lastTokenId] = index;
        }
        s.ownerTokenIds[_from].pop();
        delete s.ownerTokenIdIndexes[_from][_tokenId];
        if (s.approved[_tokenId] != address(0)) {
            delete s.approved[_tokenId];
            emit LibERC721.Approval(_from, address(0), _tokenId);
        }
        // add
        s.generatxors[_tokenId].owner = _to;
        s.ownerTokenIdIndexes[_to][_tokenId] = s.ownerTokenIds[_to].length;
        s.ownerTokenIds[_to].push(uint32(_tokenId));
        emit LibERC721.Transfer(_from, _to, _tokenId);
    }
}