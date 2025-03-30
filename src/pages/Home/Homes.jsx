import { Link, Element } from "react-scroll";
import AboutUs from "../../components/Aboutus";
import Blog from "../../components/Blog";
import FAQ from "../../components/FAQ";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import HeroSection from "../../components/Herosection";
import Products from "../../components/Products";
import ScannerBanner from "../../components/ScannerBanner";
function Home() {
  return (
    <div className="font-urbanist text-gray-900">
      <HeroSection />

      <Element name="about">
        <AboutUs />
      </Element>

      <Element name="products">
        <Products />
      </Element>

      <Element name="scan">
      <ScannerBanner/>
      </Element>

      <Element name="features">
        <Features />
      </Element>

      <Element name="FAQ">
        <FAQ />
      </Element>

      <Element name="blog">
        <Blog />
      </Element>
      <Element name="contact-us">
      <Footer />
      </Element>
    </div>
  );
}

export default Home;
