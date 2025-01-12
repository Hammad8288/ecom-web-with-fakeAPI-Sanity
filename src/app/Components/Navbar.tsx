"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <nav>
        <div className="flex justify-around sm:justify-between items-center px-6 py-4 md:px-10">
          <Link href={"/"} className="font-bold text-2xl text-gray-800">
            Hammad Store
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu className="h-6 w-6 text-gray-800" />
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white sm:static sm:flex sm:items-center sm:w-auto `}
          >
            <div className="flex flex-col items-center space-y-4 py-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:py-0 ">
              <Link
                href={"/"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Home
              </Link>
              <Link
                href={"/products"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Products
              </Link>
              <Link
                href={"/Contact"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Cart Icon */}
           <Sidebar />
        </div>
      </nav>
    </div>
  );
}
