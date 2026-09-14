import { images, siteConfig } from "../../data/content";

import "./index.css";

export default function HeroSection() {
return (
<section
className="hero-section"
style={{
backgroundImage: `url(${images.hero})`,
}}
>

```
  <div className="hero-overlay"></div>

  <div className="hero-content-wrapper">

    <div className="hero-content">

      <p className="hero-established">
        {siteConfig.established} · Hyderabad, Telangana
      </p>

      <h1 className="hero-title">
        Welcome to <br />

        <span className="hero-highlight">
          {siteConfig.name} College
        </span>
      </h1>

      <p className="hero-description">
        {siteConfig.tagline}. Premier engineering institution with
        92% placement rate and partnerships with Google, Microsoft
        &amp; Amazon.
      </p>

      <a
        href="#courses"
        className="hero-button"
      >
        Explore Programs
      </a>

    </div>

  </div>

</section>

);
}
