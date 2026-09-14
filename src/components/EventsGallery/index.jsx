import { eventsGallery } from "../../data/content";
import "./index.css";

const EventsGallery = () => {
return ( <section className="events-section"> <div className="events-container">

```
    <div className="events-header">
      <p className="events-subtitle">
        Life at EduReach
      </p>

      <h2 className="events-title">
        Events & Highlights
      </h2>
    </div>

    <div className="events-grid">
      {eventsGallery.map((item) => (
        <div
          key={item.title}
          className="event-card"
        >
          <img
            src={item.image}
            alt={item.title}
            className="event-image"
          />

          <div className="event-overlay">
            <p className="event-title">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
};

export default EventsGallery;
