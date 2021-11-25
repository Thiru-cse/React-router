import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
    <a href="/">Home</a>
    <br />
    <Link to="/Form">Form</Link>
    <br />
    <NavLink to="/Post" activeStyle={{ color: "red" }}>Post</NavLink>
    <br />
    <NavLink to="/About" activeClassName="about">About</NavLink>
    <br />
      <Routes />
    </div>



      
    </BrowserRouter>
  );
}

export default App;
