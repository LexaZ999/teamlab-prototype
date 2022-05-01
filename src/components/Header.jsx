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
          <Nav.Link className="" href="#myProfile">
            Мой профиль
          </Nav.Link>
          <Nav.Link className="" href="#internships">
            Стажировки
          </Nav.Link>
          <Nav.Link className="" href="#accelerationPrograms">
            Акселерационные программы
          </Nav.Link>
          <Nav.Link className="" href="#testing">
            Тестирование
          </Nav.Link>
        </Nav>
      </Col>
    </Container>
  </Navbar>
);

export default Header;
