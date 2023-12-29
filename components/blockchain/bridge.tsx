import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ethers } from "ethers"
import Form from "react-bootstrap/Form"
import { useAccount, useContractWrite, useNetwork } from "wagmi"

import { meatAddress } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

import {
  addressToBytes32,
  bridgeTokens,
  encodePackedUint16Uint256,
  getLayerZeroFee,
  getMeatBalance,
  meatAbi,
} from "../../lib/utils/layerZero"

// use client

// TODO:
// Handle errors in utils.js as toasts as well, including rejected transactions
// Add toasts for sent and confirmed transactions, and for added network or LS token to wallet
// Convert to TypeScript

export function Bridge() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const [amount, setAmount] = useState(0)
  const [balance, setBalance] = useState(0)
  const [fee, setFee] = useState(0)
  const [targetChain, setTargetChain] = useState(
    chain?.network === "arbitrum" ? "avalanche" : "arbitrum"
  )

  useEffect(() => {
    const main = async () => {
      try {
        const lsBalance = await getMeatBalance(chain?.network, address)
        setBalance(Number(lsBalance))

        const fee = await getLayerZeroFee(
          chain?.network,
          targetChain,
          address,
          amount
        )
        setFee(Number(fee))
      } catch (error) {
        console.error(error)
      }
    }

    main()
  }, [chain?.network, targetChain, amount, address])

  const handleChangeAmount = (e: any) => {
    setAmount(e.target.value)
  }

  const handleChangeTargetChain = (e: any) => {
    setTargetChain(e.target.value)
  }

  const bridge = async () => {
    setAmount(0)
    console.log({
      address,
      chain: chain?.network,
      targetChain,
      amount,
    })
    await bridgeTokens(address, chain?.network, targetChain, amount)
  }

  return (
    <div className="">
      <Form className="container">
        <Form.Group className="mb-3 mt-4">
          <div className="flex justify-between mb-3">
            <h1 className="bridge-label">Balance</h1>
            <span>{balance}</span>
          </div>
          <div className="flex justify-between">
            <h1 className="bridge-label">Amount</h1>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              className="w-1/2"
              value={amount}
              onChange={handleChangeAmount}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="flex justify-between">
            <Form.Label className="bridge-label">Send to</Form.Label>
            <Form.Select>
              <option
                value="arbitrum"
                selected={targetChain === "arbitrum"}
                disabled={chain?.network === "arbitrum"}
                onChange={handleChangeTargetChain}
              >
                Arbitrum
              </option>
              <option
                value="avalanche"
                selected={targetChain === "avalanche"}
                disabled={chain?.network === "avalanche"}
                onChange={handleChangeTargetChain}
              >
                Avalanche C-Chain
              </option>
            </Form.Select>
          </div>
        </Form.Group>

        <div className="bridge-fee-container">
          <span className="bridge-label">Fee</span>
          <span>
            {Math.round(fee * 100000) / 100000}{" "}
            {chain?.network === "avalanche" ? "AVAX" : "ETH"}
          </span>
        </div>
        <div className="flex justify-center p-4">
          <Button
            className={buttonVariants({ variant: "ghost" })}
            type="button"
            disabled={!isConnected}
            onClick={bridge}
          >
            {isConnected ? "Bridge Meat" : "Connect Wallet"}{" "}
          </Button>
        </div>
      </Form>
    </div>
  )
}
