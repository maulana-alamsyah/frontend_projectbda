import React from "react";
import BackTop from "../component/BackTop";
import ButtonOrder from "../component/ButtonOrder";
import CardCart from "../component/CardCart";
import Nav from "../component/Nav";

function Keranjang() {
  return (
    <div className="w-full mx-auto">
      <BackTop teks="Keranjang" />
      <div className="divide-y-2">
        <div className="flex flex-col justify-items-center mx-auto pb-72">
          <CardCart />
          <CardCart />
        </div>
        <div className="sm:mx-2 mx-auto flex flex-col">
          <div className="mt-5 flex justify-between">
            <div className="text-secondary">Total item</div>
            <div>150.000</div>
          </div>
          <br />
          <div className="mt-5 flex justify-between">
            <div className="text-secondary">Pajak</div>
            <div>15.000</div>
          </div>
          <div className="flex justify-between">
            <div className="text-secondary">Meja</div>
            <div>Meja 12</div>
          </div>
          <div className="my-5 flex justify-end">
            <div>Rp. 165.000</div>
          </div>
        </div>
        <ButtonOrder teks="Proses Pembayaran" to="/struk" />
      </div>

      <Nav />
    </div>
  );
}

export default Keranjang;
