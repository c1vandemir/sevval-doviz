import React from 'react';
import CurrencyTable from './CurrencyTable';
import Converter from './Converter';

const Hero = () => {
    return (
        // DÜZELTME BURADA YAPILDI: py-16 yerine pt-32 (üstten büyük boşluk) eklendi
        <section className="relative bg-slate-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* SOL TARAF */}
                <div className="flex-1 w-full relative z-10">
                    <div className="text-center lg:text-left space-y-8 mb-10">
                        <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                            <span className="text-yellow-500">Şevval Döviz</span> ile <br />
                            Kazanan Siz Olun
                        </h1>
                        <p className="text-slate-300 text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Piyasanın en rekabetçi kurları ve güvenilir hizmet anlayışıyla yatırımlarınıza değer katıyoruz.
                        </p>
                        
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a 
                                href="tel:+902125393030" 
                                className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20 transform hover:-translate-y-1 inline-block"
                            >
                                Hemen Ara
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                         <Converter />
                    </div>
                </div>

                {/* SAĞ TARAF */}
                <div className="flex-1 w-full max-w-2xl z-10">
                    <CurrencyTable />
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 blur-3xl rounded-l-full pointer-events-none"></div>
        </section>
    );
};

export default Hero;