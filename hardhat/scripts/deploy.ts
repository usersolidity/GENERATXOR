import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const diamond = require('./diamond-util/index.ts')
const hre = require('hardhat');
// const { generatxorSvgs } = require('./diamond-util/index.ts')
// const { aavegotchiSvgs } = require('../svgs/generatxor.js')
// const { wearablesSvgs } = require('../svgs/wearables.js')
// const { collateralsSvgs } = require('../svgs/collaterals.js')
// const { eyeShapeSvgs } = require('../svgs/eyeShapes.js')
// const { badgeSvgs:uniclyBaadgeSvgs } = require('../svgs/uniclyBaadgeSvg')
// const { sleevesSvgs:miamiSleevesSvgs  } = require('../svgs/miamiShirtWearables')
// const { sleevesSvgs:raffe4SleevesSvgs  } = require('../svgs/raffe4Wearables')
// const { badgeSvgs:szn1Rnd1badgeSvgs } = require('../svgs/szn1rnd1BadgeSvgs')
// const { badgeSvgs:szn1Rnd2badgeSvgs } = require('../svgs/szn1rnd2BadgeSvgs')
// const { wearableSets } = require('./wearableSets.js')
// const {wearableSets:wearableSetsRaffle4} = require("./updates/wearableSets/wearableSetsRaffle4.js")

function addCommas (nStr) {
  nStr += ''
  const x = nStr.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? '.' + x[1] : ''
  var rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2')
  }
  return x1 + x2
}

function strDisplay (str) {
  return addCommas(str.toString())
}

