import React from "react";
import heroImg from "../assets/hero.jpg";

function HeroSection() {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Delicious Food Delivered Fast 🍕</h2>
        <p className="text-lg">Order your favorite vegetarian dishes online now!</p>
      </div>
    </div>
  );
}

export default HeroSection;