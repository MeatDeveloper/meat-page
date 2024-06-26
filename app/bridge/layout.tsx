'use client'
import { ReactNode } from "react"

import { NetworkStatus } from "@/components/blockchain/network-status"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { Footer } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/site-header"

interface BridgeLayoutProps {
  children: ReactNode
}

export default function BridgeLayout({ children }: BridgeLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
