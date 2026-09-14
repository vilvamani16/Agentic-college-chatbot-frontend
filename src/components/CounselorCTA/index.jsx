import { useNavigate } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./index.css";

export default function CounselorCTA({ onOpenCall }) {
const { user } = useAuth();
const navigate = useNavigate();

const handleClick = () => {
if (user) {
onOpenCall();
} else {
navigate("/login");
}
};

return ( <section className="counselor-section"> <div className="counselor-overlay"></div>

```
  <div className="counselor-content">
    <p className="counselor-subtitle">
      Our Expert Counsellors Are Just a Click Away
    </p>

    <h2 className="counselor-title">
      Need Help Choosing
      <br className="desktop-break" />
      The Right University For You?
    </h2>

    <p className="counselor-description">
      Get personalized guidance on courses, admissions, fees,
      scholarships, and career paths.
    </p>

    <button
      onClick={handleClick}
      className="counselor-button"
    >
      <PhoneCall className="counselor-icon" />
      Talk to Counsellor
    </button>
  </div>
</section>

);
}
