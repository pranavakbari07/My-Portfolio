import React from "react";

export default function Nav() {
  return (
    <div className="h-auto text-white mx-40">
      <nav className="flex justify-between items-center py-3 text-lg" id="home">
        <h3 className="text-[25px] font-semibold">AP.</h3>
        <div className="mt-4 max-sm:invisible max-sm:flex max-sm:justify-between max-sm:items-center">
          <ul className="flex gap-9 py-4 px-5 rounded-full max-md:py-2 max-md:gap-5 max-md:px-5">
            <li>
              <a
                href="#home"
                className="hover:text-[#9333ea] transition-all duration-200 max-md:text-sm"
              >
                <i className="fa-solid fa-house mr-2" style={{ color: "#ffffff" }}></i>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#9333ea] transition-all duration-200 max-md:text-sm"
              >
                <i className="fa-solid fa-user mr-2" style={{ color: "#f0f4f9" }}></i>
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-[#9333ea] transition-all duration-200 max-md:text-sm"
              >
                <i className="fa-solid fa-code mr-2" style={{ color: "#fafcff" }}></i>
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#9333ea] transition-all duration-200 max-md:text-sm"
              >
                <i className="fa-solid fa-phone mr-2" style={{ color: "#fafafa" }}></i>
                Contact
              </a>
            </li>
          </ul>
          <div className="invisible max-sm:visible">
            <i className="fa-solid fa-bars" style={{ color: "#fafafa" }}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
