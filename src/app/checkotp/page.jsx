"use client";

import { useEffect, useState } from "react";
import { error, success } from "@/utilities/tosthandler";
import { useRouter } from "next/navigation";

const Check = () => {
  const router = useRouter();
  const [inputObj, setInputObj] = useState({
    otp: "",
  });
  useEffect(() => {
    function ok() {}
    ok();
    return () => {};
  }, []);
  function handleChange(name, value) {
    setInputObj((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  async function dataSubmit() {
    const result = await fetch(`/api/user/check?otp=${inputObj["otp"]}`, {
      cache: "no-store",
    });

    const json = await result.json();

    if (json.status === "success") {
      success("registration success");
      router.push("/login");
    } else {
      error("invalid otp");
    }
  }
  return (
    <div className="w-80 shadow-md  bg-zinc-300 rounded-lg flex flex-col ml-auto justify-center items-center  mr-auto mt-10">
      <p className="font-bold  p-4">Registration</p>
      <div className="flex flex-col gap-2 justify-center items-center  ">
        <input
          value={inputObj.otp}
          type="email"
          className="h-8 outline-none p-2 rounded-md shadow-md focus:outline-emerald-300 outline-offset-0"
          placeholder="enter otp"
          onChange={(e) => {
            handleChange("otp", e.target.value);
          }}
        />
        <button
          className="bg-teal-400 w-20 p-1 rounded-md font-medium mb-2"
          onClick={dataSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Check;
