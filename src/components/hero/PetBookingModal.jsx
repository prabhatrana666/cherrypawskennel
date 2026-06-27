import { Modal, Form } from "react-bootstrap";
import { useState } from "react";
import logo from "../../assets/logo.png"
import DatePicker from "react-datepicker";
import { Dog } from "lucide-react";

import {
    FiUser,
    FiMapPin,
    FiNavigation,
    FiCalendar
} from "react-icons/fi";
import "./PetBookingModal.css"

function PetBookingModal({ show, handleClose }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        pet: "",
        service: "",
        date: null,
        message: "",
    });

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendWhatsApp = () => {
        const phone = "918840358106"; // Your WhatsApp number

        const text = `
*Dog Care Booking*

Name : ${form.name}
Pet : ${form.pet}
Service : ${form.service}
Date : ${form.date}

Message :
${form.message}
`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    };

    return (
        // <Modal
        //     show={show}
        //     onHide={handleClose}
        //     centered
        //     className="booking-modal"
        // >

        //     <Modal.Header closeButton className="booking-header">

        //         <div>

        //             <span className="booking-badge">
        //                 DOG CARE ENQUIRY
        //             </span>

        //             <h2 className="booking-title">
        //                 Premium Dog Care
        //             </h2>

        //             <p className="booking-price">
        //                 Starting from <span>₹499</span>
        //             </p>

        //         </div>

        //     </Modal.Header>

        //     <Modal.Body>

        //         <Form>

        //             <div className="custom-input">

        //                 <FiUser className="input-icon" />

        //                 <Form.Control
        //                     placeholder="Your Name"
        //                     name="name"
        //                     value={form.name}
        //                     onChange={changeHandler}
        //                 />

        //             </div>

        //             <div className="custom-input">

        //                 <FiMapPin className="input-icon" />

        //                 <Form.Control
        //                     placeholder="Dog Breed"
        //                     name="pet"
        //                     value={form.pet}
        //                     onChange={changeHandler}
        //                 />

        //             </div>

        //             <div className="custom-input">

        //                 <FiNavigation className="input-icon" />

        //                 <Form.Select
        //                     name="service"
        //                     value={form.service}
        //                     onChange={changeHandler}
        //                 >
        //                     <option>Select Service</option>
        //                     <option>Grooming</option>
        //                     <option>Training</option>
        //                     <option>Health Care</option>
        //                     <option>Day Care</option>
        //                     <option>Boarding</option>
        //                 </Form.Select>

        //             </div>

        //             <div className="custom-input">

        //                 <FiCalendar className="input-icon" />

        //                 <Form.Control
        //                     type="date"
        //                     name="date"
        //                     value={form.date}
        //                     onChange={changeHandler}
        //                 />

        //             </div>

        //             <Form.Control
        //                 as="textarea"
        //                 rows={4}
        //                 className="message-box"
        //                 placeholder="Tell us anything about your dog..."
        //                 name="message"
        //                 value={form.message}
        //                 onChange={changeHandler}
        //             />

        //         </Form>

        //     </Modal.Body>

        //     <Modal.Footer className="booking-footer">

        //         <button
        //             className="whatsapp-btn"
        //             onClick={sendWhatsApp}
        //         >
        //             SEND VIA WHATSAPP
        //         </button>

        //     </Modal.Footer>

        // </Modal>
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className="custom-modal"
        >
            {/* Custom header with brand - replaces default header */}
            <div className="modal-top-header">
                <div className="modal-brand">
                    <div className="modal-logo-wrapper">
                        <i className="fas fa-paw"></i>
                        <img src={logo} alt="logo" className="modal-logo" />
                    </div>
                    <div>
                        <h4>Dog Care Booking</h4>
                        <p>Premium Pet Services</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                ></button>
            </div>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        {/* <div className="input-group-icon">
                            <i className="fas fa-user"></i>
                            <Form.Control
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                onChange={changeHandler}
                            />
                        </div> */}
                        <div className="input-group-icon">

                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                className="main_landing_form"
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                                    setForm({
                                        ...form,
                                        name: value,
                                    });
                                }}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <div className="input-group-icon">
                            <Dog className="input-icon" size={18} />

                            <Form.Control
                                placeholder="Dog Breed"
                                name="pet"
                                value={form.pet}
                                className="main_landing_form"
                                onChange={changeHandler}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select
                            name="service"
                            value={form.service}
                            onChange={changeHandler}
                            className="form-control  main_landing_form helloes"
                        >
                            <option>Select Service</option>
                            <option>Grooming</option>
                            <option>Boarding</option>
                            <option>Training</option>
                            <option>Health Care</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <div className="input-group-icon">

                            <FiCalendar className="calendar-icon" />

                            <DatePicker
                                selected={form.date}
                                onChange={(date) =>
                                    setForm({
                                        ...form,
                                        date,
                                    })
                                }
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Booking Date"
                                minDate={new Date()}
                                className="form-control custom-datepicker main_landing_form"
                            />

                        </div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Additional Message"
                            name="message"
                            value={form.message}
                            className="main_landing_form"
                            onChange={changeHandler}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <button
                    className="btn-whatsapp"
                    onClick={sendWhatsApp}
                >
                    <i className="fab fa-whatsapp"></i>
                    Send via WhatsApp
                </button>
            </Modal.Footer>
        </Modal>

    );
}

export default PetBookingModal;