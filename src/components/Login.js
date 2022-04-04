import { useRef, useState } from 'react';
import './Connect.css'
import { users } from '../user_details';
import { app_data } from './app_data'

const Login = (props) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [feedback, setFeedback] = useState("");
    const [valid, setValid] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        setFeedback("");
        setValid("");
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log("password is:", password);
        console.log("user name is:", username);
        //check if user entered values.
        if (!password && !username) {
            setFeedback("Cannot accept empty fields");
            setValid("invalid");
            return;
        }
        if ((app_data && app_data[username]) && app_data[username].password === password) {
            console.log("Logged in");
            setValid("valid");
            return;
        }
        setValid("invalid");
        setFeedback("Wrong user name or password");
    }


    return (<div id="enter" className="grid">
        <div className="col">
            <div className="row justify-content-md-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
            </div>
            <div className="row mb icon">
                <p className="text-center fs-3">Login</p>
            </div>
            <form>
                <div className="row g-3 align-items-center">
                    <div className="col padding">
                        <label for="inputusername" className="col-form-label">User Name</label>
                    </div>
                    <div className="col-auto">
                        <input type="username" className={"form-control is-" + valid} id="inputusername" ref={usernameRef} />
                        <small className={valid + "-feedback m-0"}></small>
                    </div>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col padding">
                        <label for="inputPassword3" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input ref={passwordRef} type="password" className={"form-control is-" + valid} id="inputPassword3" />
                        <small className={valid + "-feedback m-0"}>{feedback}</small>
                    </div>
                </div>
                <div className="row g-3 align-items-center padding">
                    <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
                    <small className={valid + "-feedback m-0"}>{feedback}</small>
                </div>
                <div className="row g-3 align-items-center"><p>&nbsp;&nbsp;Not registered?&nbsp;
                    <a href="/register" className="link-primary">Click here</a> to register</p></div>
            </form>
        </div>
        </div>
  );
};
export default Login;
