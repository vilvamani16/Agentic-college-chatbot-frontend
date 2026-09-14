
import { Link } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";
import "./index.css";

export default function SignupPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="signup-popup-overlay">
      <div className="signup-popup">
        <button
          onClick={onClose}
          className="signup-popup-close"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="signup-popup-content">
          <div className="signup-popup-icon">
            <GraduationCap size={30} />
          </div>

          <h3>Unlock Full Access</h3>

          <p>
            Sign up to explore our mentors, campus life, placements,
            and get AI-powered counseling.
          </p>

          <Link
            to="/signup"
            onClick={onClose}
            className="signup-popup-button"
          >
            Create Free Account
          </Link>

          <p className="signup-popup-login">
            Already have an account?{" "}
            <Link to="/login" onClick={onClose}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
