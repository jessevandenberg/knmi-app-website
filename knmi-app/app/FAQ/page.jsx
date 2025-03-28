"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function FAQSection() {
    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }

    const faqCategories = [
        {
            title: "Werking van de app",
            items: [
                {
                    question: "Hoe nauwkeurig zijn de weersvoorspellingen in de KNMI app?",
                    answer:
                        "De voorspellingen in de KNMI app zijn gebaseerd op geavanceerde meteorologische modellen en realtime gegevens. De nauwkeurigheid hangt af van de locatie en de termijn van de voorspelling. Over het algemeen zijn de korte-termijnvoorspellingen (0-48 uur) zeer betrouwbaar.",
                },
                {
                    question: "Hoe vaak worden de weersgegevens bijgewerkt?",
                    answer:
                        "De weersgegevens in de app worden continu bijgewerkt op basis van de nieuwste metingen en modellen. Neerslagradar en waarschuwingen worden in real-time geactualiseerd, terwijl temperatuur- en windvoorspellingen enkele keren per uur vernieuwd worden.",
                },
                {
                    question: "Werkt de app ook in het buitenland?",
                    answer:
                        "De KNMI app is primair gericht op Nederland, maar toont voor bepaalde regio's in Europa ook basisvoorspellingen. Gedetailleerde neerslaginformatie en waarschuwingen zijn alleen beschikbaar voor Nederland.",
                },
                {
                    question: "Hoe kan ik de eenheden (bijv. Celsius/Fahrenheit) aanpassen?",
                    answer:
                        "De app gebruikt standaard Celsius en m/s (meter per seconde) voor wind. Dit is niet aanpasbaar, omdat de app specifiek is ontworpen voor Nederlandse weersomstandigheden.",
                },
            ],
        },
        {
            title: "Privacy en open-source",
            items: [
                {
                    question: "Is de KNMI app open source?",
                    answer:
                        "Ja, de KNMI app is open source. Dit betekent dat de broncode openbaar beschikbaar is en door iedereen bekeken, verbeterd en hergebruikt kan worden.",
                },
                {
                    question: "Mag ik bijdragen aan de ontwikkeling van de app?",
                    answer:
                        "Ja, ontwikkelaars kunnen bijdragen door bugs te rapporteren, nieuwe functies voor te stellen of code aan te leveren via pull requests. Alle bijdragen worden beoordeeld door het KNMI-team.",
                },
                {
                    question: "Waarom heeft het KNMI ervoor gekozen om de app open source te maken?",
                    answer:
                        "Het KNMI gelooft in transparantie en samenwerking. Door de code open te stellen, kan de gemeenschap bijdragen aan verbeteringen en innovatie, terwijl de betrouwbaarheid van de app wordt vergroot.",
                },
                {
                    question: "Hoe wordt mijn locatie gebruikt?",
                    answer:
                        "Als je toestemming geeft, gebruikt de app je locatie om het weer op je huidige locatie te tonen. Je locatiegegevens worden niet permanent opgeslagen en alleen lokaal op je apparaat verwerkt.",
                },
                {
                    question: "Worden mijn gegevens gedeeld met derden?",
                    answer:
                        "Nee, de KNMI app deelt geen persoonsgegevens met derden. Alle gegevens worden verwerkt volgens de AVG (Algemene Verordening Gegevensbescherming).",
                },
                {
                    question: "Kan ik de app gebruiken zonder locatiegegevens te delen?",
                    answer:
                        "Ja, je kunt handmatig locaties invoeren zonder dat de app toegang heeft tot je GPS. De app blijft volledig functioneel zonder locatiepermissie.",
                },
            ],
        },
    ]

    return (

        <div className="max-w-7xl mx-auto mt-10 px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Veelgestelde vragen</h1>
            <h2 className="text-1xl text-center mb-7">
                Wij begrijpen dat je misschien wat extra informatie nodig hebt. Hieronder hebben we de meest gestelde vragen
                voor je verzameld.
            </h2>

            <div className="space-y-8 mt-20"> {/* Added mt-10 for more vertical spacing */}
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-5 font-medium text-left bg-primary text-primary-foreground">
                            <span className="text-lg font-semibold">{category.title}</span>
                        </div>

                        <div className="border-t border-gray-200">
                            {category.items.map((faq, index) => {
                                const globalIndex = categoryIndex * 100 + index // Create a unique index across categories

                                return (
                                    <div key={globalIndex} className="border-b border-gray-200 last:border-b-0">
                                        <button
                                            type="button"
                                            className="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:bg-gray-50"
                                            onClick={() => toggleAccordion(globalIndex)}
                                            aria-expanded={openAccordion === globalIndex}
                                            aria-controls={`accordion-body-${globalIndex}`}
                                        >
                                            <span className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 me-2 shrink-0 text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                {faq.question}
                                            </span>
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-4 h-4"
                                                animate={{ rotate: openAccordion === globalIndex ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </motion.svg>
                                        </button>
                                        <AnimatePresence>
                                            {openAccordion === globalIndex && (
                                                <motion.div
                                                    id={`accordion-body-${globalIndex}`}
                                                    className="p-5 bg-gray-50"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-gray-500">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <p className="mb-4">Voor specifieke vragen neem contact met ons op</p>
                <Link href="/contact">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact</button>
                </Link>
            </div>
        </div>
    )
}

