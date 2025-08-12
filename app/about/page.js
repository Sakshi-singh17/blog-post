"use client"
import React from 'react';
import { WavyBackground } from "../../components/ui/wavy-background";

const About = () => {
  return (
    <main className="min-h-screen pb-10 text-foreground py-0 px-25 justify-center items-center">
      {/* Hero Section */}
      <WavyBackground containerClassName="min-h-[40vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-gray-300">
          <img
            src="/logo.jpg"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-primary shadow-xl mb-6 bg-white justify-center items-center text-center"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg text-center">Hi, I'm Sakshi</h1>
          <p className="text-lg md:text-2xl font-medium mb-4 drop-shadow text-center">From Java and Spring Boot to Next.js and Firebase, I build, break, and blog it all.</p>
          <blockquote className="italic text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6 border-l-4 border-primary pl-4 text-center md:text-left">
            "Turning ideas into interactive experiences, one line of code at a time."
          </blockquote>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/sakshi-amit-singh/", "_blank")}
            className="p-[3px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Let's Connect
            </div>
          </button>
        </div>
      </WavyBackground>

      <div className="pt-5 pb-15 max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative z-10 dark:bg-gradient-to-b dark:from-[#181A2A] dark:via-[#1a1833] dark:to-[#232946] justify-center items-center rounded-xl overflow-hidden">
        {/* Profile Section (kept for avatar and name on small screens) */}
        <div className="flex flex-col items-center text-center mb-10 md:hidden pt-8">
          <img
            src="https://ui-avatars.com/api/?name=Sakshi&background=6D28D9&color=fff&size=128"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-foreground mb-2">Sakshi</h1>
          <p className="text-lg text-muted-foreground"> From Java and Spring Boot to Next.js and Firebase, I build, break, and blog it all.</p>
        </div>

        {/* Bio Section */}
        <section className="max-w-5xl mx-auto mb-8 rounded-xl shadow p-6 pt-5 border-2 border-[#645CBB] shadow-xl/50 shadow-black/50">
          <h2 className="text-2xl font-semibold text-primary mb-2 justify-center items-center">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hey! I’m Sakshi, a Computer Engineering graduate with a strong focus on backend development, full-stack web apps, and AI-integrated solutions. I enjoy working with Java, Spring Boot, Firebase, and Next.js, and I like building things that solve real problems. This blog is where I document my coding journey, debug sessions, architecture thoughts, and project experiments, no tutorials, just honest tech insights and what I learned while building stuff.
          </p>

        </section>

        {/* Experience/Timeline Section */}
        <section className="mb-8 rounded-xl shadow p-6 mx-auto max-w-5xl border-2 border-[#645CBB] shadow-xl/50 shadow-black/50">
          <h2 className="text-2xl font-semibold text-primary mb-2">My Journey</h2>
          <ol className="relative border-l border-primary/30 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-4 ring-background">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
              </span>
              <h3 className="font-semibold text-foreground">Began with Java</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">2021</time>
              <p className="text-base font-normal text-muted-foreground">Wrote my first Java program during the early days of engineering. Got hooked on solving logic problems.</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-4 ring-background">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
              </span>
              <h3 className="font-semibold text-foreground">Built Smart Farm Assist</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">2023</time>
              <p className="text-base font-normal text-muted-foreground">Used IoT sensors, ML models, and Firebase to build a precision agriculture tool. First project where hardware met backend.</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-4 ring-background">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
              </span>
              <h3 className="font-semibold text-foreground">Wrote a Log Analyzer</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">2024</time>
              <p className="text-base font-normal text-muted-foreground">Created a JavaFX tool to parse and analyze logs. This project taught me how much I enjoy building developer tools.</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-4 ring-background">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
              </span>
              <h3 className="font-semibold text-foreground">Graduated and Kept Building</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">2025</time>
              <p className="text-base font-normal text-muted-foreground">Graduated with a B.E. in Computer Engineering (CGPA 8.36). Currently improving my stack, documenting my journey, and building real-world tools.</p>
            </li>
          </ol>

        </section>

        {/* Skills Section */}
        <section className="mb-8 rounded-xl shadow p-6 mx-auto max-w-5xl border-2 border-[#645CBB] shadow-xl/50 shadow-black/50">
          <h2 className="text-2xl font-semibold text-primary mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-3 mt-2">
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Java</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Spring Boot</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">JavaFX</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Next.js</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Firebase</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">SQL / MySQL</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Python</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Postman</li>
            <li className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Git & GitHub</li>
          </ul>

        </section>

        {/* Blog Purpose Section */}
        <section className="max-w-5xl mx-auto rounded-xl shadow p-6 pt-5 border-2 border-[#645CBB] shadow-xl/50 shadow-black/50">
          <h2 className="text-2xl font-semibold text-primary mb-2">About This Blog</h2>
          <p className="text-muted-foreground leading-relaxed">
            This blog isn’t about tutorials, it’s about experiences. I write about the bugs I debug, the tools I build, the frameworks I experiment with, and the concepts I fail at first and then finally understand. It’s a raw log of my development journey — full of small wins, lessons, and code that sometimes breaks. If you like learning from real-world dev stories, welcome aboard.
          </p>

        </section>
      </div>
    </main>
  );
};

export default About;