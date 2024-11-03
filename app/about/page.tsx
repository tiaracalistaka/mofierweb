import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Header />

      <main className="mt-8 sm:mt-10 md:mt-11">
        
        {/* Tentang dan Perjalanan Mofier Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-auto">
          {/* Gambar pertama - kiri atas */}
          <div className="relative">
            <img src="About.png" alt="About Image 1" className="w-60% h-40% sm:w-full sm:h-auto md:w-full md:h-auto lg:w-full lg:h-auto object-cover" />
          </div>

          {/* Tentang - kanan atas */}
          <div className="bg-secondary text-white p-6 sm:p-8 flex flex-col justify-center relative ">
            <h2 className="text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl md:font-semibold font-medium mb-1 sm:mb-2 md:mx-2 lg:mx-4 sm:mx-0.5">Tentang</h2>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-light text-justify md:mx-2 lg:mx-4 sm:mx-0.5">
              Merayakan warisan budaya Indonesia dengan keberlanjutan, menciptakan perhiasan unik dari bahan daur ulang yang memancarkan keindahan dan makna.
            </p>
            <img 
              src="Flower.png" 
              alt="Flower Icon" 
              className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 -bottom-4 sm:-bottom-6 right-2 sm:right-4 z-10"
            />
          </div>

          {/* Perjalanan Mofier - kiri bawah */}
          <div className="p-6 sm:p-8 bg-white flex flex-col justify-center text-secondary md:mx-2 lg:mx-4 sm:mx-0.5">
            <h2 className="text-primary text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl md:font-semibold font-medium mb-1 sm:mb-3">Perjalanan Mofier</h2>
            <p className="leading-relaxed text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg text-justify">
              Dahulu, <span className="font-bold">Mofier</span> hanyalah sebuah ide sederhana—
              Mimpi anak muda untuk memberikan sesuatu yang lebih berarti dari sekadar perhiasan. Mimpi ini lahir dari keinginan untuk melestarikan warisan budaya Indonesia, sebuah upaya untuk menjaga keindahan dan makna yang terkandung dalam tradisi Nusantara.
              <br /><br />
              Dengan memanfaatkan bahan-bahan daur ulang, <span className="font-bold">Mofier</span> menghadirkan interpretasi modern dari ornamen tradisional, menciptakan perhiasan yang tidak hanya indah secara estetis, tetapi juga sarat akan makna.
              <br /><br />
              Setiap desain <span className="font-bold">Mofier</span> adalah sebuah kisah, sebuah refleksi dari keindahan dan keunikan budaya Indonesia, sekaligus sebuah komitmen terhadap keberlanjutan lingkungan.
              <br /><br />
              <span className="font-bold">Mofier</span> adalah sebuah undangan untuk merayakan keindahan budaya Indonesia sambil turut menjaga lingkungan. Dengan mengenakan <span className="font-bold">Mofier</span>, Anda tidak hanya menjadi bagian dari sebuah cerita, tetapi juga ikut menulis bab selanjutnya dalam kisah pelestarian warisan Nusantara.
            </p>
          </div>

          {/* Gambar kedua - kanan bawah */}
          <div className="relative">
            <img src="About1.png" alt="About Image 2" className="w-full h-auto sm:h-full object-cover" />
          </div>

          {/* Visi Misi */}
          <div className="relative">
            <img src="About2.png" alt="About Image 3" className="w-full h-auto sm:h-full object-cover" />
          </div>
          <div className="p-6 sm:p-8 bg-white flex flex-col justify-center text-secondary md:mx-2 lg:mx-4 sm:mx-0.5">
            <h2 className="text-primary text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold mb-2 sm:mb-3">Visi dan Misi</h2>
            <p className="leading-relaxed text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg text-justify">
              <span className="font-bold">Mofier</span> adalah brand perhiasan Indonesia yang berkomitmen menjadi pelopor dalam industri perhiasan berkelanjutan. Dengan mengintegrasikan budaya dan keahlian tradisional Indonesia, <span className="font-bold">Mofier</span> menciptakan perhiasan yang ramah lingkungan dan memberdayakan pengrajin lokal. Mofier memiliki tujuan untuk meningkatkan kepercayaan diri pelanggan melalui karya yang merayakan warisan Indonesia.
              <br /><br />
              <span className="font-bold">Mofier</span> hadir sebagai merek perhiasan Indonesia yang mengusung suara elegan, peduli lingkungan, dan dukungan positif. Dengan karakteristik yang memadukan keanggunan, tanggung jawab, dan semangat positif, <span className="font-bold">Mofier</span> terinspirasi untuk mendorong pilihan hidup yang sadar dan modern dalam gaya hidup yang berkelanjutan. Kami dapat menyampaikan pesan-pesan dengan gaya yang lembut dan membangun untuk kesejahteraan kehidupan yang penuh kesadaran.
            </p>
          </div>
        </section>

        {/* Hubungi Kami Section */}
        <section className="relative text-center py-12 sm:py-16">
          <h2 className="text-primary text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold mb-4 sm:mb-6">Hubungi Kami</h2>
          
          {/* Grid Gambar Hubungi Kami */}
          <div className="flex justify-center mb-6 px-8 sm:px-10 md:px-10 lg:px-40">
            <img src="About3.png" alt="Contact Image 1" className="w-full h-auto" />
          </div>

          <img 
            src="Flower.png" 
            alt="Flower Icon" 
            className="absolute w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 top-8 sm:top-10 -left-1 sm:-left-5" 
          />

          <a 
            href="https://www.instagram.com/mofier.official"
            className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white border border-primary text-primary font-semibold transition duration-300 hover:bg-primary hover:text-white md:text-base text-sm"
          >
            INSTAGRAM
          </a>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
