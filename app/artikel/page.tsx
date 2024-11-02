import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const ArtikelPage: React.FC = () => {
    return(
        <div>
            <Header/>
            <main className="container-xs mt-8 py-16 space-y-16 h-svh">
                <section className='text-center'>
                    <h1 className="text-4xl font-semibold text-primary">Artikel</h1>
                </section>
                <section className='text-center'>
                    <h1 className='text-5xl font-bold text-primary'>&#127800; To be Announce &#127800;</h1>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default ArtikelPage;