"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const BlogsContext = createContext();

export function BlogsProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const res = await fetch('/api/blogs');
        if (!res.ok) throw new Error('Failed to fetch blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogsContext.Provider>
  );
}

export function useBlogs() {
  return useContext(BlogsContext);
} 