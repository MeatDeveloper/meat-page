// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
    telegram: string
    ferdy: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "MEAT",
  title: "Back to the basic ingredients.",
  emoji: "sausage",
  description:
    "Back to the basic ingredients.",
  localeDefault: "en",
  links: {
    docs: "/dashboard",
    discord: "https://discord.gg/YuabytkPgU",
    twitter: "https://x.com/TheMeatToken",
    github: "https://github.com/MeatDeveloper/meat-page",
    telegram: "https://t.me/+nTsLDyk8WEQyYzgx",
    ferdy: "https://ferdyflip.xyz/referral/sausagers"
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"


export const meatTestAddress = "0x0337781a02948a35d154ae817d24b0f755357024"
export const meatAddress = "0x47c3118Ad183712Acd42648e9E522e13690f29a0"
export const lpAddress = "0x60b881fa346e52590b1aa11d94a6d9047702c44e"