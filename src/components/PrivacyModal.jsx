import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export function PrivacyModal({ onClose }) {
  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-icon-badge bg-primary-glow">
              <ShieldCheck size={24} className="text-emerald" />
            </div>
            <div>
              <h3 className="modal-title">Privacy Policy</h3>
              <p className="modal-subtitle">Your data privacy matters</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body privacy-body text-secondary text-sm leading-relaxed">
          <h4 className="text-primary font-semibold">1. Local Storage Exclusivity</h4>
          <p className="mb-3">
            CodeMaster Quiz does not transmit your personal answers, scores, streaks, or nickname to external tracking servers. Everything is stored locally on your device via standard HTML5 LocalStorage.
          </p>

          <h4 className="text-primary font-semibold">2. No Ad-Tracking or Fingerprinting</h4>
          <p className="mb-3">
            We do not load third-party ad pixels, cross-site telemetry beacons, or behavioral profiling trackers.
          </p>

          <h4 className="text-primary font-semibold">3. Clear or Reset Any Time</h4>
          <p>
            You can purge your entire history, achievements, and saved settings at any time using the Reset Data button in Settings.
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
