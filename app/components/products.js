import React, { useEffect, useState } from "react";
import { getAllData } from "@/apiservices/apiservice";
import Image from "next/image";
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

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
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          style={{ color: i <= rating ? 'orange' : 'gray' }}
        />
      );
    }
    return stars;
  };
  return (

    <main className ="card mt-10">
      <h1 className="font-bold text-xl text-stone-700">Daraj ko Mall</h1>
      <div className="grid bg-white grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                width={400}
                height={500}
                alt={product.title}
                className="w-full h-[30vh] rounded-md object-contain"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-500">{product.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl mt-2 font-bold text-orange-600">
                    Rs {product.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">
                    {product.rating.rate} ({product.rating.count} )
                  </p>
                 
                </div>
                <div className="mt-2"> {renderStars(product.rating.rate)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
