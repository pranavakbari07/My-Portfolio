import React from 'react';

export default function Main() {
  return (
    <div className="h-auto text-white mx-40">
      <div className="flex py-30"> {/* “py-30” ka valid spacing hona chahiye ya custom config */}
        <div className="max-md:text-center max-md:mt-20 max-sm:mt-0">
          <h1 className="text-[55px] font-semibold py-2 max-2xl:text-[50px] max-sm:text-[33px] max-md:mt-5">
            Hey there, I'm Pranav !
          </h1>
          <h2 className="text-[24px] py-2">A Web Designer</h2>
          <p className="text-[20px] text-neutral-600 max-2xl:text-xl">
            A Web Designer with a passion for turning code into seamless user experiences!
          </p>
          <button
            aria-label="download"
            className="cursor-pointer mt-12 flex flex-row items-center gap-2 border-2 border-white py-4 px-8 hover:border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-300"
          >
            <a href="#contact">Contact Me</a>
            <i
              className="fa-solid fa-up-right-from-square"
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </div>
        <div className="flex justify-end items-center w-[45%] max-md:w-full max-md:justify-center">
          <div className="rounded-full w-[70%] h-[370px] max-sm:h-65">
            <img
              src="it's me.jpg"       /* image path fix */
              alt="Me"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
