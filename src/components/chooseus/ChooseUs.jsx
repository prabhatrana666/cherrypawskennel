import "./ChooseUs.css";
import {
  ShieldCheck,
  Bath,
  HeartHandshake,
  PawPrint,
  Stethoscope,
  MessageCircleHeart,
} from "lucide-react";

function ChooseUs() {
  const features = [
    {
      title: "HEALTHY PUPPIES",
      desc: "Ethically bred, healthy, and well-socialized puppies.",
      icon: ShieldCheck,
      color: "#ff8a65",
    },
    {
      title: "EXPERT GROOMING",
      desc: "Professional grooming for a clean, healthy, and happy pet.",
      icon: Bath,
      color: "#42a5f5",
    },
    {
      title: "LOVING CARE",
      desc: "Every dog receives personalized attention and compassionate care.",
      icon: HeartHandshake,
      color: "#ec407a",
    },
    {
      title: "PREMIUM BREEDS",
      desc: "Quality breeds raised in a safe and caring environment.",
      icon: PawPrint,
      color: "#ab47bc",
    },
    {
      title: "HEALTH & HYGIENE",
      desc: "Regular health checks and high standards of cleanliness.",
      icon: Stethoscope,
      color: "#26a69a",
    },
    {
      title: "FRIENDLY SUPPORT",
      desc: "We're always here to answer your questions and help.",
      icon: MessageCircleHeart,
      color: "#ef5350",
    },
  ];

  return (
    <section className="why-section mt-5">
      <div className="why-container">
        <div className="why-header">
          <span className="why-label">WHY PET PARENTS TRUST US</span>

          <h2 className="why-title">
            {/* WHY CHOOSE <span>CHERRY PAWS?</span> */}
             WHY CHOOSE CHERRY PAWS?
          </h2>
        </div>

        <div className="why-grid">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="why-card" key={index}>
                <div
                  className="why-icon"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
