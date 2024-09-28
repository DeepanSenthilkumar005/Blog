import React from 'react';
import 'bootstrap'

const Blog = ({ blogs }) => {
  return (
    <div className="container">
      {blogs.map((blog) => (
        <div key={blog.id} className="card mb-3">
          <h1>hdagfd</h1>
        </div>
      ))}
      
    </div>
  );
};

export default Blog;
