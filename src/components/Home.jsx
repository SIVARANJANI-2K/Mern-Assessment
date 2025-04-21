import React from "react";
import HeroSection from "./HeroSection";
import MenuPreview from "./MenuPreview";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection />
      <MenuPreview />
      <Footer/>
    </div>
  );
}