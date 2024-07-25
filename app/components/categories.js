"use client";

import React, { useEffect, useState } from "react";
import { getAllData } from "@/apiservices/apiservice";
import { FaTag } from "react-icons/fa";
import Image from "next/image";
import { Ads } from "./slider";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchInformation = async () => {
    try {
      const url = "/products/categories";
      const response = await getAllData(url);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  const mainImage = "/images/daraj1.png";

  return (
    <main className="mx-auto mt-4">
      <div className="flex">
        <div className="bg-slate-50 w-[20%] shadow-md rounded-md p-4 max-w-lg">
          <h2 className="text-lg font-semibold mb-2 text-stone-700">Categories</h2>
          <ul className="ml-3 my-1 space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center hover:text-orange-600">
                <FaTag className="mr-2 text-gray-500  hover:text-orange-600 " />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-8 w-[75%]">
          <Ads />
        </div>
      </div>
      <div className="mt-12 ">
        <Image
          src={mainImage}
          alt="BANNER"
          width={600}
          height={200}
          className="rounded-full shadow-md   mx-auto w-[55%] h-28"
       
        />
      </div>
    </main>
  );
}
