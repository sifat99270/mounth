"use client";
import Fetchani from "@/utilities/fetchani";
import { useState } from "react";
import { error, success } from "@/utilities/tosthandler";

function New() {
  const [fetchs, setFetch] = useState(false);
  const [obj, setObj] = useState({
    mounthName: "",
    year: "",
  });
  function handleChange(name, value) {
    setObj((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  async function submit() {
    setFetch(true);
    const res = await fetch("/api/alls/createmounth", {
      method: "POST",
      body: JSON.stringify({
        name: obj["mounthName"] + obj["year"],
      }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const result = await res.json();
    console.log(result);
    if (result["status"] === "success") {
      setObj({
        mounthName: "",
        year: "",
      });
      success("mounth create success");
    } else {
      error("mounth create fail");
    }
    setFetch(false);
  }
  return (
    <div className="">
      <p className="font-black text-center p-4">
        please type a year name and mounth name
      </p>
      <div className="flex gap-2 relative justify-center items-center">
        <input
          value={obj["mounthName"]}
          onChange={(e) => {
            handleChange("mounthName", e.target.value);
          }}
          type="text"
          placeholder="enter a mounth name"
          className=" font-semibold p-2 outline-none border border-emerald-500 rounded-md"
        />
        <input
          value={obj["year"]}
          onChange={(e) => {
            handleChange("year", e.target.value);
          }}
          type="text"
          placeholder="enter a year name"
          className=" p-2 font-semibold outline-none border border-emerald-500 rounded-md"
        />
        {fetchs ? (
          <Fetchani />
        ) : (
          <button
            onClick={submit}
            className=" bg-emerald-500 p-2 rounded-md font-bold"
          >
            add mounth
          </button>
        )}
      </div>
    </div>
  );
}

export default New;
