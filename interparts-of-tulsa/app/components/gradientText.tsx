"use client"

import { motion, type Transition } from "framer-motion"
import type * as React from "react"

type GradientTextProps = React.ComponentProps<"span"> & {
  text: string
  gradient?: string
  neon?: boolean
  transition?: Transition
}

function GradientText({
  text,
  className = "",
  gradient = "linear-gradient(90deg, #734d00 0%, #ffb81c 50%, #734d00 100%)",
  neon = false,
  transition = { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
  ...props
}: GradientTextProps) {
  
  // Hardcoded to guarantee both your dark base and your specific sweep color render cleanly
  const baseStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(90deg, #593c00 0%, #b57c00 50%, #593c00 100%)",
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      data-slot="gradient-text"
      {...(props as any)}
    >
      <motion.span
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%] select-none pointer-events-none"
          style={baseStyle}
          transition={transition}
          aria-hidden="true"
        >
          {text}
        </motion.span>
      )}
    </span>
  )
}

export { GradientText, type GradientTextProps }
export default GradientText