export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.collectapi.com/economy/allCurrency', {
      headers: {
        'authorization': 'apikey 5V3m0mPVntl6Sazoh3Sag0:0KCZm7NcPkoYwcFxWFeaZH',
        'content-type': 'application/json'
      }
    });
    
    const rawData = await response.json();
    
    if (!rawData.success) {
      return res.status(200).json({ error: "API Kotası Dolmuş Olabilir" });
    }

    const kurlar = rawData.result;
    const getKur = (kod) => {
      const kur = kurlar.find(k => k.code === kod);
      const alis = parseFloat(String(kur?.buying || 0).replace(',', '.'));
      const satis = parseFloat(String(kur?.selling || 0).replace(',', '.'));
      // Binde 1 makas
      return { alis: (alis * 0.999).toFixed(4), satis: (satis * 1.001).toFixed(4) };
    };

    res.status(200).json({
      USD: getKur('USD'),
      EUR: getKur('EUR'),
      GBP: getKur('GBP')
    });
  } catch (err) {
    res.status(500).json({ hata: err.message });
  }
}