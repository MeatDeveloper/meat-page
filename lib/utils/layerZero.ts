import { meatAddress } from "@/config/site";
import { useContractRead, useContractWrite } from "wagmi";
import { ethers } from "ethers";

export const meatAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_lzEndpoint",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_totalSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_hash",
        "type": "bytes32"
      }
    ],
    "name": "CallOFTReceivedSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_reason",
        "type": "bytes"
      }
    ],
    "name": "MessageFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "NonContractAddress",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "ReceiveFromChain",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "RetryMessageSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "_toAddress",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "SendToChain",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_type",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_minDstGas",
        "type": "uint256"
      }
    ],
    "name": "SetMinDstGas",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "precrime",
        "type": "address"
      }
    ],
    "name": "SetPrecrime",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_remoteChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_path",
        "type": "bytes"
      }
    ],
    "name": "SetTrustedRemote",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "_remoteChainId",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_remoteAddress",
        "type": "bytes"
      }
    ],
    "name": "SetTrustedRemoteAddress",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_PAYLOAD_SIZE_LIMIT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NO_EXTRA_GAS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PT_SEND",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PT_SEND_AND_CALL",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes32",
        "name": "_from",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_gasForCall",
        "type": "uint256"
      }
    ],
    "name": "callOnOFTReceived",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "circulatingSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "creditedPackets",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes32",
        "name": "_toAddress",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_dstGasForCall",
        "type": "uint64"
      },
      {
        "internalType": "bool",
        "name": "_useZro",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "_adapterParams",
        "type": "bytes"
      }
    ],
    "name": "estimateSendAndCallFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "nativeFee",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "zroFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes32",
        "name": "_toAddress",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_useZro",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "_adapterParams",
        "type": "bytes"
      }
    ],
    "name": "estimateSendFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "nativeFee",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "zroFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "failedMessages",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      }
    ],
    "name": "forceResumeReceive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_version",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_chainId",
        "type": "uint16"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_configType",
        "type": "uint256"
      }
    ],
    "name": "getConfig",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_remoteChainId",
        "type": "uint16"
      }
    ],
    "name": "getTrustedRemoteAddress",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      }
    ],
    "name": "isTrustedRemote",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lzEndpoint",
    "outputs": [
      {
        "internalType": "contract ILayerZeroEndpoint",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      }
    ],
    "name": "lzReceive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "name": "minDstGasLookup",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_recipients",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "multiTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      }
    ],
    "name": "nonblockingLzReceive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "name": "payloadSizeLimitLookup",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "precrime",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_srcChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_srcAddress",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      }
    ],
    "name": "retryMessage",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes32",
        "name": "_toAddress",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_payload",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "_dstGasForCall",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "refundAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "zroPaymentAddress",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "adapterParams",
            "type": "bytes"
          }
        ],
        "internalType": "struct ICommonOFT.LzCallParams",
        "name": "_callParams",
        "type": "tuple"
      }
    ],
    "name": "sendAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes32",
        "name": "_toAddress",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "refundAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "zroPaymentAddress",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "adapterParams",
            "type": "bytes"
          }
        ],
        "internalType": "struct ICommonOFT.LzCallParams",
        "name": "_callParams",
        "type": "tuple"
      }
    ],
    "name": "sendFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_version",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_chainId",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_configType",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_config",
        "type": "bytes"
      }
    ],
    "name": "setConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "_packetType",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_minGas",
        "type": "uint256"
      }
    ],
    "name": "setMinDstGas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_dstChainId",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_size",
        "type": "uint256"
      }
    ],
    "name": "setPayloadSizeLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_precrime",
        "type": "address"
      }
    ],
    "name": "setPrecrime",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_version",
        "type": "uint16"
      }
    ],
    "name": "setReceiveVersion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_version",
        "type": "uint16"
      }
    ],
    "name": "setSendVersion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_remoteChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_path",
        "type": "bytes"
      }
    ],
    "name": "setTrustedRemote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "_remoteChainId",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_remoteAddress",
        "type": "bytes"
      }
    ],
    "name": "setTrustedRemoteAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sharedDecimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "name": "trustedRemoteLookup",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


export const networkConfig = {
  arbitrum: {
    name: "Arbitrum",
    chainId: 42161,
    lzChainId: 110,
    faucetLink: null,
    bridgeLink: "https://bridge.arbitrum.io/?l2ChainId=42161",
    nativeTokenName: "Ether",
    nativeToken: "ETH",
    rpcUrl: "https://arb-mainnet-public.unifra.io",
    blockExplorerUrl: "https://arbiscan.io",
  },
  avalanche: {
    name: "Avalanche",
    chainId: 43114,
    lzChainId: 106,
    bridgeLink: null,
    nativeTokenName: "AVAX",
    nativeToken: "AVAX",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    blockExplorerUrl: "https://snowtrace.io",
  },
  mantle: {
    name: "Mantle",
    chainId: 5000,
    lzChainId: 181,
    bridgeLink: null,
    nativeTokenName: "Mantle",
    nativeToken: "MNT",
    rpcUrl: "https://rpc.mantle.xyz	",
    blockExplorerUrl: "https://explorer.mantle.xyz",
  },
  base: {
    name: "Base",
    chainId: 8453,
    lzChainId: 184,
    bridgeLink: null,
    nativeTokenName: "Ether",
    nativeToken: "ETH",
    rpcUrl: "https://base.llamarpc.com",
    blockExplorerUrl: "https://basescan.io",

  }
};

