// A Footer containing contact information, hours of operation, and an
// embedded location map
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email:contact@gmail.com</p>
            <p>Phone: 987654321</p>
            <p>Address: 123 Restaurant St,colony</p>
          </Col>
            <Col md={4}>
                <h5>Hours of Operation</h5>
                <p>Monday - Friday: 10 AM - 10 PM</p>
                <p>Saturday - Sunday: 11 AM - 11 PM</p> 
                <p>Holidays: Closed</p>
            </Col>
          <Col md={4}>
            <h5>Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d144.9630579153164!3d-37.81410797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f123456%3A0x123456789abcdef0!2sRestaurant%20Name!5e0!3m2!1sen!2sus!4v1612345678901"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col>    
        </Row>
        </Container>
        <div className="text-center py-3">
          &copy; 2025 Your Restaurant. All rights reserved.  
        </div>
        </footer>
    );  
}

