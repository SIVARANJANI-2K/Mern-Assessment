import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";


const dishes = [
  { name: "Grilled Salmon", img:"/photos/dish1.jfif" ,rating: 4.5 },
  { name: "Spaghetti Carbonara" ,img:"/photos/dish2.jfif" ,rating: 4.7 },
  { name: "Classic Cheeseburger",img:"/photos/dish3.jpg",rating: 4.6 },
];

export default function MenuPreview() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Menu Preview</h2>
      <Row className="g-4">
        {dishes.map((dish, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={dish.img} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>
                  <strong>Rating:</strong> {dish.rating} / 5
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
