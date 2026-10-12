export const rubyQuestions = [
  {
    id: 'rb-1',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword defines a method in Ruby?',
    options: ['def', 'fun', 'function', 'method'],
    correctAnswer: 'def',
    explanation: 'Ruby uses the "def" keyword to start a method definition and closes it with the "end" keyword.',
    hint: 'Three-letter keyword starting with d.'
  },
  {
    id: 'rb-2',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In Ruby, blocks and classes are terminated with the _______ keyword.',
    options: ['end', 'stop', 'close', 'finish'],
    correctAnswer: 'end',
    explanation: 'Ruby scopes (classes, modules, methods, if-blocks) conclude with the "end" keyword.',
    hint: 'The opposite of start.'
  },
  {
    id: 'rb-3',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What prefix denotes an instance variable in a Ruby class?',
    options: ['@', '@@', '$', '#'],
    correctAnswer: '@',
    explanation: 'Single \'@\' designates an instance variable (e.g. @name). Double \'@@\' is for class variables.',
    hint: 'Single @ sign.'
  },
  {
    id: 'rb-4',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In Ruby, everything is an object (even numbers, booleans, and nil).',
    options: ['True', 'False', 'Only classes and hashes', 'Only in Ruby on Rails'],
    correctAnswer: 'True',
    explanation: 'Ruby is a purely object-oriented language; even primitive numbers like 5 are instances of Integer.',
    hint: 'Pure object-oriented philosophy.'
  },
  {
    id: 'rb-5',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'output',
    question: 'What does 5.times { print "A" } output in Ruby?',
    options: ['AAAAA', 'A', '5A', 'Error'],
    correctAnswer: 'AAAAA',
    explanation: 'The Integer method .times invokes the attached block 5 times, printing "A" each time.',
    hint: 'Loop runs 5 times.'
  },
  {
    id: 'rb-6',
    categoryId: 'ruby',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following values are considered FALSY in Ruby conditionals?',
    options: ['Only false and nil', 'false, nil, and 0', 'false, nil, 0, and ""', 'Only false'],
    correctAnswer: 'Only false and nil',
    explanation: 'In Ruby, only false and nil are falsy. Zero (0) and empty strings ("") are truthy!',
    hint: '0 is truthy in Ruby.'
  },
  {
    id: 'rb-7',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is a Symbol (e.g. :status) compared to a String in Ruby?',
    options: [
      'An immutable, internalized identifier sharing the exact same object_id across occurrences in memory',
      'A pointer to an HTML tag',
      'An encryption token',
      'A regular expression'
    ],
    correctAnswer: 'An immutable, internalized identifier sharing the exact same object_id across occurrences in memory',
    explanation: 'Symbols are immutable and unique in the Ruby symbol table, making them fast and memory-efficient hash keys.',
    hint: 'Prefixed by a colon and immutable.'
  },
  {
    id: 'rb-8',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this method return?',
    codeSnippet: 'def calc(a, b)\n  a + b\nend\nputs calc(3, 4)',
    options: ['7', 'nil', 'Error: missing return keyword', '34'],
    correctAnswer: '7',
    explanation: 'In Ruby, methods automatically return the evaluated result of their last line without requiring explicit "return".',
    hint: 'Implicit return of the last evaluated expression.'
  },
  {
    id: 'rb-9',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To execute a block of code passed to a method, use the _______ keyword.',
    options: ['yield', 'call', 'block_run', 'execute'],
    correctAnswer: 'yield',
    explanation: 'The yield keyword pauses method execution and transfers control to the passed block.',
    hint: 'Transfers control to the attached block.'
  },
  {
    id: 'rb-10',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What is the purpose of "attr_accessor :name" in a Ruby class?',
    options: [
      'Defines both a getter method (name) and a setter method (name=) for @name',
      'Makes @name public to outside network requests',
      'Sets a password lock on the field',
      'Validates name length'
    ],
    correctAnswer: 'Defines both a getter method (name) and a setter method (name=) for @name',
    explanation: 'attr_accessor is metaprogramming shorthand for both reader (getter) and writer (setter) methods.',
    hint: 'Creates reader and writer methods.'
  },
  {
    id: 'rb-11',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is a Module used for in Ruby since multiple class inheritance is not permitted?',
    options: [
      'Mixins (using include/prepend) to share reusable behaviors across disparate classes',
      'Creating database indices',
      'Compiling C extensions only',
      'Thread locking'
    ],
    correctAnswer: 'Mixins (using include/prepend) to share reusable behaviors across disparate classes',
    explanation: 'Ruby achieves multiple behavior inheritance via mixins using modules included into classes.',
    hint: 'Mixins via modules.'
  },
  {
    id: 'rb-12',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In Ruby, methods that end with a question mark (e.g. .nil?, .empty?) convention-wise return boolean values.',
    options: ['True', 'False', 'They throw warnings', 'They are strictly required to be macros'],
    correctAnswer: 'True',
    explanation: 'Predicate methods end with a question mark by Ruby convention and return true or false.',
    hint: 'Predicate methods return booleans.'
  },
  {
    id: 'rb-13',
    categoryId: 'ruby',
    difficulty: 'medium',
    type: 'output',
    question: 'What does the shovel operator (<<) do to an array in Ruby?',
    codeSnippet: 'arr = [1, 2]\narr << 3\np arr',
    options: ['[1, 2, 3]', '[3, 1, 2]', 'Bitwise shifts the array', 'Error'],
    correctAnswer: '[1, 2, 3]',
    explanation: 'The shovel operator (<<) appends an element onto the end of the array in-place.',
    hint: 'Appends to the end of the collection.'
  },
  {
    id: 'rb-14',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is a Singleton Class (Eigenclass / Metaclass) in Ruby?',
    options: [
      'An anonymous hidden class inserted into the lookup hierarchy where an individual object\'s singleton methods reside',
      'A class pattern that allows only 1 instance globally',
      'A class stored in Redis',
      'A compiler optimization pass'
    ],
    correctAnswer: 'An anonymous hidden class inserted into the lookup hierarchy where an individual object\'s singleton methods reside',
    explanation: 'Every Ruby object has its own singleton class where methods specific to that particular instance are attached.',
    hint: 'Hidden class housing object-specific methods.'
  },
  {
    id: 'rb-15',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does "method_missing" provide in Ruby metaprogramming?',
    options: [
      'A fallback hook intercepted when an object receives a message for a method that is not defined',
      'Logs missing files to disk',
      'Deletes unused functions at compile time',
      'Raises a fatal unrecoverable exception immediately'
    ],
    correctAnswer: 'A fallback hook intercepted when an object receives a message for a method that is not defined',
    explanation: 'Overriding method_missing allows dynamic method interception, widely used in ActiveRecord (e.g., find_by_name).',
    hint: 'Dynamic method interception for undefined calls.'
  },
  {
    id: 'rb-16',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the key difference between a Proc and a Lambda in Ruby?',
    options: [
      'Lambdas check the number of arguments strictly and return only from themselves, whereas Procs do not enforce arity and return from enclosing method',
      'Procs can only take 1 argument',
      'Lambdas cannot access outer closures',
      'They are identical'
    ],
    correctAnswer: 'Lambdas check the number of arguments strictly and return only from themselves, whereas Procs do not enforce arity and return from enclosing method',
    explanation: 'Lambdas behave like real methods regarding return and argument arity; Procs are more permissive with arguments and return from the caller.',
    hint: 'Arity checking and return behavior.'
  },
  {
    id: 'rb-17',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does the safe navigation operator (&.) do in Ruby 2.3+?',
    codeSnippet: 'account&.owner&.name',
    options: [
      'Returns nil if the receiver is nil instead of raising a NoMethodError',
      'Runs the call in a secure sandbox',
      'Encrypts the method call',
      'Spawns a thread'
    ],
    correctAnswer: 'Returns nil if the receiver is nil instead of raising a NoMethodError',
    explanation: 'The lonely operator (&.) skips method invocation and returns nil if the receiver evaluates to nil.',
    hint: 'Safe navigation preventing NoMethodError on nil.'
  },
  {
    id: 'rb-18',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does "prepend" do differently than "include" when mixing in a module?',
    options: [
      'Inserts the module BEFORE the class in the method lookup chain (ancestors), allowing overriding of class methods',
      'Appends the module after Object class',
      'Freezes all methods in the module',
      'Pre-compiles the module with YJIT'
    ],
    correctAnswer: 'Inserts the module BEFORE the class in the method lookup chain (ancestors), allowing overriding of class methods',
    explanation: 'prepend places the module ahead of the incorporating class in the ancestor tree, enabling decoration/wrapping of existing methods.',
    hint: 'Inserts ahead of the host class in method resolution.'
  },
  {
    id: 'rb-19',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'true_false',
    question: 'Ruby 3.0+ introduced Ractors for parallel execution without GIL restrictions.',
    options: ['True', 'False', 'Ractors were deprecated in Ruby 3.1', 'Ractors only run on WebAssembly'],
    correctAnswer: 'True',
    explanation: 'Ractors provide actor-model concurrency with isolated memory spaces that execute in parallel across multiple CPU cores.',
    hint: 'Actor model concurrency in Ruby 3.'
  },
  {
    id: 'rb-20',
    categoryId: 'ruby',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is YJIT in Ruby 3.1+ (built by Shopify)?',
    options: [
      'A Just-In-Time compiler inside CRuby that boosts real-world Rails performance using Basic Block Versioning',
      'A YAML parser replacement',
      'A JavaScript transpiler',
      'A garbage collector'
    ],
    correctAnswer: 'A Just-In-Time compiler inside CRuby that boosts real-world Rails performance using Basic Block Versioning',
    explanation: 'YJIT is CRuby\'s in-process JIT compiler developed for real-world server workloads like Rails.',
    hint: 'JIT compiler for CRuby.'
  }
];
