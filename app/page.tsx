import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="mt-10 sm:mt-12 md:mt-15">
        <HeroSlider />

        {/* Produk Kami Section */}
        <section className="text-center mt-8 sm:mt-10 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary mb-6 sm:mb-10">Produk Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="relative overflow-hidden group">
              <img 
                src="Ring.png" 
                alt="Ring" 
                className="w-full sm:w-3/4 md:w-3/4 h-auto mx-auto object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl font-semibold">Larasati Ring</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative overflow-hidden group">
              <img 
                src="Neklace.png" 
                alt="Neklace" 
                className="w-full sm:w-3/4 md:w-3/4 h-auto mx-auto object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl font-semibold">Larasati Necklace</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative overflow-hidden group">
              <img 
                src="Bracelet.png" 
                alt="Bracelet" 
                className="w-full sm:w-3/4 md:w-3/4 h-auto mx-auto object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg sm:text-xl font-semibold">Larasati Bracelet</span>
              </div>
            </div>
          </div>
          <Link href="/catalog">
            <button className="px-3 sm:px-4 py-2 mt-4 sm:mt-6 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
              LIHAT SEMUA
            </button>
          </Link>
        </section>

        {/* Artikel Section */}
        <section className="text-center mt-12 sm:mt-16 mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10">Artikel</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 max-w-3xl">
            {/* Article 1 */}
            <div className="relative group overflow-hidden shadow-lg max-w-xs sm:max-w-sm mx-auto">
              <img 
                src="Artikel1.png" 
                alt="Artikel 1" 
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-4 text-white">
                <p className="text-sm sm:text-md font-semibold mb-2">
                  Mofier Berpartisipasi di ITB Integrated Career Days 2024: Perhiasan Daur Ulang Berbasis Budaya yang Menginspirasi
                </p>
                <a href="/artikel1" className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                  SELENGKAPNYA
                </a>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="relative group overflow-hidden shadow-lg max-w-xs sm:max-w-sm mx-auto">
              <img 
                src="Artikel2.png" 
                alt="Artikel 2" 
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-4 text-white">
                <p className="text-sm sm:text-md font-semibold mb-2">
                  Kolaborasi Mofier dan Superkids: Edukasi Pengolahan Sampah Plastik di SuperKids Earth Project
                </p>
                <a href="/artikel2" className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                  SELENGKAPNYA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Galeri Section */}
        <section className="relative text-center py-12 sm:py-16">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 sm:mb-6">Galeri</h2>
          
          {/* Grid Gambar Galeri */}
          <div className="flex justify-center px-4 sm:px-20 md:px-40">
            <img src="Galeri.png" alt="Galeri" className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl" />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
