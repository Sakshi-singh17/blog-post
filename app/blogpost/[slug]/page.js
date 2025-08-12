// app/blogpost/[slug]/page.js
"use client";
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';

import { useBlogs } from '../../../components/BlogsContext';

export default function BlogPostPage({ params }) {
  // All hooks must come first
  const resolvedParams = React.use(params);
  const { blogs, loading, error } = useBlogs();
  const [htmlContent, setHtmlContent] = useState('');

  // Finding the blog early
  const blog = blogs.find(blog => blog.slug === resolvedParams.slug);

  // Creating processor outside of render to avoid recreation
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'one-dark-pro',
      onVisitLine(node) {
        if (node.children.length === 0) {
          node.children = [{ type: 'text', value: ' ' }];
        }
      },
    })
    .use(rehypeFormat)
    .use(rehypeStringify);

  // Processing content when blog changes
  useEffect(() => {
    if (blog?.content) {
      async function processContent() {
        try {
          console.log('Processing blog content:', blog.content.substring(0, 100) + '...');
          const file = await processor.process(blog.content);
          const processedContent = file.toString();
          console.log('Processed content:', processedContent.substring(0, 100) + '...');
          setHtmlContent(processedContent);
        } catch (error) {
          console.error('Error processing content:', error);
        }
      }
      processContent();
    } else {
      console.log('No blog content found:', blog);
    }
  }, [blog?.content, processor]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>;
  if (!blog) {
    notFound();
  }

  return (
      <main className="py-10">
      <div className="max-w-6xl mx-auto p-15 bg-white dark:bg-gray-900 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{blog.title}</h1>
        <blockquote className="mb-6 text-lg text-gray-700 dark:text-gray-300 border-l-4 border-purple-400 pl-4">
          &quot;{blog.description}&quot;
        </blockquote>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="mr-2 italic">By {blog.author}</span>
          <span className="mx-2">•</span>
          <span>{blog.date}</span>
        </div>
        {blog.image && (
          <div className="mb-6">
            <img 
              src={`/${blog.image}`} 
              alt={blog.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </main>
  );
}