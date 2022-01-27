import React from "react";
import { NavLink } from "react-router-dom";

/* Komponen card menu makanan */
function CardMenu(props) {
  return (
    <div className="mb-5 w-full mx-auto">
      <div className="grid grid-cols-1 gap-1 place-items-center">
        <div className="flex flex-col">
          <img src={props.gambarUrl} alt="" className="rounded-2xl mb-2" />
          <div className="grid grid-cols-2 gap-2">
            <div className="flex-column">
              <div className="flex-column text-lg">{props.namaMakanan}</div>
              <div className="flex-column text-xs text-hargaMenu">
                {props.hargaMakanan}
              </div>
            </div>
            <div className="flex items-center justify-end">
              <NavLink
                to="/keranjang"
                className="bg-buttonCart text-white rounded-xl px-8 py-0.5"
              >
                <svg
                  className="mx-auto"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 19.1167C4.9 19.1167 4.01 20.192 4.01 21.5063C4.01 22.8206 4.9 23.8959 6 23.8959C7.1 23.8959 8 22.8206 8 21.5063C8 20.192 7.1 19.1167 6 19.1167ZM0 0V2.38959H2L5.6 11.4581L4.25 14.3853C4.09 14.7199 4 15.1141 4 15.5323C4 16.8466 4.9 17.9219 6 17.9219H18V15.5323H6.42C6.28 15.5323 6.17 15.4009 6.17 15.2336L6.2 15.0902L7.1 13.1427H14.55C15.3 13.1427 15.96 12.6529 16.3 11.9121L19.88 4.15788C19.96 3.99061 20 3.7875 20 3.58438C20 2.92724 19.55 2.38959 19 2.38959H4.21L3.27 0H0ZM16 19.1167C14.9 19.1167 14.01 20.192 14.01 21.5063C14.01 22.8206 14.9 23.8959 16 23.8959C17.1 23.8959 18 22.8206 18 21.5063C18 20.192 17.1 19.1167 16 19.1167Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around mx-auto mt-3"></div>
    </div>
  );
}

export default CardMenu;
