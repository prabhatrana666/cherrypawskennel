import "./Hero.css";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { User, MapPin, Search, Car, ArrowRight, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { fetchLocationSuggestions } from "../api/locationApi";
import { Shield, Star, Headset } from "lucide-react";
import carImage from "../../assets/hero_car-removebg.png"

function PetPage() {


    return (
        <>
            <section className="container py-4">

                <div
                    className="position-relative overflow-hidden rounded-5"
                    style={{ height: "620px" }}
                >

                    <img
                        src={hero}
                        alt=""
                        className="w-100 h-100 object-fit-cover"
                    />

                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background:
                                "linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.65) 40%,rgba(0,0,0,.12) 100%)"
                        }}
                    ></div>

                    <div className="position-absolute top-50 start-0 translate-middle-y text-white ps-5">

                        <h1
                            className="fw-bold lh-1"
                            style={{ fontSize: "4.4rem", maxWidth: "620px" }}
                        >
                            Where Every Paw
                            <br />
                            Gets to <span className="text-warning">Play</span>
                        </h1>

                        <p
                            className="mt-4 fs-4 text-white-50"
                            style={{ maxWidth: "560px" }}
                        >
                            Safe, social, and supervised fun all day long.
                            Your furry family members deserve the best care while
                            you're away.
                        </p>

                        <div className="d-flex gap-3 mt-5">

                            <button className="btn btn-warning px-5 py-3 fw-semibold rounded-3">
                                Book Now
                            </button>

                            <button className="btn btn-outline-light px-5 py-3 fw-semibold rounded-3">
                                Learn More
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* Services */}

            

        </>

    );
}

export default PetPage;