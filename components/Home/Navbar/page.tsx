"use client";

import { navLinks } from "../../../constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import {useRouter} from "next/navigation";

type Props = {
  openNav(): void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
     const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        navBg ? "bg-[#168aad] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between h-[12vh] w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logos.png"
            alt="Logo"
            width={150}
            height={150}
            className="cursor-pointer object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`nav_link transition-colors duration-200 ${
                navBg ? "text-white hover:text-yellow-300" : "text-black hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-8 py-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => router.push("#contact")}>
            Hire Me
          </button>

          {/* Burger Menu Icon */}
          <button onClick={openNav} className={`lg:hidden text-3xl transition-colors ${navBg ? "text-white" : "text-black"}`}>
            <HiBars3BottomRight />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
