'use client'
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Newbar=() =>{
  return (
    <>
    <div className="w-full h-[60px] bg-emerald-800 sticky top-0 ">
      <div className="container mx-auto px-0 h-full">
        <div className="flex justify-between items-center h-full">
          <p className="text-white ">logo here</p>
          <ul className="hidden md:flex gap-x-6 text-white">
           <li>
            <Link href="/pages/Home">
              Home
            </Link>
           </li>
           <li>
            <Link href="/pages/About">
              About
            </Link>
           </li>
           <li>
            <Link href="/contact">
              Contact us
            </Link>
           </li>
          </ul>
          <div> {/* Search Component */}
                {/* Your search component goes here */}
                <input type="text" placeholder="Search..." className="placeholder-white text-black bg-transparent border border-white px-2 py-1 rounded" />
              </div>
          <CgProfile size={29}  />
        </div>
      </div>
    </div>
    </>
  );
}
export default Newbar;
