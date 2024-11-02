import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "./Productcard";

const CatalogPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="container-xs mt-8 py-16 space-y-16">
        {/* Rekomendasi Section */}
        <section className="text-center space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-primary">Rekomendasi</h1>
          
          <div className="flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-10 md:space-x-10 px-6 md:pl-100 md:px-20">
            {/* Main Image */}
            <img 
              src="/Rekomendasi.png" 
              alt="Main Image" 
              className="w-1/4 sm:w-3/4 md:w-1/2 h-auto object-cover" 
            />

            {/* Collection Details */}
            <div className="space-y-4 text-center md:text-left md:w-1/2">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-primary">Larasati Collection</h2>
              <a 
                href="https://shopee.co.id/mofier.official"
                className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white border border-primary text-primary font-semibold transition duration-300 hover:bg-primary hover:text-white text-sm sm:text-base"
              >
                BELANJA SEKARANG
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-1 md:grid-cols-4 md:gap-6 justify-items-center">
          <ProductCard image="/Ring.png" title="Larasati Ring" />
          <ProductCard image="/Neklace.png" title="Larasati Necklace" />
          <ProductCard image="/Bracelet.png" title="Larasati Bracelet" />
          <ProductCard image="/Earing.png" title="Larasati Earring" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;
