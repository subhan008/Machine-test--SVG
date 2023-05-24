import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Home from "./Components/home";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
