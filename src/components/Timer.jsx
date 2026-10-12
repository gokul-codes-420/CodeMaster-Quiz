import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { sound } from '../utils/sound';

export function Timer({ timeLeft, maxTime, onTimeOut, active }) {
  useEffect(() => {
    if (maxTime > 0 && active && timeLeft <= 5 && timeLeft > 0) {
      sound.playTimerWarning();
    }
    if (maxTime > 0 && active && timeLeft === 0) {
      onTimeOut();
    }
  }, [timeLeft, active, onTimeOut, maxTime]);

  if (maxTime <= 0) {
    return (
      <div className="timer-badge">
        <Clock size={14} />
        <span>Untimed</span>
      </div>
    );
  }

  const isLow = timeLeft <= 5;

  return (
    <div className={`timer-badge ${isLow ? 'timer-low' : ''}`}>
      <Clock size={14} />
      <span>{timeLeft}s remaining</span>
    </div>
  );
}
