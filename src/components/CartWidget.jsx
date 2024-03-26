import React from "react";
import { Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const CartWidget = ({ numNotifications }) => {
  return (
    <Nav>
      <Nav.Link href="#carrito">
        <FaShoppingCart />
        {numNotifications > 0 && (
          <span className="badge badge-danger ml-1">{numNotifications}</span>
        )}
      </Nav.Link>
    </Nav>
  );
};

export default CartWidget;
