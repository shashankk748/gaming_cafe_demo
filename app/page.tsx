"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/gaming1.png",
  "/gaming2.png",
  "/gaming3.png",
];
const PLANS = [
  { name: "Casual Hour", price: "100", unit: "/hr", desc: "Quick gaming sessions.", popular: false },
  { name: "Mini Grind", price: "250", unit: "/3 hrs", desc: "Perfect for a mid-day break.", popular: false },
  { name: "Pro Gamer Pack", price: "400", unit: "/5 hrs", desc: "For serious gamers.", popular: true },
  { name: "Full Day Pass", price: "600", unit: "/10 hrs", desc: "The ultimate grind session.", popular: false },
  { name: "Night Unlimited", price: "700", unit: "/night", desc: "Play all night (10PM - 8AM).", popular: false },
  { name: "Weekend Warrior", price: "1500", unit: "/2 days", desc: "Unlimited weekend access.", popular: false },
];

const SERVICES = [
  { title: "Elite Gaming PCs", icon: "🖥️", desc: "Equipped with RTX 40-series GPUs and 240Hz monitors for ultra-smooth competitive play." },
  { title: "Console Zone", icon: "🎮", desc: "Kick back on premium couches with PS5 and Xbox Series X setups on 4K OLED screens." },
  { title: "Racing Simulator", icon: "🏎️", desc: "Professional direct-drive wheels and hydraulic pedals for a true-to-life racing experience." },
  { title: "VR Arena", icon: "🥽", desc: "Step into another world with wireless Meta Quest 3 and Valve Index full-immersion setups." },
  { title: "Relax & Recharge", icon: "🍕", desc: "A dedicated lounge area featuring gourmet snacks, energy drinks, and comfortable seating." },
  { title: "Play. Compete. Connect.", icon: "🤝", desc: "Join a thriving community with weekly local tournaments and ranked ladder events." },
];

const MENU = {
  drinks: [
    { name: "Monster Energy", price: "110", tag: "Boost" },
    { name: "Iced Caramel Latte", price: "160", tag: "Cold" },
    { name: "Blue Lagoon Mocktail", price: "140", tag: "Fresh" },
    { name: "Cold Coffee", price: "120", tag: "Classic" },
  ],
  food: [
    { name: "Pizza Slice", price: "150" },
    { name: "Double Cheese Burger", price: "130" },
    { name: "Loaded Nachos", price: "180" },
    { name: "Peri Peri Fries", price: "120" },
  ]
};

const REVIEWS = [
  { user: "Karan M.", text: "The 240Hz monitors are a game changer for Valorant. Best ping in the city.", rating: 5 },
  { user: "Sarah T.", text: "Cleanest setups I've ever seen. The racing sim is incredibly realistic.", rating: 5 },
  { user: "Rahul S.", text: "Night pass is insane value. Great community vibes and the coffee is actually good.", rating: 4 },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/50 font-sans antialiased overflow-x-hidden">
      
      {/* AMBIENT DECOR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl px-6 md:px-12 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/20 rotate-3" />
          <h1 className="text-2xl font-black tracking-tighter italic">GAMEZONE</h1>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#contact" className="hidden sm:block text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors">CONTACT US</a>
          <a href="#plans" className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-purple-500 hover:text-white transition-all">VIEW PLANS</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 inline-block">
            Battle-Ready Gaming Arena
          </span>
          <h2 className="text-6xl md:text-[100px] font-black mb-8 tracking-tighter leading-[0.85] uppercase italic">
            YOUR ULTIMATE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              BATTLEGROUND
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium">
            From RTX-powered beasts to high-fidelity VR, experience gaming the way it was meant to be played.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-500 px-10 py-5 rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl shadow-purple-600/20">
              BOOK A STATION
            </button>
            <button className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all backdrop-blur-md">
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </section>

      {/* CINEMATIC SLIDESHOW */}
      <section className="px-6 md:px-20 py-10 relative z-10">
        <div className="max-w-7xl mx-auto relative h-[350px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={IMAGES[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-black italic tracking-tight">PRO-TIER ENVIRONMENT</h3>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h4 className="text-xl font-black mb-3 uppercase tracking-tight italic">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-black uppercase italic tracking-tighter">SELECT YOUR MISSION</h3>
            <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLANS.map((p, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border ${p.popular ? 'border-purple-600 bg-purple-600/10' : 'border-white/5 bg-white/[0.03]'} transition-all hover:scale-[1.02]`}>
                {p.popular && <span className="bg-purple-600 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-6 inline-block tracking-tighter">Most Popular</span>}
                <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-widest text-[11px]">{p.name}</h4>
                <div className="text-5xl font-black mb-4 flex items-baseline italic">₹{p.price}<span className="text-base text-gray-600 not-italic font-medium ml-1">{p.unit}</span></div>
                <p className="text-gray-400 text-sm mb-8">{p.desc}</p>
                <button className={`w-full py-4 rounded-2xl font-black text-sm uppercase ${p.popular ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/20' : 'bg-white/5 hover:bg-white/10'}`}>SELECT PLAN</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUEL STATION (MENU) */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-[#050505] p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full" />
             <h3 className="text-3xl font-black mb-10 uppercase italic flex items-center gap-3"><span>🍕</span> FUEL STATION</h3>
             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-[10px] font-black tracking-[0.3em] text-purple-500 uppercase border-b border-white/10 pb-2">Cold Drinks</p>
                  {MENU.drinks.map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-gray-300 font-bold group-hover:text-purple-400 transition-colors">{item.name}</span>
                      <span className="font-mono text-white/30 text-sm">₹{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  <p className="text-[10px] font-black tracking-[0.3em] text-purple-500 uppercase border-b border-white/10 pb-2">Snacks</p>
                  {MENU.food.map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-gray-300 font-bold group-hover:text-purple-400 transition-colors">{item.name}</span>
                      <span className="font-mono text-white/30 text-sm">₹{item.price}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
          
          <div className="pt-8">
            <h3 className="text-4xl font-black mb-6 uppercase italic leading-tight">READY TO START<br/>YOUR SESSION?</h3>
            <p className="text-gray-400 mb-8 text-lg font-medium leading-relaxed">
              We are located in the heart of the city. Open 24/7 for those who never stop gaming. 
              Drop by or contact us for group bookings and tournament enquiries.
            </p>
            <div className="flex gap-6 items-center">
               <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-purple-600 hover:text-white transition-all">VISIT NOW</button>
               <div className="text-xs font-bold text-gray-500">📍 SECTOR 5, TECH PARK</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-black tracking-[0.5em] text-gray-600 uppercase mb-12 text-center">Verified Intel</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 italic">
                <div className="flex gap-1 mb-4 text-purple-500 text-xs">★★★★★</div>
                <p className="text-gray-300 mb-6 font-medium">"{rev.text}"</p>
                <p className="text-[10px] font-black tracking-widest uppercase text-white/30">— {rev.user}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 border-t border-white/5 px-6 md:px-20 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h1 className="text-2xl font-black italic tracking-tighter mb-4">GAMEZONE</h1>
            <p className="text-gray-600 text-xs font-medium uppercase tracking-widest">© 2026 GameZone Arena • Play. Compete. Connect.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold text-gray-500">
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors">DISCORD</a>
            <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          </div>
        </div>
      </footer>
    </div>
  );
}