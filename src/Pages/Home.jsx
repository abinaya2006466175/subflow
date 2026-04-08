import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    initials: "MN",
    name: "MadhuMitha",
    role: "VIP, Lumix Labs",
    text: "Switching to SubSync was the best call we made. The dashboard alone saved our team hours every week.",
  },
  {
    initials: "T",
    name: "Deva Dharshini",
    role: "Founder, Stackd.io",
    text: "Best pricing I've seen. Premium plan delivers everything advertised — and then some. Highly recommend.",
  },
  {
    initials: "RP",
    name: "Deepika Silk",
    role: "Product Lead, Orion",
    text: "Support team is phenomenal. Got a reply in under 2 minutes on a Sunday. Never experienced that before.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        
        <h1 className="hero__title">
          The smarter way to <span className="hero__title-accent">subscribe &amp; grow</span>
        </h1>
        <p className="hero__subtitle">
          Flexible plans, enterprise features, and zero friction. Join thousands of teams already using Subflow.
        </p>
        <div className="hero__btns">
          <Link to="/pricing">
            <button className="btn btn--primary">View Plans</button>
          </Link>
          <Link to="/dashboard">
            <button className="btn btn--secondary">Go to Dashboard</button>
          </Link>
        </div>
        <div className="hero__stats">
          <div className="hero__stat"><div className="hero__stat-num">12,000+</div><div className="hero__stat-label">Active users</div></div>
          <div className="hero__stat"><div className="hero__stat-num">99.9%</div><div className="hero__stat-label">Uptime SLA</div></div>
          <div className="hero__stat"><div className="hero__stat-num">4.9★</div><div className="hero__stat-label">Avg. rating</div></div>
          <div className="hero__stat"><div className="hero__stat-num">24/7</div><div className="hero__stat-label">Support</div></div>
        </div>
      </section>

      

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonials__inner">
          <div className="section-label section-label--light">Testimonials</div>
          <h2 className="section-title section-title--light">Loved by teams worldwide</h2>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-section__title">Ready to get started?</h2>
        <p className="cta-section__desc">
          Join 12,000+ users who upgraded their experience with Subflow. Free 14-day trial, no card required.
        </p>
        <Link to="/pricing">
          <button className="btn btn--white">Choose a Plan →</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 Subflow. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;