import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import baselineDiscord from '@iconify/icons-ic/baseline-discord';




const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
      <div className="container px-1">
        <Link className="navbar-brand text-decoration-underline fw-bolder ms-lg-0 " to="#">Elat Zame Services</Link>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bg-info bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" to="/astro-ecommerce/">
                Tous nos services
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesExample">
                <li><Link className="dropdown-item" to="/astro-ecommerce/landing/">Page de destination</Link></li>
                <li><Link className="dropdown-item" to="/astro-ecommerce/product/">Fiche produit</Link></li>
                <li><Link className="dropdown-item" to="/astro-ecommerce/shopping-cart/">Panier</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" to="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce">              
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" to="https://github.com/creativetimofficial/astro-ecommerce">
                <Icon icon="teenyicons:facebook-solid" color="#4b2e39" width="24" height="24" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" to="https://discord.com/invite/TGZqBvZB" rel="nofollow" target="_blank">
                <Icon icon={baselineDiscord} color="#4b2e39" width="24" height="24" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
