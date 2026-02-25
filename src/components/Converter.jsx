import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalculator } from 'react-icons/fa';

const Converter = () => {
  const [rates, setRates] = useState([]);
  const [amount, setAmount] = useState(100);
  const [selectedCode, setSelectedCode] = useState('USD');
  const [results, setResults] = useState({ buying: 0, selling: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Netlify fonksiyonumuzdan güncel ve makaslı veriyi çekiyoruz
        const response = await axios.get('/api/doviz');
        const data = response.data;

        const newRates = [
          { 
            code: 'USD', 
            name: 'Dolar',
            buying: parseFloat(data.USD?.alis || 0), 
            selling: parseFloat(data.USD?.satis || 0) 
          },
          { 
            code: 'EUR', 
            name: 'Euro',
            buying: parseFloat(data.EUR?.alis || 0), 
            selling: parseFloat(data.EUR?.satis || 0) 
          },
          { 
            code: 'GBP', 
            name: 'Sterlin',
            buying: parseFloat(data.GBP?.alis || 0), 
            selling: parseFloat(data.GBP?.satis || 0) 
          }
        ];
        
        setRates(newRates);
      } catch (err) {
        console.log("Hesap Makinesi Veri Hatası:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (rates.length > 0) {
      const selectedCurrency = rates.find(r => r.code === selectedCode);
      if (selectedCurrency) {
        // Burada tekrar makas uygulamıyoruz, çünkü makas zaten sunucuda (doviz.js) uygulandı
        setResults({
            buying: (amount * selectedCurrency.buying).toFixed(2),
            selling: (amount * selectedCurrency.selling).toFixed(2)
        });
      }
    }
  }, [amount, selectedCode, rates]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full mt-6 text-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <FaCalculator className="text-yellow-500" />
        <h3 className="font-bold text-lg">Hızlı Hesapla</h3>
      </div>
      
      <div className="flex gap-2 mb-6">
        <div className="w-1/2">
             <label className="block text-[10px] text-slate-500 mb-1 font-bold uppercase">Miktar</label>
             <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-bold focus:outline-none focus:border-yellow-500"
            />
        </div>
        <div className="w-1/2">
             <label className="block text-[10px] text-slate-500 mb-1 font-bold uppercase">Döviz</label>
             <select
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="w-full bg-slate-900 text-white rounded-xl p-3 font-bold cursor-pointer"
            >
              {rates.map((rate) => (
                <option key={rate.code} value={rate.code}>{rate.name}</option>
              ))}
            </select>
        </div>
      </div>

      <div className="bg-green-50 rounded-xl p-3 border border-green-100 mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-green-700 font-bold uppercase">Bize Bozdurursanız</span>
        </div>
        <div className="flex items-center gap-1 text-green-800">
          <span className="text-2xl font-black tracking-tight">{results.buying}</span>
          <span className="text-lg font-bold opacity-70">₺</span>
        </div>
      </div>

      <div className="bg-red-50 rounded-xl p-3 border border-red-100">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] text-red-700 font-bold uppercase">Bizden Alırsanız</span>
        </div>
        <div className="flex items-center gap-1 text-red-800">
          <span className="text-2xl font-black tracking-tight">{results.selling}</span>
          <span className="text-lg font-bold opacity-70">₺</span>
        </div>
      </div>
    </div>
  );
};

export default Converter;