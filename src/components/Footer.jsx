import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        // id="footer" ekledik ki Navbar'dan tıklayınca buraya kaysın
        // bg-primary yerine bg-slate-900 yaptık
        <footer id="footer" className="bg-slate-900 text-gray-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-12">

                    {/* Marka ve Slogan */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-bold text-2xl text-white">Şevval <span className="text-yellow-500">Döviz</span></span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Döviz Alım Satım'da Güvenilir Adres. Yatırımlarınızı güvenle değerlendirin.
                        </p>
                        <div className="flex space-x-4">
                        </div>
                    </div>

                    {/* Hızlı Erişim */}
                    <div>
                        <h4 className="text-white font-bold mb-6 border-b border-yellow-500 inline-block pb-1">Hızlı Erişim</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center gap-2">Ana Sayfa</a></li>
                            <li><a href="#corporate" className="hover:text-yellow-500 transition-colors flex items-center gap-2">Kurumsal</a></li>
                            <li><a href="#footer" className="hover:text-yellow-500 transition-colors flex items-center gap-2">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Hizmetlerimiz */}
                    <div>
                        <h4 className="text-white font-bold mb-6 border-b border-yellow-500 inline-block pb-1">Hizmetlerimiz</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Döviz Alım/Satım</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition-colors">Transfer Şirketleri</a></li>                            
                        </ul>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div>
                        <h4 className="text-white font-bold mb-6 border-b border-yellow-500 inline-block pb-1">İletişim</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <FiMapPin className="text-yellow-500 mt-1 shrink-0 group-hover:animate-bounce" />
                                <a
                                    // Adresi Google Maps'te aratacak şekilde güncelledim
                                    href="https://www.google.com/maps/search/?api=1&query=Mehmet+Nesih+Özmen,+Fatih+Cd.+No:31+C,+34173+Güngören/İstanbul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition-colors"
                                >
                                    Mehmet Nesih Özmen, Fatih Cd. No:31 C, 34173 Güngören/İstanbul
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-yellow-500 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+902125393030" className="hover:text-yellow-500 transition">(+90) 212 539 30 30</a>
                                    <a href="tel:+902125393040" className="hover:text-yellow-500 transition">(+90) 212 539 30 40</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-yellow-500 shrink-0" />
                                <a href="mailto:info@sevvaldoviz.com" className="hover:text-yellow-500 transition">info@sevvaldoviz.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Şevval Döviz ve Altın Ticaret A.Ş. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;