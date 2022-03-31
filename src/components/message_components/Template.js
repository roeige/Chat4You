import { Col,Row,Container } from "react-bootstrap";

const Template = props =>{
    return (
        <Container>
  <Row>
    <Col>Image Alice</Col>
    <Col xs = {8}>Image Alice</Col>
  </Row>
  <Row>
    <Col>Chats</Col>
    <Col xs = {8}>Chat bubbles</Col>
  </Row>
</Container>
    );
};

export default Template;