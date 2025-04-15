"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="border-gray-200 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* ✅ Fixed: Removed <a> tag and applied styles directly to <Link> */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logoknmi.png" className="h-16" alt="KNMI Logo" />
          </Link>

          {/* Knoppen */}
          <div className="flex items-center space-x-4">
            <Link
              href="/Downloadpagina"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download nu
            </Link>

            {/* Hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-hamburger"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigatie menu */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full mt-4`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-black hover:bg-blue-100 rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/overons"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-blue-100 dark:text-gray-400"
                >
                  Over ons
                </Link>
              </li>
              <li>
                <Link
                  href="/FAQ"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-blue-100 dark:text-gray-400"
                >
                  Veelgestelde vragen
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-blue-100 dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
