export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.collectapi.com/economy/allCurrency', {
      headers: {
        'authorization': 'apikey 5V3m0mPVntl6Sazoh3Sag0:0KCZm7NcPkoYwcFxWFeaZH',
        'content-type': 'application/json'
      }
    });
    
    // API'den gelen veriyi önce düz yazı olarak alıyoruz ki çökmesin
    const textData = await response.text();
    let rawData;
    
    try {
      rawData = JSON.parse(textData);
    } catch (e) {
      return res.status(200).json({ hata: "API JSON göndermedi", detay: textData });
    }
    
    // Eğer API "başarısız" derse sebebiyle birlikte ekrana bas
    if (!rawData || !rawData.success) {
      return res.status(200).json({ hata: "API Hata Döndürdü (Kota bitmiş olabilir)", detay: rawData });
    }

    const kurlar = rawData.result;

    const getKur = (kod) => {
      const kur = kurlar?.find(k => k.code === kod);
      if (!kur) return { alis: "0.0000", satis: "0.0000" };

      const alis = parseFloat(String(kur.buying || 0).replace(',', '.'));
      const satis = parseFloat(String(kur.selling || 0).replace(',', '.'));
      
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
    // Sunucu içi donanımsal bir hata varsa
    return res.status(200).json({ hata: "Sunucu Kod Hatası", detay: err.message });
  }
}