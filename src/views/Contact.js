import React from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";

function Contact() {
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className="sm:mx-2 mx-auto flex flex-col justify-center">
        <div className="mb-8 mt-24">
          <div className="text-center text-3xl">Contact Us</div>
          <hr className="w-32 border-solid border-2 mx-auto" />
        </div>
        <div className="mx-auto mb-[363px] text-xl space-y-4">
          <div className="flex items-center">
            <i className="fas fa-phone-alt"></i>
            <span className="pl-2">+62345678911</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope"></i>
            <span className="pl-2">admin@dos.co.id</span>
          </div>
          <div className="flex items-center">
            <i class="fab fa-whatsapp"></i>
            <span className="pl-2">083354823777</span>
          </div>
          <div className="flex items-center">
            <i class="fab fa-instagram"></i>
            <span className="pl-2">FantasticReSushi</span>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Contact;
