"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full bg-white py-4 px-10 shadow z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container-xs flex py-0.5 justify-between items-center">
        <Link href="/">
          <img src="images/Logo.svg" alt="Logo" className="h-5" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex gap-10">
          {['/catalog', '/artikel', '/about'].map((route) => (
            <Link key={route} href={route} className={`font-medium hover:text-secondary ${pathname === route ? 'text-secondary' : 'text-primary'}`}>
              {route === '/catalog' ? 'Katalog' : route === '/artikel' ? 'Artikel' : 'Tentang'}
            </Link>
          ))}
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
                {['/catalog', '/artikel', '/about'].map((route) => (
                  <Link key={route} href={route} onClick={toggleSidebar}>
                    <span className={`font-medium hover:text-secondary ${pathname === route ? 'text-secondary' : 'text-primary'}`}>
                      {route === '/catalog' ? 'Katalog' : route === '/artikel' ? 'Artikel' : 'Tentang'}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
