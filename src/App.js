import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BookingForm from './components/BookingForm';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarComponent />} />
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Footer/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/booktable" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default App;
