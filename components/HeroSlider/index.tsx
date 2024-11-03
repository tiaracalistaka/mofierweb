"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import modul yang diperlukan dari 'swiper/modules'
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSlider: React.FC = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[60vh] w-full overflow-hidden">
      {/* Bagian teks dan tombol yang tetap di atas */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-start sm:justify-center items-start p-6 sm:p-10 z-10 mt-10 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ml-5 sm:ml-10 md:ml-20 lg:ml-40">
          Mofier
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-white mt-2 sm:mt-4 max-w-sm sm:max-w-base md:max-w-lg lg:max-w-2xl xl:max-w-3xl ml-5 sm:ml-10 md:ml-20 lg:ml-40">
          Mofier merupakan brand perhiasan yang menggabungkan warisan budaya Indonesia dengan keberlanjutan melalui karya kreatif dari bahan daur ulang
        </p>
        <a
          href="/about"
          className="px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-primary text-white font-semibold ml-5 sm:ml-10 md:ml-20 lg:ml-40 hover:bg-secondary hover:text-white transition"
        >
          SELENGKAPNYA
        </a>
      </div>

      {/* Swiper untuk gambar saja */}
      <Swiper
        modules={[Autoplay, Pagination]}  // Menggunakan modul Autoplay dan Pagination
        spaceBetween={0}                  // Tidak ada jarak antar slide
        slidesPerView={1}                 // Menampilkan satu slide pada satu waktu
        loop={true}                       // Membuat slider loop
        autoplay={{ delay: 3000 }}        // Waktu delay autoplay (3000 ms = 3 detik)
        pagination={{ clickable: true }}  // Pagination dengan indikator yang bisa diklik
        className="h-full w-full"
      >
        <SwiperSlide>
          <img 
            src="Home.png" 
            alt="Slider Image 1" 
            className="w-full h-[80vh] sm:h-[70vh] md:h-[60vh] lg:h-full object-cover" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="Home2.png" 
            alt="Slider Image 2" 
            className="w-full h-[80vh] sm:h-[70vh] md:h-[60vh] lg:h-full object-cover" 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
