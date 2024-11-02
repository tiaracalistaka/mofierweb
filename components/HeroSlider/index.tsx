"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Impor modul yang diperlukan dari 'swiper/modules'
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Bagian teks dan tombol yang tetap di atas */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-10 z-10">
        <h1 className="text-5xl font-bold text-white ml-40">Mofier</h1>
        <p className="text-xl font-medium text-white mt-4 max-w-lg ml-40">
          Mofier merupakan brand perhiasan yang menggabungkan warisan budaya Indonesia dengan keberlanjutan melalui karya kreatif dari bahan daur ulang.
        </p>
        <a href="/about" className="px-4 py-2 mt-4 bg-primary text-white font-semibold ml-40 hover:bg-secondary hover:text-white transition">
          SELENGKAPNYA
        </a>
      </div>

      {/* Swiper untuk gambar saja */}
      <Swiper
        modules={[Autoplay, Pagination]}  // Menggunakan modul Autoplay dan Pagination
        spaceBetween={0}                  // Tidak ada jarak antar slide
        slidesPerView={1}                 // Menampilkan satu slide pada satu waktu
        loop={true}                       // Membuat slider loop
        autoplay={{ delay: 3000 }}       // Waktu delay autoplay (10000 ms = 10 detik)
        pagination={{ clickable: true }}  // Pagination dengan indikator yang bisa diklik
        className="h-full w-full"
      >
        <SwiperSlide>
          <img src="Home.png" alt="Slider Image 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Home2.png" alt="Slider Image 2" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
