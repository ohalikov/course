import React, {useState} from "react";
import PostItem from "./components/PostItem";

import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description 1'},
    {id: 2, title: 'Python', body: 'Description 2 '},
    {id: 3, title: 'Django', body: 'Descriptio 3 n'},
    {id: 4, title: 'GIT', body: 'Description 4 '},
    {id: 5, title: 'Linux', body: 'Description 5'}
  ])

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Список Постов</h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  );
}

export default App;
