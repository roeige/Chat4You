import { useRef } from 'react';
import './Connect.css'
import { users } from '../user_details';
import { app_data } from './message_components/chat_utils';
import avatar from '../pictures/avatar.png';

const Register = (props) => {
    const usernameRef = useRef();
    const displayNameRef = useRef();
    const passwordRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const displayName = displayNameRef.current.value;
        if(app_data && app_data[username]){
            console.log("Username already in use")
        }
        else{
            app_data[username]= {
                password,
                displayName,
                picture : avatar,
                contacts : {
                  
                }
              };
            console.log(app_data);
        }
    }

    return (<div class="grid" className='grid'>
        <div class="col">
            <div class="row justify-content-md-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            <div class="row mb icon">
                <p class="text-center fs-3">Register</p>
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
                <div class="row g-3 align-items-center">
                <div class= "col padding">
                    <label for="input-display-name" class="col-form-label">Display name</label>
                    </div>
                    <div class="col-auto">
                        <input ref={displayNameRef} type="display-name" class="form-control" id="display-name" />
                    </div>
                </div>
                <div class="row g-3 align-items-center padding"><button type="submit" class="btn btn-primary" onClick={submitHandler}>Sign up</button></div>
                <div class="row g-3 align-items-center"><p>&nbsp;&nbsp;Already registered?&nbsp;
                <a href="/login" class="link-primary">Click here</a> to login</p></div>
            </form>
        </div>
    </div>);


}
export default Register;