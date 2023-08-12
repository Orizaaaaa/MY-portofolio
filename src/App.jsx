

function App() {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-none">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
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
            <button className="btn btn-primary" >Contact Me</button>
          </div>
        </div>
      </nav>

      <section className="main" >
        <div className="row">
          <div className="col">
            <h1>Introduce Myself</h1>
          </div>

          <div className="col">

          </div>
        </div>
      </section>
    </>
  )
}

export default App
