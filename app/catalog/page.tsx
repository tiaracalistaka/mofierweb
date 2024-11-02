import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "./Productcard";

const CatalogPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="max-w-screen-lg mx-auto mt-3 py-8 space-y-8 px-4">
        {/* Rekomendasi Section */}
        <section className="text-center space-y-3 sm:pl-20">
          <h1 className="text-sm mb-1 sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mt-10">
            Rekomendasi
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 ">
            {/* Main Image */}
            <img 
              src="/Rekomendasi.png" 
              alt="Main Image" 
              className="w-3/4 sm:w-56 md:w-1/2 h-auto object-cover " 
            />

            {/* Collection Details */}
            <div className="space-y-2 sm:space-y-4 text-center sm:text-left sm:w-1/2">
              <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                Larasati Collection
              </h2>
              <a 
                href="https://shopee.co.id/mofier.official"
                className="inline-block px-2 py-2 sm:px-4 sm:py-2 border border-primary text-primary font-semibold transition duration-300 hover:bg-primary hover:text-white text-xs sm:text-sm md:text-base"
              >
                BELANJA SEKARANG
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
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
