import './App.css'

import Header from './components/header'
import Footer from './components/Footer'
import Hero from './pages/hero'
import Info from './pages/bub-info'
import Product from './pages/product'
import Tools from './pages/tools'
import Insight from './pages/insight'





function App() {
  return (
    <body>
      <Header />
      <main>
        <Hero/>
        <Product/>
        <Info/>
        <Tools/>
        <Insight/>      
      </main>

      <Footer />
    </body>
  )
}

export default App
