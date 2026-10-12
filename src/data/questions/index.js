import { javaQuestions } from './java';
import { pythonQuestions } from './python';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';
import { javascriptQuestions } from './javascript';
import { nodejsQuestions } from './nodejs';
import { reactQuestions } from './react';
import { cQuestions } from './c';
import { cppQuestions } from './cpp';
import { csharpQuestions } from './csharp';
import { phpQuestions } from './php';
import { sqlQuestions } from './sql';
import { typescriptQuestions } from './typescript';
import { kotlinQuestions } from './kotlin';
import { goQuestions } from './go';
import { rubyQuestions } from './ruby';
import { swiftQuestions } from './swift';
import { dsaQuestions } from './dsa';
import { oopQuestions } from './oop';
import { csfundamentalsQuestions } from './csfundamentals';

export const ALL_QUESTIONS_MAP = {
  java: javaQuestions,
  python: pythonQuestions,
  html: htmlQuestions,
  css: cssQuestions,
  javascript: javascriptQuestions,
  nodejs: nodejsQuestions,
  react: reactQuestions,
  c: cQuestions,
  cpp: cppQuestions,
  csharp: csharpQuestions,
  php: phpQuestions,
  sql: sqlQuestions,
  typescript: typescriptQuestions,
  kotlin: kotlinQuestions,
  go: goQuestions,
  ruby: rubyQuestions,
  swift: swiftQuestions,
  dsa: dsaQuestions,
  oop: oopQuestions,
  csfundamentals: csfundamentalsQuestions
};

export const ALL_QUESTIONS_FLAT = [
  ...javaQuestions,
  ...pythonQuestions,
  ...htmlQuestions,
  ...cssQuestions,
  ...javascriptQuestions,
  ...nodejsQuestions,
  ...reactQuestions,
  ...cQuestions,
  ...cppQuestions,
  ...csharpQuestions,
  ...phpQuestions,
  ...sqlQuestions,
  ...typescriptQuestions,
  ...kotlinQuestions,
  ...goQuestions,
  ...rubyQuestions,
  ...swiftQuestions,
  ...dsaQuestions,
  ...oopQuestions,
  ...csfundamentalsQuestions
];

/**
 * Fisher-Yates shuffle helper
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get question bank for a category
 */
export function getQuestionsByCategory(categoryId) {
  return ALL_QUESTIONS_MAP[categoryId] || [];
}

/**
 * Get single question by ID
 */
export function getQuestionById(id) {
  return ALL_QUESTIONS_FLAT.find(q => q.id === id);
}

/**
 * Get filtered questions with custom count, difficulty, and shuffle
 */
export function getQuizQuestions({
  categoryId = 'javascript',
  difficulty = 'all', // 'all', 'easy', 'medium', 'hard'
  limit = 10, // 5, 10, 20, or 'all'
  shuffleQuestions = true,
  shuffleOptions = true
}) {
  let pool = categoryId === 'random-mix'
    ? [...ALL_QUESTIONS_FLAT]
    : [...(ALL_QUESTIONS_MAP[categoryId] || [])];

  if (difficulty && difficulty !== 'all') {
    pool = pool.filter(q => q.difficulty === difficulty);
  }

  if (shuffleQuestions) {
    pool = shuffleArray(pool);
  }

  const count = limit === 'all' ? pool.length : Math.min(Number(limit) || 10, pool.length);
  const selected = pool.slice(0, count);

  return selected.map(q => {
    if (shuffleOptions) {
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    }
    return { ...q };
  });
}

/**
 * Deterministic daily challenge generator based on date string (YYYY-MM-DD)
 */
export function getDailyQuizQuestions(dateStr = new Date().toISOString().slice(0, 10)) {
  // Simple deterministic seed from date string
  let seed = 0;
  for (let i = 0; i < dateStr.length; i++) {
    seed = (seed << 5) - seed + dateStr.charCodeAt(i);
    seed |= 0;
  }

  const categoryKeys = Object.keys(ALL_QUESTIONS_MAP);
  const selected = [];

  // Pick 5 questions from diverse categories for the daily challenge
  for (let i = 0; i < 5; i++) {
    const catIdx = Math.abs((seed + i * 7)) % categoryKeys.length;
    const cat = categoryKeys[catIdx];
    const catPool = ALL_QUESTIONS_MAP[cat];
    const qIdx = Math.abs((seed + i * 13)) % catPool.length;
    selected.push({
      ...catPool[qIdx],
      dailyIndex: i + 1
    });
  }

  return selected;
}
