"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RotateCcw } from "lucide-react"
import Image from "next/image"
import signature from "../assets/signature.png"

export default function Component() {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-end gap-2">
      <motion.div
        key={key}
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="w-full max-w-[280px]"
      >
        <Image 
          src={signature} 
          alt="Sourav Yadav Signature" 
          className="w-full h-auto dark:invert"
        />
      </motion.div>
      <motion.button 
        onClick={() => setKey(k => k + 1)}
        className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}
