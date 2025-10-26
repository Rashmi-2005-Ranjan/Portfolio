import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profile2 from "../../assets/profile2.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] lg:px-[15vw] font-sans py-10 md:py-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Rashmi Ranjan
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-2">
            I am a{" "}
            <span className="text-[#8245ec] font-bold">
              <Typewriter
                words={[
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Android Developer",
                  "Full Stack Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base md:text-lg text-gray-400 mt-4 leading-relaxed">
            Passionate developer focused on building fast, responsive, and
            dynamic web and mobile apps. Continuously learning and exploring the
            latest in tech.
          </p>

          <a
            href="https://drive.google.com/file/d/1MKNpideWguXEoXoiamFwaovYTOHbjysl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-white py-3 px-6 rounded-full mt-6 text-base font-bold transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 5px #8245ec, 0 0 15px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="h-44 w-44 sm:h-64 sm:w-64 md:h-[22rem] md:w-[22rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile2}
              alt="profile"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
