import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";
import ConfirmModal from "../components/ConfirmModal";
import { useSubscription } from "../context/SubscriptionContext";
import { useToast } from "../context/ToastContext";

const PLANS = [
  {
    name: "Starter",
    monthlyPrice: "₹0",
    yearlyPrice: "₹0",
    description: "Perfect for individuals just getting started.",
    features: [
      { label: "Up to 3 projects", included: true },
      { label: "5 GB storage", included: true },
      { label: "Basic analytics", included: true },
      { label: "Community support", included: true },
      { label: "AI features", included: false },
      { label: "Priority support", included: false },
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    monthlyPrice: "₹19",
    yearlyPrice: "₹1500",
    description: "Everything teams need to move fast and ship more.",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "100 GB storage", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Priority email support", included: true },
      { label: "AI-powered tools", included: true },
      { label: "Dedicated manager", included: false },
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "₹799",
    yearlyPrice: "₹3999",
    description: "Dedicated resources and white-glove support for large teams.",
    features: [
      { label: "Everything in Pro", included: true },
      { label: "1 TB storage", included: true },
      { label: "Custom integrations", included: true },
      { label: "24/7 live chat support", included: true },
      { label: "AI + advanced AI", included: true },
      { label: "Dedicated manager", included: true },
    ],
    isPopular: false,
  },
];



function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [modal, setModal] = useState(null);
  const { subscribe } = useSubscription();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = (planName, price) => {
    setModal({ planName, planPrice: price.replace("$", "") });
  };

  const handleConfirm = () => {
    subscribe(modal.planName, isYearly ? "yearly" : "monthly");
    setModal(null);
    showToast(` Successfully subscribed to ${modal.planName} plan!`, "success");
    navigate("/Dashboard");
  };

  return (
    <div className="pricing-page">
      <div className="pricing-page__header">
        <div className="section-label">Pricing</div>
        <h2 className="pricing-page__title">Simple, transparent pricing</h2>
        <p className="pricing-page__subtitle">Start free, scale as you grow. Downgrade or cancel anytime.</p>

        <div className="billing-toggle-row">
          <span className={`billing-toggle-row__label ${!isYearly ? "billing-toggle-row__label--active" : ""}`}>Monthly</span>
          <button
            className={`billing-toggle ${isYearly ? "billing-toggle--on" : ""}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle billing cycle"
          />
          <span className={`billing-toggle-row__label ${isYearly ? "billing-toggle-row__label--active" : ""}`}>Yearly</span>
          <span className="billing-toggle-row__save-badge">Save 20%</span>
        </div>
      </div>

      <div className="plans-grid">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
            isYearly={isYearly}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>

     

      {modal && (
        <ConfirmModal
          planName={modal.planName}
          planPrice={modal.planPrice}
          onConfirm={handleConfirm}
          onCancel={() => setModal(null)}
        />
      )}
    </div>
  );
}

export default Pricing;