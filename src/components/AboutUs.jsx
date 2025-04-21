import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function AboutUs() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Since 1992, we've been serving mouth-watering meals made with love.
            Our cozy restaurant blends tradition and taste for a perfect dining experience.
            Book a table and enjoy our signature dishes, crafted with the finest ingredients.
            Join us for a culinary journey that celebrates flavors and friendships.
          </p>
        </Col>
        <Col md={6}>
          <img src="/photos/about.jfif" alt="About Us" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
}
