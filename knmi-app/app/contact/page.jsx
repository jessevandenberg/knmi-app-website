"use client";
import React from 'react'

export default function Page() {
    return (
        <div className="flex flex-col items-center py-10 px-4 min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="w-full max-w-7xl mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Neem Contact Met Ons Op</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Heeft u een vraag of opmerking? Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u
                    op.
                </p>
            </div>

            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <form className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email adres
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="john.doe@company.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Uw vraag
                        </label>
                        <textarea
                            id="large-input"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            rows="4"
                        ></textarea>
                    </div>

                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Ik ga akkoord met de{" "}
                            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                algemene voorwaarden
                            </a>
                            .
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Versturen
                    </button>
                </form>

                {/* Contact Information */}
                <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Contactgegevens</h2>

                    <div className="space-y-4">


                        <div>
                            <h3 className="text-sm font-medium text-gray-700">Telefoonnummer</h3>
                            <p className="text-gray-600"> 030 22 06 911</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-700">Adres</h3>
                            <p className="text-gray-600">
                                Utrechtseweg 297
                                <br />
                                3731 GA De Bilt
                                <br />
                                Nederland
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

