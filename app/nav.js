import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Navbar = () => {
  const logo = "/images/logo.png";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-orange-600 py-4 grid grid-cols-4 items-center sm:px-6 md:px-4 lg:px-8">
        <div className="col-span-1 h-8 w-8 mx-[33%]">
          <Image
            src={logo}
            alt="BANNER"
            layout="responsive"
            width={5}
            height={5}
            className="rounded-full shadow-md ml-2"
            priority={false}
          />
        </div>

        <Link href="#">
          <div className="col-span-1">
            <div className="font-extrabold text-2xl font-serif text-neutral-50">
              Daraj
            </div>
          </div>
        </Link>

        <form className="col-span-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-700"
              placeholder="Search in Daraj"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-3 text-sm rounded-md h-full text-white bg-orange-400 opacity-90 rounded-e-lg border border-orange-700 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        <div className="col-span-1 ml-8 flex text-white font-semibold">
          <a href="#">
            <span>Login</span>
          </a>
          <span className="mx-2">|</span>
          <a href="#">
            <span>Signup</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
