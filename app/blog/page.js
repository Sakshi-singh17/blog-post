"use client";
import React, { useState } from 'react';
import BlogCard from '../../components/ui/blogcards';
import { useBlogs } from '../../components/BlogsContext';

const Page = () => {
  const { blogs, loading, error } = useBlogs();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const blogsToShow = blogs;
  const [search, setSearch] = useState("");
  const filteredBlogs = blogsToShow.filter(blog => {
    const q = search.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.description.toLowerCase().includes(q) ||
      (blog.author && blog.author.toLowerCase().includes(q))
    );
  });
  return (
    <div className="relative min-h-screen w-full transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black dark:text-white mb-2 drop-shadow-lg">Latest Blogs</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">Explore insightful articles, coding journeys, and tech tips. Dive into the latest posts from Sakshi's world of software development.</p>
        {/* Search Bar */}
        <div className="flex w-full max-w-xl mb-10 gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search blogs, topics, or authors..."
            className="flex-1 rounded-l-lg bg-gray-100 dark:bg-[#232946] border border-gray-300 dark:border-gray-700 px-4 py-2 text-base text-gray-700 dark:text-white focus:ring-2 focus:ring-purple-400 outline-none transition-colors duration-200"
          />
          <button
            className="rounded-r-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 transition-colors duration-200"
            onClick={() => setSearch("")}
          >Clear</button>
        </div>
        <div className="w-full flex flex-wrap -m-4 justify-center">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 w-full py-12 text-lg">No blogs found.</p>
          )}
        </div>
      </div>
      {/* Subtle glow at the bottom for dark mode */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-32 bg-[#7C3AED]/15 blur-3xl rounded-full dark:block hidden" />
    </div>
  );
};

export default Page;
