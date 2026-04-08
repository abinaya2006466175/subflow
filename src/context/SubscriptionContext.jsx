import React, { createContext, useState, useContext } from "react";

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [plan, setPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [subscribedAt, setSubscribedAt] = useState(null);

  const subscribe = (selectedPlan, cycle = "monthly") => {
    setPlan(selectedPlan);
    setBillingCycle(cycle);
    setSubscribedAt(new Date());
  };

  const cancelPlan = () => {
    setPlan(null);
    setBillingCycle("monthly");
    setSubscribedAt(null);
  };

  return (
    <SubscriptionContext.Provider
      value={{ plan, billingCycle, subscribedAt, subscribe, cancelPlan }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);