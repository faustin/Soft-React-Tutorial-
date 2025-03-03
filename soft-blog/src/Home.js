import React from "react";

const Home = (e) => {
  const handleClick = () => {
    console.log("Hello  bolog",e);
    alert("hello  blog",e);
  };
  const handleClickAgain = (name) => {
    console.log("hello  ,my  friend " + name);
    alert("hello  , are you my  friend " + name);
  };
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("faustin");
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
