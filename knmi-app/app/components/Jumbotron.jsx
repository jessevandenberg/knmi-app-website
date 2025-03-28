"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function Jumbotron() {
  const containerRef = useRef(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  // This tracks scroll progress within our animation section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Text opacity - fully visible at top, fades out when scrolling down
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const textTranslateY = useTransform(scrollYProgress, [0, 0.4], [0, -50])

  // Background color - white at top, transitions to black
  const backgroundColor = useTransform(scrollYProgress, [0, 0.8], ["#ffffff", "#1a202c"])
  const textColor = useTransform(scrollYProgress, [0, 0.4], ["#1a202c", "#ffffff"])

  // Sun appears after scrolling slightly and then fades out
  const sunOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.6], [0, 1, 0])
  const sunY = useTransform(scrollYProgress, [0.1, 0.6], [50, 150])

  // Moon appears when scrolling further down
  const moonOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const moonY = useTransform(scrollYProgress, [0.5, 0.8], [150, 50])

  // Stars appear during night transition
  const starsOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  // Fixed position until animation completes
  const position = useTransform(scrollYProgress, [0, 0.99, 1], ["fixed", "fixed", "relative"])

  // Calculate the height needed for the spacer
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollHeight(window.innerHeight)
    }
  }, [])

  return (
    <>
      {/* Spacer div to create scrolling room for the animation */}
      <div style={{ height: `${scrollHeight}px` }} ref={containerRef} />

      <motion.div
        style={{
          backgroundColor,
          position,
          top: 0, // Start from top 0
          left: 0,
          right: 0,
          zIndex: 10,
          marginTop: "80px", // Add margin to account for header height
        }}
        className="h-[calc(100vh-80px)] transition-colors duration-500" // Adjust height to account for header
      >
        <section className="relative h-full flex flex-col items-center justify-start pt-32 overflow-hidden">
          {/* Text at the top */}
          <div className="text-center px-4 z-10 mt-8">
            <motion.h1
              style={{ opacity: textOpacity, y: textTranslateY, color: textColor }}
              className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-7xl"
            >
              Ontdek het weer van
            </motion.h1>
            <motion.h1
              style={{ opacity: textOpacity, y: textTranslateY, color: textColor }}
              className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-8xl"
            >
              morgen met de KNMI app
            </motion.h1>

            {/* Scroll down arrow */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="flex justify-center mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: textColor }}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* Sun image replacing the div */}
          <motion.div
            style={{ y: sunY, opacity: sunOpacity }}
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-32 h-32"
          >
            <Image
              src="/theSun.png"
              alt="Sun"
              width={128}
              height={128}
              className="drop-shadow-[0_0_15px_rgba(255,180,0,0.7)]"
            />
          </motion.div>

          {/* Moon image replacing the div */}
          <motion.div
            style={{ y: moonY, opacity: moonOpacity }}
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-32 h-32"
          >
            <Image
              src="/theMoon.png"
              alt="Moon"
              width={128}
              height={128}
              className="drop-shadow-[0_0_15px_rgba(200,200,255,0.5)]"
            />
          </motion.div>

          {/* Stars */}
          <motion.div style={{ opacity: starsOpacity }} className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </motion.div>
        </section>
      </motion.div>
    </>
  )
}

