"use client";
import HeroSection from "../components/HeroSection";
import GetBlogs from "../components/ui/get-blogs";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { useBlogs } from "../components/BlogsContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { blogs, loading, error } = useBlogs();
  const router = useRouter();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const blogsToShow = blogs.slice(0, 3);

  const words = [
    {
      text: "Hot",
      className: "drop-shadow-2xl shadow-black/20 dark:shadow-white/20",
    },
    {
      text: "Off",
      className: "drop-shadow-2xl shadow-black/20 dark:shadow-white/20",
    },
    {
      text: "The",
      className: "drop-shadow-2xl shadow-black/20 dark:shadow-white/20",
    },
    {
      text: "Keyboard",
      className: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-2xl shadow-black/20 dark:shadow-white/20",
    },
  ]



  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <div className="relative bg-[#B7B1F2] dark:bg-gradient-to-b dark:from-[#181A2A] dark:via-[#1a1833] dark:to-[#232946]">
        <div className="w-full flex flex-col items-center justify-center mb-4 mt-16 text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          <TypewriterEffect words={words}
          loop={true}
          loopDelay={1000}
          cursorClassName="bg-black dark:bg-white"
          cursorBlinkSpeed={1000}
          cursorBlinkInterval={1000}
          cursorBlinkStyle="block"
          />
        </div>
        <div id="top-blogs" className="w-full flex flex-col items-center justify-center mt-2">
          <GetBlogs blogs={blogsToShow} />
        </div>
        {/* Subtle glow at the bottom for dark mode */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-32 bg-[#7C3AED]/15 blur-3xl rounded-full dark:block hidden" />

        <div className="flex justify-center mb-15">
          <button onClick={() => router.push("/blog")} className="border-2 border-violet-500 px-12 py-4 rounded-sm bg-[#725CAD] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-transparent hover:border-2 hover:border-[#725CAD] hover:text-[#725CAD] transition-colors duration-200 shadow-lg shadow-black/20">
            View More
          </button>
        </div>
      </div>
    </main>
  );
}
