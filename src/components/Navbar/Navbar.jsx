"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import style from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar) {
      bar.addEventListener("click", () => {
        nav.classList.add("active");
      });
    }

    if (close) {
      close.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (bar) {
        bar.removeEventListener("click", () => {
          nav.classList.add("active");
        });
      }
      if (close) {
        close.removeEventListener("click", () => {
          nav.classList.remove("active");
        });
      }
    };
  }, []);

  return (
    <section id="header">
      <Link href="/" className="logoN">
        <img src="/Screenshot__306_-removebg-preview.png" className="logo" alt="" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={pathname === "/shop" ? "active" : ""}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={pathname === "/contact" ? "active" : ""}
            >
              Dashboard
            </Link>
          </li>
          <Link href="/cart" className={`cartt ${pathname === "/cart" ? "active" : ""}`}>
            <li id="lg-bag">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </li>
          </Link>
          <Link href="/#" id="close">
            <i className="fas fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Link href="/cart">
          <i className="fas fa-shopping-bag"></i>
        </Link>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
}

export default Navbar;
