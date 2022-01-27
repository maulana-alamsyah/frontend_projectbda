import React from "react";

/* Komponen card yang ada dihalaman keranjang */
function CardCart(props) {
  return (
    <div className="rounded-3xl shadow-lg border mx-3 flex justify-items-center my-2 px-3 py-4">
      <div className="w-full mx-auto flex justify-between">
        <div className="flex justify-around">
          <img
            src="https://media.suara.com/pictures/653x366/2019/01/01/16162-sashimi-makanan-mentah-salmon-mentah-ikan-mentah.jpg"
            alt=""
            className="w-36 h-20 pl-1 rounded-3xl"
          />
          <div className="flex flex-col justify-between ml-2 ">
            <div className="text-lg">Sashimi</div>
            <div className="flex items-center justify-around">
              <div className="text-merahKeranjang">-</div>
              <div>3</div>
              <div className="text-merahKeranjang">+</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex justify-end">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0384 7.39671C20.1149 7.47031 20.1756 7.55775 20.217 7.65401C20.2585 7.75027 20.2798 7.85346 20.2798 7.95768C20.2798 8.0619 20.2585 8.16509 20.217 8.26135C20.1756 8.35761 20.1149 8.44504 20.0384 8.51864L8.53402 19.6112C8.37972 19.7599 8.17045 19.8435 7.95223 19.8435C7.73402 19.8435 7.52474 19.7599 7.37044 19.6112C7.21614 19.4624 7.12946 19.2606 7.12946 19.0502C7.12946 18.8398 7.21614 18.638 7.37044 18.4892L18.8748 7.39671C18.9511 7.32293 19.0418 7.26439 19.1416 7.22444C19.2415 7.1845 19.3485 7.16394 19.4566 7.16394C19.5647 7.16394 19.6717 7.1845 19.7715 7.22444C19.8714 7.26439 19.962 7.32293 20.0384 7.39671Z"
                fill="#C8161D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.37038 7.39671C7.29386 7.47031 7.23314 7.55775 7.19172 7.65401C7.15029 7.75027 7.12897 7.85346 7.12897 7.95768C7.12897 8.0619 7.15029 8.16509 7.19172 8.26135C7.23314 8.35761 7.29386 8.44504 7.37038 8.51864L18.8747 19.6112C19.029 19.7599 19.2383 19.8435 19.4565 19.8435C19.6747 19.8435 19.884 19.7599 20.0383 19.6112C20.1926 19.4624 20.2793 19.2606 20.2793 19.0502C20.2793 18.8398 20.1926 18.638 20.0383 18.4892L8.53397 7.39671C8.45763 7.32293 8.36695 7.26439 8.26712 7.22444C8.16729 7.1845 8.06026 7.16394 7.95218 7.16394C7.84409 7.16394 7.73706 7.1845 7.63723 7.22444C7.5374 7.26439 7.44672 7.32293 7.37038 7.39671Z"
                fill="#C8161D"
              />
            </svg>
          </div>
          <div className="flex justify-end">
            <div>150.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
