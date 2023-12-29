import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

import { meatAddress, siteConfig } from "@/config/site"
import { cn, truncateEthAddress } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { CopyButton } from "@/components/shared/copy-button"
import { LightDarkImage } from "@/components/shared/light-dark-image"

export default function HomePage() {
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
        <Link
          href={`https://snowtrace.io/address/${meatAddress}`}
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({ variant: "ghost" })}
        >
          Contract Address: {truncateEthAddress(meatAddress)}
        </Link>
        <Link
          href={`https://debank.com/profile/0x1bcde1e93ef614461e117a8b07957f3600aca06e`}
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({ variant: "ghost" })}
        >
          Multisig Address:{" "}
          {truncateEthAddress("0x1bcDe1E93eF614461E117a8B07957f3600ACA06E")}
        </Link>
        <PageHeaderCTA>
          <Link
            href={siteConfig.links.docs}
            className={buttonVariants({ variant: "default" })}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "secondary" })}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Github
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#7289da] text-white hover:bg-[#7289da]/80"
            )}
          >
            <FaDiscord className="mr-2 h-4 w-4" />
            Discord
          </Link>
          <Link
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#2592c8] text-white hover:bg-[#2592c8]/80"
            )}
          >
            <FaTelegram className="mr-2 h-4 w-4" />
            Telegram
          </Link>
        </PageHeaderCTA>
        <PageHeaderCTA>
          <Link
            href={`https://traderjoexyz.com/avalanche/trade?outputCurrency=${meatAddress}`}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#F24430] w-32 h-12 text-white hover:bg-[#F24430]/80"
            )}
          >
            <Image
              src="/joe.png"
              alt="Joe Logo"
              width={40}
              height={40}
              className="mr-2 h-4 w-4"
            />
            Buy
          </Link>
        </PageHeaderCTA>
      </PageHeader>
    </div>
  )
}
