import React from "react";
import CardMenu from "../component/CardMenu";
import Search from "../component/Search";
import Nav from "../component/Nav";
import Menu from "../component/Menu";
import Header from "../component/Header";
import LabelTerlaris from "../component/LabelTerlaris";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full mx-auto">
      <Header />
      <Search />
      <Menu pilihan="foods" />
      <LabelTerlaris />
      <CardMenu
        gambarUrl={require("../images/Donut_sushi.png")}
        namaMakanan="Donut Sushi"
        hargaMakanan="Rp. 50.000"
      />
      <CardMenu
        gambarUrl={require("../images/Baiza_sushi.png")}
        namaMakanan="Baiza Sushi"
        hargaMakanan="Rp. 50.000"
      />
      <div className="sm:mx-2 mx-auto">
        <div className="-mt-5 divide-solid divide-y-[3px]">
          <div className="mb-6 text-center">
            <NavLink className="text-blue-500 text-sm" to="/foods">
              Menu Lainnya
            </NavLink>
          </div>
          <div className="pt-3 pb-8">
            <h1 className="text-center font-bold text-lg mb-2">
              Prosedur Pemesanan
            </h1>
            <div className="text-sm">
              <ul>
                <li>Pilih menu</li>
                <li>Klik keranjang untuk memasukan jumlah pesanan</li>
                <li>Masukkan jumlah pesanan</li>
              </ul>
            </div>
          </div>
          <div className="pt-10"></div>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Home;
