export default async function handler(req, res) {
  try {
    // CollectAPI'yi çöpe attık, Sınırsız Trunçgil API'ye bağlanıyoruz
    const response = await fetch('https://finans.truncgil.com/v4/today.json');
    
    if (!response.ok) {
      return res.status(200).json({ hata: "Trunçgil API'ye ulaşılamadı" });
    }

    const rawData = await response.json();

    // Trunçgil veriyi nesne olarak gönderir (rawData.USD.Buying gibi)
    const getKur = (kod) => {
      const kur = rawData[kod];
      if (!kur) return { alis: "0.0000", satis: "0.0000" };

      // Trunçgil fiyatları genelde "32.4500" formatında string olarak atar
      const alis = parseFloat(String(kur.Buying || 0).replace(',', '.'));
      const satis = parseFloat(String(kur.Selling || 0).replace(',', '.'));
      
      // Şevval Döviz Makas Ayarı (Binde 1) - İstersen değiştirebilirsin
      return { 
        alis: (alis * 0.999).toFixed(4), 
        satis: (satis * 1.001).toFixed(4) 
      };
    };

    return res.status(200).json({
      USD: getKur('USD'),
      EUR: getKur('EUR'),
      GBP: getKur('GBP')
    });

  } catch (err) {
    return res.status(200).json({ hata: "Sunucu Kod Hatası", detay: err.message });
  }
}