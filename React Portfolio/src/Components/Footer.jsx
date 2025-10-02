import React from 'react'

export default function Footer() {
  return (
    <div className="h-auto text-white mx-40">
      <footer
        className="flex flex-col-reverse md:gap-0 gap-4 md:flex-row justify-between items-center w-full max-w-6xl border-t border-t-gray-300 py-10"
      >
        <p>© 2023 anurag gharat</p>

        <div className="flex flex-row gap-2 text-xl">
          <a
            href="#"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center w-12 h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
          >
            <i className="fa-brands fa-facebook-f" style={{ color: "#ffffff" }}></i>
          </a>

          <a
            href="#"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center w-12 h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
          >
            <i className="fa-brands fa-twitter" style={{ color: "#fafcff" }}></i>
          </a>

          <a
            href="#"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center w-12 h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
          >
            <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
          </a>

          <a
            href="#"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center w-12 h-12 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-[#222] rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-2 transition-all ease-in-out duration-300"
          >
            <i className="fa-brands fa-youtube" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </footer>
    </div>
  )
}