export const arbitrum = {
  id: networkConfig.arbitrum.chainId,
  name: "Arbitrum",
  network: "arbitrum",
  iconUrl:
    "https://raw.githubusercontent.com/mihailo-maksa/layersync-frontend/main/src/assets/arb.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: [networkConfig.arbitrum.rpcUrl] },
    default: { http: [networkConfig.arbitrum.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "Arbiscan", url: "https://arbiscan.io" },
    etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
  },
  testnet: false,
};

export const avalanche = {
  id: networkConfig.avalanche.chainId,
  name: "Avalanche",
  network: "avalanche",
  iconUrl:
    "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=029",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "AVAX",
    symbol: "AVAX",
  },
  rpcUrls: {
    public: { http: [networkConfig.avalanche.rpcUrl] },
    default: { http: [networkConfig.avalanche.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "Avalanche", url: "https://snowtrace.io" },
    etherscan: { name: "Avalanche", url: "https://snowtrace.io" },
  },
  testnet: false,
};

export const mantle = {
  id: networkConfig.mantle.chainId,
  name: "Mantle",
  network: "mantle",
  iconUrl:
    "https://cryptologos.cc/logos/mantle-mnt-logo.png?v=029",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    public: { http: [networkConfig.mantle.rpcUrl] },
    default: { http: [networkConfig.mantle.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "Mantle", url: "https://explorer.mantle.xyz" },
    etherscan: { name: "Mantle", url: "https://explorer.mantle.xyz" },
  },
  testnet: false,
};

export const base = {
  id: networkConfig.base.chainId,
  name: "Base",
  network: "base",
  iconUrl:
    "data:image/png;base64,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",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Base",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: [networkConfig.base.rpcUrl] },
    default: { http: [networkConfig.base.rpcUrl] },
  },
  blockExplorers: {
    default: { name: "Base", url: networkConfig.base.blockExplorerUrl },
    etherscan: { name: "Base", url: networkConfig.base.blockExplorerUrl },
  },
  testnet: false,
};

export const supportedChains = ["arbitrum", "avalanche", "mantle", "base"];

export const supportedChainIds = [43114, 42161, 5000];

export const getProvider = (chain: any) => {
  if (!supportedChains.includes(chain)) {
    throw new Error(`Chain ${chain} is not supported.`);
  }

  const provider = new ethers.providers.JsonRpcProvider(
    // @ts-ignore
    networkConfig[chain].rpcUrl
  );
  return provider;
};

export const getWeb3Signer = () => {
  // @ts-ignore
  if (!window.ethereum) {
    throw new Error("No web3 provider found.");
  }
  // @ts-ignore

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner().connectUnchecked();
  return signer;
};

export const getMeatContract = async (chain: any) => {
  if (!supportedChains.includes(chain)) {
    throw new Error(`Chain ${chain} is not supported.`);
  }

  const signer = await getWeb3Signer();
  return new ethers.Contract(meatAddress, meatAbi, signer);
};

export const getMeatBalance = async (chain: any, address: any) => {
  const lsContract = await getMeatContract(chain);
  const balanceRaw = await lsContract.balanceOf(address);
  return ethers.utils.formatUnits(balanceRaw.toString(), 6);
};
export function addressToBytes32(address: string) {
  const newAddress = '0x' + address.substring(2).padStart(64, '0');
  return newAddress;
}

export const getLayerZeroFee = async (srcChain: any, dstChain: any, address: any, amount: any) => {
  try {
    const encodedPackedHex = encodePackedUint16Uint256(1, 2000000);
    const lsContract = await getMeatContract(srcChain);
    const lzFees = await lsContract.estimateSendFee(
      // @ts-ignore
      networkConfig[dstChain].lzChainId,
      addressToBytes32(address),
      ethers.utils.parseUnits(amount.toString(), 6),
      false,
      encodedPackedHex
    );

    const nativeFee = ethers.utils.formatEther(lzFees[0].toString());

    return nativeFee;
  } catch (error) {
    console.error(error);
  }
};

function convertToHex(num: number, bytesLength: number) {
  const hexNum = num.toString(16);
  const hexLength = bytesLength * 2; // 2 hex digits per byte
  return hexNum.padStart(hexLength, '0');
}

export function encodePackedUint16Uint256(uint16Val: any, uint256Val: any) {
  const hexUint16 = convertToHex(uint16Val, 2); // 2 bytes for uint16
  const hexUint256 = convertToHex(uint256Val, 32); // 32 bytes for uint256
  const value = "0x" + hexUint16 + hexUint256;
  return value;
}

export const bridgeTokens = async (address: any, srcChain: any, dstChain: any, amount: any) => {
  if (
    !supportedChains.includes(srcChain) ||
    !supportedChains.includes(dstChain)
  ) {
    throw new Error(`Chain ${dstChain} is not supported.`);
  }

  if (srcChain === dstChain) {
    throw new Error(`Source and destination chains must be different.`);
  }
  const meatContract = await getMeatContract(srcChain);
  const nativeFee = await getLayerZeroFee(srcChain, dstChain, address, amount);
  if (nativeFee === undefined) {
    throw new Error(`Error getting fee.`);
  }
  const encodedPackedHex = encodePackedUint16Uint256(1, 2000000);
  const value = ethers.utils.parseEther((nativeFee).toString());

  const callParams = {
    "refundAddress": address,
    "zroPaymentAddress": ethers.constants.AddressZero,
    "adapterParams": encodedPackedHex
  }
  const params = [address,
    // @ts-ignore
    networkConfig[dstChain].lzChainId,
    addressToBytes32(address),
    ethers.utils.parseUnits(amount.toString(), 6),
    callParams,
    {
      value: value,
    }
  ]
  console.log(params)
  const tx = await meatContract.sendFrom(
    ...params)
  await tx.wait(1);
};