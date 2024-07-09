"use client";

import React from "react";
import Categories from "./components/categories";
import { Products } from "./components/products";
import Foot from "./components/foot";
const Home = () => {
  return (
    <main className=" pt-20 mx-[10%]">
      <Categories />
      <Products />
      <Foot/> 
    </main>
  );
};

export default Home;
