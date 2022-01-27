import React from "react";

/* Kolom pencarian */
function Search() {
  return (
    <div className="mx-auto flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white mt-3 mx-auto shadow-lg py-2 pl-2 border focus:outline-none rounded"
        placeholder="Cari lebih banyak pilihan makanan"
      />
    </div>
  );
}

export default Search;
