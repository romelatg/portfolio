export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Alexis Tobias
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active seperate"
                  aria-current="page"
                  href="#"
                >
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active seperate" href="#">
                  features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
