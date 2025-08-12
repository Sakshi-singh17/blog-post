// components/ui/get-blogs.jsx
import BlogCard from './blogcards';

const GetBlogs = ({ blogs }) => (
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} {...blog} />
      ))}
    </div>
  </div>
);

export default GetBlogs;