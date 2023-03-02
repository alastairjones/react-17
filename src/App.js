import './App.css';
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'

//https://www.youtube.com/watch?v=unRB8FNCekM

function App() {
  let user=[
    {name:'bob', id:1},
    {name:'peter', id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4}
  ]
  return (
    <div className="App">
      <Router>
      <h1>React router</h1>
      {
        user.map((item)=>
        <div><Link key={item.id} to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>
        )
      }
      
      </Router>
      </div>
  );
}

export default App;
