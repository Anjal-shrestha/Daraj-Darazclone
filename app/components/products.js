import { getAllData } from "@/apiservices/apiservice";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchInformation = async () => {
    try {
      const url = "/products/";
      const response = await getAllData(url);
      console.log("Fetched data:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <main className="card mt-10">
      <h1 className="font-bold text-xl text-stone-700">Daraj ko Mall</h1>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[30vh] rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500">{product.category}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl mt-2 font-bold text-orange-600">
                  Rs{product.price}
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-2">
                  {product.rating.rate} ({product.rating.count} )
                </p>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
