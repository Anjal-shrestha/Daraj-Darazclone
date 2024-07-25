"use client";
import DarajContext from "@/context/daraj/mycontext";

import React from "react";
import Categories from "./components/categories";
import { Products } from "./components/products";
import { DialogDemo } from "./components/message";

const Home = () => {
  return (
    <main className="  ">
      <Categories />
      <div id="mall">
        <Products />
      </div>

      <DialogDemo />
    </main>
  );
};

export default Home;
