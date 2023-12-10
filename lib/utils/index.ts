import { env } from "@/env.mjs"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${path}`
}

export function trimFormattedBalance(
  balance: string | undefined,
  decimals = 4
) {
  if (!balance) {
    return "0"
  }
  const [integer, decimal] = balance.split(".")
  if (!decimal) return integer

  const trimmedDecimal = decimal.slice(0, decimals)
  return `${integer}${trimmedDecimal ? "." : ""}${trimmedDecimal}`
}

export function truncateEthAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

interface Response {
  TokenHolderAddress: string
  TokenHolderQuantity: string
}

export function filterAddresses(addresses: Response[]) {
  const addressesToIgnore = ["0x2fD2C0E235D6F3aA42c328415D8C7266572256A4".toLowerCase(), "0x665d1C8337F1035cfBe13DD94bB669110b975f5F".toLowerCase(), "0x0000000000000000000000000000000000000000"]
  const arr = addresses.filter( address => { !addressesToIgnore.find(object => object === address.TokenHolderAddress.toLowerCase())});
  console.log(arr);
  console.log(addresses)
  return arr;
}