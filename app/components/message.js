"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";
export function DialogDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-10 right-0 bg-slate-100 text-stone-600 text-xs p-3 rounded-md shadow-lg shadow-slate-300 ">
          <MessageIcon />
          <p>Messages</p>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[750px]  fixed bottom-10 right-0 p-0">
        <div className="grid grid-cols-2 ">
          <div className=" leftdiv border border-slate-500 bg-gray-100  ">
            <div className="text-lg  text-slate-400 font-semibold flex items-center  py-3 bg-white">
              <span className="ml-5">
                <MessageIcon className=" text-slate-400" />
                Messages
              </span>
            </div>
            {isLoggedIn ? (
              <div className="grid col-span-4 ">
                <div className="">
                  <h2>Tattu ko store</h2>
                </div>
                <div>1</div>
              </div>
            ) : (
              <>
                <div className="bg-slate-200 h-fit mt-4"></div>
              </>
            )}
          </div>
          <div className="rightdiv ">
            <h1 className="text-lg  text-slate-800 font-medium flex items-center  py-3 border bg-white pl-2  ">
              Daraj
            </h1>
            {isLoggedIn ? (
              <div className="p-4   justify-items-center text-center justify-center">
                <div className="p-8  text-slate-400  mt-6">
                  <EmailIcon sx={{ fontSize: 50 }} />
                </div>

                <p className="text-gray-500 text-sm mx-4 text-center">
                  Once you start a new conversation, you'll see it listed here.
                </p>
              </div>
            ) : (
              <>
                <div className="p-4   justify-items-center text-center justify-center">
                  <div className="p-8  text-slate-300 ">
                    <EmailIcon sx={{ fontSize: 50 }} />
                  </div>

                  <p className=" mt-2 underline text-sm text-sky-500 font-semibold ">
                    Use the App for exclusive offers!
                  </p>
                  <p className="text-gray-500 text-sm mx-4 text-center">
                    Once you start a new conversation, you'll see it listed
                    here.
                  </p>
                  <div className="mt-4">
                    <Link href="/login">
                      <span className="text-cyan-800 hover:underline">
                        Login
                      </span>
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/signup">
                      <span className="text-cyan-800 hover:underline">
                        Signup
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
