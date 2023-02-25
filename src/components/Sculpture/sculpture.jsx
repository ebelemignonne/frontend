import React from "react";
// import { Link } from "react-router-dom";
import StoreNavigation from "./store/storeNavigation";
// import { WhatsappShareButton } from "react-share";
import FooterSsulpture from "./store/footer";
import ServicesSculpture from "./corps/servicesSculpture";
import Products from "./corps/produits";
import AccueilleSculpture from "./corps/accueilleSculpture";


const Sculpture =()=>{
    // const shareUrl = "https://example.com";
    // const title = "Exemple de partage WhatsApp";

    return(
        <>
            <StoreNavigation />
            <AccueilleSculpture />
                {/* <WhatsappShareButton url={shareUrl} title={title}>
                    <button>Partager sur WhatsApp</button>
                </WhatsappShareButton> */}

            <ServicesSculpture />
            <Products />

            <FooterSsulpture />
        </>
    )
}




export default Sculpture
