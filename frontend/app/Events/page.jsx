import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";

export default function EventsPage() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32 rounded-b-2xl overflow-hidden md:-ml-15 md:-mt-7.5">
          <div className="relative rounded-lg overflow-visible p-6 sm:p-10">
            {/* Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(270.91deg, #FFFFFF 10.34%, #80BFFF 37.69%, #007FFF 99.22%)",
              }}
            />

            {/* MOBILE + TABLET BLUE OVERLAY — HIDES WHITE */}
            <div
              className="
      absolute top-0 bottom-0  -left-10 -right-24
      bg-[#80BFFF]
      opacity-100
      lg:opacity-0
    "
            />

            {/* DESKTOP-ONLY WHITE FADE (RIGHT SIDE) */}
            <div
              className="
      pointer-events-none absolute inset-y-0 right-0
      hidden lg:block w-40
    "
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 95%)",
              }}
            />

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              {/* LEFT CONTENT */}
              <div
                className="
  md:col-span-7 lg:col-span-6
  items-start
  px-4 md:px-8 py-8
  lg:ml-12
"
              >
                <div
                  className="
    inline-flex items-center justify-center
    bg-white text-[#106FCF]
    rounded-full font-semibold
    shadow-sm mb-6 text-[20px]

    /* Mobile & Tablet (flexible) */
    px-4 py-2
    text-sm sm:text-base md:text-lg

    /* Desktop — exact Figma */
    lg:w-[219px] lg:h-[40px]
    lg:px-[14.31px] lg:py-[10.02px]
    lg:gap-[14.31px]
    lg:rounded-[429.38px]
    lg:ml-0 lg:mt-14
  "
                >
                  Events
                </div>
                <h1
                  className="
    text-white
    text-2xl sm:text-3xl md:text-4xl lg:text-[56px]
    leading-tight font-manrope font-bold mb-4

    whitespace-normal
    sm:max-w-md
    md:max-w-xl

    lg:whitespace-nowrap
    lg:max-w-none
    lg:ml-0
  "
                >
                  Level Up with Mastervance Workshops,{" "}
                  <br className="hidden lg:block" />
                  Meetups & Fun Learning
                </h1>

                <p
                  className="
            text-[#FAFDFF]
            text-sm sm:text-base md:text-lg lg:text-[22px]
            mb-6 max-w-2xl
            lg:ml-0 
          "
                >
                  Learn, build, and grow through core engineering events
                  designed for future-ready engineers.
                </p>

                <a
                  href="/courses"
                  className="
              inline-block
              px-6 md:px-8 py-3
              rounded-xl bg-[#003366] hover:bg-[#0041cc]
              text-white font-semibold
              shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              transition
              lg:ml-0
            "
                >
                  Join Comminity
                </a>
              </div>

              {/* RIGHT ILLUSTRATION */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div
                  className="
            w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
          "
                >
                  <Image
                    src="/Events1.svg"
                    alt="Illustration"
                    width={360}
                    height={360}
                    className="object-contain mx-auto lg:ml-40 md:ml-10"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Soft Fade Overlay */}
          </div>
        </div>
      </section>
      <EventsSection />
      <Footer />
    </div>
  );
}
