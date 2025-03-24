"use client"; 
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "./Productcard";
import { motion } from "framer-motion";

const CatalogPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="max-w-screen-lg mx-auto mt-3 py-8 space-y-8 px-4">
        {/* Rekomendasi Section */}
        <motion.section 
          className="text-center space-y-3 sm:pl-20"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-primary mt-10">
            Rekomendasi
          </h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Main Image */}
            <motion.img 
              src="/Rekomendasi.png" 
              alt="Main Image" 
              className="w-3/4 sm:w-56 md:w-1/2 h-auto object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Collection Details */}
            <motion.div 
              className="space-y-2 sm:space-y-4 text-center sm:text-left sm:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-primary">
                Larasati Collection
              </h2>
              <a 
                href="https://shopee.co.id/mofier.official"
                className="inline-block px-2 py-2 sm:px-4 sm:py-2 border border-primary text-primary font-semibold transition duration-300 hover:bg-primary hover:text-white text-xs sm:text-sm md:text-base"
              >
                BELANJA SEKARANG
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Products Section */}
        <motion.section 
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {["/Ring.png", "/Neklace.png", "/Bracelet.png", "/Earing.png"].map((image, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProductCard image={image} title={`Larasati ${image.split("/")[1].split(".")[0]}`} />
            </motion.div>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;