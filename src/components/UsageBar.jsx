import React from "react";

function UsageBar({ label, used, total, unit = "" }) {
  const pct = Math.min((used / total) * 100, 100);
  const isWarning = pct >= 75;

  return (
    <div className="usage-bar-wrap">
      <div className="usage-bar-wrap__labels">
        <span>{label}</span>
        <span>
          {used} / {total} {unit}
        </span>
      </div>
      <div className="usage-bar">
        <div
          className={`usage-bar__fill ${isWarning ? "usage-bar__fill--warn" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default UsageBar;