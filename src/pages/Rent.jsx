import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ArrowRight, Users, Fuel, Settings, Phone, MessageCircle, ClipboardPen } from "lucide-react";
// import CarsData from "./CarsData";
import PetsData from "./PetsData";
import "./Rent.css";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { motion } from "framer-motion";
import { PawPrint, Clock3, ShieldCheck } from "lucide-react";

function Rent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openBooking = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const closeBooking = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* ===== GARAGE SECTION ===== */}
      <section className="h11-garage-section mt-5">
        <div className="container">

          {/* HEADER */}
          <div className="h11-garage-header">
            <p className="h11-garage-subtitle">OUR SERVICES</p>

            <h2 className="h11-garage-title">
              PET <span>CARE</span>
            </h2>

            <p className="h11-garage-desc">
              SAFE BOARDING, PROFESSIONAL GROOMING, DAYCARE, AND LOVING CARE FOR EVERY PET.
            </p>
          </div>

          {/* CAR GRID WITH ANIMATION */}
          <motion.div
            className="row g-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {PetsData.map((car, index) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={index}
                variants={card}
              >
                <div className="h11-car-card">

                  <div className="h11-car-image-wrap">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h11-car-image"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <div>
                      <h3 className="h11-car-name">{car.name}</h3>

                      <div className="h11-car-price d-none">
                        {car.price}
                        <span>{car.unit}</span>
                      </div>
                    </div>

                    {/* Desktop only */}
                    <button
                      className="h11-arrow-btn d-none d-lg-block"
                      onClick={() => openBooking(car)}
                    >
                      <ClipboardPen size={22} />
                    </button>

                  </div>

                  {/* Mobile only */}
                  <div className="d-block d-lg-none mt-3">
                    <button
                      className="h11-arrow-btn w-100"
                      onClick={() => openBooking(car)}
                    >
                     
                      <ClipboardPen size={22} />
                       <span className="ms-3">Book Now</span>
                    </button>
                  </div>
                  <div className="h11-car-specs d-none">

                    <div className="h11-spec">
                      <PawPrint size={16} />
                      <span>{car.type}</span>
                    </div>

                    <div className="h11-spec">
                      <Clock3 size={16} />
                      <span>{car.duration}</span>
                    </div>

                    <div className="h11-spec">
                      <ShieldCheck size={16} />
                      <span>{car.age}</span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ===== BOOKING MODAL (SAFE) ===== */}
      {selectedCar && (
        <BookingModal
          show={showModal}
          onClose={closeBooking}
          car={selectedCar}
        />
      )}

      {/* ===== CTA SECTION ===== */}
      <div className="rtr-instant-card mt-5 p-5 container sddd">

        <div className="text-center position-relative">

          <p className="rtr-subtitle">
            Your Pet Deserves the Best
          </p>

          <h3 className="rtr-instant-title font-italic">
            SAFE & <span>LOVING CARE</span>
          </h3>

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
  );
}

export default Rent;