import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Last } from "react-bootstrap/esm/PageItem";
export default function SignUp(){
    const [FormData, setFormData] = useState({
        Firstname: "",
        Lastname: "",
        email: "",
        phoneNumber: "",
        confirmPassword: "",
        password: "",
    });
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
        setError("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!FormData.Firstname || !FormData.Lastname || !FormData.email || !FormData.phoneNumber || !FormData.password) {
            setError("Please fill all the fields");
            return;
        }
        if (!validateEmail(FormData.email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!validatePhoneNumber(FormData.phoneNumber)) {
            setError("Please enter a valid phone number");
            return;
        }
        if (!validatePassword(FormData.password)) {
            setError("Please enter a valid password (at least 8 characters, one uppercase letter, one lowercase letter, and one number)");
            return;
        }
        if (userData.some(user => user.email === FormData.email)) {
            setError("Email already exists");
            return;
        }
        if (FormData.password !== FormData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        const newUser = { ...FormData };
        const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
        existingUsers.push(newUser);
        localStorage.setItem("userData", JSON.stringify(existingUsers));
        setUserData(existingUsers);
        navigate("/login");
    };
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    const validatePhoneNumber = (phoneNumber) => {
        console.log(phoneNumber);
        const re = /^[6-9]\d{9}$/;
        return re.test(phoneNumber);
    };
    const validatePassword = (password) => { 
        const re= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);   
    };

    return (
        <div className="container mt-5">
            <h1>Sign Up</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="Firstname" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="Lastname" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Phone Number" name="phoneNumber" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}