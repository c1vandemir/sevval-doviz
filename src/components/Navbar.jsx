import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Ana Sayfa', href: '#' },
        { name: 'Kurumsal', href: '#corporate' },
        { name: 'İletişim', href: '#footer' },
    ];

    return (
        <nav className="bg-slate-900 text-white w-full fixed top-0 z-50 shadow-xl border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tertemiz standart yükseklik (h-20) */}
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <a href="#" className="font-bold text-2xl tracking-wide flex items-center gap-1">
                            Şevval <span className="text-yellow-500">Döviz</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-yellow-500 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:block">
                        <a 
                           href="tel:+902125393030" 
                           className="bg-yellow-500 text-slate-900 px-5 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-yellow-500/20"
                        >
                            <FiPhone />
                            Bize Ulaşın
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-slate-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-t border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:+902125393030"
                                className="bg-yellow-500 text-slate-900 block px-3 py-3 rounded-md text-base font-bold mt-4 text-center mx-3"
                                onClick={() => setIsOpen(false)}
                            >
                                Hemen Ara
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;