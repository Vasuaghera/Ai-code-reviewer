import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItHelps from '../components/HowItHelps';
import Demo from '../components/Demo';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItHelps />
        <Demo />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 