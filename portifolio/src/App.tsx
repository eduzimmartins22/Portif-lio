import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Reparos from "./components/Reparos"
import Products from "./components/Products"
import Location from "./components/Location"
import Pagamento from "./components/Contato"
import ScrollToHash from "./components/ScrollToHash"

import Bicicletas from "./components/Produtos/Bicicletas"
import CaixasSom from "./components/Produtos/CaixasSom"
import Capinhas from "./components/Produtos/Capinhas" 
import Celulares from "./components/Produtos/Celulares"
import Fones from "./components/Produtos/Fones"   
import Mochilas from "./components/Produtos/Mochilas" 
import Peliculas from "./components/Produtos/Peliculas"     
import { CartProvider } from "./context/CartProvider"

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToHash />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Reparos />
                <Products />
                <Location />
                <Pagamento />
              </>
            }
          />

          {/* PRODUTOS */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/caixas-som" element={<CaixasSom />} />
          <Route path="/capinhas" element={<Capinhas />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/fones" element={<Fones />} />
          <Route path="/mochilas" element={<Mochilas />} />
          <Route path="/Peliculas" element={<Peliculas />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
