import "./Hero.css";
import "./PetPage.css"
import { motion } from "framer-motion";
import hero from "../../assets/dog.jpg";
import german from "../../assets/dogs/german.jpeg";
import lab from "../../assets/dogs/lab.jpeg";
import gold from "../../assets/dogs/gold.jpeg";
import sam from "../../assets/dogs/sam.jpeg";
import pom from "../../assets/dogs/pom.jpeg";
import ahi from "../../assets/dogs/ahi.jpeg";
import shihtzu from "../../assets/dogs/shihtzu.jpeg";
import husky from "../../assets/dogs/husky.jpeg";
import beagle from "../../assets/dogs/beagle.jpeg";
import rottweiler from "../../assets/dogs/rottweiler.jpeg";
import bulldog from "../../assets/dogs/bulldog.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Import, MessageCircle } from "lucide-react";
import PetBookingModal from "./PetBookingModal"
import {
    FaCut,
    FaDog,
    FaHome,
    FaRunning,
    FaPlus,
    FaPaw,
    FaShieldAlt,
    FaHeart,
    FaAward,
    FaHeadset
} from "react-icons/fa";
import {
    FaSyringe,
    FaBone,
} from "react-icons/fa";

const breeds = [
    { image: lab, title: "Labrador Retriever" },
    { image: gold, title: "Golden Retriever" },
    { image: german, title: "German Shepherd" },
    { image: pom, title: "Pomeranian" },
    { image: sam, title: "Samoyed" },
    { image: shihtzu, title: "Shih Tzu" },
    { image: husky, title: "Siberian Husky" },
    { image: beagle, title: "Beagle" },
    { image: rottweiler, title: "Rottweiler" },
    { image: bulldog, title: "French Bulldog" },
];
const services = [
    {
        icon: <FaCut />,
        title: "Grooming",
        color: "#ff5c8d",
        text: "Professional grooming services to keep your dog clean, healthy & happy."
    },
    {
        icon: <FaDog />,
        title: "Breeding",
        color: "#a855f7",
        text: "Healthy, pure breed puppies raised with love and expert care."
    },
    {
        icon: <FaHome />,
        title: "Boarding",
        color: "#fb923c",
        text: "Safe, comfortable and loving stay while you're away."
    },
    {
        icon: <FaRunning />,
        title: "Daycare",
        color: "#22c55e",
        text: "Fun-filled daycare with playtime, socialization and attention."
    },
    {
        icon: <FaPlus />,
        title: "Health Care",
        color: "#facc15",
        text: "Regular checkups, vaccinations and health consultations."
    },
    {
        icon: <FaPaw />,
        title: "Training",
        color: "#60a5fa",
        text: "Basic to advanced training for a well behaved companion."
    },
    {
        icon: <FaSyringe />,
        title: "Vaccination",
        color: "#14b8a6",
        text: "Keep your pet protected with timely vaccinations and preventive care."
    },
    {
        icon: <FaBone />,
        title: "Nutrition",
        color: "#f97316",
        text: "Expert nutritional guidance to support your dog's health and well-being."
    }
];
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function PetPage() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <motion.section
                className="container py-4 landing_pages"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div
                    className="position-relative overflow-hidden rounded-5 main_height"
                    style={{ height: "620px" }}
                >
                    <img
                        src={hero}
                        alt=""
                        className="w-100 h-100 object-fit-cover"
                    />

                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 dog-image"
                        style={{
                            background:
                                "linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.65) 40%,rgba(0,0,0,.12) 100%)"
                        }}
                    ></div>

                    <div className="position-absolute top-50 start-0 translate-middle-y text-white ps-5" id="land">

                        {/* Heading animation */}
                        <motion.h1
                            className="fw-bold lh-1 main_heading_land"
                            style={{ fontSize: "4.4rem", maxWidth: "620px", color: "white" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Where Every Paw
                            <br />
                            Gets to Play
                        </motion.h1>

                        {/* Paragraph animation */}
                        <motion.p
                            className="mt-4 fs-4 text-white-50"
                            style={{ maxWidth: "560px" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Trusted dog breeding, professional grooming, and loving care —
                            ensuring every pet is healthy, happy, and treated like family.
                        </motion.p>

                        {/* Buttons animation */}
                        <motion.div
                            className="d-flex gap-3 mt-5"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <button
                                className="btn btn-warning px-5 py-3 fw-semibold rounded-3 book_button"
                                onClick={() => setShowModal(true)}
                            >
                                Book Now
                            </button>

                            <Link
                                to="/about"
                                className="btn btn-outline-light px-5 py-3 fw-semibold rounded-3 book_button2"
                            >
                                About Us
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </motion.section>


            {/* Services */}

            <section className="container py-5">

                <div className="text-center mb-5">

                    <h6 className="text-warning fw-bold our_serves">
                        OUR SERVICES
                    </h6>

                    <h1 className="fw-bold d-none">
                        Complete Care for Your Furry Family
                    </h1>

                    <p className="text-muted fs-5">
                        We provide a range of premium services to keep your pets
                        happy, healthy and looking their best.
                    </p>

                </div>

                <div className="row g-4">

                    {services.map((item, index) => (
                        <div className="col-6 col-md-4 col-lg-3" key={index}>

                            <div
                                className="card border-0 shadow-lg rounded-5 h-100 text-center p-4"
                            >

                                <div
                                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4 our_services_sec"
                                    style={{
                                        width: 90,
                                        height: 90,
                                        background: `${item.color}20`,
                                        color: item.color,
                                        fontSize: 38
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <h4 className="fw-bold">
                                    {item.title}
                                </h4>

                                <div
                                    className="mx-auto my-3 inside_service"
                                    style={{
                                        width: 45,
                                        height: 4,
                                        borderRadius: 30,
                                        background: item.color
                                    }}
                                ></div>

                                <p className="text-muted m-0">
                                    {item.text}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>
                <motion.div
                    className="row text-center mt-5 gy-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        {
                            icon: <FaShieldAlt className="text-warning mb-3" size={45} />,
                            title: "Safe & Secure",
                            desc: "Your pet's safety is our top priority.",
                        },
                        {
                            icon: <FaHeart className="text-danger mb-3" size={45} />,
                            title: "Lots of Love",
                            desc: "Every pet is treated like our own.",
                        },
                        {
                            icon: <FaAward className="text-success mb-3" size={45} />,
                            title: "Serving Since 2019",
                            desc: "Providing trusted dog breeding and professional grooming services since 2019.",
                        },
                        {
                            icon: <FaHeadset className="text-primary mb-3" size={45} />,
                            title: "24/7 Support",
                            desc: "We're always here for you & your pet.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            className="col-6 col-lg-3"
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {item.icon}

                            <h4 className="fw-bold">{item.title}</h4>

                            <p className="text-muted">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </section>
            <section className="breed-section">
                <div className="container">
                    <div className="text-center mb-5">

                        <h6 className="text-warning fw-bold our_serves">
                            OUR BREED
                        </h6>

                        <p className="text-muted fs-5">
                            Discover a wide range of healthy, purebred, and well-cared-for dog breeds
                            raised with love, trust, and proper care.
                        </p>

                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        speed={1000}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2200,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 4 },
                        }}
                        className="breed-swiper"
                    >
                        {breeds.map((breed, index) => (
                            <SwiperSlide key={index}>
                                <div className="breed-card">

                                    <div className="breed-img-wrapper">
                                        <img src={breed.image} alt={breed.title} />

                                        <div className="breed-card-overlay">

                                            <h5 className="breed-card-title">{breed.title}</h5>

                                            <a
                                                href={`https://wa.me/918840358106?text=Hi, I am interested in the ${breed.title} breed. Can you please share availability, price and details?`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="breed-card-whatsapp"
                                            >
                                                <MessageCircle size={18} />
                                                <span>Enquire on WhatsApp</span>
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
            <PetBookingModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </>

    );
}

export default PetPage;