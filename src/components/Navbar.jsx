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
      <Navbar.Brand href="#home">Zapastop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div
            className="products-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Nav.Link className="nav-link" href="#">
              Productos
            </Nav.Link>
            {showDropdown && (
              <div
                className="products-dropdown"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <a className="product-item" href="#deportivas">
                  Deportivas
                </a>
                <a className="product-item" href="#casuales">
                  Casuales
                </a>
                <a className="product-item" href="#moda">
                  Moda
                </a>
                <a className="product-item" href="#niños">
                  Niños
                </a>
                <a className="product-item" href="#niñas">
                  Niñas
                </a>
                <a className="product-item" href="#mujeres">
                  Mujeres
                </a>
                <a className="product-item" href="#hombres">
                  Hombres
                </a>
              </div>
            )}
          </div>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <div className="cart-container">
          <Badge badgeContent={4} color="secondary">
            <AddShoppingCartIcon color="secondary" fontSize="medium" />
          </Badge>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
