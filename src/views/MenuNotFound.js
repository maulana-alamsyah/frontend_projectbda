import React from "react";
import Nav from "../component/Nav";
import Search from "../component/Search";

function MenuNotFound(props) {
  return (
    <div>
      <Search />
      <div className="w-96 mx-auto mt-28 flex flex-col">
        <div className="mx-auto text-8xl text-gray-400 my-8">
          <i className="fas fa-search"></i>
        </div>
        <div className="mx-auto text-2xl font-bold mt-4 mb-2">
          Menu tidak ditemukan
        </div>
        <div className="mx-auto text-lg text-center text-gray-400 -space-y-2 mb-64">
          <div>Coba cari item dengan</div>
          <div>kata kunci yang berbeda</div>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default MenuNotFound;
