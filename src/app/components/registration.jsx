"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { success, error } from "@/utilities/tosthandler";
import Fetchani from "@/utilities/fetchani";

const Registration = () => {
  const router = useRouter();
  const [inputObj, setInputObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [fetchs, setFetch] = useState(false);
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
    const result = await fetch("/api/user/check", {
      method: "POST",
      body: JSON.stringify({
        firstName: inputObj.firstName,
        lastName: inputObj.lastName,
        email: inputObj.email,
        password: inputObj.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await result.json();
    if (json.status === "success") {
      success("check otp your email box");
      router.push("/checkotp");
    } else {
      error("there was an error");
    }
    setFetch(false)
  }
  return (
    <div className="w-80 shadow-md  bg-zinc-300 rounded-lg flex flex-col ml-auto justify-center items-center  mr-auto mt-10">
      <p className="font-bold  p-4">Registration</p>
      <div className="flex flex-col gap-2 justify-center items-center  ">
        <input
          value={inputObj.firstName}
          type="email"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0"
          placeholder="enter firsrname"
          onChange={(e) => {
            handleChange("firstName", e.target.value);
          }}
        />
        <input
          value={inputObj.lastName}
          type="email"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0"
          placeholder="enter lastname"
          onChange={(e) => {
            handleChange("lastName", e.target.value);
          }}
        />

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
          type="password"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0 transition-transform duration-200	"
          placeholder="enter password"
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
        />
        <input
          value={inputObj.cPassword}
          type="password"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0 transition-transform duration-200	"
          placeholder="confrim password"
          onChange={(e) => {
            handleChange("cPassword", e.target.value);
          }}
        />
        {fetchs ? <Fetchani /> : <button
          className="bg-teal-400 w-20 p-1 rounded-md font-medium mb-2"
          onClick={dataSubmit}
        >
          submit
        </button>}
      </div>
    </div>
  );
};

export default Registration;
