"use client"

import Image from "next/image";
import Nav from "./components/Nav";
import Tabs from "./components/Tabs";
import Form from "./components/Form";
import { useState } from "react";
import Error from "./components/Alert";

export default function Home() {

  const [showForm, setShowForm] = useState(false);

  return (
    <main className="flex flex-col items-center justify-between py-24 w-screen">
      <div className="z-10 w-full max-w-5xl items-center justify-center text-sm lg:flex flex-col">
        <Nav />
        <Tabs />

        <section className="w-full max-w-[85%] mx-auto my-8 lg:py-4 px-8 bg-blue-100 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-between overflow-hidden md:h-[400px] lg:h-[450px] md:flex-row flex-col-reverse">
            <div className="flex flex-col justify-between md:pt-16 pb-12 md:p-4 md:h-full lg:min-w-[390px]">
              <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold my-2">Let's Learn & Earn</h1>
              <p className="lg:text-2xl text-lg md:w-9/12 lg:leading-10 my-2">Get a chance to win upto <span className="font-bold text-primary lg:text-4xl text-xl text-blue-500">Rs.15,000</span></p>
              <button onClick={() => setShowForm(true)} className="w-fit px-6 py-2 my-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600">Refer Now</button>
            </div>
            <div className="relative h-[200px] w-full md:min-w-[40%] md:h-full">
            <Image src='/hero-img.png' fill alt="hero" objectFit="cover" />
            </div>
          </div>
        </section>

      </div>
      
      {showForm ? <Form onClose={() => setShowForm(false)} /> : null}
    </main>
  );
}
