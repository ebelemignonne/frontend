import { Link } from "react-router-dom";

export default function StoreNavigationDoubleColumn() {
  return (
    <>
    <div className="row mt-5">
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <h6 className="w-100 pb-3 border-bottom">Clothing</h6>
        <div className="d-flex pt-2">
          <ul className="nav flex-column ms-n3">
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                Tops
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                Dresses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                Pants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                Denim
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                Sweaters
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" to="/" target="_blank">
                T-Shirts
              </Link>
            </li>
          </ul>
          <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
            <li className="nav-item">
              <Link className="nav-link text-body" href="/" target="_blank">
                Jackets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" href="/" target="_blank">
                Activewear
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" href="/" target="_blank">
                Shorts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" href="/" target="_blank">
                Swimwear
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-body" href="/" target="_blank">
                Browse All
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <h6 className="w-100 pb-3 border-bottom">Accessories</h6>
        <ul className="nav flex-column ms-n3 pt-2">
          <li className="nav-item">
            <Link className="nav-link text-body" href="/" target="_blank">
              Shoes
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body" href="/" target="_blank">
              Jewelry
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Handbags
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Socks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Hats
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Browse All
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-3">
      <h6 className="w-100 pb-3 border-bottom ">Categories</h6>
        <ul className="nav flex-column ms-n3 pt-2">
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              New Arrivals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Sale
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Basic Tee
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-body" to="/" target="_blank">
              Artwork Tees
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};
