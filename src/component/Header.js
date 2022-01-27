import React from "react";

/* Banner Header */
function Header() {
  const bgHead = require("../images/header.png");
  return (
    <div className="text-center">
      <div
        style={{ backgroundImage: `url(${bgHead})` }}
        className="text-white h-36 object-cover bg-cover flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl mb-1 font-header">
          Restaurant Sushi <br /> Fantastic
        </h1>
        <h4 className="text-sm">
          Restoran yang menyediakan aneka makanan sushi
        </h4>
      </div>
    </div>
  );
}

export default Header;
