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
  {
    id: 1,
    name: "Coconut Laddu",
    image: coconutLaddu,
    price: "₹450/500g",
    description: {
      ingredients: [
        "Dry coconut, almonds, walnuts, raisins, peanut seeds, jaggery, makhana, cashews, pumpkin seeds, sunflower seeds, cardamom, khaskhas, and Amul ghee."
      ],
      features: [
        "No added flavor or sugar.",
        "No preservatives.",
        "Prepared under full hygiene.",
        "Completely pure and healthy.",
        "All ingredients are natural and delicious."
      ]
    }
  },
  {
    id: 2,
    name: "Dry Fruits Laddu",
    image: dryFruitsLaddu,
    price: "₹849/500g",
    description: {
      ingredients: [
        "Almonds, dates, walnuts, cashews, raisins, coconut, pumpkin seeds, sunflower seeds, watermelon seeds, cucumber seeds, makhana, khaskhas, cardamom, pistachios, and Amul ghee."
      ],
      features: [
        "Completely pure and healthy.",
        "All dry fruits used are natural and delicious.",
        "The use of Amul ghee gives this laddu a special flavor and aroma.",
        "An ideal sweet treat that will take your taste buds to a new level."
      ]
    }
  },
  {
    id: 3,
    name: "Gond Laddu",
    image: gondLaddu,
    price: "₹800/500g",
    description: {
      ingredients: [
        "Gond, walnuts, cashews, makhana, coconut burada, almonds, raisins, khaskhas, magaj seeds, watermelon seeds, sunflower seeds, pumpkin seeds, cardamom powder, ginger powder, wheat flour, gram flour, Amul ghee, and jaggery."
      ],
      features: [
        "No added flavor or sugar.",
        "No preservatives.",
        "Prepared under full hygiene.",
        "Completely pure and healthy.",
        "All ingredients are natural and delicious."
      ]
    }
  },
  {
    id: 4,
    name: "Mawa Gujiya",
    image: mawaGujiya,
    price: "₹400/500g",
    description: {
      ingredients: [
        "Homemade khoya, dry fruits, minimal sugar.",
        "Fried in branded refined oil, giving it a crispy and golden color."
      ],
      features: [
        "Each piece is wrapped by hand, not by machine, providing a personal touch.",
        "No added flavor or color, making it natural and healthy.",
        "No preservatives, making it fresh and safe.",
        "Prepared under full hygiene."
      ]
    }
  },
  {
    id: 5,
    name: "Methi Mathri",
    image: methiMathri,
    price: "₹200/500g",
    description: {
      ingredients: [
        "Fenugreek, wheat flour, and traditional Indian spices."
      ],
      features: [
        "Crispy and savory snack.",
        "Perfect with tea or as a festive treat.",
        "Handmade with care.",
        "No preservatives."
      ]
    }
  },
  {
    id: 6,
    name: "Mirch Achaar",
    image: mirchAchaar,
    price: "₹850/1kg",
    description: {
      ingredients: [
        "Yellow mustard seeds, coriander, cumin, fenugreek, ajwain, mangrail, fennel, amchur powder, black salt, mustard oil."
      ],
      features: [
        "Pure recipe from Grandma’s kitchen.",
        "Full of traditional Indian flavor.",
        "No added flavor or color.",
        "No preservatives.",
        "Prepared under full hygiene."
      ]
    }
  },
  {
    id: 7,
    name: "Murmure Laddu",
    image: murmureLaddu,
    price: "₹220",
    description: {
      ingredients: [
        "Jaggery, murmure (puffed rice), sesame seeds, ginger powder."
      ],
      features: [
        "Prepared by traditional method.",
        "No added flavor, color, or sugar.",
        "No preservatives.",
        "Prepared with proper hygiene.",
        "Completely pure and healthy."
      ]
    }
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold mt-10">Product Not Found</h2>;
  }

  return (
    <div className="max-w-5xl ml-8 p-8 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />

          {/* Add to Cart Button */}
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
            Add to Cart
          </button>

        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mt-4">{product.price}</p>

          {/* Ingredients Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-green-600">Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {product.description.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Features Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-green-600">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {product.description.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
