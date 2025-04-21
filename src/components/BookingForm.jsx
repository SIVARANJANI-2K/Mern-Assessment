import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookingForm() {
    const navigate = useNavigate();
    const location = useLocation();

   
    const queryParams = new URLSearchParams(location.search);
    const firstname = queryParams.get("firstname") || "";
    const email = queryParams.get("email") || "";
    const phonenumber = queryParams.get("phonenumber") || "";


    const [formData, setFormData] = useState({
        firstname,
        email,
        phonenumber,
        guests: "",
        date: "",
        time: "",
        specialRequests: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!formData.guests || !formData.date || !formData.time) {
            setError("Please fill in all required fields.");
            return;
        }

        
        console.log("Booking Details:", formData);
        setSuccess(true);

        // Redirect or reset form after submission
        setTimeout(() => {
            navigate("/home");
        }, 2000);
    };

    return (
        <div className="container mt-5">
            <h1>Book a Table</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Booking successful! Redirecting...</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phonenumber"
                        value={formData.phonenumber}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGuests">
                    <Form.Label>Number of Guests</Form.Label>
                    <Form.Control
                        type="number"
                        name="guests"
                        placeholder="Enter number of guests"
                        value={formData.guests}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSpecialRequests">
                    <Form.Label>Special Requests</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="specialRequests"
                        placeholder="Enter any special requests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit Booking
                </Button>
            </Form>
        </div>
    );
}