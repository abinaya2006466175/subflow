import React from "react";

function ConfirmModal({ planName, planPrice, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={(e) => e.target.classList.contains("modal-overlay") && onCancel()}>
      <div className="modal">
        <h3 className="modal__title">Confirm Subscription</h3>
        <p className="modal__desc">
          You're about to subscribe to the plan below. You can cancel anytime from your dashboard.
        </p>

        <div className="modal__summary">
          <div className="modal__summary-name">{planName} Plan</div>
          <div className="modal__summary-price">{planPrice}/mo</div>
        </div>

        <div className="modal__actions">
          <button className="modal__btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal__btn-confirm" onClick={onConfirm}>
            Confirm &amp; Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;