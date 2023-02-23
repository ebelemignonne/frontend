import React from "react";
import sculpture from "./images/Sculpture.png"
import dev from "./images/Dev.png"
import { Icon } from '@iconify/react';
import keyReturnThin from '@iconify/icons-ph/key-return-thin';
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
return (
	<div id='gfg' className='hero has-background-grey-light is-fullheight is-fullwidth'>
        <div className="head_home d-flex justify-content-evenly align-items-center pl-5">
            <h2 className=" ms-5">Elat Zame communauty vous souhaite bienvenue</h2>
            <Link className="" to="/"><Icon icon={keyReturnThin} color="#414648" width="100" height="100" /></Link>
        </div>
        <div className="">
            <Link to="/Sculpture" class='im' style={{ maxWidth: '20rem' }}>
                <img src={sculpture} alt="logo sculpture"
                className='w-60' />
            </Link>
            <Link to="service" class='im' style={{ maxWidth: '20rem' }}>
                <img src={dev} alt="logo sculpture"
                className='w-60' />
            </Link>
        </div>
            <div className='foot_loging '>  
                <div class="d-grid gap-2">
                    <Link to="/Dashboard" class="btn btn-outline-primary" type="button">Dashboard</Link>
                    <Link to="/Blog" class="btn btn-outline-primary" type="button">Blog Elat</Link>
                </div>
            </div>
	</div>
);
}
