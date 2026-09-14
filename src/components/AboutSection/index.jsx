import { aboutContent, images } from "../../data/content";

import "./index.css";

export default function AboutSection() {
return ( <section className="about-section" id="about">

```
  <div className="about-container">

    <div className="about-grid">

      {/* Left - Images */}

      <div className="about-images">

        <img
          src={images.campus1}
          alt="EduReach Campus"
          className="about-main-image"
        />

        {/* Small overlay image */}

        <img
          src={images.students}
          alt="EduReach Students"
          className="about-small-image"
        />

      </div>

      {/* Right - Content */}

      <div className="about-content">

        <p className="about-subtitle">
          {aboutContent.subtitle}
        </p>

        <h2 className="about-title">
          {aboutContent.title}
        </h2>

        <p className="about-description">
          {aboutContent.description}
        </p>

        {/* Stat Grid */}

        <div className="about-stats">

          {aboutContent.highlights.map((item) => (
            <div
              key={item.label}
              className="about-stat-card"
            >
              <p className="about-stat-value">
                {item.value}
              </p>

              <p className="about-stat-label">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>

);
}
