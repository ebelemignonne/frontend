import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';









function FooterSsulpture() {
  return (
    <footer>
      <div className="footer bg-secondary bg-opacity-25">
        <div className="row">
          <div className="col-md-4">
            <h3>Nous contacter</h3>
            <p>Cote d'Azur<br />Ogooe-Maritim<br />Gabon</p>
            <p>Téléphone: +241 74 26 20 41<br /> +241 62 96 27 06 <br /> E-mail: elatzame@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h3>Nos services</h3>
            <ul>
              <li><Link to="/">Accesoir spirituel</Link></li>
              <li><Link to="/">Decoration meuble</Link></li>
              <li><Link to="/">Refectionnement</Link></li>
              <li><Link to="/">Consulting</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Suivez-nous</h3>
            <ul className="social-media">
              <li><Link to="/"><Icon icon="mdi:facebook" color="/4b2e39" width="24" height="24" /></Link></li>
              <li><Link to="/"><Icon icon="ant-design:twitter-circle-filled" color="/4b2e39" width="24" height="24" /></Link></li>
              <li><Link to="/"><Icon icon="entypo-social:linkedin-with-circle" color="/4b2e39" width="24" height="24" /></Link></li>
              <li><Link to="/"><Icon icon="ri:instagram-fill" color="/4b2e39" width="24" height="24" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2023 Elat Zame services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}




export default FooterSsulpture;



