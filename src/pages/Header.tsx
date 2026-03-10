import { useState } from "react";

import { Link } from "react-router-dom";

import {GenresComponent} from "../components/GenresComponent.tsx";
import {SearchBar} from "../components/SearchBarComponent.tsx";






export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const userName = "Tetiana";

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">


                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-xl font-bold text-gray-900">
                            Movies
                        </Link>


                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open menu</span>
                            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                    className={`block h-0.5 bg-current transition-all duration-300 ease-in-out ${
                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                                <span
                                    className={`block h-0.5 bg-current transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? "opacity-0 scale-0" : ""
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 bg-current transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                                />
                            </div>
                        </button>
                    </div>


                    <div className="flex-1 max-w-xl mx-4 md:mx-8">
                        <SearchBar />
                    </div>


                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-lg">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                Welcome {userName}
              </span>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className={`bg-white border-t transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? "max-h-[500px] py-4" : "max-h-0"
                }`}
            >
                <div className="px-4 max-w-7xl mx-auto">
                    <GenresComponent />
                </div>
            </div>
        </header>
    );
};

export default Header;
