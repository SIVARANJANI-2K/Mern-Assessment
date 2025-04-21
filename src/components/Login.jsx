import react, { use } from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button,Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSucess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [userData]=useState(JSON.parse(localStorage.getItem("userData")) || []);
    useEffect(() => {
        if (isSucess) {
            navigate("/home");
        }
    }, [isSucess]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData === null || userData.length === 0) {
            setIsSuccess(false);
            setError("No users found, please sign up first.");
            return;
        }
        const user = userData.find((user) => user.email === email && user.password === password);
        if (user) {
            setIsSuccess(true);
            localStorage.setItem("user", JSON.stringify(user));
            navigate(`/?firstname=${user.Firstname}&email=${user.email}&phonenumber=${user.phoneNumber}`);
        } 
         else {
            setIsSuccess(false);
            setError("Invalid email or password or user not found");
        }
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            {error && <Alert className="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}