import { campusFeatures } from "../../data/content";
import "./index.css";

export default function StudentLifeSection() {
return ( <section className="student-life-section" id="campus"> <div className="student-life-container">

```
    {/* Header */}

    <div className="student-life-header">
      <p className="student-life-subtitle">
        Beyond the Classroom
      </p>

      <h2 className="student-life-title">
        Campus & Student Life
      </h2>
    </div>

    {/* Campus Features */}

    <div className="campus-grid">
      {campusFeatures.map((feature) => (
        <div
          key={feature.title}
          className="campus-card"
        >
          {/* Image */}

          <img
            src={feature.image}
            alt={feature.title}
            className="campus-image"
          />

          {/* Overlay */}

          <div className="campus-overlay">

            <div className="campus-content">

              <h3 className="campus-title">
                {feature.title}
              </h3>

              <p className="campus-description">
                {feature.desc}
              </p>

            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
}
