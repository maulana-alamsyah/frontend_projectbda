import React from "react";
import { NavLink } from "react-router-dom";

/* tombol untuk order */
function ButtonOrder(props) {
  return (
    <div className="sm:mx-2 mx-auto">
      <NavLink to={props.to}>
        <button
          type="submit"
          className="bg-black w-full py-2 text-[17px] text-white text-center rounded-xl mb-5"
        >
          {props.teks}
        </button>
      </NavLink>
    </div>
  );
}

export default ButtonOrder;
