 import { Link } from "react-router-dom";
 import sculpture from './images/Sculpture.png'



const Body =()=>{
    return(
        <>
            <div className="section bg-light d-flex justify-content-evenly">
                <div className="card shadow h-25 w-25 align-items-center pt-4">
                    <img src={sculpture} class="w-50 w-md-30 rounded-3 shadow-xs border"  alt="elat zame sculpture" />
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title">ELAT ZAME Sculpture</h5>
                        <p class="card-text">Pour tous vos besoins dans le domaine artistique .</p>
                        <Link to="/sculpture" class="btn btn-primary">Visiter</Link>
                    </div>
                </div>
                <div className="card shadow h-25 w-25 align-items-center pt-4">
                    <img src={sculpture} class="w-50 w-md-30 rounded-3 shadow-xs border" alt="elat zame sculpture" />
                    <div class="card-body d-flex flex-column text-center">
                        <h5 class="card-title">ELAT ZAME Services</h5>
                        <p class="card-text">Pour tous vos besoins dans le domaine spirituel.</p>
                        <Link to="/Services" class="btn btn-primary ">Visiter</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body;