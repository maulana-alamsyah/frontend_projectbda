import React from "react";
import { NavLink } from "react-router-dom";
import { IconHome, IconOrder, IconContact } from "./Icon";

/* Navigasi menu dibawah */
function Nav() {
  return (
    <div className="bg-nav rounded-t-md w-100 h-16 mx-auto sticky py-1 bottom-0">
      <footer className="flex justify-around">
        <NavLink to="/" className="flex flex-col text-center">
          <IconHome className="mx-auto" />
          HOME
        </NavLink>
        <NavLink to="/keranjang" className="flex flex-col text-center">
          <IconOrder />
          ORDERS
        </NavLink>
        <NavLink to="/contact" className="flex flex-col text-center">
          <IconContact />
          CONTACT US
        </NavLink>
      </footer>
    </div>
  );
}

export default Nav;
