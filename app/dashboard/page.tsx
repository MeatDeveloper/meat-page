"use client"

import { motion } from "framer-motion"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { Card } from "@/components/ui/card"

const tokenomics = [
  "42% LP (12mo lock)",
  "21% Community sale (25+ Sausagers held), funded LP",
  "20.1% Burn",
  "10% Sausagers",
  "2.9% MEAT devs (6mo linear vest)",
  "2% Sausagers team",
  "1% Reserve",
  "1% External LP"
]
export default function PageDashboard() {
  return (
    <motion.div
      animate="show"
      className="flex h-full w-full items-center justify-center lg:py-8"
      initial="hidden"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      viewport={{ once: true }}
      whileInView="show"
    >
      <Card className="w-[420px] p-6">
        <h3 className="text-2xl font-normal">Tokenomics</h3>
        <p className="text-sm font-light text-gray-400">The secret sauce</p>

        <ul>
          {tokenomics.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <hr className="my-3 dark:opacity-30" />
      </Card>
    </motion.div>
  )
}
