import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Corporate from './components/Corporate'; // <--- 1. BURAYA EKLE
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      
      {/* 2. BURAYA EKLE (Hizmetlerden önce veya sonra koyabilirsin) */}
      <Corporate /> 
      
      <Services />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;