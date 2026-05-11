
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from "./components/user"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/users/:username" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
