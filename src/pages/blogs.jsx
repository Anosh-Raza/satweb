import React from "react";
import { blogPosts } from "../data";

const BlogComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">By {post.author} | {post.date}</p>
              <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
              <button className="mt-4 bg-logo-purple text-white px-4 py-2 rounded hover:bg-logo-dark-blue">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
