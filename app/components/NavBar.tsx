'use client'
import React, { useState } from 'react'
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "../use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from 'next/link'
import InstagramLogo from './InstagramLogo'
import TikTokLogo from './TikTokLogo'
import Logo from './Logo'
import Image from 'next/image';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className='bg-white'>
      <nav className='mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-8' aria-label='Global'>
        {/* logo */}
        <div className='flex lg:flex-1'>
          <Link href="/" className=''>
            <span></span>
            <img src="/assets/VGR-original.jpg" alt="" className='h-auto w-28' />
          </Link>
        </div>
        {/* mobile menu tab */}

        <div className="flex lg:hidden">
          {/* <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button> */}

          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation isOpen={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {/* <Link href="/schedule" className="text-sm font-semibold leading-6 text-gray-900">Schedule</Link> */}
          <Link href="/events" className="text-sm font-semibold leading-6 text-gray-900">Events</Link>
          <Link href="/partners" className="text-sm font-semibold leading-6 text-gray-900">Partners</Link>
          <Link href="about" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
          <Link href="https://www.instagram.com/valleygrlsrun/"><InstagramLogo /></Link>
          {/* <Link href="https://www.instagram.com/valleygrlsrun/"><TikTokLogo /></Link> */}
          <label className="cursor-pointer grid place-items-center">
            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
      </nav>
    </header>
  )
}

export default NavBar