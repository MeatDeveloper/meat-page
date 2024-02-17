'use client'

import { meatAddress, siteConfig } from "@/config/site"
import { Bridge } from "@/components/blockchain/bridge"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { CopyButton } from "@/components/shared/copy-button"
import { LightDarkImage } from "@/components/shared/light-dark-image"

export default function BridgePage() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <LightDarkImage
          LightImage={"/logo-light.png"}
          DarkImage={"/logo-dark.png"}
          alt={"Meat-Logo"}
          height={160}
          width={160}
          className="h-40 w-40 rounded-2xl"
        />
        <PageHeaderHeading>
          <span className="hub flex items-center justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent dark:from-stone-200 dark:to-red-400 sm:inline-flex">
          <span className="pr-4">Meat</span><span>Hub</span></span>
        </PageHeaderHeading>
        <PageHeaderDescription>Bridge your Meat</PageHeaderDescription>

        <Bridge />
      </PageHeader>
    </div>
  )
}
