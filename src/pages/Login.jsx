import React, { useState } from "react";
import axios from "axios";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const BASEURL = 'https://us-central1-godinho-veiculos.cloudfunctions.net';
        const data = {
            "account": {
                "email": email,
                "password": password,
            },
            "data": {
                "notificationtoken": null
            }
        };


        axios.post(BASEURL + '/v1/user/login', data).then(
            (response) => {
                alert("LOGIN SUCCESS");
                console.log(response);

            }
        ).catch(
            (error) => {
                alert("LOGIN failed");
                console.log(error);

            }

        );


    };



    return (
        <div className="p-3 my-5 d-flex flex-column w-50">

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else okok.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>




        </div>
    )

}
export default Login;
