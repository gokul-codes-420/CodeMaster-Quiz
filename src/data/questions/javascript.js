export const javascriptQuestions = [
  {
    id: 'js-1',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword declares a block-scoped variable that can be reassigned?',
    options: ['const', 'let', 'static', 'final'],
    correctAnswer: 'let',
    explanation: '"let" declares block-scoped variables that can be reassigned. "const" cannot be reassigned.',
    hint: 'Introduced in ES6 alongside const.'
  },
  {
    id: 'js-2',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'output',
    question: 'What is the output of typeof NaN in JavaScript?',
    options: ['"number"', '"nan"', '"undefined"', '"object"'],
    correctAnswer: '"number"',
    explanation: 'Despite standing for "Not-a-Number", NaN is technically a numeric data type value in JavaScript.',
    hint: 'It is a numeric value representing an unrepresentable number.'
  },
  {
    id: 'js-3',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this expression return in JavaScript?',
    codeSnippet: 'console.log(2 + "2" - 1);',
    options: ['21', '3', 'NaN', '"21"'],
    correctAnswer: '21',
    explanation: '2 + "2" results in string concatenation "22". Then the minus operator coerces "22" to number 22, and 22 - 1 = 21.',
    hint: '+ performs string concatenation, but - forces numeric arithmetic.'
  },
  {
    id: 'js-4',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which method adds one or more elements to the end of an array and returns its new length?',
    options: ['unshift()', 'pop()', 'push()', 'shift()'],
    correctAnswer: 'push()',
    explanation: 'push() appends to the end of the array, while unshift() adds to the beginning.',
    hint: 'Pushes an item onto the end.'
  },
  {
    id: 'js-5',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In JavaScript, == performs type coercion before comparison, whereas === checks both value and type.',
    options: ['True', 'False', 'Only for objects', 'Only in strict mode'],
    correctAnswer: 'True',
    explanation: 'The strict equality operator === checks type and value without implicit type conversions.',
    hint: 'Strict equality vs loose equality.'
  },
  {
    id: 'js-6',
    categoryId: 'javascript',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To convert a JSON string into a JavaScript object, use JSON._______(string).',
    options: ['stringify', 'parse', 'toObject', 'decode'],
    correctAnswer: 'parse',
    explanation: 'JSON.parse() deserializes a JSON string into a JS object. JSON.stringify() does the inverse.',
    hint: 'You parse incoming text data.'
  },
  {
    id: 'js-7',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the output of this setTimeout code?',
    codeSnippet: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}',
    options: ['0 1 2', '3 3 3', 'undefined undefined undefined', '0 0 0'],
    correctAnswer: '3 3 3',
    explanation: '"var" is function-scoped. By the time the event loop executes the queued callbacks, i has finished looping and equals 3.',
    hint: 'var is not block-scoped, so the closure shares the final value of i.'
  },
  {
    id: 'js-8',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What does the spread operator (...) do when applied to an array in [ ...arr1, ...arr2 ]?',
    options: ['Performs deep clone of nested objects', 'Expands the iterable array elements into individual elements', 'Reverses the array contents', 'Filters out null values'],
    correctAnswer: 'Expands the iterable array elements into individual elements',
    explanation: 'Spread syntax unpacks elements of an array or iterable into places where zero or more arguments or elements are expected.',
    hint: 'It spreads out array elements.'
  },
  {
    id: 'js-9',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this Promise chain log?',
    codeSnippet: 'Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => { throw new Error("err"); })\n  .catch(err => 10)\n  .then(x => console.log(x));',
    options: ['Error: err', '10', '2', 'undefined'],
    correctAnswer: '10',
    explanation: 'The error is intercepted by .catch(), which returns 10. The subsequent .then() receives that resolved value and prints 10.',
    hint: 'catch handles the rejection and resolves with whatever it returns.'
  },
  {
    id: 'js-10',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Which of the following creates a proper Arrow Function returning an object literal?',
    options: ['() => { id: 1 }', '() => ({ id: 1 })', '() => return { id: 1 }', '() => Object: { id: 1 }'],
    correctAnswer: '() => ({ id: 1 })',
    explanation: 'Wrapping the curly braces in parentheses ({ ... }) informs the parser that it is an object literal rather than a function body block.',
    hint: 'Parentheses wrap the object.'
  },
  {
    id: 'js-11',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does the Optional Chaining operator (?.) do in user?.address?.zip?',
    options: [
      'Short-circuits and returns undefined if a reference before ?. is null or undefined without throwing a TypeError',
      'Assigns a fallback value if address is empty',
      'Converts zip code to a number',
      'Queries the server asynchronously'
    ],
    correctAnswer: 'Short-circuits and returns undefined if a reference before ?. is null or undefined without throwing a TypeError',
    explanation: '?. allows safe access to deeply nested properties without having to validate each reference in the chain.',
    hint: 'Safe property navigation without throwing errors on nullish values.'
  },
  {
    id: 'js-12',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The Nullish Coalescing operator _______ returns its right-hand operand when its left-hand operand is null or undefined.',
    options: ['||', '??', '&&', '?:'],
    correctAnswer: '??',
    explanation: '?? only falls back on null or undefined, unlike || which also falls back on 0, false, and empty string "".',
    hint: 'Two question marks.'
  },
  {
    id: 'js-13',
    categoryId: 'javascript',
    difficulty: 'medium',
    type: 'output',
    question: 'What will this snippet print regarding object comparison?',
    codeSnippet: 'const a = { val: 1 };\nconst b = { val: 1 };\nconsole.log(a === b);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false',
    explanation: 'Objects in JavaScript are compared by reference identity, not value. Since a and b point to distinct heap allocations, === returns false.',
    hint: 'Distinct objects occupy different memory locations.'
  },
  {
    id: 'js-14',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the order of console output from the Event Loop?',
    codeSnippet: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");',
    options: ['1, 4, 3, 2', '1, 2, 3, 4', '1, 4, 2, 3', '1, 3, 4, 2'],
    correctAnswer: '1, 4, 3, 2',
    explanation: 'Synchronous logs (1, 4) run first. Microtasks (Promise.then -> 3) run next before macrotasks (setTimeout -> 2).',
    hint: 'Microtasks are prioritized before the macrotask queue.'
  },
  {
    id: 'js-15',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'mcq',
    question: 'How does "this" binding behave inside an arrow function?',
    options: [
      'It binds to the object that called the method',
      'It lexically inherits "this" from its enclosing outer scope where it was defined',
      'It defaults to the global window object always',
      'It can be rebound dynamically using .bind()'
    ],
    correctAnswer: 'It lexically inherits "this" from its enclosing outer scope where it was defined',
    explanation: 'Arrow functions do not have their own "this" binding; they capture the "this" of the enclosing lexical execution context.',
    hint: 'Lexical scoping rather than dynamic invocation binding.'
  },
  {
    id: 'js-16',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'output',
    question: 'What does this generator code log?',
    codeSnippet: 'function* gen() {\n  yield 1;\n  return 2;\n  yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value, g.next().value, g.next().value);',
    options: ['1 2 3', '1 2 undefined', '1 3 undefined', '1 undefined undefined'],
    correctAnswer: '1 2 undefined',
    explanation: 'First next() yields 1 (done: false). Second next() returns 2 (done: true). Third next() returns value: undefined (done: true).',
    hint: 'A return statement terminates a generator, setting done to true.'
  },
  {
    id: 'js-17',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the purpose of WeakMap compared to a regular Map?',
    options: [
      'Keys must be objects and are held weakly, allowing garbage collection when no other references exist',
      'WeakMap is synchronized for multi-threading',
      'WeakMap values are automatically sorted',
      'WeakMap supports primitive keys like symbols and numbers'
    ],
    correctAnswer: 'Keys must be objects and are held weakly, allowing garbage collection when no other references exist',
    explanation: 'WeakMap maintains weak references to its object keys, preventing memory leaks when objects are discarded elsewhere.',
    hint: 'Enables garbage collection of unreferenced object keys.'
  },
  {
    id: 'js-18',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which method creates a deep clone of complex JavaScript objects including circular references (in modern standards)?',
    options: ['structuredClone()', 'Object.assign()', 'JSON.parse(JSON.stringify())', 'Object.freeze()'],
    correctAnswer: 'structuredClone()',
    explanation: 'structuredClone() is a standard built-in algorithm that performs deep cloning, supporting Dates, Sets, Maps, and circular graphs.',
    hint: 'The modern native deep cloning API.'
  },
  {
    id: 'js-19',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'true_false',
    question: 'Tagged template literals allow functions to parse template strings and interpolation expressions.',
    options: ['True', 'False', 'Only supported in Babel', 'Only inside class constructors'],
    correctAnswer: 'True',
    explanation: 'Tagged templates (like styled.div`...` or sql`...`) pass raw string pieces and values directly into a tag function.',
    hint: 'Like styled-components or SQL query builders.'
  },
  {
    id: 'js-20',
    categoryId: 'javascript',
    difficulty: 'hard',
    type: 'output',
    question: 'What does this Proxy handler intercept?',
    codeSnippet: 'const p = new Proxy({}, {\n  get: (target, prop) => prop in target ? target[prop] : 42\n});\nconsole.log(p.foo);',
    options: ['undefined', '42', 'ReferenceError', 'null'],
    correctAnswer: '42',
    explanation: 'Since "foo" does not exist in target, the trap triggers and returns the fallback value 42.',
    hint: 'The get trap catches non-existent property access.'
  }
];
