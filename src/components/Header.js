import React from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div id="header">
      <NavBar />
      <ItemListContainer nombre="Bautista" />
      <CartWidget />
    </div>
  );
};

export default Header;
