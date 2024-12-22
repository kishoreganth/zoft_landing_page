'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const services = [
  {
    title: "Book Appointments Instantly",
    description:
      "Let Kayzen handle your scheduling! From booking sessions to managing reschedules, this AI assistant makes it seamless to connect with clients.",
  },
  {
    title: "Instant Support for Shoppers",
    description:
      "Streamline your eCommerce support with Kayzen! From order tracking to FAQs, this AI assistant ensures customers get instant help, boosting satisfaction and saving your team time.",
  },
  {
    title: "Simplifying Insurance Support",
    description:
      "InsureBot handles claims, policy inquiries, and renewals with ease. Available 24/7, this AI assistant ensures customers get instant, accurate support while streamlining operations for insurers.",
  },
  {
    title: "Revolutionizing Patient Support",
    description:
      "HealthBot streamlines healthcare with 24/7 support for appointment booking, symptom checking, and medication reminders. Ideal for clinics, hospitals, and telemedicine platforms, it improves patient care by providing instant assistance while reducing staff workload.",
  },
  {
    title: "Your Travel Assistant",
    description:
      "TravelBot simplifies bookings, updates itineraries, and answers travel queries 24/7, ensuring smooth, stress-free journeys. Perfect for airlines, travel agencies, and hotels, it boosts customer satisfaction and operational efficiency.",
  },
];

const AnimatedTextLoop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const splitLines = (text) => text.split(". ").map((line, idx) => `${line.trim()}${idx < text.split(". ").length - 1 ? "." : ""}`);

  return (
    <div className="relative h-[150px] sm:h-[200px] flex gap-[2vw] flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
        >
          <div className="bg-green- overflow-hidden mb-4">
          <motion.h3
             key={currentIndex}
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -50 }}
             transition={{ duration: 0.8, ease: easeInOut }}
          className="text-3xl px-[3vw] text-start sm:text-5xl tablet:text-4xl font-bold text-white dark:text-white">
            {services[currentIndex].title}
          </motion.h3>
          </div>
         <div className="bg-green- h-fit overflow-hidden">
         <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}

         className="font-medium text-xl tablet:text-lg px-[3vw] text-start text-zinc-300 dark:text-gray-300">
            {services[currentIndex].description}
          </motion.p>
         </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTextLoop;
