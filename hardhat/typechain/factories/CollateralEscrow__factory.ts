/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CollateralEscrow,
  CollateralEscrowInterface,
} from "../CollateralEscrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aTokenContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aTokenContract",
        type: "address",
      },
    ],
    name: "approvegeneratxorDiamond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105de3803806105de83398101604081905261002f91610247565b61004161007060201b6102681760201c565b600080546001600160a01b0319166001600160a01b039290921691909117905561006a816100cd565b50610295565b6000333014156100c757600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b031691506100ca9050565b50335b90565b6000546001600160a01b03166100ec610070602090811b61026817901c565b6001600160a01b0316146101575760405162461bcd60e51b815260206004820152602760248201527f436f6c6c61746572616c457363726f773a204e6f74206f776e6572206f6620636044820152661bdb9d1c9858dd60ca1b60648201526084015b60405180910390fd5b60005460405163095ea7b360e01b81526001600160a01b03918216600482015260001960248201529082169063095ea7b390604401602060405180830381600087803b1580156101a657600080fd5b505af11580156101ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101de9190610275565b6102445760405162461bcd60e51b815260206004820152603160248201527f436f6c6c61746572616c457363726f773a20746f6b656e206e6f74206170707260448201527037bb32b2103337b9103a3930b739b332b960791b606482015260840161014e565b50565b600060208284031215610258578081fd5b81516001600160a01b038116811461026e578182fd5b9392505050565b600060208284031215610286578081fd5b8151801515811461026e578182fd5b61033a806102a46000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a2505b4014610030575b600080fd5b61004361003e3660046102d2565b610045565b005b60005473ffffffffffffffffffffffffffffffffffffffff16610066610268565b73ffffffffffffffffffffffffffffffffffffffff161461010e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f436f6c6c61746572616c457363726f773a204e6f74206f776e6572206f66206360448201527f6f6e74726163740000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000546040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248201529082169063095ea7b390604401602060405180830381600087803b1580156101a157600080fd5b505af11580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d9919061030d565b610265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f436f6c6c61746572616c457363726f773a20746f6b656e206e6f74206170707260448201527f6f76656420666f72207472616e736665720000000000000000000000000000006064820152608401610105565b50565b6000333014156102cc57600080368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505036015173ffffffffffffffffffffffffffffffffffffffff1691506102cf9050565b50335b90565b6000602082840312156102e3578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610306578182fd5b9392505050565b60006020828403121561031e578081fd5b81518015158114610306578182fdfea164736f6c6343000802000a";

export class CollateralEscrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollateralEscrow> {
    return super.deploy(
      _aTokenContract,
      overrides || {}
    ) as Promise<CollateralEscrow>;
  }
  getDeployTransaction(
    _aTokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_aTokenContract, overrides || {});
  }
  attach(address: string): CollateralEscrow {
    return super.attach(address) as CollateralEscrow;
  }
  connect(signer: Signer): CollateralEscrow__factory {
    return super.connect(signer) as CollateralEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollateralEscrowInterface {
    return new utils.Interface(_abi) as CollateralEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralEscrow {
    return new Contract(address, _abi, signerOrProvider) as CollateralEscrow;
  }
}
