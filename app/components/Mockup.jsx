"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
  const containerRef = useRef(null)
  const stickyRef = useRef(null)
  const mockupRef = useRef(null)

  // This controls the overall scroll progress for the sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Animation transforms
  const screen1Y = useTransform(scrollYProgress, [0.2, 0.45], [0, -600])
  const screen1Opacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0])

  const screen2X = useTransform(scrollYProgress, [0.45, 0.7], [0, -300])
  const screen2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0])

  const screen3Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  // Text and cloud animations
  const text1Opacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0])
  const text2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  const cloud1Opacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0])
  const cloud2Opacity = useTransform(scrollYProgress, [0.45, 0.7], [1, 0])
  const cloud3Opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])

  // Visibility transforms for text sections
  const text1Display = useTransform(scrollYProgress, (value) => {
    return value < 0.45 ? "flex" : "none"
  })

  const text2Display = useTransform(scrollYProgress, (value) => {
    return value >= 0.45 && value < 0.7 ? "flex" : "none"
  })

  const text3Display = useTransform(scrollYProgress, (value) => {
    return value >= 0.7 ? "flex" : "none"
  })

  // Visibility transforms for cloud images
  const cloud1Display = useTransform(scrollYProgress, (value) => {
    return value < 0.45 ? "block" : "none"
  })

  const cloud2Display = useTransform(scrollYProgress, (value) => {
    return value >= 0.45 && value < 0.7 ? "block" : "none"
  })

  const cloud3Display = useTransform(scrollYProgress, (value) => {
    return value >= 0.7 ? "block" : "none"
  })

  // Add GSAP ScrollTrigger
  useEffect(() => {
    // Register ScrollTrigger with GSAP
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Create ScrollTrigger to pin the mockup section
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: stickyRef.current, // Pin the sticky section
        pinSpacing: true, // Keep the space in the document
        anticipatePin: 1, // Helps with smoother pinning
        markers: false, // Set to true for debugging
      })

      // Clean up ScrollTrigger when component unmounts
      return () => {
        trigger.kill()
      }
    }
  }, [])

  return (
    <motion.main style={{ overflow: "hidden", background: "#1A202C" }}>
      {/* Container with height to create scroll space */}
      <motion.div
        ref={containerRef}
        style={{
          height: "400vh", // Increased height for better scrolling
          position: "relative",
        }}
      >
        {/* Sticky section that stays on screen while scrolling */}
        <motion.div
          ref={stickyRef}
          style={{
            height: "100vh",
            width: "100%",
            position: "relative", // Changed from sticky to relative since GSAP will handle pinning
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 100px",
            gap: "40px",
            zIndex: 10,
          }}
        >
          {/* Screen 1: Text on left, phone in middle, cloud on right */}
          <motion.div
            style={{
              color: "white",
              maxWidth: "650px",
              textAlign: "center",
              flex: "1",
              display: text1Display,
              justifyContent: "flex-end",
              opacity: text1Opacity,
              position: "absolute",
              left: "100px",
              zIndex: 20,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                }}
              >
                Altijd op de hoogte
                <br /> met meldingen
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  lineHeight: "1.5",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Ontvang direct meldingen bij belangrijk <br /> weer, zoals regen, storm of <br /> waarschuwingen. Zo ben
                je altijd <br /> voorbereid, waar je ook bent!
              </h2>
            </div>
          </motion.div>

          {/* Screen 2: Lightning on left, phone in middle, text on right */}
          <motion.div
            style={{
              position: "absolute",
              left: "150px",
              width: "350px",
              height: "330px",
              opacity: cloud2Opacity,
              display: cloud2Display,
              zIndex: 20,
            }}
          >
            <img
              src="/bliksem.png"
              className="regenwolk"
              alt="bliksem"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>

          <motion.div
            style={{
              color: "white",
              maxWidth: "650px",
              textAlign: "center",
              flex: "1",
              display: text2Display,
              justifyContent: "flex-start",
              opacity: text2Opacity,
              position: "absolute",
              right: "100px",
              zIndex: 20,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                }}
              >
                Neerslagverwachting voor <br /> jouw locatie
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  lineHeight: "1.5",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Bekijk de actuele en verwachte <br /> neerslagintensiteit op jouw <br /> locatie. Zo weet je precies of
                je <br /> droog blijft of beter een paraplu <br /> kunt meenemen!
              </h2>
            </div>
          </motion.div>

          {/* Screen 3: Text on left, phone in middle, snow on right */}
          <motion.div
            style={{
              color: "white",
              maxWidth: "650px",
              textAlign: "center",
              flex: "1",
              display: text3Display,
              justifyContent: "flex-end",
              opacity: text3Opacity,
              position: "absolute",
              left: "100px",
              zIndex: 20,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                }}
              >
                Overzicht van <br /> weerfunctionaliteiten
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  lineHeight: "1.5",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Deze functie biedt actuele temperatuur, <br /> weersvoorspellingen per uur, wind- <br /> en
                neerslaginformatie, zonkrachtindicator <br /> en tijden van zonsopkomst en <br /> zonsondergang voor een
                compleet <br /> weerbeeld.
              </h2>
            </div>
          </motion.div>

          {/* Midden sectie: Telefoon met Mockup */}
          <motion.div
            ref={mockupRef}
            style={{
              position: "relative",
              width: "650px",
              height: "630px",
              zIndex: 15,
            }}
          >
            {/* Container for screens that's positioned exactly where the screen should be in the mockup */}
            <div
              style={{
                position: "absolute",
                top: "49%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "290px",
                height: "600px",
                borderRadius: "31px",
                overflow: "hidden",
                zIndex: "1",
              }}
            >
              {/* Screen 3 (appears last) */}
              <motion.img
                src="/screen3.png"
                className="mockupPhone"
                alt="mockupphone"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "590px",
                  zIndex: "0",
                  borderRadius: "31px",
                  opacity: screen3Opacity,
                }}
              />

              {/* Screen 2 (initially visible, then slides away to the left) */}
              <motion.img
                src="/screen2.jpeg"
                className="mockupPhone"
                alt="mockupphone"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                  borderRadius: "31px",
                  opacity: screen2Opacity,
                  x: screen2X,
                }}
              />

              {/* Screen 1 (initially visible, moves up) */}
              <motion.img
                src="/screen1.png"
                className="mockupPhone"
                alt="mockupphone"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  zIndex: "2",
                  borderRadius: "31px",
                  opacity: screen1Opacity,
                  y: screen1Y,
                }}
              />
            </div>

            {/* Mockup phone frame on top */}
            <img
              src="/mockup.png"
              className="mockupPhone"
              alt="mockupphone"
              style={{
                position: "absolute",
                width: "650px",
                height: "630px",
                zIndex: "3",
              }}
            />
          </motion.div>

          {/* Cloud for Screen 1 */}
          <motion.div
            style={{
              position: "absolute",
              right: "100px",
              width: "350px",
              height: "330px",
              opacity: cloud1Opacity,
              display: cloud1Display,
              zIndex: 20,
            }}
          >
            <img
              src="/wolkje.png"
              className="regenwolk"
              alt="wolkje"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>

          {/* Snow for Screen 3 */}
          <motion.div
            style={{
              position: "absolute",
              right: "0",
              width: "500px",
              height: "500px",
              opacity: cloud3Opacity,
              display: cloud3Display,
              zIndex: 20,
            }}
          >
            <img
              src="/sneeuw.png"
              className="regenwolk"
              alt="sneeuw"
              style={{
                width: "100%",
                position: "relative",
                top: "100px",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  )
}

