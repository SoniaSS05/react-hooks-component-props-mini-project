import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import index from "../index"


console.log(blogData);

function App() {
  
  return (
    <div>
      <Header name = {blogData.name} />
      <About 
        about = {blogData.about}
        image = {blogData.image}
      />
       <ArticleList posts = {blogData.posts} />
    </div>
   
  );
}

export default App;
