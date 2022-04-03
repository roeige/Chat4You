import { useRef } from 'react';
import './Connect.css'
import { users } from '../user_details';
import { app_data } from './message_components/chat_utils';

const Login = (props) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(app_data && app_data[username] && app_data[username].password===password){
            console.log("Logged in");
        }
        else console.log("Invalid username or password")
    }

    return (<div class="grid" className='grid'>
        <div class="col">
            <div class="row justify-content-md-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          </svg>
            </div>
            <div class="row mb icon">
                <p class="text-center fs-3">Login</p>
            </div>
            <form>
                <div class="row g-3 align-items-center">
                <div class= "col padding">
                    <label for="inputusername" class="col-form-label">User Name</label>
                    </div>
                    <div class="col-auto">
                        <input type="username" class=" form-control" id="inputusername" ref={usernameRef} />
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                <div class= "col padding">
                    <label for="inputPassword3" class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                        <input ref={passwordRef} type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row g-3 align-items-center padding"><button type="submit" class="btn btn-primary" onClick={submitHandler}>Login</button></div>
                <div class="row g-3 align-items-center"><p>&nbsp;&nbsp;Not registered?&nbsp;
                <a href="/login" class="link-primary">Click here</a> to register</p></div>
            </form>
        </div>
    </div>);


}
export default Login