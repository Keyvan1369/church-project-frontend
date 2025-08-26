import React from "react";
import { Link } from "react-router";

export const BlogForm = () => {
  //  later join backend
  const blogs = [
    {
      id: 1,
      title: "Finding Faith in Daily Life",
      excerpt:
        "Discover how faith can guide everyday decisions and bring peace.",
      image: "https://source.unsplash.com/600x400/?church,cross",
    },
    {
      id: 2,
      title: "The Power of Community",
      excerpt: "Why being part of a church family can transform your journey.",
      image: "https://source.unsplash.com/600x400/?community,people",
    },
    {
      id: 3,
      title: "Living with Purpose",
      excerpt: "Practical ways to align your goals with God’s plan.",
      image: "https://source.unsplash.com/600x400/?faith,light",
    },
  ];

  return (
    <div className="relative h-[80vh] bg-cover bg-center text-gray-300 min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Our Blog</h1>
          <p className="text-gray-400">
            Insights, stories, and reflections from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-400 mb-3">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-orange-400 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
