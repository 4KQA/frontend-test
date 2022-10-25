import './App.css';
import ExpertInsights from './components/ExpertInsights';
import ExplainerVideo from './components/ExplainerVideo';
import Footer from './components/Footer';
import Guides from './components/Guides';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Navigation from './components/Navigation';
import ProductShowcase from './components/ProductShowcase';
import References from './components/References';

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProductShowcase />
      <InfoCards />
      <ExplainerVideo />
      <Guides />
      <ExpertInsights />
      <References />
      <Footer />
    </main>
  );
}

export default App;
