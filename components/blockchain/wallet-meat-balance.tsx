import { HTMLAttributes } from "react"
import { useAccount, useContractRead, useNetwork } from "wagmi"

import { trimFormattedBalance } from "@/lib/utils"
import { erc20ABI } from "@/lib/generated/blockchain"
import { meatTestAddress, meatAddress } from "@/config/site"

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
  const { chain } = useNetwork()
  const { data: balance } = useContractRead({
    address: chain?.id == 43114 ? meatAddress : meatTestAddress,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address ?? "" as `0x${string}`],
  })

  if (!address || balance == undefined) return null

  return (
    <span className={className} {...props}>
      {trimFormattedBalance(String(Number(balance) / 1e6)?.toString(), decimals)} {"MEAT"}
    </span>
  )
}
