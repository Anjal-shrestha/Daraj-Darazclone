"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarajContext from "@/context/daraj/mycontext";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const logo = "/images/logo.png";
  const { cart } = useContext(DarajContext);
  const length = cart ? cart.length : 0; // Handle undefined cart gracefully

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const userVerifier = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  };

  useEffect(() => {
    userVerifier();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  const handleSearch = (e) => {
   
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-orange-600 py-4 grid grid-cols-1 sm:grid-cols-4 items-center sm:px-6 md:px-4 lg:px-8">
      <Link href="/">
        <div className="flex justify-center sm:justify-start items-center ml-40">
          <Image
            src={logo}
            alt="BANNER"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full"
          />
          <div className="ml-2 font-extrabold text-2xl font-serif text-neutral-50">
            Daraj
          </div>
        </div>
      </Link>

      <form className="flex justify-center sm:justify-center sm:col-span-1" onSubmit={handleSearch}>
        <div className="relative w-full max-w-lg">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search in Daraj"
            required
          />
          <button
            type="submit"
            className="absolute top-1 right-1 p-1 px-3 text-sm rounded-md self-center text-white bg-orange-400 hover:bg-orange-500"
          >
            <SearchIcon />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>

      <div className="flex justify-center col-span-1   sm:justify-end items-center text-white font-semibold">
        {isLoggedIn ? (
          <span className="mr-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <AccountCircleIcon /> hello, Anjal
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <button onClick={handleLogout}>Log out</button>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </span>
        ) : (
          <>
            <span className="pr-2 hover:bg-orange-800 rounded-lg">
              <Link href="/login">
                <span>
                  <PermIdentityOutlinedIcon className="mx-2" />
                  Login
                </span>
              </Link>
            </span>
            <span className="mx-2">|</span>
            <Link href="/signup">
              <span>Signup</span>
            </Link>
          </>
        )}

        <span className="mx-2">|</span>

        {isLoggedIn ? (
          <Link href="/cart">
            <span className="relative ">
              <ShoppingCartOutlinedIcon className="mx-3 h-8 w-12 hover:bg-orange-800" />
              {length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-800 bg-white rounded-full">
                  {length}
                </span>
              )}
            </span>
          </Link>
        ) : (
          <Link href="/login">
            <span className="relative">
              <ShoppingCartOutlinedIcon className="mx-3 h-8 w-12 hover:bg-orange-800" />
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
