import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'; // npm install react-icons yapmadıysan hata verebilir

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Merhaba! Şevval Döviz'e hoş geldiniz. Size nasıl yardımcı olabilirim?", sender: 'bot' }
  ]);
  const messagesEndRef = useRef(null);

  // Otomatik kaydırma
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hazır Sorular ve Cevaplar
  const handleQuestion = (question) => {
    // 1. Kullanıcının sorusunu ekle
    const newUserMsg = { id: Date.now(), text: question, sender: 'user' };
    setMessages((prev) => [...prev, newUserMsg]);

    // 2. Botun cevabını hazırla (1 saniye gecikmeli)
    setTimeout(() => {
      let botResponse = "";
      
      switch (question) {
        case "Döviz kurları güncel mi?":
          botResponse = "Evet, kurlarımız Türkiye Piyasası'nda anlık olarak güncellenmektedir. Güncel kurlar için lütfen arayınız.";
          break;
        case "Neredesiniz?":
          botResponse = "Merkez şubemiz İstanbul'dadır. Detaylı konum için 'İletişim' bölümüne bakabilirsiniz.";
          break;
        case "Çalışma saatleriniz nedir?":
          botResponse = "Hafta içi 08:30 - 18:30, Cumartesi 09:00 - 15:00 saatleri arasında hizmet veriyoruz.";
          break;
        default:
          botResponse = "Buna şu an cevap veremiyorum, lütfen telefonla arayınız.";
      }

      const newBotMsg = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages((prev) => [...prev, newBotMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. Chat Penceresi (Açıksa Görünür) */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          
          {/* Üst Başlık */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-1.5 rounded-full">
                <FaRobot className="text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Şevval Asistan</h4>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Çevrimiçi
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <FaTimes />
            </button>
          </div>

          {/* Mesaj Alanı */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-yellow-500 text-slate-900 rounded-tr-none font-medium'
                      : 'bg-white border border-gray-200 text-slate-700 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Hazır Soru Butonları */}
          <div className="p-3 bg-white border-t border-gray-100 grid grid-cols-1 gap-2">
            <p className="text-xs text-gray-400 mb-1 ml-1">Hızlı Sorular:</p>
            <button 
              onClick={() => handleQuestion("Döviz kurları güncel mi?")}
              className="text-left text-xs bg-slate-100 hover:bg-slate-200 p-2 rounded text-slate-700 transition"
            >
              📈 Kurlar güncel mi?
            </button>
            <button 
              onClick={() => handleQuestion("Altın alım satımı var mı?")}
              className="text-left text-xs bg-slate-100 hover:bg-slate-200 p-2 rounded text-slate-700 transition"
            >
              🥇 Altın var mı?
            </button>
             <button 
              onClick={() => handleQuestion("Neredesiniz?")}
              className="text-left text-xs bg-slate-100 hover:bg-slate-200 p-2 rounded text-slate-700 transition"
            >
              📍 Neredesiniz?
            </button>
          </div>
        </div>
      )}

      {/* 2. Yuvarlak Açma Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/40 flex items-center justify-center text-slate-900 hover:bg-yellow-400 transition transform hover:scale-110"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={28} />}
      </button>

    </div>
  );
};

export default Chatbot;