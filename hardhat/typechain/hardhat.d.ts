/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "CollateralEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CollateralEscrow__factory>;
    getContractFactory(
      name: "GeneratxorFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneratxorFacet__factory>;
    getContractFactory(
      name: "InitDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitDiamond__factory>;
    getContractFactory(
      name: "ILink",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILink__factory>;
    getContractFactory(
      name: "LibERC1155Marketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibERC1155Marketplace__factory>;
    getContractFactory(
      name: "LibERC721Marketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibERC721Marketplace__factory>;
    getContractFactory(
      name: "LibGeneratxor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibGeneratxor__factory>;
    getContractFactory(
      name: "LibSvg",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibSvg__factory>;
    getContractFactory(
      name: "InitDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitDiamond__factory>;
    getContractFactory(
      name: "GHSTFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GHSTFacet__factory>;
    getContractFactory(
      name: "InitDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitDiamond__factory>;
    getContractFactory(
      name: "IGXORDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGXORDiamond__factory>;
    getContractFactory(
      name: "Diamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Diamond__factory>;
    getContractFactory(
      name: "DiamondCutFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondCutFacet__factory>;
    getContractFactory(
      name: "DiamondLoupeFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondLoupeFacet__factory>;
    getContractFactory(
      name: "OwnershipFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnershipFacet__factory>;
    getContractFactory(
      name: "IAaveLendingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAaveLendingPool__factory>;
    getContractFactory(
      name: "IDiamondCut",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondCut__factory>;
    getContractFactory(
      name: "IDiamondLoupe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondLoupe__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155TokenReceiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC173",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC173__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20EIP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20EIP__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721TokenReceiver__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721TokenReceiver__factory>;
    getContractFactory(
      name: "LibDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibDiamond__factory>;
    getContractFactory(
      name: "LibERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibERC1155__factory>;
    getContractFactory(
      name: "LibERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibERC20__factory>;
    getContractFactory(
      name: "LibERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibERC721__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}