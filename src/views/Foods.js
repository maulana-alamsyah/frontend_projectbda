import React from "react";
import CardMenu from "../component/CardMenu";
import Search from "../component/Search";
import Nav from "../component/Nav";
import Menu from "../component/Menu";
import { NavLink } from "react-router-dom";

function CardMenus() {
  return (
    <div className="w-full mx-auto">
      <Search />
      <Menu pilihan="foods" />
      <CardMenu
        gambarUrl={require("../images/Sashimi.png")}
        namaMakanan="Sashimi"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Temarizushi.png")}
        namaMakanan="Temarizushi"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Temarizushi2.png")}
        namaMakanan="Temarizushi"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Hosomaki.png")}
        namaMakanan="Hosomaki"
        hargaMakanan="Rp. 50.000"
      />
      <div className="mb-6 text-center">
        <NavLink className="text-blue-500 text-lg" to="/foods">
          Menu Lainnya
        </NavLink>
      </div>
      <Nav />
    </div>
  );
}

export default CardMenus;
