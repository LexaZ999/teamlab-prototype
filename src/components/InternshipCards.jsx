import React from 'react';
import { Card, Button, Container, CardGroup, Row, Col } from 'react-bootstrap';
import InfoCard from './InfoCard.jsx';

const InternshipCards = () => (
  <div className="bg-light">
    <Container className="py-5">
      <h4 className="mb-4">Стажировки</h4>
      <hr />
      <Row lg="3" md="2" xs="1" className="g-4">
        <Col>
          <InfoCard
            title="TeamLab"
            src="/src/images/home-3.svg"
            description="Формат: онлайн"
          />
        </Col>
        <Col>
          <InfoCard
            title="UserStory"
            src="/src/images/home-3.svg"
            description="Формат: онлайн"
          />
        </Col>
        <Col>
          <InfoCard
            title="Aurigma"
            src="/src/images/home-3.svg"
            description="Формат: онлайн"
          />
        </Col>
        <Col>
          <InfoCard
            title="Инком"
            src="/src/images/home-3.svg"
            description="Формат: онлайн"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default InternshipCards;
