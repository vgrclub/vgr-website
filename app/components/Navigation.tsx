'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const menuVariants = {
  open: {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, .93)', // Fully opaque white
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      backgroundColor: { duration: 0.3 }, // Customize duration for color transition
      opacity: { duration: 0.3 }
    }
  },
  closed: {
    opacity: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent
    boxShadow: 'none',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      backgroundColor: { duration: 0.3 }, // Customize duration for color transition
      opacity: { duration: 0.3 }
    }
  }
};

const links = [
  { name: "Schedule", url: "/schedule" },
  { name: "Events", url: "/events" },
  { name: "Partners", url: "/sponsors" },
  { name: "About", url: "/about" },
];

export const Navigation = ({ isOpen }) => (
  <motion.ul
    variants={menuVariants}
    initial="closed" // Start in the closed state
    animate={isOpen ? "open" : "closed"} // Animate to the open or closed variant based on isOpen state
  >
    {links.map((link, index) => (
      <MenuItem i={index} key={index} link={link} />
    ))}
  </motion.ul>
);


