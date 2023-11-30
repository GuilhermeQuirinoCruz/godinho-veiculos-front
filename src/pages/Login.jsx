import React, { useState } from "react";
import { Form } from "reactstrap";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        const data = {
            "account": {
                "email": email,
                "password": password,
            },
            "data": {
                "notificationtoken": null
            }
        };

        axios
            .post('/v1/user/login', data)
            .then((response) => {
                console.log(response);

                localStorage.setItem('token', response.data.token);

                axios
                    .get("/v1/user/corporations", {
                        headers: {
                            token: localStorage.getItem("token"),
                        }
                    })
                    .then((response) => {
                        console.log(response);

                        localStorage.setItem('company-token', response.data[0].user.token);

                        window.location.replace("http://localhost:3000/home");
                    })
                    .catch((error) => {
                        alert("LOGIN failed");
                        console.log(error);
                    });
            })
            .catch((error) => {
                alert("LOGIN failed");
                console.log(error);
            });
    };

    return (
        <div className="p-3 my-5 d-flex flex-column w-50">
            <Form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else okok.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
                </div>
            </Form>
        </div>
    )
}

export default Login;
