import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";

import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";
//import { images } from "../../data/content";

import "./index.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const data = await loginUser({
        email,
        password,
      });

      login(data.token);

      toast.success("Welcome back!");

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* Left Side */}
      <div className="login-left">

        <div className="login-brand">
          <div className="brand-icon">
            <GraduationCap size={30} />
          </div>

          <h2>EduReach</h2>

          <p>Your Gateway to Smarter Education</p>
        </div>

      </div>

      {/* Right Side */}
      <div className="login-right">

        <div className="login-container">

          <Link to="/" className="back-link">
            <ArrowLeft size={17} />
            <span>Back to Home</span>
          </Link>

          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Sign in to your EduReach account
          </p>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            {/* Email */}
            <div className="form-group">

              <label>Email</label>

              <div className="input-wrapper">

                <Mail className="input-icon" size={18} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                />

              </div>

            </div>

            {/* Password */}
            <div className="form-group">

              <label>Password</label>

              <div className="input-wrapper">

                <Lock className="input-icon" size={18} />

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                />

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="login-button"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          <p className="signup-text">
            Don't have an account?{" "}

            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}