
import { useEffect, useState } from "react"
import AVVY from '@avvy/client'
import { ethers } from 'ethers'

const avvyAddress = async (address : string) => {
  const PROVIDER_URL = 'https://api.avax.network/ext/bc/C/rpc'
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL)
  const avvy = new AVVY(provider, {})
  // @ts-ignore
  const hash = await avvy.reverse(AVVY.RECORDS.EVM, address)
  
  const name = await hash?.lookup()
  // @ts-ignore
  return await name?.name || null
}

export const truncateAddress = (address: string) => {
  const firstPart = address.slice(0, 5)
  const lastPart = address.slice(-4)

  return `${firstPart}...${lastPart}`
}

export default function RenderName({ address, chainId }: any) {
  const [display, setDisplay] = useState(null) as any
  const [isAvvy, setIsAvvy] = useState(false)

  useEffect(() => {
    if (address && typeof address === "string") {
      setDisplay(truncateAddress(address))
      if (chainId == 43114) {
        try {
          avvyAddress(address).then((res: any) => {
            if (res != null) {
              setDisplay(res)
              setIsAvvy(true)
            }
          }).catch((e: any) => {console.log(e)})
        } catch (e) {
          console.log(e)
        }
      }
    }
  }, [address, isAvvy])
  return <div>{display}</div>
}
