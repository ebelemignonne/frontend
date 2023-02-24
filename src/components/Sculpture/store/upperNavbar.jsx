import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


export default function UpperNavbar() {
  return (
      <div className="bg-secondary w-100">
      <div className="w-100 bg-primary-900">
        <div className="container align-items-center d-flex">
          <ul className="navbar-nav">
            <li className="nav-item dropdown pe-2">
              <Link to="/avascript:;" className="nav-link dropdown-toggle text-white p-0" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                CAD
              </Link>
              <ul className="dropdown-menu position-absolute px-2 py-3" aria-labelledby="dropdownCurrency" data-bs-popper="static">
                <li className="mb-2">
                  <Link className="dropdown-item border-radius-md" to="/javascript:;">
                    <p className="mb-0">EUR</p>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="dropdown-item border-radius-md" to="/javascript:;">
                    <p className="mb-0">USD</p>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item border-radius-md" to="/javascript:;">
                    <p className="mb-0">RON</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="ms-md-auto p-0 d-flex align-items-center">
            <ul className="navbar-nav d-none d-lg-flex flex-row">
              <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
                <Link to="#" className="nav-link text-white p-0 text-sm">
                  Connexion
                </Link>
              </li>
              <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
                <Link to="#" className="nav-link text-white p-0 text-sm">
                  Creer un compte
                </Link>
              </li>
              <li className="nav-item px-3 py-3 border-radius-sm d-flex align-items-center">
                <Link to="/" className=" btn btn-outline nav-link text-white p-1">
                  <Icon icon="carbon:drill-back" color="#ffffff" width="24" height="24" />
                    Revenir a l'accueil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>   
    </div>
  );
};
