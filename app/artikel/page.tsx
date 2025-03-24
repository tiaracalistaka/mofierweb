import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InstagramFeed from "../../components/InstagramFeeds";


const ArtikelPage: React.FC = () => {
    return(
        <div>
            <Header/>
            <main className="container-xs mt-8 py-16 space-y-16 h-svh">
                <section className='text-center'>
                    <h1 className="text-4xl font-semibold text-primary">Artikel</h1>
                </section>
                <InstagramFeed />
                <Footer/>
            </main>
            
        </div>
    );
};

export default ArtikelPage;