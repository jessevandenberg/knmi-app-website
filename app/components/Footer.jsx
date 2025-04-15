"use client";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <img src="/logoknmi.png" className="h-16 me-3" alt="KNMI Logo" />
          </Link>
        </div>

        {/* Social Media & Download Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
          {/* Social Media Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Volg ons:</h2>
            <ul className="flex flex-wrap gap-x-4 text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <a
                  href="https://twitter.com/KNMI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://nl.linkedin.com/company/knmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/knmi.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCqQtmDbRgKOoJ_lPv_mU9nQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Download:</h2>
            <ul className="flex flex-wrap gap-x-4 text-gray-500 dark:text-gray-400 font-medium">
              <li>
                <a
                  href="https://apps.apple.com/nl/app/knmi-weer/id1225568094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  iOS
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=nl.knmi.weer&amp;hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Android
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom Footer Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://knmi.nl/" className="hover:underline">
              KNMI™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 17">
                <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635A4.074 4.074 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038A4 4.0 0 0 0 9.85 4.957a11.705 11.705 0 0 1-8.45-4.223 4.006 4.006 0 0 0 1.268 5.392A4.165 4.165 0 0 1 1.862 6.25v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07A4.108 4.108 0 0 0 3.9 12.442a8.36 8.36 0 0 1-4.131 1.092A11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

