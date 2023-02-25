import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import gina from "../images/gina.jpg";
import gina2 from "../images/gina2.jpg";
import elephan from "../images/elephan.jpg"



export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={gina} alt=".."/>
                    <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>

                </div>
                <div>
                    <img src={gina2} alt=".." />
                    <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>
                </div>
                <div>
                    <img src={elephan} alt=".." />
                    <p className="legend">janhuydoqwlfwqm;diqw u equwphd uhduqwhd uqwdhuqwh u8y9pjq  wiuf uwhiwu 88 8u r jfjqehf89eyr23p8rnjhfjf782rf73rfh uwiq8329yruhfjqhf89qewyf kjdsoidufmweyfucemri2tpq98c4y578r4ltjfcimyt7v3 43ijr83urcm4uqjr;cm;rp4mtup4h3vmi4tu8vphtk43t 4jtpq3i4ut8pjtci4,43utcy38tcj4 it4utcp,qto,qc4o,ticu,ti34tcco3t ijri3uto43k,qo4umtvcpo3t90</p>

                </div>
            </Carousel>
        </div>
    );
}