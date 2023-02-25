import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
// import React, { useState, useEffect } from "react";
// import { InputBase, makeStyles } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";




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
            {/* <SearchBar /> */}
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
              <Link  className="btn btn-light  nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" to="/" rel="nofollow">
                <Icon icon="carbon:drill-back" color="#4b2e39" width="24" height="24" /> 
                Revenir a l'accueil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};





// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     alignItems: "center",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.common.white,
//     "&:hover": {
//       backgroundColor: theme.palette.action.hover,
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   },
//   input: {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));

// function SearchBar({ onSearch }) {
//   const classes = useStyles();
//   const [searchText, setSearchText] = useState("");
  
//   useEffect(() => {
//     // Effectue une recherche à chaque fois que la valeur de searchText est modifiée
//     onSearch(searchText);
//   }, [searchText]);

//   const handleSearch = (event) => {
//     setSearchText(event.target.value);
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes.searchIcon}>
//         <SearchIcon />
//       </div>
//       <InputBase
//         placeholder="Recherche..."
//         classes={{
//           input: classes.input,
//         }}
//         value={searchText}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// }







export default Navbar;
