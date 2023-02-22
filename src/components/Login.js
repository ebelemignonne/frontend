import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import "./Navbar.js"
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    // const Elat = () =>{
    //     <Link to="ElatZame"></Link>
    // }
 
    return (
        <section className="login hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="login1 hero-bod">
                <div className="login2 container">
                    <div className="login3 columns is-centered  d-flex ">
                        <f1 className="color-white">ELAT ZAME COMMUNAUTY </f1>
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email or Username</label>
                                    <div className="controls">
                                        <input type="text" className="form-control" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                        <p>Si vous n'avez pas un compte creer un ici</p>
                        <Link to="/Register">Creer un compte</Link>
                    </div>
                <div className='foot_loging '>
                    
                    <div class="d-grid gap-2">
                        <Link to="/Dashboard" class="btn btn-outline-light" type="button">Dashboard</Link>
                        <button class="btn btn-outline-light" type="button">Button</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
 
export default Login