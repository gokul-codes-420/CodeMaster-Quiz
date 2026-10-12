import React from 'react';
import { Sparkles, Clock, Trophy, BookOpen, Layers, Terminal } from 'lucide-react';

export function KeyFeatures() {
  const features = [
    {
      icon: <Terminal size={22} />,
      title: 'Real Code Snippets & Gotchas',
      desc: 'Multiple choice, output prediction, syntax error finding, and fill-in-the-blank questions.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Detailed Explanations & Hints',
      desc: 'Learn the reasoning behind every answer with in-depth concept notes and clue drawers.'
    },
    {
      icon: <Clock size={22} />,
      title: 'Exam & Practice Modes',
      desc: 'Simulate high-pressure timed exams or practice relaxed with instant feedback per question.'
    },
    {
      icon: <Trophy size={22} />,
      title: 'Streaks, XP & Local Divisions',
      desc: 'Track daily study streaks, level up your developer profile, and unlock milestone achievements.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title-left">Key Features</h2>
        <div className="features-grid">
          {features.map((feat, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrap">
                {feat.icon}
              </div>
              <div className="feature-text">
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
