import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";

import "./FloatingSocial.css";

function FloatingSocial() {
    const [open, setOpen] = useState(false);

    return (
        <div className="floating-social">

            <div className={`social-links ${open ? "show" : ""}`}>
                <a
                    href="https://wa.me/918840358106"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn whatsapp"
                >
                    <FaWhatsapp />
                </a>

                <a
                    href="https://www.instagram.com/priyanshu_yadav588/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.youtube.com/@cherrypawskennel2019?app=desktop&fbclid=PAb21jcASrmp1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeN6xJEamFqRQ_QpnPCjgkWVvMD4JBIf4-7lp2MI_D4TDznfG0MvQxzAdpO6g_aem_TQRJkrGq8fkwkE7822hUsw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn youtube"
                >
                    <FaYoutube />
                </a>

                <a
                    href="https://www.facebook.com/61576528201218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn facebook"
                >
                    <FaFacebookF />
                </a>
            </div>

            <button
                className={`toggle-btn ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <HiPlus />
            </button>

        </div>
    );
}

export default FloatingSocial;