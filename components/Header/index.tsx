import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 px-10 shadow z-50">
      <div className="container-xs flex py-0.5 justify-between items-center">
        <Link href="/">
          <img src="images/Logo.svg" alt="Logo" className="h-5" />
        </Link>
        <nav className="flex gap-10">
          <a href="/catalog" className="text-primary text-[16px] font-medium hover:text-secondary">Katalog</a>
          <a href="/artikel" className="text-primary text-[16px] font-medium hover:text-secondary">Artikel</a>
          <a href="/about" className="text-primary text-[16px] font-medium hover:text-secondary">Tentang</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
