import React from "react";
import NavBar from "./components/navbar/Navbar.jsx";
import Landing from "./components/home/Home.jsx";
import CartPage from "./components/carrito/CartPage.jsx";
import Products from "./components/categorias/Products.jsx";
import Footer from "./components/footer/Footer.jsx";
import Nosotros from "./components/pages/nosotros.jsx";
import Contacto from "./components/pages/contacto.jsx";
import ItemListContainer from "./components/home/ItemListContainer.jsx";
import ProductDetails from "./components/productos/ItemDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from './components/pages/error-404.jsx';
import CartContextProvider from '../src/components/carrito/CartContext.jsx';
import Contactado from "./components/pages/contactado.jsx";
import Pago from '../src/components/carrito/pago.jsx';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        <Route path="/" element={ <div> <NavBar /> <Landing /> <ItemListContainer /> <Footer /></div>} />
        <Route path="/cart" element={ <div> <NavBar /> <CartPage /> <Footer /> </div>} />
        <Route path="/products" element={ <div> <NavBar /> <Products /> <Footer /> </div>} />
        <Route path="/nosotros" element={ <div> <NavBar /> <Nosotros /> <Footer /> </div>} />
        <Route path="/contacto" element={ <div> <NavBar /> <Contacto /> <Footer /> </div>} />
        <Route path="/products/:categoria" element={ <div> <NavBar /> <Products /> <Footer /> </div>} />
        <Route path="/products/id/:id" element={ <div> <NavBar /> <ProductDetails /> <Footer /> </div>} />
        <Route path="*" element={ <div> <NotFoundPage />  </div>} />
        <Route path="/contactado" element={ <div> <NavBar /> <Contactado /> <Footer /> </div>} />
        <Route path="/pago" element={ <div> <NavBar /> <Pago />  <Footer /></div>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
