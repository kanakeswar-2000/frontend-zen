import './App.css'
import Button from "./components/Button"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
function App() {
   return (
    <>
       <Navbar />
       <Button color="primary"/>
       <Button color="secondary"/>
       <Button color="outline"/>
       <Profile/>
       <Footer/>
    </>
  )
}

export default App
