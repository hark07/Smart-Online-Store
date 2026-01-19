import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex items-center justify-center px-3">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-5 text-center mt-2">

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          About <span className="text-primary-dull">Smart Online Store</span>
        </h2>

        <p className="text-gray-700 mb-6">
          <span className="text-primary-dull font-semibold">
            Smart Online Store
          </span>{" "}
          is your trusted place for quality electronics, gadgets, and accessories
          with fast delivery and reliable service.
        </p>

        <h2 className="text-2xl font-semibold text-primary-dull mb-2">
          Our Mission
        </h2>

        <p className="text-gray-700 mb-6">
          To make modern technology easy to access with fair pricing and smooth
          online shopping.
        </p>

        <h2 className="text-2xl font-semibold text-primary-dull mb-2">
          Why Choose Us
        </h2>

        <ul className="text-gray-700 mb-6 space-y-1">
          <li>✔ Trusted electronic brands</li>
          <li>✔ Fast & secure delivery</li>
          <li>✔ Friendly customer support</li>
          <li>✔ Easy returns</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-dull mb-2">
          Our Vision
        </h2>

        <p className="text-gray-700 mb-6">
          To simplify life through smart and affordable technology solutions.
        </p>

        <h2 className="text-xl font-semibold text-primary-dull mb-2">
          Join Us Today
        </h2>

        <p className="text-gray-700 mb-5">
          Find the right tech for your daily needs with Smart Online Store.
        </p>

        <Link
          to="/products"
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dull transition"
        >
          Start Shopping
        </Link>

      </div>
    </div>
  );
};

export default About;
