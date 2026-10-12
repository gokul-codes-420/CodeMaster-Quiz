export const typescriptQuestions = [
  {
    id: 'ts-1',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is TypeScript in relation to JavaScript?',
    options: [
      'A typed superset of JavaScript that compiles down to plain JavaScript',
      'An entirely separate language that runs on the JVM',
      'A replacement for HTML and CSS',
      'A database management tool'
    ],
    correctAnswer: 'A typed superset of JavaScript that compiles down to plain JavaScript',
    explanation: 'TypeScript adds static type definitions on top of standard JavaScript and compiles into clean JS for browsers and runtimes.',
    hint: 'A typed superset that transpiles to JS.'
  },
  {
    id: 'ts-2',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The TypeScript compiler CLI command is _______.',
    options: ['tsc', 'ts-node', 'typify', 'tsrun'],
    correctAnswer: 'tsc',
    explanation: 'tsc stands for TypeScript Compiler, invoking type checking and emission.',
    hint: 'Three-letter acronym for TypeScript Compiler.'
  },
  {
    id: 'ts-3',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which type represents a value that can be of ANY possible type and turns off type checking?',
    options: ['unknown', 'any', 'void', 'never'],
    correctAnswer: 'any',
    explanation: '"any" bypasses type checks completely, whereas "unknown" forces type narrowing before usage.',
    hint: 'Disables type checking completely.'
  },
  {
    id: 'ts-4',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'syntax_error',
    question: 'Which syntax correctly defines a variable that can be either a string or a number?',
    options: ['let val: string | number;', 'let val: string & number;', 'let val: (string, number);', 'let val: string or number;'],
    correctAnswer: 'let val: string | number;',
    explanation: 'The pipe symbol (|) denotes a Union Type in TypeScript.',
    hint: 'Union types use the vertical bar (|).'
  },
  {
    id: 'ts-5',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Type annotations in TypeScript are completely stripped out at compile time and have zero runtime footprint.',
    options: ['True', 'False', 'Only if strict mode is disabled', 'Only in development mode'],
    correctAnswer: 'True',
    explanation: 'TypeScript types are purely compile-time artifacts that do not exist in emitted JavaScript.',
    hint: 'Type erasure leaves clean JS.'
  },
  {
    id: 'ts-6',
    categoryId: 'typescript',
    difficulty: 'easy',
    type: 'match_concept',
    question: 'Which keyword is used to define an object contract or blueprint with optional and required fields?',
    options: ['interface', 'structure', 'contract', 'blueprint'],
    correctAnswer: 'interface',
    explanation: 'Interfaces define the shape and contract of objects in TypeScript.',
    hint: 'The interface keyword.'
  },
  {
    id: 'ts-7',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the key difference between "unknown" and "any"?',
    options: [
      '"unknown" is type-safe: you cannot invoke methods or access properties without first narrowing the type',
      '"any" cannot be assigned to strings',
      '"unknown" is only for objects',
      'They behave completely identically'
    ],
    correctAnswer: '"unknown" is type-safe: you cannot invoke methods or access properties without first narrowing the type',
    explanation: '"unknown" represents any value safely, requiring typeof checks or type guards before operations can be performed.',
    hint: 'Requires type checking/narrowing before usage.'
  },
  {
    id: 'ts-8',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the type of the variable "count" inferred by TypeScript here?',
    codeSnippet: 'const count = 42;',
    options: ['number', '42 (literal type)', 'any', 'constant'],
    correctAnswer: '42 (literal type)',
    explanation: 'Because count is declared with const and initialized to a primitive, TypeScript infers the exact literal type 42 rather than general number.',
    hint: 'Const primitive produces a literal type.'
  },
  {
    id: 'ts-9',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In TypeScript, a function that never returns (e.g. throws an exception or infinite loop) has the return type _______.',
    options: ['void', 'never', 'null', 'undefined'],
    correctAnswer: 'never',
    explanation: '"never" represents values that will never occur or functions that never successfully return.',
    hint: 'Represents impossible return.'
  },
  {
    id: 'ts-10',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What is the purpose of the "readonly" modifier on interface properties?',
    codeSnippet: 'interface Config {\n    readonly apiKey: string;\n}',
    options: [
      'Prevents reassignment to apiKey after object instantiation',
      'Encrypts the apiKey string',
      'Hides apiKey from JSON serialization',
      'Makes apiKey static'
    ],
    correctAnswer: 'Prevents reassignment to apiKey after object instantiation',
    explanation: 'readonly marks properties as immutable after initial construction.',
    hint: 'Prevents mutation after creation.'
  },
  {
    id: 'ts-11',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does the utility type "Partial<T>" do in TypeScript?',
    options: [
      'Constructs a type with all properties of T set to optional (?)',
      'Makes all properties read-only',
      'Selects a subset of properties',
      'Deletes properties from T'
    ],
    correctAnswer: 'Constructs a type with all properties of T set to optional (?)',
    explanation: 'Partial<T> transforms all keys of type T to be optional.',
    hint: 'Makes all fields optional.'
  },
  {
    id: 'ts-12',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In TypeScript, interfaces can be reopened and merged across multiple declarations (declaration merging).',
    options: ['True', 'False', 'Only type aliases can merge', 'Only in ambient d.ts files'],
    correctAnswer: 'True',
    explanation: 'Multiple interface declarations with the same name merge their members together. Type aliases cannot do this.',
    hint: 'Declaration merging is specific to interfaces.'
  },
  {
    id: 'ts-13',
    categoryId: 'typescript',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this type alias evaluate to?',
    codeSnippet: 'type User = { id: number; name: string; email: string };\ntype PublicInfo = Pick<User, "id" | "name">;',
    options: [
      '{ id: number; name: string }',
      '{ email: string }',
      'string | number',
      'Error'
    ],
    correctAnswer: '{ id: number; name: string }',
    explanation: 'Pick<T, K> constructs a type by picking keys K from type T.',
    hint: 'Picks the chosen keys.'
  },
  {
    id: 'ts-14',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "infer" keyword do in conditional types?',
    options: [
      'Introduces a type variable within the extends clause to extract and deduce a subtype',
      'Forces the compiler to guess missing types at runtime',
      'Automatically converts strings to numbers',
      'Disables type checking in generic methods'
    ],
    correctAnswer: 'Introduces a type variable within the extends clause to extract and deduce a subtype',
    explanation: 'The infer keyword enables type deduction inside conditional types (e.g. type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any).',
    hint: 'Used in conditional types to extract a deduced type variable.'
  },
  {
    id: 'ts-15',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'output',
    question: 'What does this template literal type produce?',
    codeSnippet: 'type Direction = "top" | "bottom";\ntype Position = `margin-${Direction}`;',
    options: [
      '"margin-top" | "margin-bottom"',
      'string',
      '"margin-Direction"',
      'Error: template strings not allowed in types'
    ],
    correctAnswer: '"margin-top" | "margin-bottom"',
    explanation: 'Template literal types distribute over unions, producing "margin-top" | "margin-bottom".',
    hint: 'Distributes over union members.'
  },
  {
    id: 'ts-16',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is a Discriminated Union (Tagged Union) in TypeScript?',
    options: [
      'A union of object types sharing a common literal property used as a discriminator for type narrowing',
      'A union of only primitive types',
      'A union that disallows undefined values',
      'A union resolved by Webpack at bundle time'
    ],
    correctAnswer: 'A union of object types sharing a common literal property used as a discriminator for type narrowing',
    explanation: 'Discriminated unions share a common discriminant key (like type: "circle" | "square") allowing TypeScript to exhaustively narrow types in switch statements.',
    hint: 'Common literal tag property used for pattern matching and narrowing.'
  },
  {
    id: 'ts-17',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does the "satisfies" operator do in TypeScript 4.9+?',
    options: [
      'Validates that an expression matches a type contract without widening the inferred type',
      'Converts types to JSON schemas',
      'Throws an assertion error at runtime if false',
      'Replaces the as type assertion completely'
    ],
    correctAnswer: 'Validates that an expression matches a type contract without widening the inferred type',
    explanation: 'satisfies checks conformance against a type definition while preserving the specific narrower inferred literal types of properties.',
    hint: 'Validates type compliance while preserving precise inferred types.'
  },
  {
    id: 'ts-18',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "keyof" operator yield when applied to an object type?',
    options: [
      'A string or numeric literal union of its keys',
      'An array of runtime object keys',
      'A count of how many properties exist',
      'The types of its values'
    ],
    correctAnswer: 'A string or numeric literal union of its keys',
    explanation: 'keyof takes an object type and produces a string or numeric literal union of its property names.',
    hint: 'Produces a union of all property keys.'
  },
  {
    id: 'ts-19',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'true_false',
    question: 'TypeScript structural typing (duck typing) means two types are compatible if they share the same shape, even if declared separately with different names.',
    options: ['True', 'False', 'TypeScript uses nominal typing exclusively', 'Only applies to classes'],
    correctAnswer: 'True',
    explanation: 'TypeScript\'s type system is structural: compatibility is based on shape and members rather than explicit inheritance hierarchies.',
    hint: 'If it walks like a duck and quacks like a duck, it is a duck.'
  },
  {
    id: 'ts-20',
    categoryId: 'typescript',
    difficulty: 'hard',
    type: 'output',
    question: 'What does the utility type Exclude<"a" | "b" | "c", "a"> evaluate to?',
    options: ['"b" | "c"', '"a"', '"a" | "b"', 'never'],
    correctAnswer: '"b" | "c"',
    explanation: 'Exclude<T, U> removes members from T that are assignable to U, leaving "b" | "c".',
    hint: 'Excludes the specified union member.'
  }
];
