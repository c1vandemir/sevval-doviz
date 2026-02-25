import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown, FiMinus } from 'react-icons/fi';

const LiveRates = () => {
    const ratesData = [
        { code: 'USD', name: 'Amerikan Doları', buy: '33.50', sell: '33.65', status: 'up' },
        { code: 'EUR', name: 'Euro', buy: '36.20', sell: '36.40', status: 'down' },
        { code: 'GBP', name: 'İngiliz Sterlini', buy: '42.10', sell: '42.35', status: 'up' },
        { code: 'GA', name: 'Gram Altın', buy: '2450.00', sell: '2475.00', status: 'up' },
        { code: 'XU100', name: 'BIST 100', buy: '8900.50', sell: '8900.50', status: 'stable' },
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'up': return <FiTrendingUp className="text-green-500" />;
            case 'down': return <FiTrendingDown className="text-red-500" />;
            default: return <FiMinus className="text-gray-400" />;
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Canlı Piyasa Verileri</h2>
                    <p className="text-gray-600">Piyasaları anlık takip edin, fırsatları kaçırmayın.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Döviz Cinsi</th>
                                    <th className="px-6 py-4 text-right font-semibold">Alış</th>
                                    <th className="px-6 py-4 text-right font-semibold">Satış</th>
                                    <th className="px-6 py-4 text-center font-semibold">Durum</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {ratesData.map((rate, index) => (
                                    <tr key={rate.code} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-gray-100 p-2 rounded-lg font-bold text-primary w-12 text-center">
                                                    {rate.code}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-800">{rate.name}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-gray-700">{rate.buy} ₺</td>
                                        <td className="px-6 py-4 text-right font-bold text-primary">{rate.sell} ₺</td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center">
                                                {getStatusIcon(rate.status)}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-gray-50 text-center text-xs text-gray-500">
                        * Veriler 15 dakika gecikmelidir. Yatırım tavsiyesi değildir.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LiveRates;
