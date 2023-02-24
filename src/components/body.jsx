 import { Link } from "react-router-dom";
 import sculpture from './images/Sculpture.png'



const Body =()=>{
    return(
        <>
            <div className="section d-flex justify-content-between">
                <div className="card ">
                    <img src={sculpture} class="card-img-top" height='20'  alt="elat zame sculpture" />
                    <div class="card-body">
                        <h5 class="card-title">ELAT ZAME Sculpture</h5>
                        <p class="card-text">Pour tous vos besoins dans le domaine artistique .</p>
                        <Link to="/Sculpture" class="btn btn-primary">Visiter</Link>
                    </div>
                </div>
                <div className="card ">
                    <img src={sculpture} class="card-img-top" alt="elat zame sculpture" />
                    <div class="card-body">
                        <h5 class="card-title">ELAT ZAME Sculpture</h5>
                        <p class="card-text">Pour .</p>
                        <Link to="#" class="btn btn-primary">Visiter</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body;