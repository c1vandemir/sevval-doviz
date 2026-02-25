import React from 'react';
import { FaWallet, FaExchangeAlt, FaShieldAlt, FaGem, FaClock, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaExchangeAlt className="text-4xl text-yellow-500" />,
      title: "Rekabetçi Kurlar",
      description: "Piyasadaki en iyi alış/satış makas aralıklarıyla paranızın değerini koruyoruz."
    },
    {
      id: 4,
      icon: <FaWallet className="text-4xl text-yellow-500" />,
      title: "Nakite Çevirme",
      description: "Yabancı para birimlerinizi anında ve kesintisiz olarak nakit Türk Lirasına çevirin."
    },
    {
      id: 5,
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "Hızlı Hizmet",
      description: "Sıra beklemeden, uzman personelimizle işlemlerinizi dakikalar içinde tamamlayın."
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Neden <span className="text-yellow-500">Şevval Döviz?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Sadece döviz bozdurmak değil, birikimlerinize değer katmak için buradayız.
          </p>
        </div>

        {/* Kartlar Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-slate-900 transition duration-300">
                {/* İkonun rengi grup hover olunca değişsin diye cloneElement kullanılabilir ama basitlik için CSS yeterli */}
                <div className="group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;