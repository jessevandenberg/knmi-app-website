"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DownloadPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900 text-white p-6">
            {/* App Logo */}
            <motion.img
                src="/logo.webp"
                alt="App Logo"
                className="w-32 h-32 mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Slogan */}
            <motion.h1
                className="text-4xl font-bold text-center mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Download de KNMI App & Blijf Altijd Op De Hoogte!
            </motion.h1>

            {/* Subtext */}
            <motion.p
                className="text-lg text-center mb-6 max-w-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                Ontvang de meest nauwkeurige weersvoorspellingen direct op je telefoon.
                Gratis te downloaden voor iOS en Android!
            </motion.p>

            {/* Download Buttons */}
            <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                <Link href="/download-ios">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Download voor iOS
                    </button>
                </Link>
                <Link href="/download-android">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Download voor Android
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}
