 
import './App.css';
import {Outlet} from "react-router"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Users from "./components/Users"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
    <Outlet/>
    </>
  );
}

export default App;
