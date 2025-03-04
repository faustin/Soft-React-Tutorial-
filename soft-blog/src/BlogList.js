import React from "react";

const BlogList = (props) => {
    const blogs=props.blogs;
    const titleblog=props.titleblog;
    console.log(props,props.blogs);
  return (
    <div className="blog_list">
        <h1>{titleblog}</h1>
   
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>Written by :{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
