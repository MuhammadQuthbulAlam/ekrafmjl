"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/Assets/images/LOGO MCC_120822.png";

export default function NavBar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});

  const menuItems = {
    "KOMITE EKRAF": {
      items: [
        { title: "TENTANG KOMITE EKRAF", href: "/Komite" },
        { title: "STRUKTUR ORGANISASI", href: "/Struktur" },
        {
          title: "PENGEMBANGAN POTENSI EKRAF",
          href: "/Potensi-Ekraf",
        },
        {
          title: "DESA TEMATIK",
          href: "/Desa",
        },
      ],
    },
    "GEDUNG MCC": {
      items: [
        {
          title: "TENTANG GEDUNG MCC",
          href: "/Gedung",
        },
        { title: "FASILITAS GEDUNG", href: "/Fasilitas" },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (menuKey) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          navbarBg ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 w-20 h-auto">
              <Link
                href="/"
                className={`text-2xl font-bold ${
                  navbarBg ? "text-gray-800" : "text-gray-800"
                }`}
              >
                <Image src={Logo} width={0} height={0} alt="Logo MCC" />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                href="/"
                className={`${
                  navbarBg ? "text-gray-800" : "text-gray-800"
                } hover:text-sky-500`}
                onMouseEnter={() => setActiveMenu(null)}
              >
                BERANDA
              </Link>
              {Object.entries(menuItems).map(([key, value]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`${
                      navbarBg ? "text-gray-800" : "text-gray-800"
                    } hover:text-sky-500 flex items-center`}
                  >
                    {key}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              {/* Desa Tematik */}
              <Link
                href="/Desa"
                className={`${
                  navbarBg ? "text-gray-800" : "text-gray-800"
                } hover:text-sky-500`}
                onMouseEnter={() => setActiveMenu(null)}
              >
                DESA TEMATIK
              </Link>
              {/*Kontak*/}
              <Link
                href="/Contact"
                className={`${
                  navbarBg ? "text-gray-800" : "text-gray-800"
                } hover:text-sky-500`}
                onMouseEnter={() => setActiveMenu(null)}
              >
                KONTAK
              </Link>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:block">
              <Link href="http://mccstore.great-site.net/">
                <button className="text-white bg-sky-500 px-4 py-2 rounded hover:bg-sky-600">
                  MCC STORE
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`${
                  navbarBg ? "text-gray-800" : "text-gray-200"
                } focus:outline-none`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        {Object.entries(menuItems).map(([key, value]) => (
          <div
            key={key}
            className={`absolute left-0 w-full h-60 bg-sky-400 shadow-lg transition-all duration-300 ${
              activeMenu === key ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onMouseEnter={() => setActiveMenu(key)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-8xl mx-10 py-6 px-4 sm:px-6 lg:px-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {value.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="p-4 hover:bg-sky-500 rounded-lg border-2 transition-colors duration-200"
                  >
                    <div className="font-medium text-white">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 py-2 space-y-3">
          <Link
            href="/"
            className="block text-gray-800 hover:text-sky-500 py-2"
          >
            BERANDA
          </Link>

          {/* Mobile Menu Items with Expandable Submenu */}
          {Object.entries(menuItems).map(([key, value]) => (
            <div key={key} className="py-2">
              <button
                onClick={() => toggleMobileSubmenu(key)}
                className="w-full flex justify-between items-center text-gray-800 hover:text-sky-500"
              >
                <span className="font-medium">{key}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedMobileMenus[key] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${
                  expandedMobileMenus[key]
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {value.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-gray-600 hover:text-sky-500 py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/Contact"
            className="block text-gray-800 hover:text-sky-500 py-2"
          >
            KONTAK
          </Link>
          <Link href="http://mccstore.great-site.net/">
            <button className="w-full text-white bg-sky-500 px-4 py-2 rounded hover:bg-sky-600 mt-4">
              MCC STORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
