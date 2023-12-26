'use client'

import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";


const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#013B94]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <img
                            className="h-12 w-auto"
                            src="/booking+logo+white.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="fle lg:hidden">
                    <button
                        className="-m2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"></Bars3Icon>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;