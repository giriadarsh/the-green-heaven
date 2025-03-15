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
  { id: 1, name: "Coconut Laddu", image: coconutLaddu, description: "A delicious coconut-based sweet." },
  { id: 2, name: "Dry Fruits Laddu", image: dryFruitsLaddu, description: "Laddu packed with nutritious dry fruits." },
  { id: 3, name: "Gond Laddu", image: gondLaddu, description: "Traditional winter delicacy made with edible gum." },
  { id: 4, name: "Mawa Gujiya", image: mawaGujiya, description: "A crispy, sweet dumpling filled with mawa and dry fruits." },
  { id: 5, name: "Methi Mathri", image: methiMathri, description: "Savory and crispy fenugreek-flavored mathri." },
  { id: 6, name: "Mirch Achaar", image: mirchAchaar, description: "Spicy and tangy chili pickle." },
  { id: 7, name: "Murmure Laddu", image: murmureLaddu, description: "Puffed rice laddu with jaggery." },
];

export default function FestiveSweets() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">The Green Heaven</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="block shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4 text-center bg-white">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
