import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Compare from './pages/Compare'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sk" element={<Home />} />
          <Route path="/kade" element={<Products />} />
          <Route path="/kade/:slug" element={<ProductDetail />} />
          <Route path="/porovnanie-modelov" element={<Compare />} />
          <Route path="/sk/porovnavacia-tabulka" element={<Compare />} />
          <Route path="/sk/porovnavacia-tabulka/:slug" element={<ProductDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sk/casto-kladene-otazky" element={<FAQ />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/sk/ahoj-sme-rodinna-firma" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route
            path="/sk/toto-su-nase-kontakty-zvycajne-odpovedame-do-jedneho-dna"
            element={<Contact />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
