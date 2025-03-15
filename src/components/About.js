import React from "react";
import coconutLaddu from "../assets/coconut-laddu.jpeg";
import dryFruitsLaddu from "../assets/dry-fruits-laddu.jpeg";
import gondLaddu from "../assets/gond-laddu.jpeg";
import mawaGujiya from "../assets/mawa-gujiya.jpeg";
import methiMathri from "../assets/methi-mathri.jpeg";
import mirchAchaar from "../assets/mirch-achaar.jpeg";
import murmureLaddu from "../assets/murmure-laddu.jpeg";

const products = [
  { name: "Coconut Laddu", image: coconutLaddu },
  { name: "Dry Fruits Laddu", image: dryFruitsLaddu },
  { name: "Gond Laddu", image: gondLaddu },
  { name: "Mawa Gujiya", image: mawaGujiya },
  { name: "Methi Mathri", image: methiMathri },
  { name: "Mirch Achaar", image: mirchAchaar },
  { name: "Murmure Laddu", image: murmureLaddu },
];

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray-900">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center text-green-700 mb-6 tracking-wide">About Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
        Welcome to <span className="font-bold text-green-700">Food Fashion 24</span>, where tradition meets taste! 
        Founded by <span className="font-semibold text-gray-900">Priyawadini Giri</span>, we specialize in crafting 
        authentic, homemade Indian sweets and snacks with love and care. Our mission is to bring you the finest 
        quality treats that remind you of home.
      </p>

      {/* Specialties Section */}
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-4 text-center">Our Specialties</h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
        We take pride in preparing traditional delicacies using the best ingredients. 
        Here are some of our most loved products:
      </p>

      {/* Product Showcase */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-52 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <h2 className="text-3xl font-bold text-gray-800 mt-10 text-center">Get in Touch</h2>
      <p className="text-lg text-gray-700 text-center mt-2">
        Have questions? Want to place an order? Reach out to us at:
      </p>
      
      <div className="mt-4 text-center">
        <a 
          href="mailto:foodfashion24@gmail.com" 
          className="text-lg font-bold text-white bg-green-600 px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          📧 Contact Us
        </a>
      </div>
    </div>
  );
}
