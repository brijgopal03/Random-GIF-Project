import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";


export default function App() {
  return <div className="w-full h-full flex flex-col items-center background relative overflow-y-hidden">
    <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl font-bold ">Random GIFS</h1>
     <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tags/>
     </div>
  </div>;
}
