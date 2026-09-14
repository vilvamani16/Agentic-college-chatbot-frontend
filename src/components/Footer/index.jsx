import {
GraduationCap,
Mail,
Phone,
MapPin,
} from "lucide-react";

import { contactInfo } from "../../data/content";

import "./index.css";

export default function Footer() {
return ( <footer className="footer">

```
  <div className="footer-container">

    {/* Main Footer Content */}

    <div className="footer-grid">

      {/* Brand */}
      <div className="footer-brand">

        <div className="footer-logo">
          <GraduationCap size={28} />
          <span>EduReach</span>
        </div>

        <p>
          Premier engineering institution established in 2005.
          AICTE approved, JNTU Hyderabad affiliated.
        </p>

      </div>

      {/* Quick Links */}
      <div className="footer-section">

        <h4>Quick Links</h4>

        <div className="footer-links">

          <a href="#about">About Us</a>
          <a href="#courses">Programs</a>
          <a href="#mentors">Faculty</a>
          <a href="#campus">Campus Life</a>
          <a href="#placements">Placements</a>

        </div>

      </div>

      {/* Programs */}
      <div className="footer-section">

        <h4>Programs</h4>

        <div className="footer-programs">

          <p>B.Tech (6 specializations)</p>

          <p>M.Tech (3 specializations)</p>

          <p>MBA (Finance, Marketing, HR, IT)</p>

          <p>Admissions open: March 1st</p>

        </div>

      </div>

      {/* Contact */}
      <div className="footer-section">

        <h4>Contact Us</h4>

        <div className="footer-contact">

          <p>
            <Mail size={17} />
            <span>{contactInfo.email}</span>
          </p>

          <p>
            <Phone size={17} />
            <span>{contactInfo.phone}</span>
          </p>

          <p>
            <MapPin size={17} />
            <span>{contactInfo.address}</span>
          </p>

        </div>

      </div>

    </div>

    {/* Bottom Bar */}

    <div className="footer-bottom">
      © 2024 EduReach College, Hyderabad. All rights reserved.
    </div>

  </div>

</footer>

);
}
