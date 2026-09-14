import { coursesContent, images } from "../../data/content";
import { BookOpen, Users } from "lucide-react";

import "./index.css";

export default function CoursesSection() {
return ( <section className="courses-section" id="courses">

```
  <div className="courses-container">

    {/* Header */}

    <div className="courses-header">
      <p className="courses-subtitle">
        World-Class Education
      </p>

      <h2 className="courses-title">
        Programs Offered
      </h2>
    </div>

    {/* B.Tech */}

    <h3 className="program-title">
      B.Tech Programs (4 Years)
    </h3>

    <div className="btech-grid">

      {coursesContent.btech.map((course) => (
        <div
          key={course.name}
          className="course-card"
        >

          <div className="course-card-content">

            <BookOpen className="course-icon" />

            <div>

              <h4 className="course-name">
                {course.name}
              </h4>

              <div className="course-details">

                <span className="course-seats">
                  <Users className="small-icon" />
                  {course.seats} seats
                </span>

                <span className="course-average">
                  {course.avg}
                </span>

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>

    {/* M.Tech & MBA */}

    <div className="advanced-programs">

      {/* M.Tech */}

      <div className="advanced-card">

        <div className="advanced-header">

          <img
            src={images.tech2}
            alt="Technology"
            className="program-image"
          />

          <h3 className="advanced-title">
            M.Tech Programs
          </h3>

        </div>

        <div className="mtech-list">

          {coursesContent.mtech.map((course) => (
            <div
              key={course.name}
              className="mtech-item"
            >
              <span className="mtech-name">
                {course.name}
              </span>

              <span className="mtech-seats">
                {course.seats} seats
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* MBA */}

      <div className="advanced-card">

        <div className="advanced-header">

          <img
            src={images.tech3}
            alt="MBA"
            className="program-image"
          />

          <h3 className="advanced-title">
            MBA Program
          </h3>

        </div>

        <p className="mba-name">
          {coursesContent.mba.name}
        </p>

        <div className="mba-details">

          <span className="mba-seats">
            {coursesContent.mba.seats} seats
          </span>

          <span className="mba-average">
            {coursesContent.mba.avg}
          </span>

        </div>

        <p className="mba-description">
          Specializations in Finance, Marketing, HR, and IT
        </p>

      </div>

    </div>

  </div>

</section>

);
}
