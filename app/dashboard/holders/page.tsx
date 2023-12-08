"use client"

import { motion } from "framer-motion"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { Card } from "@/components/ui/card"
import { meatAddress } from "@/config/site"


export default function PageDashboardHolders() {
  return (
    <motion.div
      animate="show"
      className="flex h-full w-full items-center justify-center py-6 lg:py-8"
      initial="hidden"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      viewport={{ once: true }}
      whileInView="show"
    >
        <Card className="w-[420px] p-6">
          <h3 className="text-2xl font-normal">Holders</h3>
        <p className="text-sm font-light text-gray-400">top holdings</p>

          <ul>
            {/* {topHolders.map((holder) => (
              <li key={holder.address}>
                <a href={`https://snowtrace.io/address/${holder.address}`} target="_blank" rel="noreferrer">
                  {holder.address}
                </a>
              </li>
            ))} */}
            
          </ul>
          <hr className="my-3 dark:opacity-30" />
        </Card>
    </motion.div>
  )
}
