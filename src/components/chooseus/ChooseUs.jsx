import "./ChooseUs.css";
import {
  Ticket,
  Clock,
  Sparkles,
  ShieldCheck,
  CreditCard,
  PhoneCall,
} from "lucide-react";

function ChooseUs() {
  const features = [
    {
      title: "50% OFF RETURNS",
      desc: "Flat discount on return trips",
      icon: Ticket,
      color: "#ffb100",
    },
    {
      title: "FAIR WAITING",
      desc: "12 mins per km free upto 40km",
      icon: Clock,
      color: "#00a3ff",
    },
    {
      title: "PRISTINE FLEET",
      desc: "Clean & sanitized cars",
      icon: Sparkles,
      color: "#00d084",
    },
    {
      title: "MAXIMUM SAFETY",
      desc: "Verified partner drivers",
      icon: ShieldCheck,
      color: "#b14cff",
    },
    {
      title: "DIRECT PAYMENTS",
      desc: "Pay driver directly via UPI/Cash",
      icon: CreditCard,
      color: "#7c5cff",
    },
    {
      title: "24/7 SUPPORT",
      desc: "Always here to help you",
      icon: PhoneCall,
      color: "#ff4d5a",
    },
  ];

  return (
    <section className="why-section mt-5">
      <div className="why-container">
        <div className="why-header">
          <span className="why-label">ELITE STANDARDS</span>
          <h2 className="why-title">
            WHY CHOOSE <span>US?</span>
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
                    background: `${item.color}20`, // soft background
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