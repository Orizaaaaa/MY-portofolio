import { profile } from "../image"


function App() {


  return (
    <>
      <nav id="home" className="navbar navbar-expand-lg bg-none ">
        <div className="container-fluid ">
          <span className="portofolio"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skill</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
              </li>

            </ul>
            <button className="btn btn-primary" > CONTACT ME</button>
          </div>
        </div>
      </nav>

      <section className="main" >
        <div className="row intro d-flex align-items-center row-cols-lg-2 row-cols-1">
          <div className="col">
            <h1>Introduce Myself</h1>
            <h2>Oriza Sativa</h2>
            <h3> <i>Front End Developer</i> </h3>
          </div>
          <div className="col justify-content-center">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
