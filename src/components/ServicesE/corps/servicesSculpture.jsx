import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faMobileAlt, faChartLine } from "@fortawesome/free-solid-svg-icons";

function ServicesSculpture() {
  const services = [
    {
      icon: faCode,
      title: "Art spirituel",
      description: "Création de sites web sur mesure en utilisant les dernières technologies et les meilleures pratiques de développement.",
    },
    {
      icon: faPalette,
      title: "Meuble decoratif",
      description: "Conception de logos, de mises en page, de bannières et de visuels pour donner une identité visuelle unique à votre entreprise.",
    },
    {
      icon: faMobileAlt,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives ou hybrides pour les plateformes iOS et Android.",
    },
    {
      icon: faChartLine,
      title: "Marketing Digital",
      description: "Stratégies de marketing numérique pour augmenter la visibilité de votre entreprise et atteindre votre public cible.",
    },
  ];

  return (
    <section className="section bg-info bg-opacity-25 services-section">
      <div className="container">
        <h2>Nos services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-3">
              <div className="service">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSculpture;
