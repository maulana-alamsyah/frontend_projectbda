import React from "react";
import { useNavigate } from "react-router-dom";

/* Komponen kembali diatas */
function BackTop(props) {
  let navigate = useNavigate();
  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <div className="my-10 mx-auto sm:mx-2 bg-red-600 flex items-center">
      <button className="z-10 absolute mx-auto" onClick={handleBack}>
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0618 23.3119C16.2571 23.1166 16.2571 22.8001 16.0618 22.6048C15.8666 22.4095 15.55 22.4095 15.3547 22.6048L16.0618 23.3119ZM9.66663 29L9.31307 28.6465L8.95952 29L9.31307 29.3536L9.66663 29ZM15.3547 35.3952C15.55 35.5905 15.8666 35.5905 16.0618 35.3952C16.2571 35.2 16.2571 34.8834 16.0618 34.6881L15.3547 35.3952ZM33.8333 29.5C34.1094 29.5 34.3333 29.2762 34.3333 29C34.3333 28.7239 34.1094 28.5 33.8333 28.5V29.5ZM15.3547 22.6048L9.31307 28.6465L10.0202 29.3536L16.0618 23.3119L15.3547 22.6048ZM9.31307 29.3536L15.3547 35.3952L16.0618 34.6881L10.0202 28.6465L9.31307 29.3536ZM9.66663 29.5H33.8333V28.5H9.66663V29.5Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="z-0 absolute sm:w-[320px] mx-auto text-center text-2xl">
        {props.teks}
      </div>
    </div>
  );
}

export default BackTop;
