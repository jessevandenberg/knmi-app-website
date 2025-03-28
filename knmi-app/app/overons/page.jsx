"use client"
import { motion } from "framer-motion"
import { FaCloud as Cloud, FaThermometerHalf as Thermometer, FaChartLine as Activity, FaMapMarkerAlt as MapPin, FaChevronRight as ChevronRight } from "react-icons/fa"

const Icon = ({ children }) => (
  <motion.div
    className="text-[#2976F6] mr-4 h-6 w-6 mt-1"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
)

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section with the blue color */}
      <div className="w-full bg-[#2976F6] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Over het KNMI</h1>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction with card styling */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Het <span className="font-bold text-[#2976F6]">Koninklijk Nederlands Meteorologisch Instituut (KNMI)</span>{" "}
            is het nationale weerinstituut van Nederland. Al sinds 1854 levert het KNMI betrouwbare weersvoorspellingen,
            klimaatonderzoek en seismologische data om Nederland te helpen zich voor te bereiden op veranderende
            weersomstandigheden.
          </p>
        </div>

        {/* Tasks and responsibilities section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#2976F6] mr-4 rounded-full"></div>
            Onze Taken en Verantwoordelijkheden
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2976F6] hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Cloud className="text-[#2976F6] mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Weersvoorspellingen</h3>
                  <p className="text-gray-700">
                    Het KNMI monitort 24/7 het weer en geeft actuele voorspellingen en waarschuwingen voor extreme
                    omstandigheden zoals stormen en hittegolven.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2976F6] hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Thermometer className="text-[#2976F6] mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Klimaatonderzoek</h3>
                  <p className="text-gray-700">
                    Met uitgebreide klimaatmodellen en data-analyse helpt het KNMI bij het begrijpen en voorspellen van
                    klimaatverandering.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2976F6] hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Activity className="text-[#2976F6] mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Seismologie</h3>
                  <p className="text-gray-700">
                    Het KNMI houdt aardbevingen in Nederland en wereldwijd in de gaten en informeert hierover direct aan
                    de overheid en het publiek.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2976F6] hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <MapPin className="text-[#2976F6] mr-4 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Luchtkwaliteit en milieu</h3>
                  <p className="text-gray-700">
                    Onderzoek naar luchtverontreiniging en de impact ervan op mens en natuur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2976F6]">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Onze Missie</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Het KNMI heeft als missie om de samenleving te informeren en te beschermen tegen extreme
            weersomstandigheden, natuurrampen en klimaatverandering. Dit doen we door wetenschappelijk onderzoek te
            combineren met de nieuwste technologische ontwikkelingen.
          </p>
        </div>

        {/* Collaboration section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#2976F6] mr-4 rounded-full"></div>
            Samenwerking en Innovatie
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              Het KNMI werkt nauw samen met nationale en internationale organisaties, waaronder de{" "}
              <span className="font-bold text-[#2976F6]">Wereld Meteorologische Organisatie (WMO)</span> en{" "}
              <span className="font-bold text-[#2976F6]">het Europees Centrum voor Weersvoorspellingen (ECMWF)</span>.
              Door samenwerking en innovatie blijven we vooroplopen in meteorologisch en klimatologisch onderzoek.
            </p>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 bg-[#2976F6]/10 p-8 rounded-lg text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/contact" className="flex items-center text-[#2976F6] hover:underline text-lg font-medium group">
              Neem contact met ons op
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="hidden md:inline text-gray-400">|</span>
            <a href="/FAQ" className="flex items-center text-[#2976F6] hover:underline text-lg font-medium group">
              Veelgestelde vragen
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

