import { topRecruiters, deptPlacements, images } from "../../data/content";
import { TrendingUp } from "lucide-react";
import "./index.css";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="hiring-section">
      <div className="hiring-container">

        {/* Header */}
        <div className="hiring-header">
          <p className="hiring-subtitle">
            Where Our Students Go
          </p>

          <h2>
            Placement Highlights 2023–24
          </h2>
        </div>

        <div className="hiring-grid">

          {/* Average Package */}
          <div className="package-card">
            <div className="package-header">

              <img
                src={images.tech4}
                alt="Technology"
                className="package-image"
              />

              <h3>
                <TrendingUp className="trend-icon" />
                Average Package by Department
              </h3>
            </div>

            <div className="department-list">
              {deptPlacements.map((item) => (
                <div className="department-item" key={item.dept}>

                  <div className="department-info">
                    <span>{item.dept}</span>
                    <strong>{item.avg}</strong>
                  </div>

                  <div className="progress-background">
                    <div
                      className="progress-bar"
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="recruiters-section">

            {/* Images */}
            <div className="recruiter-images">

              <img
                src={images.recruter1}
                alt="Fest"
              />

              <img
                src={images.recruter2}
                alt="Event"
              />

              <img
                src={images.moreStudents}
                alt="Students"
              />

            </div>

            {/* Top Recruiters */}
            <div className="recruiter-card">

              <h3>Top Recruiters</h3>

              <div className="recruiter-tags">
                {topRecruiters.map((company) => (
                  <span key={company}>
                    {company}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}