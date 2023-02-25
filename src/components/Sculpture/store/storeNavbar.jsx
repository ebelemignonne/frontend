import { Link } from "react-router-dom";


export default function StoreNavbar() {
  return (
    <>
      <div className="container shadow">
        <nav aria-label="breadcrumb">
          <div className="d-flex align-items-center me-md-12">
            <i className="fas fa-wind text-lg text-primary"></i>
          </div>
        </nav>
        <ul className="navbar-nav d-none d-lg-flex ps-md-8">
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <Link to="#" className="nav-link p-0">
              Spirituel
            </Link>
          </li>
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <Link to="#" className="nav-link p-0">
              Decoration
            </Link>
          </li>
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <Link to="#" className="nav-link p-0">
              Art modern
            </Link>
          </li>
          <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
            <Link to="#" className="nav-link p-0">
            Magasins
            </Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <ul className="navbar-nav ms-md-auto  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <Link to="/" className="nav-link p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                  <i className="sidenav-toggler-line bg-white"></i>
                </div>
              </Link>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <Link to="/" className="nav-link p-0">
                <h6 className="mb-0 text-sm">Rechercher</h6>
              </Link>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <Link to="/" className="nav-link p-0">
                <h6 className="mb-0 text-sm">Besoin d'aide</h6>
              </Link>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <Link to="/" className="nav-link p-0">
                <i className="fas fa-cart-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
