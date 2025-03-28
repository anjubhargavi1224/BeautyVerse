// src/pages/Home.jsx
import AboutUs from "../../components/Aboutus";
import Blog from "../../components/Blog";
import FAQ from "../../components/FAQ";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/Herosection";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import ScannerBanner from "../../components/ScannerBanner";

function Home() {
  return (
    <div className="font-urbanist text-gray-900">
      <Header />
      <Navbar />
      <HeroSection/>
      <AboutUs/>
      <Products/>
      <ScannerBanner/>
      <Features/>
      <FAQ/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Home;
