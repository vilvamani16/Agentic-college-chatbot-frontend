import { PhoneCall, X } from "lucide-react";
import "./index.css";

export default function CallPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="call-popup-overlay">
      <div className="call-popup">
        <button className="call-popup-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="call-popup-icon">
          <PhoneCall size={30} />
        </div>

        <h2>AI Counselor Call</h2>

        <p>
          This feature will be available in Part 2.
          Our AI counselor will help you with courses,
          admissions, fees, scholarships, and career guidance.
        </p>

        <button className="call-popup-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

