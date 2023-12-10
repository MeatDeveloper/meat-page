"use client"

import { motion } from "framer-motion"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { Card } from "@/components/ui/card"
import { lpAddress } from "@/config/site"
import useSWR from "swr"
import RenderName from "@/components/blockchain/render-name"
import { useNetwork } from "wagmi"
import { trimFormattedBalance } from "@/lib/utils"

const fetcher = (url: string) => fetch(url).then((res) => res.json())
export default function PageDashboardLPers() {
  const { chain } = useNetwork()
  const endpoint = `https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api?module=token&action=tokenholderlist&contractaddress=${lpAddress}&page=1&offset=25&apikey=YourApiKeyToken`
  const { data: topHolders } = useSWR(endpoint, fetcher);
  return (
    <motion.div
      animate="show"
      className="flex h-full w-full items-center justify-center py-6 lg:py-8"
      initial="hidden"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      viewport={{ once: true }}
      whileInView="show"
    >
        <Card className="w-[420px] p-6">
          <h3 className="text-2xl font-normal">Liquidity Providers</h3>
        <p className="text-sm font-light text-gray-400">top liquidity providers</p>

          <ul>
            {Array.isArray(topHolders?.result) && topHolders.result?.map((holder : any) => (
              <li key={holder.TokenHolderAddress} className="flex justify-between">
                <a href={`https://snowtrace.io/address/${holder.address}`} target="_blank" rel="noreferrer">
                  <RenderName address={holder?.TokenHolderAddress} chainId={chain?.id} />
                </a>
                {trimFormattedBalance(String(Number(holder?.TokenHolderQuantity) / 1e6)?.toString(), 0)} {"MEAT"}
              </li>
            ))}
            
          </ul>
          <hr className="my-3 dark:opacity-30" />
        </Card>
    </motion.div>
  )
}
