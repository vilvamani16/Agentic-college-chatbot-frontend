import { achievementsContent } from "../../data/content";

import "./index.css";

export default function AchievementsSection() {
return ( <section className="achievements-section">

  <div className="achievements-container">

    <div className="achievements-grid">

      {achievementsContent.stats.map((stat) => (
        <div
          key={stat.label}
          className="achievement-item"
        >
          <p className="achievement-value">
            {stat.value}
          </p>

          <p className="achievement-label">
            {stat.label}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>


);
}
