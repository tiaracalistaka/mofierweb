import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="mt-15">
      <HeroSlider />
      {/* Produk Kami Section */}
      <section className="text-center mt-10 mb-16">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-10">Produk Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Ring.png" 
              alt="Ring" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Ring</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Neklace.png" 
              alt="Neklace" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Necklace</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative overflow-hidden group">
            <img 
              src="Bracelet.png" 
              alt="Bracelet" 
              className="w-full md:w-3/4 h-auto mx-auto object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 md:w-3/4 mx-auto flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">Larasati Bracelet</span>
            </div>
          </div>
        </div>
        <Link href="/catalog">
          <button className="px-4 py-2 mt-6 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
            LIHAT SEMUA
          </button>
        </Link>
      </section>


      <section className="text-center mt-16 mb-20">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-10">Artikel</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-3xl">
          {/* Article 1 */}
          <div className="relative group overflow-hidden shadow-lg max-w-sm mx-auto">
            <img 
              src="Artikel1.png" 
              alt="Artikel 1" 
              className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-4 text-white">
              <p className="text-md font-semibold mb-2">
                Mofier Berpartisipasi di ITB Integrated Career Days 2024: Perhiasan Daur Ulang Berbasis Budaya yang Menginspirasi
              </p>
              <a href="/artikel1" className="inline-block px-4 py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                SELENGKAPNYA
              </a>
            </div>
          </div>
          
          {/* Article 2 */}
          <div className="relative group overflow-hidden shadow-lg max-w-sm mx-auto">
            <img 
              src="Artikel2.png" 
              alt="Artikel 2" 
              className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-4 text-white">
              <p className="text-md font-semibold mb-2">
                Kolaborasi Mofier dan Superkids: Edukasi Pengolahan Sampah Plastik di SuperKids Earth Project
              </p>
              <a href="/artikel2" className="inline-block px-4 py-2 bg-white text-primary font-semibold hover:bg-secondary hover:text-white transition">
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Galeri Section */}
      <section className="relative text-center py-16">
          <h2 className="text-primary text-lg sm:text-2xl md:text-3xl font-semibold mb-6">Galeri</h2>
          
          
          {/* Grid Gambar Galeri */}
          <div className="flex justify-center pl-40 md:pl-40 pr-40 md:pr-40">
            <img src="Galeri.png" alt="Galeri" className="w-full h-100" />
            
          </div>
          
        </section>
      <Footer />
      </main>
    </div>
  );
};
export default HomePage;