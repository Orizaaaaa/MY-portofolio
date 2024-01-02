import Home from "./Home/Home"
import AboutMe from "./AboutMe/AboutMe"
import Layout from "../components/Layout/Layout"
import MySkill from "./Skill/MySkill"
import Educations from "./Educations/Educations"
import Experiences from "./Experiences/Experiences"



function App() {


  return (
    <>
      <Layout>
        <Home />
        <AboutMe />
        <MySkill />
        <Educations />
        <Experiences />
      </Layout>
    </>
  )
}

export default App
