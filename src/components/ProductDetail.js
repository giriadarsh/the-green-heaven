import React from "react";
import { useParams } from "react-router-dom";
import coconutLaddu from "../assets/coconut-laddu.jpeg";
import dryFruitsLaddu from "../assets/dry-fruits-laddu.jpeg";
import gondLaddu from "../assets/gond-laddu.jpeg";
import mawaGujiya from "../assets/mawa-gujiya.jpeg";
import methiMathri from "../assets/methi-mathri.jpeg";
import mirchAchaar from "../assets/mirch-achaar.jpeg";
import murmureLaddu from "../assets/murmure-laddu.jpeg";

const items = [
  { id: 1, name: "Coconut Laddu", image: coconutLaddu, price: "₹250", description: "A delicious coconut-based sweet.", ingredients: "Coconut, Sugar, Ghee, Cardamom" },
  { id: 2, name: "Dry Fruits Laddu", image: dryFruitsLaddu, price: "₹350", description: "Laddu packed with nutritious dry fruits.", ingredients: "Almonds, Cashews, Dates, Ghee" },
  { id: 3, name: "Gond Laddu", image: gondLaddu, price: "₹300", description: "Traditional winter delicacy made with edible gum.", ingredients: "Gond, Wheat Flour, Jaggery, Ghee" },
  { id: 4, name: "Mawa Gujiya", image: mawaGujiya, price: "₹400", description: "A crispy, sweet dumpling filled with mawa and dry fruits.", ingredients: "Mawa, Sugar, Flour, Nuts" },
  { id: 5, name: "Methi Mathri", image: methiMathri, price: "₹180", description: "Savory and crispy fenugreek-flavored mathri.", ingredients: "Wheat Flour, Methi, Salt, Ghee" },
  { id: 6, name: "Mirch Achaar", image: mirchAchaar, price: "₹150", description: "Spicy and tangy chili pickle.", ingredients: "Green Chili, Mustard Seeds, Oil, Spices" },
  { id: 7, name: "Murmure Laddu", image: murmureLaddu, price: "₹220", description: "Puffed rice laddu with jaggery.", ingredients: "Puffed Rice, Jaggery, Ghee" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold mt-10">Product Not Found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          
          {/* Price */}
          <p className="text-2xl font-semibold text-green-600 mt-4">{product.price}</p>
          
          {/* Ingredients */}
          <p className="text-gray-700 mt-3">
            <strong>Ingredients:</strong> {product.ingredients}
          </p>

          {/* Add to Cart Button */}
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
