import { Navbar,Container} from "react-bootstrap";
import pic from './Chat4You_primaryLogo.png'
import '../message_components/Chat.css'
const Logo = (props)=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container className = "logo-container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={pic}
              width="60"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          Chat4You
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};
export default Logo;