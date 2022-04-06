import { Navbar,Container} from "react-bootstrap";
import pic from './Chat4You_Logo.jpg'
const Logo = (props)=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={pic}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          Chat4You
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};
export default Logo;