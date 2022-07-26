import logo from './logo.svg';
import './App.css';

function App() {
  return <ShowGreetings/>
}


function ShowGreetings(){
  const greeting = 'Hello React!';

  return <h1>{greeting}</h1>;
}

export default App;
