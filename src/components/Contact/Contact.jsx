import React from 'react'
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_42gqkxw",
          "template_mvgcf1j",
          form.current,
          "AJyGOPnylXEg_rx45"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert(
              "Your message has been sent successfully. I will contact you soon."
            );
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
  return (
    <div id="contact">
       <div className = "text-headingColor text-center mb-20">
         <p className='text-xl font-semibold mb-5'>Contact</p>
         <h2 className='md:text-5xl text-4xl font-bold'>Contact Me</h2>
         <p>Provide your details for contact me.</p>
       </div>
      <div className="relative flex items-top justify-center bg-white sm:items-center sm:pt-0">
        <div className="max-w-7xl mx-auto pb-16 sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-bgShade sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                <a target='_blank' 
                href="https://www.google.com/maps/place/J75C%2B498,+Dakshinkali+44600/@27.6076823,85.2707979,84m/data=!3m1!1e3!4m6!3m5!1s0x39eb3d805d64eeed:0x26f05f0e7976d012!8m2!3d27.6077891!4d85.2709335!16s%2Fg%2F11k87t4qxy?entry=ttu">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                   
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                    </a>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Dakshinkali, Pharping, Nepal
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +977 9841697075
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                <a target='_blank' 
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlGGPQvfNNdrPsrkxnnPRMqfXgJbFstbsnqHLfhKHmNcXdrtPNpxcstTRpXnVJlfJKbDV">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  </a>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    keshab.pudasaini3@gmail.com
                  </div>
                </div>
              </div>

              <form
                className="p-6 flex flex-col justify-center"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex flex-col ">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    onChange={(e) => setUser_name(e.target.value)}
                    placeholder="Full Name"
                    className=" block w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold  focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="user_phone"
                    id="user_phone"
                    placeholder="Phone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Message
                  </label>
                  <textarea
                    cols="10"
                    rows="5"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Type your message here.."
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  value="Send"
                  className="btn-primary mt-5 bg-primary py-3 cursor-pointer w-full"
                  
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact