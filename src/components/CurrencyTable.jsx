import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSyncAlt } from 'react-icons/fa';

const CurrencyTable = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState("");

  const fetchRates = async () => {
    setLoading(true);
    try {
      // Vercel üzerindeki kendi API yolumuza bağlanıyoruz
      const response = await axios.get('/api/doviz');
      const data = response.data;

      // Veriler zaten api/doviz.js'de temizlendiği için doğrudan eşleştiriyoruz
      const newRates = [
        { 
          code: 'USD', 
          name: 'Amerikan Doları', 
          buying: data.USD?.alis || "0.0000", 
          selling: data.USD?.satis || "0.0000" 
        },
        { 
          code: 'EUR', 
          name: 'Euro', 
          buying: data.EUR?.alis || "0.0000", 
          selling: data.EUR?.satis || "0.0000" 
        },
        { 
          code: 'GBP', 
          name: 'İngiliz Sterlini', 
          buying: data.GBP?.alis || "0.0000", 
          selling: data.GBP?.satis || "0.0000" 
        }
      ];

      setRates(newRates);
      
      const date = new Date();
      setLastUpdate(`${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`);
      setLoading(false);

    } catch (error) {
      console.error("API Hatası:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
    // 5 dakikada bir otomatik yenileme (Kotayı korumak için)
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading && rates.length === 0) return <div className="text-center text-yellow-500 py-10 animate-pulse">Piyasa Verileri Alınıyor...</div>;

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-800/10">
      <div className="bg-slate-900 p-6 flex justify-between items-center border-b border-slate-700">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
            💰 GÜNCEL KURLAR
          </h3>
          <p className="text-slate-400 text-sm mt-1">Şevval Döviz - Canlı Veriler</p>
        </div>
        <div className="text-right">
           <button onClick={fetchRates} className="text-yellow-500 hover:text-white transition p-2">
             <FaSyncAlt className={loading ? "animate-spin" : ""} />
           </button>
           <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
             Son: <span className="text-yellow-400 font-bold ml-1">{lastUpdate}</span>
           </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-500 uppercase text-sm font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">Döviz Cinsi</th>
              <th className="px-6 py-4 text-right text-green-700">ALIŞ</th>
              <th className="px-6 py-4 text-right text-red-700">SATIŞ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rates.map((currency, index) => (
              <tr key={index} className="hover:bg-yellow-50 transition duration-150 group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-800 text-yellow-400 text-xs font-bold px-2 py-1 rounded shadow-sm">
                      {currency.code}
                    </span>
                    <span className="text-lg font-bold text-slate-700">{currency.name}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <span className="text-2xl font-black text-green-600 tracking-tight">
                    {currency.buying} <span className="text-sm text-green-400 font-normal">₺</span>
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <span className="text-2xl font-black text-red-600 tracking-tight">
                    {currency.selling} <span className="text-sm text-red-400 font-normal">₺</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyTable;