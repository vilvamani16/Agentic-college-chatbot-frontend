import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  User,
  Mail,
  Lock,
  Phone,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";

import { registerUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";
import { images } from "../../data/content";

import "./index.css";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in required fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser({
        name,
        email,
        password,
        phone: phone || undefined,
      });

      await login(data.token);

      toast.success("Account created! Welcome to EduReach.");

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      {/* Left Side - Form */}
      <div className="signup-form-section">

        <div className="signup-container">

          <Link to="/" className="signup-back-link">
            <ArrowLeft size={17} />
            <span>Back to Home</span>
          </Link>

          <div className="signup-heading">
            <h1>Create Account</h1>

            <p>
              Join EduReach for unlimited access to AI chat
              & counseling calls
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="signup-form"
          >

            {/* Name */}
            <div className="signup-form-group">
              <label>Full Name *</label>

              <div className="signup-input-wrapper">
                <User className="signup-input-icon" size={18} />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="signup-form-group">
              <label>Email *</label>

              <div className="signup-input-wrapper">
                <Mail className="signup-input-icon" size={18} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-form-group">
              <label>Password *</label>

              <div className="signup-input-wrapper">
                <Lock className="signup-input-icon" size={18} />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="signup-form-group">
              <label>Phone (optional)</label>

              <div className="signup-input-wrapper">
                <Phone className="signup-input-icon" size={18} />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91-9876543210"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="signup-button"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="signup-login-text">
            Already have an account?{" "}

            <Link to="/login">
              Sign In
            </Link>
          </p>

        </div>

      </div>

      {/* Right Side - Image */}
      <div className="signup-image-section">

        <img
          src={images.moreStudents}
          alt="Students"
        />

        <div className="signup-image-overlay">

          <div className="signup-image-content">

            <GraduationCap
              className="signup-graduation-icon"
              size={64}
            />

            <h2>Join EduReach</h2>

            <p>
              92% placement rate · Top recruiters ·
              25-acre campus
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}