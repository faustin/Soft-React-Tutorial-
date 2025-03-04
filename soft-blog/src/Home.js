import { useState } from "react";
import BlogList from "./BlogList";

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
  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!==id )
    setBlogs(newBlogs);
        
  }

  return (
    <div className="home">
     <BlogList blogs={blogs} titleblog="all blogs " handleDelete={handleDelete}   />
    </div>
  );
};

export default Home;
