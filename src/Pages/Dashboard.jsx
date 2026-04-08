import React from "react";
import { Link } from "react-router-dom";
import { useSubscription } from "../context/SubscriptionContext";
import { useToast } from "../context/ToastContext";

const PLAN_PRICE = { Starter: "$0", Pro: "$19", Enterprise: "$49" };

function Dashboard() {
  const { plan, billingCycle, subscribedAt, cancelPlan } = useSubscription();
  const { showToast } = useToast();

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your subscription?")) {
      cancelPlan();
      showToast("Your subscription has been cancelled.", "info");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "60px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "6px" }}>
        Dashboard
      </h2>
      <p style={{ color: "#475569", marginBottom: "32px" }}>
        Manage your subscription below.
      </p>

      {!plan ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>📭</div>
          <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>No active subscription</h3>
          <p style={{ color: "#475569", marginBottom: "24px" }}>Choose a plan to get started.</p>
          <Link to="/pricing">
            <button className="btn btn--primary">Browse Plans →</button>
          </Link>
        </div>
      ) : (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px" }}>

          {/* Active Badge */}
          <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: "12px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px" }}>
            ● Active
          </span>

          {/* Plan Name */}
          <h3 style={{ fontSize: "22px", fontWeight: "700", margin: "14px 0 4px" }}>
            {plan} Plan
          </h3>
          <p style={{ color: "#475569", fontSize: "14px", marginBottom: "24px" }}>
            Your subscription is active and renewing on Apr 27, 2026.
          </p>

          {/* Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              { label: "Plan",     value: plan },
              { label: "Price",    value: `${PLAN_PRICE[plan]} / month` },
              { label: "Billing",  value: billingCycle === "yearly" ? "Yearly" : "Monthly" },
              { label: "Subscribed", value: subscribedAt ? subscribedAt.toLocaleDateString() : "—" },
              { label: "Next Renewal", value: "Apr 27, 2026" },
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", paddingBottom: "12px", borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ color: "#94a3b8" }}>{row.label}</span>
                <span style={{ fontWeight: "600" }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/pricing" style={{ flex: 1 }}>
              <button className="btn btn--primary" style={{ width: "100%", padding: "11px" }}>
                Change Plan
              </button>
            </Link>
            <button
              onClick={handleCancel}
              style={{ flex: 1, padding: "11px", borderRadius: "10px", border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "500", color: "#ef4444" }}
            >
              Cancel Plan
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;