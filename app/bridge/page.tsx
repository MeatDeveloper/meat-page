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
        <PageHeaderHeading>MEAT</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>

        <Bridge />
      </PageHeader>
    </div>
  )
}
