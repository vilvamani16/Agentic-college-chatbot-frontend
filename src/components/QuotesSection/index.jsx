import { useState, useEffect } from "react";
import { quotesContent } from "../../data/content";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import "./index.css";

export default function QuotesSection() {
const [current, setCurrent] = useState(0);
const [fade, setFade] = useState(true);

// Auto rotate every 5 seconds
useEffect(() => {
const timer = setInterval(() => {
setFade(false);

  setTimeout(() => {
    setCurrent((prev) => (prev + 1) % quotesContent.length);
    setFade(true);
  }, 300);
}, 5000);

return () => clearInterval(timer);

}, []);

const goTo = (index) => {
setFade(false);

setTimeout(() => {
  setCurrent(index);
  setFade(true);
}, 300);

};

const prev = () => {
goTo(
(current - 1 + quotesContent.length) %
quotesContent.length
);
};

const next = () => {
goTo(
(current + 1) %
quotesContent.length
);
};

return (
<section className="quotes-section">

  <div className="quotes-container">

    {/* Quote Icon */}

    <div className="quote-icon-wrapper">
      <Quote className="quote-icon" />
    </div>

    {/* Quote Content */}

    <div className="quote-slider">

      {/* Previous */}

      <button
        onClick={prev}
        className="quote-arrow quote-arrow-left"
        aria-label="Previous quote"
      >
        <ChevronLeft />
      </button>

      {/* Quote */}

      <div
        className="quote-content"
        style={{
          opacity: fade ? 1 : 0,
        }}
      >

        <p className="quote-text">
          &ldquo;
          {quotesContent[current].text}
          &rdquo;
        </p>

        <p className="quote-author">
          &mdash; {quotesContent[current].author}
        </p>

      </div>

      {/* Next */}

      <button
        onClick={next}
        className="quote-arrow quote-arrow-right"
        aria-label="Next quote"
      >
        <ChevronRight />
      </button>

    </div>

    {/* Dots */}

    <div className="quote-dots">

      {quotesContent.map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`quote-dot ${
            index === current ? "active" : ""
          }`}
          aria-label={`Go to quote ${index + 1}`}
        />
      ))}

    </div>

  </div>

</section>

);
}