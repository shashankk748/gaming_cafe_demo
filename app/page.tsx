"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
  "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  "https://images.unsplash.com/photo-1616587896595-5c5f59c59e86",
];

const PLANS = [
  { name: "Casual Hour", price: "₹100", unit: "/hr", desc: "Quick gaming sessions.", popular: false },
  { name: "Mini Grind", price: "₹250", unit: "/3 hrs", desc: "Perfect for a mid-day break.", popular: false },
  { name: "Pro Gamer Pack", price: "₹400", unit: "/5 hrs", desc: "For serious gamers.", popular: true },
  { name: "Full Day Pass", price: "₹600", unit: "/10 hrs", desc: "The ultimate grind session.", popular: false },
  { name: "Night Unlimited", price: "₹700", unit: "/night", desc: "Play all night (10PM - 8AM).", popular: false },
  { name: "Weekend Warrior", price: "₹1500", unit: "/2 days", desc: "Unlimited weekend access.", popular: false },
];

const SERVICES = [
  { title: "Elite Gaming PCs", icon: "🖥️", desc: "Equipped with RTX 40-series GPUs and 240Hz monitors for ultra-smooth competitive play." },
  { title: "Console Zone", icon: "🎮", desc: "Kick back on premium couches with PS5 and Xbox Series X setups on 4K OLED screens." },
  { title: "Racing Simulator", icon: "🏎️", desc: "Professional direct-drive wheels and hydraulic pedals for a true-to-life racing experience." },
  { title: "VR Arena", icon: "🥽", desc: "Step into another world with wireless Meta Quest 3 and Valve Index full-immersion setups." },
  { title: "Relax & Recharge", icon: "🍕", desc: "A dedicated lounge area featuring gourmet snacks, energy drinks, and comfortable seating." },
  { title: "Play. Compete. Connect.", icon: "🤝", desc: "Join a thriving community with weekly local tournaments and ranked ladder events." },
];

const FOOD_MENU = [
  { name: "Cold Coffee", price: "₹120" },
  { name: "Pizza Slice", price: "₹150" },
  { name: "Burger", price: "₹130" },
  { name: "Energy Drink", price: "₹110" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      
      {/* BACKGROUND GLOW DECOR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg shadow-lg shadow-purple-500/20" />
          <h1 className="text-xl font-black tracking-tighter italic">GAMEZONE</h1>
        </div>
        {/* <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-400">
          {["Setup", "PS5", "Racing", "Plans", "Food"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors uppercase tracking-widest text-[10px]">
              {item}
            </a>
          ))}
        </div> */}
        <div className="flex gap-3">
          <button className="hidden sm:block border border-white/10 px-5 py-2 rounded-full text-xs font-bold hover:bg-white/5 transition-all">
            CONTACT US
          </button>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20">
            VISIT NOW
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase italic">
            YOUR ULTIMATE<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text">
              BATTLEGROUND
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            From RTX-powered beasts to high-fidelity VR, experience gaming the way it was meant to be played.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-purple-500 hover:text-white transition-all">
                BOOK A STATION
             </button>
             <button className="bg-white/5 border border-white/10 backdrop-blur-md px-10 py-4 rounded-2xl font-black hover:bg-white/10 transition-all">
                CONTACT US
             </button>
          </div>
        </motion.div>
      </section>

      {/* SLIDESHOW */}
      <section className="px-6 md:px-20 py-10 relative z-10">
        <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={IMAGES[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* SERVICES DESCRIPTION SECTION */}
      <section id="setup" className="px-6 md:px-20 py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h4 className="text-xl font-black mb-3 uppercase tracking-tight italic">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS GRID */}
      <section id="plans" className="px-6 md:px-20 py-24 bg-white/[0.01] border-y border-white/5">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black uppercase italic tracking-tighter">Choose Your Mission</h3>
          <p className="text-gray-500 mt-2">Flexible pricing for every type of player.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {PLANS.map((p, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${p.popular ? 'border-purple-600 bg-purple-600/5 shadow-2xl shadow-purple-600/10' : 'border-white/5 bg-white/[0.03]'} transition-transform hover:scale-[1.02]`}>
              {p.popular && (
                <span className="bg-purple-600 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-tighter">
                  Most Popular
                </span>
              )}
              <h4 className="text-gray-400 font-bold mb-2 uppercase tracking-widest text-[11px]">{p.name}</h4>
              <div className="text-5xl font-black mb-4 flex items-baseline">
                {p.price}
                <span className="text-base text-gray-500 font-normal ml-1">{p.unit}</span>
              </div>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD & COMMUNITY */}
      <section id="food" className="px-6 md:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[3rem] border border-white/5">
            <h3 className="text-2xl font-black mb-8 uppercase italic flex items-center gap-3">
              <span>🍕</span> Fuel Station
            </h3>
            <div className="space-y-6">
              {FOOD_MENU.map((item, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-gray-300 font-medium group-hover:text-purple-400 transition-colors">{item.name}</span>
                  <div className="h-px flex-1 mx-4 bg-white/5" />
                  <span className="font-mono text-purple-400 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center p-10">
            <h3 className="text-4xl font-black mb-6 uppercase italic leading-none">Ready to start <br/>your session?</h3>
            <p className="text-gray-400 mb-8">
              We are located in the heart of the city. Open 24/7 for those who never stop gaming. 
              Drop by or contact us for group bookings and tournament enquiries.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition-all">
                Visit Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-xl font-black italic tracking-tighter">GAMEZONE</h1>
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">© 2026 GameZone Arena • Play. Compete. Connect.</p>
        <div className="flex gap-6 text-xs font-bold text-gray-400">
          <a href="#" className="hover:text-white">INSTAGRAM</a>
          <a href="#" className="hover:text-white">DISCORD</a>
        </div>
      </footer>
    </div>
  );
}