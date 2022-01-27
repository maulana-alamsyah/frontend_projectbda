import React from "react";
import { NavLink } from "react-router-dom";

/* Pilihan menu foods dan drinks dibawah kolom pencarian */
function Menu(props) {
  return (
    <div className="w-72 mx-auto text-center my-3 flex justify-around">
      <NavLink
        to="/foods"
        className={
          props.pilihan === "foods"
            ? "text-menuActive flex flex-col"
            : "text-gray-600 flex flex-col"
        }
      >
        <div className="w-20">Foods</div>
        <hr
          className={
            props.pilihan === "foods"
              ? "border-menuActive border-solid border-2 rounded mt-2 w-20"
              : "border-0"
          }
        />
      </NavLink>
      <NavLink
        to="/drinks"
        className={
          props.pilihan === "drinks"
            ? "text-orange-600 flex flex-col"
            : "text-gray-600 flex flex-col"
        }
      >
        <div className="w-20">Drinks</div>
        <hr
          className={
            props.pilihan === "drinks"
              ? "border-menuActive border-solid fill-menuActive border-2 rounded mt-2 w-20"
              : "border-0"
          }
        />
      </NavLink>
    </div>
  );
}

export default Menu;
