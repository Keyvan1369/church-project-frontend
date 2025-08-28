import React, { useState } from "react";
import { Link } from "react-router";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const getvalue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section className="bg-[#C8A897] dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-md">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Login to the account
        </h2>
        <form className="space-y-6" onSubmit={formHandler}>
          

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={getvalue}
              className="block w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-lime-700 focus:border-lime-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={getvalue}
              className="block w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-lime-700 focus:border-lime-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lime-900 hover:bg-lime-600 transition-colors focus:ring-4 focus:outline-none focus:ring-lime-500 dark:bg-lime-600 dark:hover:bg-lime-800"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
