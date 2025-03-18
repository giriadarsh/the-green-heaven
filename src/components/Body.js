import React from "react";
import { Link } from "react-router-dom";
import coconutLaddu from "../assets/coconut-laddu.jpeg";
import dryFruitsLaddu from "../assets/dry-fruits-laddu.jpeg";
import gondLaddu from "../assets/gond-laddu.jpeg";
import mawaGujiya from "../assets/mawa-gujiya.jpeg";
import methiMathri from "../assets/methi-mathri.jpeg";
import mirchAchaar from "../assets/mirch-achaar.jpeg";
import murmureLaddu from "../assets/murmure-laddu.jpeg";

const items = [
  { id: 1, name: "Coconut Laddu", image: coconutLaddu, shortDescription: "A delicious coconut-based sweet." },
  { id: 2, name: "Dry Fruits Laddu", image: dryFruitsLaddu, shortDescription: "Laddu packed with nutritious dry fruits." },
  { id: 3, name: "Gond Laddu", image: gondLaddu, shortDescription: "Traditional winter delicacy made with edible gum." },
  { id: 4, name: "Mawa Gujiya", image: mawaGujiya, shortDescription: "A crispy, sweet dumpling filled with mawa and dry fruits." },
  { id: 5, name: "Methi Mathri", image: methiMathri, shortDescription: "Savory and crispy fenugreek-flavored mathri." },
  { id: 6, name: "Mirch Achaar", image: mirchAchaar, shortDescription: "Spicy and tangy chili pickle." },
  { id: 7, name: "Murmure Laddu", image: murmureLaddu, shortDescription: "Puffed rice laddu with jaggery." },
];

export default function FestiveSweets() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">The Green Heaven</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="block shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.shortDescription}</p>

              <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
