"use client";
import Image from "next/image"
import Link from "next/link";

export default function Download() {
  return (
    <div className="flex items-center justify-center bg-gray-900 px-6 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Text section */}
        <div className="flex-1 space-y-6 text-white">
          <div style={{ textAlign: "center" }}>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Altijd op de hoogte van het weer!
            </h1>
            <h2 className="text-base text-gray-300 leading-relaxed">
              Download de KNMI app en krijg real-time weersvoorspellingen,
              <br />
              waarschuwingen en neerslaginformatie direct op je telefoon. <br />
              Of je nu onderweg bent of thuis, <br /> blijf altijd voorbereid op de
              laatste weersomstandigheden.
            </h2>
          </div>
          <div className="flex justify-center">
            <Link
              href="/Downloadpagina"
              className="inline-block px-8 py-4 text-white font-semibold text-lg rounded-xl shadow-lg transition-all
              bg-blue-500 hover:bg-blue-600 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Download de app nu
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/phone.png"
            alt="Telefoon"
            width={500}
            height={1000}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

