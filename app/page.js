"use client";

import React from "react";
import Categories from "./components/categories";
import { Products } from "./components/products";

const Home = () => {
  return (
    <main className="mx-[10%]">
      <Categories />
      <Products />
    </main>
  );
};

export default Home;
