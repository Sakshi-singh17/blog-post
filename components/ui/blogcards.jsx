import * as React from "react";
import Link from 'next/link';

const BlogCard = ({ title, author, image, description, slug, date }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl/50 shadow-black/50 flex flex-col">
        <img className="lg:h-48 md:h-36 w-full h-full object-cover object-center" src={`/${image}`} alt="blog" />
        <div className="p-6 flex flex-col flex-1">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{author}</h2>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{date}</h2>
          <h1 className="title-font text-lg font-medium text-gray-800 mb-3 dark:text-white">{title}</h1>
          <p className="leading-relaxed mb-3 text-gray-500 dark:text-gray-500">{description}</p>
          <div className="mt-auto flex items-center flex-wrap">
            <Link href={`/blogpost/${slug}`} className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
