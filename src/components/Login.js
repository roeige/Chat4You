import { useRef, useState } from 'react';
import './Connect.css'
import { users } from '../user_details';
import { app_data } from './app_data'
import { Form, FloatingLabel, FormControl } from 'react-bootstrap';

const Login = (props) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [validation, setValid] = useState([{ valid: "", validFlag: false, inValidflag: false, feedback: "" }]);
    const submitHandler = (event) => {
        event.preventDefault();
        setValid("");
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log("password is:", password);
        console.log("user name is:", username);
        //check if user entered values.
        if (!password && !username) {
            setValid({ valid: "invalid", validFlag: false, inValidflag: true, feedback: "Cannot accept empty fields" });
            return;
        }
        if ((app_data && app_data[username]) && app_data[username].password === password) {
            console.log("Logged in");
            setValid({ valid: "valid", validFlag: true, inValidflag: false });
            return;
        }
        setValid({ valid: "invalid", validFlag: false, inValidflag: true, feedback: "Wrong user name or password" });
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
            <FloatingLabel className="mb-3" controlId="username" label="Username">
                <Form.Control
                    type="username"
                    placeholder="username"
                    ref={usernameRef}
                    isValid={validation.validFlag}
                    isInvalid={validation.inValidflag}
                />
                <FormControl.Feedback type={validation.valid}>
                    {validation.feedback}
                </FormControl.Feedback>
            </FloatingLabel>

            <FloatingLabel
                className="mb-3"
                controlId="passwordValidation"
                label="Confirm password"
            >
                <Form.Control
                    type="password"
                    placeholder="passwordVal"
                    ref={passwordRef}
                    isValid={validation.validFlag}
                    isInvalid={validation.inValidflag}
                />
                <FormControl.Feedback type={validation.valid}>
                    {validation.feedback}
                </FormControl.Feedback>
            </FloatingLabel>
            <div className="row g-3 align-items-center padding">
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
            </div>
            <div className="row g-3 align-items-center"><p>&nbsp;&nbsp;Not registered?&nbsp;
                <a href="/register" className="link-primary">Click here</a> to register</p></div>
        </div>
    </div>

    );
};
export default Login;
