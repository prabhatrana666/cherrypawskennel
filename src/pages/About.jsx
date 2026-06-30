import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle } from "lucide-react";
import poster from "../assets/gallery/3.jpeg";
import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import {
  Crosshair,
} from "lucide-react";
import "./About.css";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "SAFE & SECURE",
    desc: "Your pets stay in a clean, secure, and supervised environment with round-the-clock care.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "LOVING CARE",
    desc: "Every pet is treated like family with personalized attention, affection, and daily care.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "TRUSTED SERVICE",
    desc: "From boarding and grooming to daycare, we provide reliable pet care with the highest standards.",
  },
];
function About() {
  return (
    <>
      <Navbar />


      {/* Top Section */}

      <section className="hl-section">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <motion.div
                className="hl-content"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
               <div className="hl-subtitle">
  <span></span>
  OUR LEGACY
</div>

<h1 className="hl-title">
  CARING SINCE
  <br />
  <span>2019</span>
</h1>

<p className="hl-description">
  Since 2019, Cherry Paws Kennel has been committed to delivering exceptional
  pet care with compassion, trust, and professionalism. Every pet entrusted to
  us receives the love, attention, and comfort they deserve, making us a
  trusted choice for pet owners.
</p>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <motion.div
                className="hl-image-wrapper"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={poster}
                  alt="Hello11 Poster"
                  className="img-fluid hl-image"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* Middle Section */}

      <section className="pf-section mt-5">
        <div className="container">

          {/* Feature Cards */}
          <div className="row justify-content-center g-4">

            {features.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="pf-card"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="pf-icon">
                    {item.icon}
                  </div>

                  <h5>{item.title}</h5>

                  <p>{item.desc}</p>
                </motion.div>
              </div>
            ))}

          </div>

          {/* Mission Box */}
          <motion.div
            className="pf-mission"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <span>
  "OUR MISSION IS TO DELIVER <strong>EXCEPTIONAL PET CARE</strong>
  <br />
  WITH LOVE, COMFORT, AND TRUST EVERY SINGLE DAY."
</span>
          </motion.div>

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="rtr-instant-card mt-5 p-5 container sddd">

        <div className="text-center position-relative">

          <p className="rtr-subtitle">
            GET IN TOUCH
          </p>
<h3 className="rtr-instant-title font-italic my_title">
  CARE WITH <span>CHERRY PAWS</span>
</h3>
<p className="small_texts">
  SAFE BOARDING, PROFESSIONAL GROOMING, LOVING CARE, AND A HAPPY HOME AWAY FROM HOME FOR YOUR BELOVED PETS.
</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">

            <a
              href="https://wa.me/918840358106"
              target="_blank"
              rel="noreferrer"
              className="rtr-whatsapp-btn"
            >
              <MessageCircle size={20} />
              CHAT ON WHATSAPP
            </a>

            <a
              href="tel:+918840358106"
              className="rtr-call-btn"
            >
              <Phone size={20} />
              CALL +91 88403 58106
            </a>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )

}

export default About;