"use client";
import { useState, useEffect } from "react";
import { success, error } from "@/utilities/tosthandler";
import { useRouter } from "next/navigation";
import Fetchani from "@/utilities/fetchani";
import Link from "next/link";
const Login = () => {
  const [inputObj, setInputObj] = useState({
    email: "",
    password: "",
  });
  const [fetchs, setFetch] = useState(false);
  const router = useRouter();
  function handleChange(name, value) {
    setInputObj((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  async function dataSubmit() {
    setFetch(true)
    const send = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      }, cache: "no-store"
    });
    const result = await send.json();
    console.log(result);
    if (result["status"] === "success") {
      success("successfully login");
      router.push("/");
    } else {
      error("login fail");
    }
    setFetch(false)
  }
  return (
    <div className=" relative w-80 shadow-md  bg-zinc-300 rounded-lg flex flex-col ml-auto justify-center items-center  mr-auto mt-10">
      <p className="font-bold  p-4">Login your Account</p>
      <div className="flex flex-col gap-2 justify-center items-center  ">
        <input
          value={inputObj.email}
          type="email"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0"
          placeholder="enter email"
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
        />
        <input
          value={inputObj.password}
          type="text"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0 transition-transform duration-200	"
          placeholder="enter password"
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
        />
        {fetchs ? <Fetchani /> : <button
          className="bg-teal-400 w-20 p-1 rounded-md font-medium mb-2"
          onClick={dataSubmit}
        >
          submit
        </button>}
        <Link className=" absolute bottom-2 right-3 bg-teal-400 p-1 rounded-md font-medium " href='/sign'>SIGN IN</Link>

      </div>
    </div>
  );
};

export default Login;
