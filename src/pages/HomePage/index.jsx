import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import AchievementsSection from "../../components/AchievementsSection";
import CoursesSection from "../../components/CoursesSection";
import QuotesSection from "../../components/QuotesSection";
import MentorsSection from "../../components/MentorsSection";
import StudentLifeSection from "../../components/StudentLifeSection";
import EventsGallery from "../../components/EventsGallery";
import CounselorCTA from "../../components/CounselorCTA";
import HiringStatsSection from "../../components/HiringStatsSection";
import Footer from "../../components/Footer";
import SignupPopup from "../../components/SignupPopup";
import CallPopup from "../../components/CallPopup";

import "./index.css";

export default function HomePage() {
  const { user } = useAuth();

  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const handleReachMentors = () => {
    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  };

  return (
    <div className="home-page">

      {/* Visible to everyone */}
      <main>
        <HeroSection />

        <AboutSection />

        <AchievementsSection />

        <CoursesSection />

        <QuotesSection />

        <MentorsSection onReachMentors={handleReachMentors} />

        {/* Content below Mentors - GATED */}
        {user ? (
          <>
            <StudentLifeSection />

            <EventsGallery />

            <CounselorCTA
              onOpenCall={() => setShowCallPopup(true)}
            />

            <HiringStatsSection />

            <Footer />
          </>
        ) : (
          <section className="unlock-section">
            <div className="unlock-container">
              <h2>Want to See More?</h2>

              <p>
                Sign up to explore campus life, events, placement statistics,
                and talk to our AI counselor.
              </p>

              <button
                onClick={() => setShowSignupPopup(true)}
                className="unlock-button"
              >
                Sign Up to Unlock
              </button>
            </div>

            <Footer />
          </section>
        )}
      </main>

      {/* Signup Popup */}
      <SignupPopup
        show={showSignupPopup}
        onClose={() => setShowSignupPopup(false)}
      />

      {/* Counselor Call Popup */}
      <CallPopup
        open={showCallPopup}
        onClose={() => setShowCallPopup(false)}
      />
    </div>
  );
}