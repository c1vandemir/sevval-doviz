export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.collectapi.com/economy/allCurrency', {
      headers: {
        'authorization': 'apikey 5V3m0mPVntl6Sazoh3Sag0:0KCZm7NcPkoYwcFxWFeaZH',
        'content-type': 'application/json'
      }
    });
    
    const rawData = await response.json();
    const kurlar = rawData.result;

    const getKur = (kod) => {
      const kur = kurlar.find(k => k && k.code === kod);
      if (!kur) return { alis: "0.0000", satis: "0.0000" };
      const rawAlis = parseFloat(String(kur.buying).replace(',', '.'));
      const rawSatis = parseFloat(String(kur.selling).replace(',', '.'));
      
      // Şevval Döviz Makas Ayarı (Binde 1)
      return { 
        alis: (rawAlis * 0.999).toFixed(4), 
        satis: (rawSatis * 1.001).toFixed(4) 
      };
    };

    // Vercel'de yanıt res.status(200).json() ile gönderilir
    return res.status(200).json({
      USD: getKur('USD'),
      EUR: getKur('EUR'),
      GBP: getKur('GBP')
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}