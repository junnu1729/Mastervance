import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CommunityPage() {
  return (
    <div>
      <Navbar />

      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-20 md:py-20 rounded-b-2xl overflow-hidden md:-ml-15 md:-mt-7.5">
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
    lg:ml-12 lg:mt-14
  "
                >
                  Community
                </div>
                <h1
                  className="
    text-white
    text-2xl sm:text-3xl md:text-4xl lg:text-[64px]
    leading-tight font-manrope font-bold mb-4

    whitespace-normal
    sm:max-w-md
    md:max-w-xl

    lg:whitespace-nowrap
    lg:max-w-none
    lg:ml-12
  "
                >
                  Advance in Core Engineering with{" "}
                  <br className="hidden lg:block" />
                  Industry Connections
                </h1>

                <p
                  className="
            text-[#FAFDFF]
            text-sm sm:text-base md:text-lg lg:text-[22px]
            mb-6 max-w-2xl
            lg:ml-12 
          "
                >
                  Join a global community of learners and professionals, gaining
                  practical skills and real-world insights to
                  <span className="block">build your engineering career.</span>
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
              lg:ml-14 
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
                    src="/Community1.svg"
                    alt="Illustration"
                    width={316}
                    height={316}
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

      <section className="bg-[#F9FCFF] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* =========================
      SECTION 1 : TOP HEADING
    ========================== */}
          <div className="text-center mb-12 md:mb-20">
            <h2
              className="
          font-manrope font-bold text-[#3A3434]
          text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
          mb-4
          lg:-mt-28
        "
            >
              Join Our Whatsapp Community
            </h2>

            <p
              className="
          font-opensans text-[#565151]
          text-sm sm:text-base md:text-lg lg:text-[24px]
          max-w-4xl mx-auto
        "
            >
              Real-time discussions, study groups, and instant help from peers
              and mentors.
            </p>
          </div>

          {/* =========================
      SECTION 2 : LEFT TITLE BLOCK
    ========================== */}
          <div className="mb-10 md:mb-16 max-w-3xl">
            <h3
              className="
          font-manrope font-bold text-[#3A3434] leading-tight
          text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
          lg:-ml-30
        "
            >
              Built by engineering minds, for the <br />
              <span className="bg-gradient-to-r from-[#007FFF] to-[#09509B] text-transparent bg-clip-text">
                engineering community
              </span>
            </h3>
          </div>

          {/* =========================
      SECTION 3 : FEATURE CARDS
    ========================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* CARD 1 */}
            <div
              className="
          bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-6
          shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)]
          w-full h-auto
          lg:w-[315px] lg:h-[318px] lg:-ml-30
        "
            >
              <img
                src="/community2.svg"
                alt="Fast help"
                className="
            w-[110px] h-[110px] mx-auto mb-4
            lg:w-[140px] lg:h-[140px] lg:ml-12 lg:-mt-1
          "
              />

              <h4
                className="
            font-manrope font-extrabold text-[#3A3434] mb-2
            text-lg sm:text-xl lg:text-[26px]
          "
              >
                Fast help from peers & mentors
              </h4>

              <p className="text-sm text-[#787575] font-manrope">
                Get quick answers when you need them.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
          bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-6
          shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)]
          w-full h-auto
          lg:w-[315px] lg:h-[318px] lg:-ml-10
        "
            >
              <img
                src="/community3.svg"
                alt="Discussion"
                className="
            w-[110px] h-[110px] mx-auto mb-4
            lg:w-[140px] lg:h-[140px] lg:ml-12 lg:-mt-1
          "
              />

              <h4
                className="
            font-manrope font-extrabold text-[#3A3434] mb-2
            text-lg sm:text-xl lg:text-[23px]
          "
              >
                Branch-specific discussion channels
              </h4>

              <p className="text-sm text-[#787575] font-manrope">
                Talk and share with your own department group.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              className="
          bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-6
          shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)]
          w-full h-auto
          lg:w-[315px] lg:h-[318px] lg:ml-6
        "
            >
              <img
                src="/community4.svg"
                alt="Jobs"
                className="
            w-[120px] h-[120px] mx-auto mb-4
            lg:w-[150px] lg:h-[150px] lg:ml-12 lg:-mt-4
          "
              />

              <h4
                className="
            font-manrope font-extrabold text-[#3A3434] mb-2
            text-lg sm:text-xl lg:text-[26px]
          "
              >
                Job opportunities & referrals
              </h4>

              <p className="text-sm text-[#787575] font-manrope">
                Find job updates shared by others.
              </p>
            </div>

            {/* CARD 4 */}
            <div
              className="
          bg-[#FBFEFF] rounded-[16px] border border-[#E2D4D4] p-6
          shadow-[0px_0px_7.8px_-1px_rgba(0,0,0,0.25)]
          w-full h-auto
          lg:w-[315px] lg:h-[318px] lg:ml-25
        "
            >
              <img
                src="/community5.svg"
                alt="Support"
                className="
            w-[110px] h-[110px] mx-auto mb-4
            lg:w-[140px] lg:h-[140px] lg:ml-12 lg:-mt-1
          "
              />

              <h4
                className="
            font-manrope font-extrabold text-[#3A3434] mb-2
            text-lg sm:text-xl lg:text-[26px]
          "
              >
                Support around the clock
              </h4>

              <p className="text-sm text-[#787575] font-manrope">
                Help is always here, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FCFF] py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* =========================
      SECTION 1 : HEADING
    ========================== */}
          <div className="text-center mb-12 md:mb-20">
            <h2
              className="
          font-manrope font-extrabold text-[#3A3434]
          text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
          mb-4
          lg:-mt-15
        "
            >
              Community Guidelines
            </h2>

            <p
              className="
          font-openSans text-[#565151]
          text-sm sm:text-base md:text-lg lg:text-[22px]
          max-w-3xl mx-auto
        "
            >
              Help us maintain a supportive and inclusive environment for all
              engineering students.
            </p>
          </div>

          {/* =========================
      SECTION 2 : GUIDELINE CARDS
    ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* CARD 1 */}
            <div
              className="
          bg-white rounded-[16px] border border-[#F0E6E6]
          p-6
          shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)]
          w-full h-auto
          lg:w-[668px] lg:h-[210px] lg:-ml-20
        "
            >
              <div className="flex items-start gap-4">
                <img
                  src="/Community6.svg"
                  alt="Respect"
                  className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]"
                />

                <div>
                  <h4
                    className="
                font-Inter font-semibold text-[#3A3434] mb-2
                text-xl sm:text-2xl lg:text-[36px]
              "
                  >
                    Be Respectful
                  </h4>

                  <p
                    className="
                font-openSans text-[#3A3434]
                text-sm sm:text-base md:text-lg lg:text-[22px]
                leading-snug
                lg:-ml-20 lg:mt-5
              "
                  >
                    Treat all members with respect, regardless of college,
                    background, or experience level. We're all here to learn and
                    grow together.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
          bg-white rounded-[16px] border border-[#F0E6E6]
          p-6
          shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)]
          w-full h-auto
          lg:w-[668px] lg:h-[210px]
        "
            >
              <div className="flex items-start gap-4">
                <img
                  src="/Community7.svg"
                  alt="Share Knowledge"
                  className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]"
                />

                <div>
                  <h4
                    className="
                font-Inter font-semibold text-[#3A3434] mb-2
                text-xl sm:text-2xl lg:text-[36px]
              "
                  >
                    Share Knowledge
                  </h4>

                  <p
                    className="
                font-openSans text-[#3A3434]
                text-sm sm:text-base md:text-lg lg:text-[22px]
                leading-snug
                lg:-ml-20 lg:mt-5
              "
                  >
                    Help others by sharing knowledge, resources, and
                    experiences. Your insights could be exactly what someone
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
          bg-white rounded-[16px] border border-[#F0E6E6]
          p-6
          shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)]
          w-full h-auto
          lg:w-[668px] lg:h-[210px] lg:-ml-20
        "
            >
              <div className="flex items-start gap-4">
                <img
                  src="/Community8.svg"
                  alt="No Spam"
                  className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]"
                />

                <div>
                  <h4
                    className="
                font-Inter font-semibold text-[#3A3434] mb-2
                text-xl sm:text-2xl lg:text-[36px]
              "
                  >
                    No Spam
                  </h4>

                  <p
                    className="
                font-openSans text-[#3A3434]
                text-sm sm:text-base md:text-lg lg:text-[22px]
                leading-snug
                lg:-ml-20 lg:mt-5
              "
                  >
                    Avoid promotional content, spam, or irrelevant posts. Keep
                    the community focused on valuable discussions and safe a
                    community.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div
              className="
          bg-white rounded-[16px] border border-[#F0E6E6]
          p-6
          shadow-[0px_0px_6.5px_0px_rgba(0,0,0,0.15)]
          w-full h-auto
          lg:w-[668px] lg:h-[210px]
        "
            >
              <div className="flex items-start gap-4">
                <img
                  src="/Community9.svg"
                  alt="Stay Relevant"
                  className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]"
                />

                <div>
                  <h4
                    className="
                font-Inter font-semibold text-[#3A3434] mb-2
                text-xl sm:text-2xl lg:text-[36px]
              "
                  >
                    Stay Relevant
                  </h4>

                  <p
                    className="
                font-openSans text-[#3A3434]
                text-sm sm:text-base md:text-lg lg:text-[22px]
                leading-snug
                lg:-ml-20 lg:mt-5
              "
                  >
                    Keep discussions relevant to engineering, career
                    development, and education. Use appropriate channels for
                    specific topics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-[#F9FCFF]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6">
          {/* =============================
      MAIN CTA CONTAINER
    ============================== */}
          <div
            className="
        bg-[#3192F7] rounded-[26px]
        px-6 sm:px-10 lg:px-14
        py-10 sm:py-12 lg:py-16
        flex flex-col lg:flex-row
        items-center gap-8 lg:gap-12
      "
          >
            {/* =============================
        LEFT CONTENT SECTION
      ============================== */}
            <div className="flex-1 text-white text-center lg:text-left">
              {/* Heading */}
              <h2
                className="
            font-openSans font-bold
            text-2xl sm:text-3xl md:text-4xl lg:text-[56px]
            leading-tight
            mb-4 sm:mb-6
          "
              >
                Join the Space Where <br className="hidden lg:block" />
                Engineers Talk, Learn & Succeed
              </h2>

              {/* Description */}
              <p
                className="
            font-openSans text-[#EAE4E4]
            text-sm sm:text-base md:text-lg lg:text-[23px]
            leading-relaxed
            max-w-xl mx-auto lg:mx-0
            mb-6 sm:mb-10
          "
              >
                Our community brings together core engineers to share knowledge,
                projects, and opportunities.
              </p>

              {/* CTA Button */}
              <button
                className="
            bg-[#0E4FA3] hover:bg-[#0b3f82]
            font-manrope transition
            text-white font-extrabold
            text-base sm:text-lg md:text-xl lg:text-[24px]
            px-6 sm:px-8 py-3 sm:py-4
            rounded-full
          "
              >
                Join The Community
              </button>
            </div>

            {/* =============================
        RIGHT ILLUSTRATION SECTION
      ============================== */}
            <div className="flex-1 flex justify-center">
              <img
                src="/community10.svg"
                alt="Engineering Community Illustration"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[520px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
