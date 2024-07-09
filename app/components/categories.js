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
      <div className="flex ">
        <div className="bg-slate-50 w-[20%] shadow-md rounded-md p-4 max-w-lg">
          <h2 className="text-lg font-semibold mb-2 text-stone-700">Categories</h2>
          <ul className="ml-3 my-1 space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center">
                <FaTag className="mr-2 text-gray-500" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-40 h-full w-80 ">
          <Ads />
        </div>
      </div>
      <div className="mt-12 mx-auto  h-[10%] w-[80%]">
        <Image
          src={mainImage}
          alt="BANNER"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-full shadow-md px-auto h-full w-full"
          style={{ height: "auto" }}
          priority={false}
        />
      </div>
    </main>
  );
}
