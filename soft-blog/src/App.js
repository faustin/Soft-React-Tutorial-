//import logo from './logo.svg';
import './App.css';

function App() {
  const title="Welcome to the New  Blog";
  const likes=50;
  const person={
    name:'Faustin',age:'70',address:'Kigali'
  }
  const link="www.google.com";
  return (
    <div className="App">
   <div  className="content">
    <h1>{title}</h1> 
    <p>liked {likes} times</p>
    <p>{person.name}</p>
    <p>Array :{[1,2,4,5,7]}</p>
    <p>{Math.random(90)*10}</p>
   <a href={link}>Google  site</a>

     </div>
        
    </div>
  );
}

export default App;