async function main (scriptName?: string) {
  console.log('SCRIPT NAME:', scriptName)
  const accounts = await ethers.getSigners()
  const account = await accounts[0].getAddress()
  console.log('Account: ' + account)
  console.log('--')
  let tx
  let totalGasUsed = ethers.BigNumber.from('0')
  let receipt
  let vrfCoordinator
  let linkAddress
  let linkContract
  let keyHash
  let fee
  let initialHauntSize
  let gxorTokenContract
  let dao
  let daoTreasury
  let rarityFarming
  let pixelCraft
  let childChainManager
  let gxorStakingDiamond
  let itemManagers
  
  const gasLimit = 32300000
  const portalPrice = ethers.utils.parseEther('100')
  const name = 'Generatxor'
  const symbol = 'GNTXOR'

  if (hre.network.name === 'hardhat') {
    childChainManager = account
    //InitDiamond = account
    // const LinkTokenMock = await ethers.getContractFactory('LinkTokenMock')
    // linkContract = await LinkTokenMock.deploy()
    // await linkContract.deployed()
    // linkAddress = linkContract.address
    // keyHash = '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4'
    // fee = ethers.utils.parseEther('0.0001')
    
  } else if (hre.network.name === 'matic') {
    // childChainManager = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'
    // vrfCoordinator = '0x3d2341ADb2D31f1c5530cDC622016af293177AE0'
    // linkAddress = '0xb0897686c545045aFc77CF20eC7A532E3120E0F1'
    // keyHash = '0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da'
    // fee = ethers.utils.parseEther('0.0001')
    
    // // Matic ghst token address
    // ghstTokenContract = await ethers.getContractAt('GHSTFacet', '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7')
    // ghstStakingDiamond = '0xA02d547512Bb90002807499F05495Fe9C4C3943f'

    // dao = 'todo' // await accounts[1].getAddress()
    // daoTreasury = 'todo'
    // rarityFarming = 'todo' // await accounts[2].getAddress()
    // pixelCraft = 'todo' // await accounts[3].getAddress()
  } else if (hre.network.name === 'Arbitrum') {
    childChainManager = account
    //arbiDai = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa';

  } else if (hre.network.name === 'kovan') {
    childChainManager = account
    vrfCoordinator = '0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9'
    linkAddress = '0xa36085F69e2889c224210F603D836748e7dC0088'
    keyHash = '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4'
    fee = ethers.utils.parseEther('0.1')
    initialHauntSize = '10000'
    // gxorTokenContract = await ethers.getContractAt('GXORFacet', '0xeDaA788Ee96a0749a2De48738f5dF0AA88E99ab5')
   
    // ghstStakingDiamond = '0xA4fF399Aa1BB21aBdd3FC689f46CCE0729d58DEd'
    // recipient = account
    // mkDai = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa';
    // IUniswapRouter = '0xE592427A0AEce92De3Edee1F18E0157C05861564'
    // IQuoter = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'
    // WETH9 = '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
    
    
  }  else {
    throw Error('No network settings for ' + hre.network.name)
  }

  async function deployFacets (...facets) {
    const instances = Array()
    for (let facet of facets) {
      let constructorArgs = Array()
      if (Array.isArray(facet)) {
        console.log('beforesemic');
        [facet, constructorArgs] = facet;
        console.log(facet);
        console.log("aftersemic " + constructorArgs);
      }
      console.log('After deployFacets in deploy script the constructorArgs are: ' + constructorArgs)
      const factory = await ethers.getContractFactory(facet)
      const facetInstance = await factory.deploy(...constructorArgs)
      await facetInstance.deployed()
      const tx = facetInstance.deployTransaction
      const receipt = await tx.wait()
      console.log(`${facet} deploy gas used: ` + strDisplay(receipt.gasUsed))
      totalGasUsed = totalGasUsed.add(receipt.gasUsed)
      instances.push(facetInstance)
    }
    return instances
  }

  let [
    generatxorFacet,
  ] = await deployFacets(
    'contracts/generatxor/facets/GeneratxorFacet.sol:GeneratxorFacet'
  )

  // eslint-disable-next-line no-unused-vars
  const generatxorDiamond = await diamond.deploy({
    diamondName: 'GENERATXORdiamond',

    initDiamond: 'contracts/generatxor/InitDiamond.sol:InitDiamond',
    facets: [
      ['GeneratxorFacet', generatxorFacet]
    ],
    owner: account, 
    //args: [[keyHash, fee, vrfCoordinator, linkAddress, childChainManager, name, symbol]] 
    args: [[name, symbol]]

  })
  console.log('GENERATXOR diamond address: ' + generatxorDiamond.address)

  tx = generatxorDiamond.deployTransaction
  receipt = await tx.wait()
  console.log('GENERATXOR diamond deploy gas used: ' + strDisplay(receipt.gasUsed))
  totalGasUsed = totalGasUsed.add(receipt.gasUsed)

  const diamondLoupeFacet = await ethers.getContractAt('DiamondLoupeFacet', generatxorDiamond.address)
  generatxorFacet = await ethers.getContractAt('contracts/generatxor/facets/GeneratxorFacet.sol:GeneratxorFacet', generatxorDiamond.address)

  
  // // if (hre.network.name === 'matic') {
  //   // transfer ownership
  //   const newOwner = '0x94cb5C277FCC64C274Bd30847f0821077B231022'
  //   console.log('Transferring ownership of diamond: ' + generatxorDiamond.address)
  //   const diamond = await ethers.getContractAt('OwnershipFacet', generatxorDiamond.address)
  //   const tx = await diamond.transferOwnership(newOwner)
  //   console.log('Transaction hash: ' + tx.hash)
  //   receipt = await tx.wait()
  //   console.log('Transfer Transaction complete')
  //   console.log('Gas used:' + strDisplay(receipt.gasUsed))
  //   totalGasUsed = totalGasUsed.add(receipt.gasUsed)
  // // }

  console.log('Total gas used: ' + strDisplay(totalGasUsed))
  return {
    account: account,
    generatxorDiamond: generatxorDiamond,
    diamondLoupeFacet: diamondLoupeFacet,
    generatxorFacet: generatxorFacet,
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { main as deployProject }
