"use client";

import React, { useState } from "react";
import { Menu, HoveredLink, MenuItem } from "./ui/navbarMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import adclickImage from "../public/images/logo/adclickmagnetlogoblack.png";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn("fixed top-7 inset-x-0 mx-auto z-50", className)}>
      <div className="navbar relative rounded-full border border-transparent dark:bg-white/[0.4] dark:border-black bg-white shadow-input flex justify-between items-center space-x-4 px-8 py-4 md:px-3 md:py-3 mx-10">
        <Link href="/" className="navbar-logo">
          <Image width={200} height={200} src={adclickImage} alt="logo" />
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav
          onMouseLeave={() => setActive(null)}
          className="hidden lg:flex justify-around relative rounded-full border border-transparent shadow-2xl shadow-black dark:bg-black dark:border-white/[0.2] bg-white shadow-input justify-between items-center space-x-4 px-10 md:px-7 py-4 md:py-7 navlinks"
        >
          <Menu setActive={setActive}>
            <Link href="/" className="cursor-none">
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="container mx-auto p-4 text-black">
                <h1 className="text-black text-3xl font-bold">
                  Text with image
                </h1>

                <div className="flex flex-row space-x-8 text-sm">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <p>
                        See how we empower, energize and make time for each
                        other
                      </p>
                    </div>
                    <hr />
                    <div>
                      <p>Leading Technology Offerings For</p>
                      <ul>
                        <li>Startup</li>
                        <li>Public Entities</li>
                        <li>Enterprises</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="space-y-4">
                      <h2 className="font-semibold">
                        About <br /> Ad Click Magnet
                      </h2>
                      <p>description</p>
                    </div>
                    <hr />
                    <div className="space-y-4">
                      <h2 className="font-semibold">
                        About <br /> Ad Click Magnet
                      </h2>
                      <p>description</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-semibold">
                      About <br /> Ad Click Magnet
                    </h2>
                    <p>description</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-semibold">
                      About <br /> Ad Click Magnet
                    </h2>
                    <p>description</p>
                  </div>
                </div>
              </div>
            </MenuItem>
            <Link href="/about" className="cursor-none">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Who We Are"
              />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/website-development">
                  Web Development
                </HoveredLink>
                <HoveredLink href="/graphic-design">Graphic Design</HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding-services">
                  Branding Services
                </HoveredLink>
                <HoveredLink href="/presentation-design">
                  Presentation Design
                </HoveredLink>
                <HoveredLink href="/video-production">
                  Video Production
                </HoveredLink>
                <HoveredLink href="/motion-design">Motion Design</HoveredLink>
                <HoveredLink href="/ad-creative">Ad Creative</HoveredLink>
                <HoveredLink href="/google-ads">Google Ads</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/blogs" className="cursor-none">
              <MenuItem setActive={setActive} active={active} item="Blogs" />
            </Link>
            <Link href="/contact-us" className="cursor-none">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact Us"
              />
            </Link>
          </Menu>
        </nav>
        <Link href="/" className="hidden lg:block">
          <button
            type="button"
            className="getintouch-card flex items-center justify-center view w-200"
          >
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-b-2xl shadow-lg mt-2 mx-10">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-black hover:text-gray-600">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={() => setActive(active === "about" ? null : "about")}
                className="text-black hover:text-gray-600 w-full text-left flex justify-between items-center"
              >
                About
                <svg
                  className={`w-6 h-6 ${
                    active === "whatWeDo" ? "transform rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {active === "about" && (
                <div className="container mx-auto p-4 text-black">
                  <h1 className="text-black text-3xl font-bold">
                    Text with image
                  </h1>

                  <div className="flex flex-col space-x-8 text-sm">
                    <div className="flex flex-col space-y-4">
                      <div>
                        <p>
                          See how we empower, energize and make time for each
                          other
                        </p>
                      </div>
                      <hr />
                      <div>
                        <p>Leading Technology Offerings For</p>
                        <ul>
                          <li>Startup</li>
                          <li>Public Entities</li>
                          <li>Enterprises</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="space-y-4">
                        <h2 className="font-semibold">
                          About <br /> Ad Click Magnet
                        </h2>
                        <p>description</p>
                      </div>
                      <hr />
                      <div className="space-y-4">
                        <h2 className="font-semibold">
                          About <br /> Ad Click Magnet
                        </h2>
                        <p>description</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="font-semibold">
                        About <br /> Ad Click Magnet
                      </h2>
                      <p>description</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="font-semibold">
                        About <br /> Ad Click Magnet
                      </h2>
                      <p>description</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/what-we-are"
              className="text-black hover:text-gray-600"
            >
              Services
            </Link>
            <Link href="/blogs" className="text-black hover:text-gray-600">
              Blogs
            </Link>
            <Link href="/contact-us" className="text-black hover:text-gray-600">
              Contact Us
            </Link>
            <Link href="/">
              <button
                type="button"
                className="getintouch-card flex items-center justify-center view w-full"
              >
                Get in touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
