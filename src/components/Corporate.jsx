import React from 'react';
import { FaBuilding, FaGlobe, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';

const Corporate = () => {
  return (
    <section id="corporate" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Üst Başlık */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Hakkımızda</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mt-2">
            Köklü Geçmiş, <span className="text-yellow-500">Güçlü Gelecek</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* SOL TARAF: Görsel (Ofis/Plaza Temsili) */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
            {/* Buraya kendi ofis fotoğrafını koyabilirsin, şimdilik temsili bir plaza görseli koyuyoruz */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Şevval Grup Ofis" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[400px] border-4 border-white"
            />
            
            {/* Yüzen Küçük Kart */}
            <div className="absolute bottom-10 -left-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <FaBuilding className="text-3xl text-yellow-500" />
                <div>
                  <p className="text-xs text-slate-400">Çatı Kuruluş</p>
                  <p className="font-bold text-lg">Şevval Döviz</p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Metinler */}
          <div className="flex-1 space-y-8">
            
            {/* Şevval Döviz Hakkında */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Şevval Döviz </h3>
              <p className="text-slate-600 leading-relaxed">
                Yılların getirdiği tecrübe ve güvenle, finansal piyasalardaki değişimleri yakından takip ederek müşterilerimize en doğru ve en kârlı hizmeti sunuyoruz. Şevval Döviz olarak önceliğimiz; şeffaf işlem politikası ve müşteri memnuniyetidir. İstanbul'un kalbinde, yatırımlarınıza değer katmak için çalışıyoruz.
              </p>
            </div>


            {/* İkonlu Maddeler */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FaHandshake className="text-yellow-500 text-2xl" />
                <span className="font-bold text-slate-700">Güvenilir Ticaret</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-yellow-500 text-2xl" />
                <span className="font-bold text-slate-700">Hızlı İşlem</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;