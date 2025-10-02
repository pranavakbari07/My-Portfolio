import React from 'react'

export default function Contact() {
  return (
    <div className="h-auto text-white mx-40">
      <div className="w-full py-10" id="contact">
        <div>
          <h1 className="text-4xl font-semibold mb-5">Contact</h1>
          <p className="dark:text-neutral-300 text-neutral-600">
            I would love to hear from you. Whether you have a question about my services, want to discuss a
            potential project, or simply want to say hello, don't hesitate to get in touch. I am here to help and
            excited to start a conversation.
          </p>
        </div>

        <div className="flex sm:flex-wrap max-sm:flex-col">
          <div className="w-full md:w-1/2 flex flex-col flex-wrap justify-center gap-4">
            <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col gap-3 max-sm:text-center">
              <i className="fa-regular fa-envelope text-[25px]" style={{ color: "#9333ea" }}></i>
              <p>pranavakbari07@gmail.com</p>
            </div>

            <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col gap-3 max-sm:text-center">
              <i className="fa-solid fa-phone text-[25px]" style={{ color: "#9333ea" }}></i>
              <p>+91-8160815985</p>
            </div>

            <div className="w-full md:w-2/3 rounded-xl p-6 flex flex-col gap-3 max-sm:text-center">
              <i className="fa-solid fa-location-dot text-[25px]" style={{ color: "#9333ea" }}></i>
              <p>Rajkot - India.</p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 w-full md:w-1/2 p-6 md:p-10">
            <h2 className="font-medium text-xl">Send me a Message</h2>

            <input
              type="text"
              name="name"
              id="name"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Your Name"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Your Email"
            />

            <textarea
              rows="3"
              name="message"
              id="message"
              className="text-white cursor-pointer block w-full border border-gray-300 dark:border-gray-600 rounded-xl bg-transparent py-4 px-6
              placeholder:text-gray-400 hover:border-gray-700 hover:dark:border-gray-300 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Your Message"
            ></textarea>

            <button
              className="cursor-pointer flex flex-row items-center gap-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-lg"
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
