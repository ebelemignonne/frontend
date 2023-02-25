import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import spirituelle from "../../ServicesE/images/spirituelle.jpg"
import Sculpture from '../../ServicesE/images/Sculpture.png';

const CarouselPage = () => {
return ( 
    <Carousel className='container ' >
        <div className='container d-flex flex-column align-items-center justify-content-center  ' >
            <img className='' src={spirituelle} alt='presentation' />
            <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>
        </div>
        <div>
            <img src={Sculpture} alt='presentation' />
            <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>
        </div>
        <div>
            <img src="https://placehold.co/300x300" alt='presentation' />
            <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>
        </div>
    </Carousel>
);
};

export default CarouselPage;