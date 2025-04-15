"use client"

import Jumbotron from "./components/Jumbotron"
import ScrollTekst from "./components/ScrollTekst"
import Mockup from "./components/Mockup"
import Download from "./components/Download"



export default function Home() {

  return (
    <main style={{
      background: "#1A202C"

    }}>
      <section>
        <Jumbotron />
        <ScrollTekst />
        <Mockup/>
        <Download />


      </section>
    </main>
  )
}

