import { NavLink, useNavigate } from "react-router-dom";
import "./BottomNav.css";
import useScrollBottom from "../../hooks/useScrollBottom";
import { Home, Image, User, BriefcaseBusiness } from "lucide-react";
import FloatingSocial from "./FloatingSocial";

function BottomNav() {
    const hide = useScrollBottom();
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <FloatingSocial />

            <div className={`bottom-nav ${hide ? "hide" : ""}`}>

                <NavLink
                    to="/"
                    onClick={() => handleNavigate("/")}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <Home size={22} strokeWidth={1.8} />
                    <span>HOME</span>
                </NavLink>

                <NavLink
                    to="/services"
                    onClick={() => handleNavigate("/services")}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <BriefcaseBusiness size={22} strokeWidth={1.8} />
                    <span>SERVICES</span>
                </NavLink>

                <NavLink
                    to="/gallery"
                    onClick={() => handleNavigate("/gallery")}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <Image size={22} strokeWidth={1.8} />
                    <span>GALLERY</span>
                </NavLink>

                <NavLink
                    to="/about"
                    onClick={() => handleNavigate("/about")}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    <User size={22} strokeWidth={1.8} />
                    <span>ABOUT</span>
                </NavLink>

            </div>
        </>
    );
}

export default BottomNav;