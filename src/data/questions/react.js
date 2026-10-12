export const reactQuestions = [
  {
    id: 'react-1',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which React hook is commonly used to manage state in a functional component?',
    options: ['useEffect', 'useState', 'useRoute', 'useClass'],
    correctAnswer: 'useState',
    explanation: 'useState is the primary React hook for declaring state variables in functional components.',
    hint: 'State management in function components.'
  },
  {
    id: 'react-2',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is JSX in React?',
    options: ['Java Syntax Extension', 'A syntax extension for JavaScript that looks like HTML', 'A CSS preprocessor', 'A database query language'],
    correctAnswer: 'A syntax extension for JavaScript that looks like HTML',
    explanation: 'JSX allows writing HTML-like markup inside JavaScript code files, transpiled down to React.createElement.',
    hint: 'JavaScript XML.'
  },
  {
    id: 'react-3',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When rendering lists of elements in React, each item should have a unique _______ prop.',
    options: ['id', 'key', 'index', 'ref'],
    correctAnswer: 'key',
    explanation: 'The "key" prop helps React identify which items have changed, been added, or removed during DOM reconciliation.',
    hint: 'A special prop key for diffing.'
  },
  {
    id: 'react-4',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which hook performs side effects such as data fetching, subscriptions, or manual DOM manipulations?',
    options: ['useMemo', 'useEffect', 'useCallback', 'useContext'],
    correctAnswer: 'useEffect',
    explanation: 'useEffect runs after render to manage side effects, syncing with external systems or timers.',
    hint: 'Used for side-effects.'
  },
  {
    id: 'react-5',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'true_false',
    question: 'React component names must start with an uppercase letter to distinguish them from standard HTML tags.',
    options: ['True', 'False', 'Only class components', 'Only in Next.js'],
    correctAnswer: 'True',
    explanation: 'React treats lowercase JSX tags as native HTML tags (like <div>) and capitalized tags as custom components (like <MyComponent />).',
    hint: 'PascalCase is required for custom components.'
  },
  {
    id: 'react-6',
    categoryId: 'react',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this component render?',
    codeSnippet: 'function Greeting({ name = "World" }) {\n  return <h1>Hello, {name}!</h1>;\n}\n// Rendered as: <Greeting />',
    options: ['Hello, !', 'Hello, World!', 'Hello, undefined!', 'Error: name is required'],
    correctAnswer: 'Hello, World!',
    explanation: 'The default parameter name = "World" kicks in when the prop is omitted.',
    hint: 'Destructuring with default parameters.'
  },
  {
    id: 'react-7',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'output',
    question: 'How many times will this useEffect run?',
    codeSnippet: 'useEffect(() => {\n  console.log("Mounted");\n}, []);',
    options: ['On every render', 'Only once when the component mounts', 'Never', 'Whenever state changes'],
    correctAnswer: 'Only once when the component mounts',
    explanation: 'An empty dependency array [] tells React the effect does not depend on any props or state, running only upon mounting.',
    hint: 'Empty dependency array means mount only.'
  },
  {
    id: 'react-8',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Why is this React Hook call invalid?',
    codeSnippet: 'function MyComponent({ condition }) {\n  if (condition) {\n    const [count, setCount] = useState(0);\n  }\n  return <div>{condition}</div>;\n}',
    options: [
      'Hooks cannot be called conditionally inside if statements',
      'useState must take a string argument',
      'Missing return statement inside if',
      'count cannot be named count'
    ],
    correctAnswer: 'Hooks cannot be called conditionally inside if statements',
    explanation: 'The Rules of Hooks require calling hooks at the top level of the component, never inside loops, conditions, or nested functions.',
    hint: 'Don\'t call Hooks inside loops, conditions, or nested functions.'
  },
  {
    id: 'react-9',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the primary purpose of the useMemo hook?',
    options: [
      'To memoize expensive calculations and avoid recomputing on every render',
      'To cache server HTTP responses in localStorage',
      'To trigger animations',
      'To store mutable references that persist without re-renders'
    ],
    correctAnswer: 'To memoize expensive calculations and avoid recomputing on every render',
    explanation: 'useMemo caches the result of a computation between renders until one of its dependencies changes.',
    hint: 'Memoizing computed values.'
  },
  {
    id: 'react-10',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the difference between useMemo and useCallback?',
    options: [
      'useMemo memoizes a computed value; useCallback memoizes a function definition',
      'useCallback is for async code; useMemo is for synchronous code',
      'useMemo triggers re-renders; useCallback prevents re-renders',
      'They are exact aliases'
    ],
    correctAnswer: 'useMemo memoizes a computed value; useCallback memoizes a function definition',
    explanation: 'useCallback(fn, deps) is equivalent to useMemo(() => fn, deps), caching the callback function instance itself.',
    hint: 'One caches a value; the other caches a callback function.'
  },
  {
    id: 'react-11',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The _______ hook allows creating a mutable reference whose .current property persists across re-renders without triggering a re-render.',
    options: ['useState', 'useRef', 'useContext', 'useId'],
    correctAnswer: 'useRef',
    explanation: 'useRef returns an object with a .current property that can hold any value or DOM reference without causing re-renders.',
    hint: 'Short for reference.'
  },
  {
    id: 'react-12',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is Prop Drilling in React applications?',
    options: [
      'Passing props through several layers of intermediary components that do not need the data themselves',
      'Testing props with Jest and React Testing Library',
      'Encrypting props for secure transport',
      'Validating props with TypeScript'
    ],
    correctAnswer: 'Passing props through several layers of intermediary components that do not need the data themselves',
    explanation: 'Prop drilling occurs when data is threaded deeply down the component tree simply to reach a distant child component.',
    hint: 'Passing props deeply through intermediate layers.'
  },
  {
    id: 'react-13',
    categoryId: 'react',
    difficulty: 'medium',
    type: 'output',
    question: 'What will the count value be after clicking the button once?',
    codeSnippet: 'const [count, setCount] = useState(0);\nconst handleClick = () => {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n};',
    options: ['1', '3', '0', 'NaN'],
    correctAnswer: '1',
    explanation: 'React batches state updates and uses the closed-over count (0) for all three calls. To get 3, updater functions setCount(c => c + 1) must be used.',
    hint: 'State updates in the same event closure use the snapshot of current state.'
  },
  {
    id: 'react-14',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is React Fiber in React architecture?',
    options: [
      'A CSS styling library similar to Tailwind',
      'The complete rewrite of the React reconciliation engine enabling incremental rendering and concurrency',
      'A WebAssembly compiler for JSX',
      'A global state management library'
    ],
    correctAnswer: 'The complete rewrite of the React reconciliation engine enabling incremental rendering and concurrency',
    explanation: 'Fiber is the reconciliation algorithm introduced in React 16 that allows splitting work into chunks and prioritizing rendering updates.',
    hint: 'The core reconciler architecture enabling Concurrent React.'
  },
  {
    id: 'react-15',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the useTransition hook enable in modern React?',
    options: [
      'Marks state updates as non-urgent transitions so the UI stays responsive during heavy updates',
      'Creates CSS cubic-bezier transitions for DOM elements',
      'Transitions between dark mode and light mode',
      'Handles HTTP redirects'
    ],
    correctAnswer: 'Marks state updates as non-urgent transitions so the UI stays responsive during heavy updates',
    explanation: 'useTransition lets you mark updates as transitions, preventing them from blocking urgent user interactions like typing or clicking.',
    hint: 'Marks updates as non-blocking transitions.'
  },
  {
    id: 'react-16',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What is required for a component to act as an Error Boundary in React?',
    options: [
      'It must be a class component implementing static getDerivedStateFromError() or componentDidCatch()',
      'It must wrap its JSX in <ErrorBoundary fallback={...}>',
      'It must use the useCatch() hook',
      'It must be written in TypeScript'
    ],
    correctAnswer: 'It must be a class component implementing static getDerivedStateFromError() or componentDidCatch()',
    explanation: 'As of current React versions, Error Boundaries must still be class components with lifecycle methods.',
    hint: 'Error boundaries require specific class lifecycle methods.'
  },
  {
    id: 'react-17',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the useSyncExternalStore hook provide in React 18+?',
    options: [
      'Subscribes to external stores in a way that avoids tearing in concurrent renderers',
      'Syncs component state to browser IndexedDB',
      'Handles WebSocket sync automatically',
      'Backs up state to cloud storage'
    ],
    correctAnswer: 'Subscribes to external stores in a way that avoids tearing in concurrent renderers',
    explanation: 'useSyncExternalStore is recommended for state libraries (like Redux, Zustand) to subscribe to external stores without tearing under concurrent mode.',
    hint: 'Solves concurrent rendering tearing issues for third-party stores.'
  },
  {
    id: 'react-18',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'output',
    question: 'What will happen with this cleanup effect?',
    codeSnippet: 'useEffect(() => {\n  const id = setInterval(() => console.log("tick"), 1000);\n  return () => clearInterval(id);\n}, [dependency]);',
    options: [
      'The cleanup function runs before the component unmounts and before re-running the effect when dependency changes',
      'The cleanup runs only when the browser window closes',
      'The interval never stops',
      'Throws TypeError'
    ],
    correctAnswer: 'The cleanup function runs before the component unmounts and before re-running the effect when dependency changes',
    explanation: 'Effect cleanup functions execute prior to unmounting and prior to re-executing the effect with updated dependencies.',
    hint: 'Runs before subsequent effect invocations and on unmount.'
  },
  {
    id: 'react-19',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In React 18+, React automatically batches state updates inside asynchronous promises, setTimeouts, and native event handlers.',
    options: ['True', 'False', 'Only if flushSync is called', 'Only in class components'],
    correctAnswer: 'True',
    explanation: 'React 18 introduced Automatic Batching for all state updates regardless of where they originate (promises, timeouts, native events).',
    hint: 'Automatic batching was a headline feature of React 18.'
  },
  {
    id: 'react-20',
    categoryId: 'react',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the useDeferredValue hook do?',
    options: [
      'Defers updating a value until urgent user interactions complete, letting background re-rendering catch up',
      'Schedules an alert after 5 seconds',
      'Delays network API responses',
      'Caches values in localStorage'
    ],
    correctAnswer: 'Defers updating a value until urgent user interactions complete, letting background re-rendering catch up',
    explanation: 'useDeferredValue accepts a value and defers generating the new state copy until more critical updates have rendered.',
    hint: 'Defers updating a portion of the UI.'
  }
];
