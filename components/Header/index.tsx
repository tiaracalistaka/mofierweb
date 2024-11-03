"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 px-10 shadow z-50">
      <div className="container-xs flex py-0.5 justify-between items-center">
        <Link href="/">
          <img src="images/Logo.svg" alt="Logo" className="h-5" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex gap-10 ">
          <a href="/catalog" className="text-primary font-medium hover:text-secondary">Katalog</a>
          <a href="/artikel" className="text-primary font-medium hover:text-secondary">Artikel</a>
          <a href="/about" className="text-primary font-medium hover:text-secondary">Tentang</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="sm:hidden text-primary text-2xl lg:text-3xl" 
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          &#x22EE; {/* Three dots icon */}
        </button>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
            <div className="w-64 bg-white h-full p-6 shadow-lg">
              <button 
                className="text-2xl text-secondary mb-4"
                onClick={toggleSidebar}
                aria-label="Close sidebar"
              >
                &times; {/* Close icon */}
              </button>
              <nav className="flex flex-col gap-6">
                <Link href="/catalog" onClick={toggleSidebar}>
                  <span className="text-primary font-medium hover:text-secondary">Katalog</span>
                </Link>
                <Link href="/artikel" onClick={toggleSidebar}>
                  <span className="text-primary font-medium hover:text-secondary">Artikel</span>
                </Link>
                <Link href="/about" onClick={toggleSidebar}>
                  <span className="text-primary font-medium hover:text-secondary">Tentang</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
