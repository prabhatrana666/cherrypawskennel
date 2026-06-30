import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import AnimationCar from "../components/hero/AnimationCar";
import OurGarage from "../components/ourgarage/OurGarage";
import ReadyToRoll from "../components/readytoroll/ReadyToRoll";
import PetPage from "../components/hero/PetPage";
import AboutMain from "../components/about-us_main/AboutMain";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <PetPage/>
      <AnimationCar />
      {/* <OurGarage/> */}
      <AboutMain />
      <Testimonials />
      <ReadyToRoll />
      <Footer />
    </>
  );
}

export default Home;