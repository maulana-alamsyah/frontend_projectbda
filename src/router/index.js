import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../views/Contact";
import Drinks from "../views/Drinks";
import Foods from "../views/Foods";
import Home from "../views/Home";
import Keranjang from "../views/Keranjang";
import MenuNotFound from "../views/MenuNotFound";
import Struk from "../views/Struk";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/struk" element={<Struk />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/menunotfound" element={<MenuNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
