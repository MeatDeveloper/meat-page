import { HTMLAttributes } from "react"
import { useAccount, useContractRead, useNetwork } from "wagmi"

import { trimFormattedBalance } from "@/lib/utils"
import { erc20ABI } from "@/lib/generated/blockchain"

interface WalletBalanceProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  decimals?: number
}

export const WalletMeatBalance = ({
  className,
  decimals = 4,
  ...props
}: WalletBalanceProps) => {
  const { address } = useAccount()
  const { data: balance } = useContractRead({
    address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address ?? "" as `0x${string}`],
  })

  // if (!address || !balance) return null

  return (
    <span className={className} {...props}>
      {trimFormattedBalance(String(Number(balance) / 1e18)?.toString(), decimals)} {"MEAT"}
    </span>
  )
}
