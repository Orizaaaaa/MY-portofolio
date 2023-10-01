import { aboutImage, profile } from "../../image"
import AboutMe from "../components/Fragment/AboutMe"
import Home from "../components/Fragment/Home"
import Navbar from "../components/Fragment/Navbar"


function App() {


  return (
    <>

      <Navbar />

      <main className="main" >
        <Home />
        <AboutMe />
      </main>
    </>
  )
}

export default App
