"use client"
import "styles/globals.css"
import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { LightDarkImage } from "@/components/shared/light-dark-image"
import { Button, buttonVariants } from "@/components/ui/button"


import { LinkComponent } from "../shared/link-component"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <LightDarkImage
          LightImage="/logo-light.png"
          DarkImage="/logo-dark.png"
          alt="MEAT"
          className="rounded-full"
          height={32}
          width={32}
        />
        <span className="meat hidden bg-gradient-to-br from-black to-stone-500 bg-clip-text text-2xl text-transparent dark:from-stone-200 dark:to-red-400 sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <Link href="/bridge" className="mr-6 flex items-center space-x-2">
        <Button 
        variant="ghost"
         className="hub flex items-center justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-2xl text-transparent dark:from-stone-200 dark:to-red-400 sm:inline-flex">
          <span className="pr-1">Meat</span><span>Hub</span>
        </Button>
      </Link>
      <Link href="/game" className="mr-6 flex items-center space-x-2">
        <Button 
        variant="ghost"
         className="hub flex items-center justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-2xl text-transparent dark:from-stone-200 dark:to-red-400 sm:inline-flex">
          <span className="pr-1">Sausagers Game</span>
        </Button>
      </Link>
      <nav className="flex items-center space-x-6 text-base font-medium">
        <MainNavMenu />
      </nav>
    </div>
  )
}

function MainNavMenu() {
  return (
    <NavigationMenu>
      {/* <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Integrations</NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-[768px] overflow-y-scroll">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[768px] lg:grid-cols-3">
              {integrationCategories.map((category) => (
                <>
                  <h4
                    key={category}
                    className="text-lg font-medium leading-none md:col-span-2 lg:col-span-3"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <Separator className="md:col-span-2 lg:col-span-3" />
                  {Object.values(turboIntegrations)
                    .filter((integration) => integration.category === category)
                    .map(({ name, href, description, imgDark, imgLight }) => (
                      <NavMenuListItem
                        key={name}
                        name={name}
                        href={href}
                        description={description}
                        lightImage={imgDark}
                        darkImage={imgLight}
                      />
                    ))}
                </>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LinkComponent href="https://docs.turboeth.xyz/overview">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span>Documentation</span>
            </NavigationMenuLink>
          </LinkComponent>
        </NavigationMenuItem>
      </NavigationMenuList> */}
    </NavigationMenu>
  )
}

interface NavMenuListItemProps {
  name: string
  description: string
  href: string
  lightImage: string
  darkImage: string
}

const NavMenuListItem = ({
  name,
  description,
  href,
  lightImage,
  darkImage,
}: NavMenuListItemProps) => {
  return (
    <li className="w-full min-w-full" key={name}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="flex select-none flex-col gap-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-x-2">
            <LightDarkImage
              LightImage={lightImage}
              DarkImage={darkImage}
              alt="icon"
              height={24}
              width={24}
              className="h-6 w-6"
            />
            <span className="text-base font-medium leading-none">{name}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
