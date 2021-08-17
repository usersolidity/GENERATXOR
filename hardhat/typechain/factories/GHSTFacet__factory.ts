/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GHSTFacet, GHSTFacetInterface } from "../GHSTFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "addApprovedContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "approvedContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "contracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "removeApprovedContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113de806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610232578063a9059cbb14610245578063dce8600314610258578063dd62ed3e1461026d57610100565b806370a08231146101d6578063755edd171461020c57806395d89b41146101055780639eea22791461021f57610100565b806318160ddd116100d357806318160ddd1461016357806323b872dd146101a1578063313ce567146101b457806339509351146101c357610100565b806306fdde0314610105578063095ea7b3146101235780631249c58b14610146578063135171be14610150575b600080fd5b61010d6102b1565b60405161011a91906112d2565b60405180910390f35b61013661013136600461124f565b6102e9565b604051901515815260200161011a565b61014e610360565b005b61014e61015e3660046111c1565b610466565b6101936103ec547401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1690565b60405190815260200161011a565b6101366101af366004611214565b6105a7565b6040516012815260200161011a565b6101366101d136600461124f565b610886565b6101936101e43660046111c1565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b61014e61021a3660046111c1565b6109b5565b61014e61022d3660046111c1565b610ad2565b61013661024036600461124f565b610d63565b61013661025336600461124f565b610e9f565b610260610fd8565b60405161011a9190611278565b61019361027b3660046111e2565b73ffffffffffffffffffffffffffffffffffffffff91821660009081526020818152604080832093909416825291909152205490565b60408051808201909152600481527f47584f520000000000000000000000000000000000000000000000000000000060208201525b90565b3360008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061034f9086815260200190565b60405180910390a350600192915050565b33600090815260016020526040812080546a084595161401484a0000009283929161038c908490611343565b90915550506103ec80548291906014906103cd9084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1661135b565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161045b91815260200190565b60405180910390a350565b61046e61104a565b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205415610526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f47584f5246616365743a20417070726f76656420636f6e747261637420616c7260448201527f656164792065786973747300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600280546001810182557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01805473ffffffffffffffffffffffffffffffffffffffff9093167fffffffffffffffffffffffff0000000000000000000000000000000000000000909316831790555460009182526003602052604090912055565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602052604081205490913314806105ea57503360009081526003602052604090205415155b156105f457610730565b73ffffffffffffffffffffffffffffffffffffffff85166000908152602081815260408083203384529091529020548381101561068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f47584f523a204e6f7420616c6c6f77656420746f207472616e73666572000000604482015260640161051d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461072e576106be848261138b565b73ffffffffffffffffffffffffffffffffffffffff8716600081815260208181526040808320338085529252909120929092557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92561071c878561138b565b60405190815260200160405180910390a35b505b828110156107c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f47584f523a204e6f7420656e6f756768204748535420746f207472616e73666560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161051d565b6107ca838261138b565b73ffffffffffffffffffffffffffffffffffffffff808716600090815260016020526040808220939093559086168152908120805485929061080d908490611343565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161087391815260200190565b60405180910390a3506001949350505050565b3360009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054816108c08483611343565b905081811015610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f47584f5246616365743a20416c6c6f77616e636520696e637265617365206f7660448201527f6572666c6f776564000000000000000000000000000000000000000000000000606482015260840161051d565b3360008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a1680855290835292819020859055518481529192917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610873565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260016020526040812080546a084595161401484a000000928392916109f7908490611343565b90915550506103ec8054829190601490610a389084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1661135b565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ac691815260200190565b60405180910390a35050565b610ada61104a565b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205480610b8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f47584f5246616365743a20417070726f76656420636f6e747261637420646f6560448201527f73206e6f74206578697374000000000000000000000000000000000000000000606482015260840161051d565b600254818114610ca65760006002610ba660018461138b565b81548110610bdd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169050806002610c0f60018661138b565b81548110610c46577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9485161790559290911681526003909152604090208290555b6002805480610cde577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff949094168152600390935250506040812055565b3360009081526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610e22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f47584f5246616365743a20416c6c6f77616e636520646563726561736564206260448201527f656c6f7720300000000000000000000000000000000000000000000000000000606482015260840161051d565b610e2c838261138b565b3360008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8a16808552908352928190208590555184815293945090927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a35060019392505050565b3360009081526001602052604081205482811015610f3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f47584f523a204e6f7420656e6f7567682047584f5220746f207472616e73666560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161051d565b610f49838261138b565b336000908152600160205260408082209290925573ffffffffffffffffffffffffffffffffffffffff861681529081208054859290610f89908490611343565b909155505060405183815273ffffffffffffffffffffffffffffffffffffffff85169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610e8d565b6060600060020180548060200260200160405190810160405280929190818152602001828054801561104057602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611015575b5050505050905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1661108a61112f565b73ffffffffffffffffffffffffffffffffffffffff161461112d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f6572000000000000000000000000000000000000000000000000000000000000606482015260840161051d565b565b60003330141561119357600080368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505036015173ffffffffffffffffffffffffffffffffffffffff1691506102e69050565b503390565b803573ffffffffffffffffffffffffffffffffffffffff811681146111bc57600080fd5b919050565b6000602082840312156111d2578081fd5b6111db82611198565b9392505050565b600080604083850312156111f4578081fd5b6111fd83611198565b915061120b60208401611198565b90509250929050565b600080600060608486031215611228578081fd5b61123184611198565b925061123f60208501611198565b9150604084013590509250925092565b60008060408385031215611261578182fd5b61126a83611198565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156112c657835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611294565b50909695505050505050565b6000602080835283518082850152825b818110156112fe578581018301518582016040015282016112e2565b8181111561130f5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115611356576113566113a2565b500190565b60006bffffffffffffffffffffffff808316818516808303821115611382576113826113a2565b01949350505050565b60008282101561139d5761139d6113a2565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000802000a";

export class GHSTFacet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GHSTFacet> {
    return super.deploy(overrides || {}) as Promise<GHSTFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GHSTFacet {
    return super.attach(address) as GHSTFacet;
  }
  connect(signer: Signer): GHSTFacet__factory {
    return super.connect(signer) as GHSTFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GHSTFacetInterface {
    return new utils.Interface(_abi) as GHSTFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GHSTFacet {
    return new Contract(address, _abi, signerOrProvider) as GHSTFacet;
  }
}
