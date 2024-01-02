import Home from "./Home/Home"
import AboutMe from "./AboutMe/AboutMe"
import Layout from "../components/Layout/Layout"
import MySkill from "./Skill/MySkill"
import Educations from "./Educations/Educations"


function App() {


  return (
    <>
      <Layout>
        <Home />
        <AboutMe />
        <MySkill />
        <Educations />
      </Layout>
    </>
  )
}

export default App
