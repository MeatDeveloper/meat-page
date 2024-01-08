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

export const supportedChains = ["arbitrum", "avalanche", "mantle"];

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

export const getWeb3Signer = async () => {
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
  let newAddress = '0x' + address.substring(2).padStart(64, '0');
  return newAddress;
}

export const getLayerZeroFee = async (srcChain: any, dstChain: any, address: any, amount: any) => {
  try {
    let encodedPackedHex = encodePackedUint16Uint256(1, 2000000);
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
  let hexNum = num.toString(16);
  let hexLength = bytesLength * 2; // 2 hex digits per byte
  return hexNum.padStart(hexLength, '0');
}

export function encodePackedUint16Uint256(uint16Val: any, uint256Val: any) {
  let hexUint16 = convertToHex(uint16Val, 2); // 2 bytes for uint16
  let hexUint256 = convertToHex(uint256Val, 32); // 32 bytes for uint256
  let value = "0x" + hexUint16 + hexUint256;
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
  let encodedPackedHex = encodePackedUint16Uint256(1, 2000000);
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