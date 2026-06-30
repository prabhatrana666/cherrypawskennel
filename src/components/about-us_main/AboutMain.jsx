import "./AboutMain.css"
import aboutImage from "../../assets/gallery/3.jpeg";

function AboutMain() {
    return (
        <>
            <section className="cp-about-section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">

                        {/* Left Content */}
                        <div className="col-lg-6">
                            <div className="cp-about-content">

                                <p className="cp-about-subtitle">
                                    <span></span>
                                    ABOUT US
                                </p>

                                <h2 className="cp-about-title">
                                    Your Pet's Second Home Begins Here
                                </h2>

                                <div className="cp-about-line"></div>

                                <h3 className="cp-about-heading">
                                    Welcome to Cherry Paws Kennel
                                </h3>

                                <p className="cp-about-text">
                                    Founded in 2019, Cherry Paws Kennel was created with one mission—
                                    to provide a safe, comfortable, and loving environment where pets
                                    feel at home. Every furry guest receives personalized attention,
                                    professional care, and plenty of affection while staying with us.
                                </p>

                                <p className="cp-about-text">
                                    From pet boarding and grooming to daycare and transportation, our
                                    experienced team is dedicated to ensuring your pet's happiness,
                                    health, and well-being. We believe every pet deserves the highest
                                    level of care and treat each one like a member of our own family.
                                </p>

                                <h3 className="cp-about-heading">
                                    Our Promise
                                </h3>

                                <p className="cp-about-text">
                                    At Cherry Paws Kennel, we are committed to providing a clean,
                                    secure, and stress-free environment where your pets can play,
                                    relax, and receive exceptional care while you're away.
                                </p>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-6">
                            <div className="cp-about-image-wrapper">
                                <img
                                    src={aboutImage}
                                    alt="Cherry Paws Kennel"
                                    className="img-fluid cp-about-image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )

}

export default AboutMain;