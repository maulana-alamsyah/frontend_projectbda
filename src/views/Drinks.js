import React from "react";
import CardMenu from "../component/CardMenu";
import Search from "../component/Search";
import Nav from "../component/Nav";
import Menu from "../component/Menu";
import { NavLink } from "react-router-dom";

function Drinks() {
  return (
    <div className="w-full mx-auto">
      <Search />
      <Menu pilihan="drinks" />
      <CardMenu
        gambarUrl={require("../images/Matcha.png")}
        namaMakanan="Matcha"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Matcha.png")}
        namaMakanan="Matcha"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Matcha.png")}
        namaMakanan="Matcha"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Matcha.png")}
        namaMakanan="Matcha"
        hargaMakanan="Rp. 50.000"
      />
      <div className="mb-6 text-center">
        <NavLink className="text-blue-500 text-lg" to="/drinks">
          Menu Lainnya
        </NavLink>
      </div>
      <Nav />
    </div>
  );
}

export default Drinks;
