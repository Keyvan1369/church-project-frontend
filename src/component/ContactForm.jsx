import React, { useState } from "react";
import { contactService } from "../api/contactService";
import { LocationMap } from "./LocationMap"; 

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    contactService(email, subject, message);
  };

  return (
    <section className="bg-[#fdf7f0]">
      <div className="py-12 lg:py-20 px-6 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-[#4b2e2e]">
          Contact Us
        </h2>
        <p className="mb-10 text-center text-gray-700 sm:text-lg">
          Have a question, prayer request, or want to get involved? Reach out to us.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 mb-10" onSubmit={formHandler}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Subject
            </label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Your message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="6"
              className="w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-300 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        
        <LocationMap />
      </div>
    </section>
  );
};
