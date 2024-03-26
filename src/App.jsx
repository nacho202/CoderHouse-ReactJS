import React from "react";
import NavBar from "./components/Navbar.jsx";
import Landing from "./components/Home.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda en línea de zapatos." />
      <Landing />
    </div>
  );
}

export default App;
