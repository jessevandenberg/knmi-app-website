"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Function to split text into words while preserving spaces and <br> tags
const flattenText = (children) => {
  const result = [];

  React.Children.forEach(children, (child, childIndex) => {
    if (React.isValidElement(child)) {
      if (child.type === "br") {
        result.push(<br key={`br-${childIndex}`} />);
      } else {
        result.push(
          React.cloneElement(child, { key: `element-${childIndex}` })
        );
      }
    } else if (typeof child === "string") {
      const words = child.split(/(\s+)/).map((word, wordIndex) => (
        <span key={`word-${childIndex}-${wordIndex}`} className="inline-block">
          {word}
        </span>
      ));
      result.push(...words);
    } else {
      result.push(child);
    }
  });

  return result;
};

// Animated word component
function OpacityChild({ children, index, progress, total }) {
  const opacity = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

// ScrollReveal component
function ScrollReveal({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 60%"],
  });

  const words = flattenText(children);

  return (
    <div ref={ref} className="relative w-full  p-6 text-white">
      <div className="flex flex-wrap p-4 leading-relaxed">
        {words.map((word, index) => (
          <OpacityChild
            key={index}
            progress={scrollYProgress}
            index={index}
            total={words.length}
          >
            {word}
          </OpacityChild>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* ScrollReveal section */}
      <section className="section">
        <div className="max-w-[450px] mx-auto text-center py-5">
          <ScrollReveal>
            <div className="paragraph">
              <p>
                <strong className="title">
                  Geniet van een advertentievrije ervaring.
                </strong>
                <br />
                De KNMI-app biedt een volledig advertentievrije ervaring. Geen
                storende banners of onderbrekingen.
              </p>
            </div>
            <div className="paragraph">
              <p>
                <strong className="title">
                  Een transparante en betrouwbare weerapp.
                </strong>
                <br />
                De KNMI-app is open source. De code is openbaar en kan door
                iedereen bekeken worden. Dit zorgt voor extra betrouwbaarheid en
                verbeteringen.
              </p>
            </div>
            <div className="paragraph">
              <p>
                <strong className="title">
                  Weerinformatie rechtstreeks van de bron.
                </strong>
                <br />
                De KNMI-app haalt gegevens direct bij het KNMI. Zo krijg je
                altijd de meest actuele weersvoorspellingen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
