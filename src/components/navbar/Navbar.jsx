"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "@/context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "services",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  // State variable to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode } = useContext(ThemeContext);
  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const session = useSession();

  return (
    <div className="container">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          GIG XPLORE TECH SOLUTIONS PVT LTD.
        </Link>
        <div
          className={`${styles.links} ${mobileMenuOpen ? styles.showMobileMenu : ""
            }`}
          style={mode === "light" ? { backgroundColor: `white` } : undefined}
        >
          <DarkModeToggle />
          {links.map((link, index) => (
            <div
              key={link.id}
              className={`${styles.link} ${index !== links.length - 1 ? styles.divider : ""
                }`}
            >
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
        <div className={`${styles.hamburgerIcon}`} onClick={toggleMobileMenu}>
          <FiMenu />
        </div>
      </div>
    </div>

  );
};

export default Navbar;
