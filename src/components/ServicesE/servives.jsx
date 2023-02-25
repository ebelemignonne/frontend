import React from "react";
import Navbar from "./navbar";
import AccueilleServices from "./corps/accueilleServices";
import FooterServices from "./footer";
import CarouselComponent from "./corps/troisiemeCarousel";








const Services =()=> {

    return(

            <div className="w-100 bg-slate-900">
                <Navbar />


                <AccueilleServices />

                <CarouselComponent />
                <FooterServices />


    </div>

    )

}


export default Services;



