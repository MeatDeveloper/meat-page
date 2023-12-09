"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import { menuDashboard } from "@/config/menu-dashboard"
import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { WalletBalance } from "@/components/blockchain/wallet-balance"
import { WalletConnectCustom } from "@/components/blockchain/wallet-connect-custom"
import { WalletMeatBalance } from "@/components/blockchain/wallet-meat-balance"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/shared/mode-toggle"

export function SiteHeader() {
  const scrolled = useScroll(0)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all",
        scrolled && "bg-background/50 "
      )}
    >
      <div className="container flex h-20 items-center">
        <MainNav />
        <MobileNav />

        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <WalletMeatBalance className={buttonVariants({ variant: "ghost" })} />
          <WalletBalance className={buttonVariants({ variant: "ghost" })} />

          <Link
            href="/dashboard"
            className={buttonVariants({ variant: "ghost" })}
          >
            Dashboard
          </Link>
          <WalletConnectCustom />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
