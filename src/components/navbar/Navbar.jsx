import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Zapastop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div
            className="products-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Nav.Link className="nav-link" href="/products">
              Productos
            </Nav.Link>
            {showDropdown && (
              <div
                className="products-dropdown"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <a className="product-item" href="/products/deportivas">
                  Deportivas
                </a>
                <a className="product-item" href="/products/casuales">
                  Urbanas
                </a>
                <a className="product-item" href="/products/moda">
                  Tendencia
                </a>
                <a className="product-item" href="/products/nenes">
                  Niños
                </a>
                <a className="product-item" href="/products/nenas">
                  Niñas
                </a>
                <a className="product-item" href="/products/mujeres">
                  Mujeres
                </a>
                <a className="product-item" href="/products/hombres">
                  Hombres
                </a>
              </div>
            )}
          </div>
          <Nav.Link href="/nosotros">Nosotros</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <div className="cart-container">
          <a href="/cart">
            <Badge badgeContent={1} color="secondary">
              <AddShoppingCartIcon color="secondary" fontSize="medium" />
            </Badge>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
