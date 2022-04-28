import React from 'react';
import {
  Navbar, Container, Nav, Col,
} from 'react-bootstrap';

const Header = () => (
  <Navbar bg="black" variant="dark">
    <Container className="flex-lg-row flex-column">
      <Col lg="3" className="mb-5 mt-4 my-lg-3">
        <Navbar.Brand className="fs-2 mx-auto" href="#home">
          <span className="fw-bold">team</span>
          lab
        </Navbar.Brand>
      </Col>
      <Col className="text-center">
        <Nav className="me-auto text-uppercase flex-lg-row flex-column">
          <Nav.Link className="text-white" href="#">
            Мой профиль
          </Nav.Link>
          <Nav.Link className="text-warning fw-bold" href="#">
            Стажировки
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            Акселерационные программы
          </Nav.Link>
        </Nav>
      </Col>
    </Container>
  </Navbar>
);

export default Header;
