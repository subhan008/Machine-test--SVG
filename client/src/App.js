import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Home from "./Components/home";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route element={ <PrivateRoute /> } > 
         <Route path="/" element={<Home />}/>
      </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
