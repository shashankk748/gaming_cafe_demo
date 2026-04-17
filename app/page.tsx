"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const plans = [
    { name: "Casual Hour", price: "₹100/hr", desc: "Perfect for quick gaming sessions.", popular: false },
    { name: "Pro Gamer Pack", price: "₹400/5 hrs", desc: "Extended playtime for serious gamers.", popular: true },
    { name: "Night Unlimited", price: "₹700/night", desc: "Play all night without limits.", popular: false },
  ];

const features = [
  "RTX Powered PCs",
  "1 Gbps Internet",
  "Ergonomic Gaming Chairs",
  "PS5 Console Arena",
  "Racing Simulators",
  "Food & Drinks Available",
  "Weekly Tournaments",
];

  const games = ["Valorant", "CS2", "GTA V", "FIFA 24", "Call of Duty", "Fortnite"];

  const testimonials = [
    { name: "Aman", text: "Best gaming setup in the city 🔥" },
    { name: "Rohit", text: "No lag, insane vibe." },
    { name: "Neha", text: "Loved the night gaming sessions." },
  ];

  const images = [
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
    "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
    "https://images.unsplash.com/photo-1616587896595-5c5f59c59e86",
  ];

  const [current, setCurrent] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">

      {/* Cursor Glow */}
      <div
        className="fixed w-40 h-40 bg-purple-600/20 blur-3xl pointer-events-none rounded-full z-0"
        style={{ left: cursor.x - 80, top: cursor.y - 80 }}
      />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wider">GAMEZONE</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#plans" className="hover:text-white">Plans</a>
          <a href="#features" className="hover:text-white">Setup</a>
          <a href="#games" className="hover:text-white">Games</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          ENTER THE ARENA
          <p className="text-purple-400 mb-4 text-sm tracking-wide">
  PS5 • Racing Sims • Food & Chill Zone
</p>
        </motion.h2>
        <p className="text-gray-400 max-w-xl mb-6">
  High-performance rigs, PS5 console arena, immersive racing simulators, and delicious food & drinks — all in one ultimate gaming destination.
</p>
        <button onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })} className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-500 transition">
          Explore Plans
        </button>
      </section>

      {/* Slideshow */}
      <section className="px-10 py-10">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gaming setup"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          {/* Controls */}
          <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded">◀</button>
          <button onClick={() => setCurrent((current + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded">▶</button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full cursor-pointer ${i === current ? "bg-purple-500" : "bg-gray-500"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-10 py-16 grid md:grid-cols-3 text-center gap-8">
        {["50+", "1Gbps", "1000+"].map((val, i) => (
          <motion.div key={i} whileHover={{ scale: 1.1 }}>
            <h3 className="text-4xl font-bold text-purple-500">{val}</h3>
            <p className="text-gray-400">{["Gaming Setups", "Internet Speed", "Happy Gamers"][i]}</p>
          </motion.div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="px-10 py-20">
        <h3 className="text-3xl font-semibold mb-12 text-center">Our Setup</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl hover:shadow-purple-500/20 hover:shadow-lg">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="px-10 py-20">
        <h3 className="text-3xl font-semibold mb-12 text-center">Gaming Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative bg-gray-900 p-6 rounded-2xl">
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full">Popular</span>
              )}
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <p className="text-purple-400 text-2xl font-semibold mb-4">{plan.price}</p>
              <p className="text-gray-400">{plan.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Games */}
      <section id="games" className="px-10 py-20">
        <h3 className="text-3xl font-semibold mb-12 text-center">Popular Games</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {games.map((game, i) => (
            <span key={i} className="bg-gray-800 px-5 py-2 rounded-full text-sm hover:bg-purple-600 transition">{game}</span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-10 py-20">
        <h3 className="text-3xl font-semibold mb-12 text-center">What Gamers Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-2xl">
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <h4 className="text-purple-400">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h3 className="text-4xl font-bold mb-4">Ready to Play?</h3>
        <p className="text-gray-400 mb-6">Step in and dominate the arena.</p>
        <button className="bg-purple-600 px-8 py-3 rounded-xl hover:bg-purple-500 transition">Visit Now</button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 GameZone. All rights reserved.
      </footer>
    </div>
  );
}
