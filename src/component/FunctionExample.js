import React, { useState } from "react";

function FunctionExample(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    setFullname(`${firstname} ${lastname}`);
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="container">
      <div className="max-w-sm rounded-3xl border overflow-hidden shadow-lg mx-auto p-5 mt-5">
        <form className="flex flex-col" onSubmit={submitHandle}>
          <label htmlFor="firstname" className="mb-3">
            firstname
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="bg-gray-100 rounded-md"
          />
          <label htmlFor="lastname" className="mb-3">
            lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            className="bg-gray-100 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Show
          </button>
        </form>
        <div>nama anda adalah {fullname ? fullname : ". . ."}</div>
      </div>
    </div>
  );
}

export default FunctionExample;
