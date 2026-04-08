import React from "react";

function PlanCard({ name, monthlyPrice, yearlyPrice, description, features, isPopular, isYearly, onSubscribe }) {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const oldPrice = isYearly && monthlyPrice !== "$0" ? monthlyPrice : null;

  return (
    <div className={`plan-card ${isPopular ? "plan-card--popular" : ""}`}>
      {isPopular && <div className="plan-card__popular-tag">⭐ Most Popular</div>}

      <div className="plan-card__name">{name}</div>

      <div className="plan-card__price">
        <span className="plan-card__price-num">{price}</span>
        <span className="plan-card__price-period">/mo</span>
      </div>

      {oldPrice && (
        <div className="plan-card__price-old">{oldPrice}/mo billed monthly</div>
      )}

      <p className="plan-card__desc">{description}</p>
      <hr className="plan-card__divider" />

      <ul className="plan-card__features">
        {features.map((f, i) => (
          <li key={i} className="plan-card__feature-item">
            <span className={`plan-card__check ${f.included ? (isPopular ? "plan-card__check--green" : "") : "plan-card__check--cross"}`}>
              {f.included ? "✓" : "✕"}
            </span>
            <span style={!f.included ? { textDecoration: "line-through", opacity: 0.5 } : {}}>
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`plan-card__btn ${isPopular ? "plan-card__btn--filled" : "plan-card__btn--outline"}`}
        onClick={() => onSubscribe(name, price)}
      >
        {price === "$0" ? "Get Started Free" : `Subscribe to ${name}`}
      </button>
    </div>
  );
}

export default PlanCard;