"use client"

import Link from "next/link";
import Profile from "./profile";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [auth, setAuth] = useState(false)
  console.log(auth)
  useEffect(() => {
    if (Cookies.get('token')) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [])
  return (
    <div className="bg-slate-50 shadow-md px-3 flex rounded-md h-12 justify-center items-center">
      <p className="w-1/5 font-black mt-2">amar hisab</p>

      <div className="flex bg-slate-95v w-4/5 h-full justify-center items-center">
        <ul className="flex justify-evenly w-full h-full">
          <Link
            href="/"
            className="w-20 text-center  h-full flex justify-center items-center "
          >
            <li className="bg-gray-200 w-full h-4/5 rounded-md shadow-md text-emerald-300 font-bold flex items-center justify-center">
              {" "}
              add
            </li>
          </Link>
          <Link
            href="/my"
            className="w-20  text-center  h-full flex justify-center items-center"
          >
            <li className="bg-gray-200 w-full h-4/5 rounded-md shadow-md text-emerald-300 font-bold flex items-center justify-center">
              my
            </li>
          </Link>

          <Link
            href="/alluser"
            className="w-20  text-center  h-full flex justify-center items-center"
          >
            <li className="bg-gray-200 w-full h-4/5 rounded-md shadow-md text-emerald-300 font-bold flex items-center justify-center">
              all
            </li>
          </Link>
        </ul>
        {auth ? <Profile /> : <Link
          href="/login"
          className=" bg-green-300 h-5/6 text-center w-28 font-bold rounded-lg shadow-md text-red-300 flex justify-center items-center"
        >
          login
        </Link>}
      </div>
    </div>
  );
};

export default Navbar;
