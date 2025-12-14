"use client";
import Image from "next/image";
import BogeyClick from "@/components/Bogey";
import BoogerClick from "@/components/Booger";
import BoogsClick from "@/components/Boogs";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0); 
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00a2ff] to-[#a8e4ff] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className={"text-6xl self-center my-10"}>Bogey's Happy Holidays</h1>
          <p className={"text-3xl font-bold"}>Presents Delivered: {count}</p> 
        </div>
        <div className="flex flex-row items-center gap-8 text-center">
          <BogeyClick onClick={() => {setCount(count + 1)}} />
          <BoogerClick onClick={() => {setCount(count + 1)}} />
          <BoogsClick onClick={() => {setCount(count + 1)}} />
        </div>
      </main>
    </div>
  );
}