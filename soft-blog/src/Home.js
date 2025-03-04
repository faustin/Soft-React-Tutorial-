import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Blogs  website",
      body: "helo  helloo  XXXX",
      author: "faustin",
      id: 1,
    },
    {
      title: "Blogs  website",
      body: "helo  helloo  XXXX",
      author: "Mariam ",
      id: 3,
    },
    {
      title: "Blogs  website",
      body: "helo  helloo  XXXX",
      author: "NYIANWUMUNTU",
      id: 4,
    },
    {
      title: "Blogs  website",
      body: "helo  helloo  XXXX",
      author: "faustin2",
      id: 5,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>Written by :{blog.author}</p>
       </div>
      ))}
    </div>
  );
};

export default Home;
