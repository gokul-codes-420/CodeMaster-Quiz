export const swiftQuestions = [
  {
    id: 'sw-1',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword declares a constant (immutable value) in Swift?',
    options: ['let', 'var', 'const', 'val'],
    correctAnswer: 'let',
    explanation: 'In Swift, "let" declares a constant value that cannot be mutated, whereas "var" declares a mutable variable.',
    hint: 'Three-letter keyword starting with l.'
  },
  {
    id: 'sw-2',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To declare an optional variable that may hold a value or nil in Swift, append a _______ to the type.',
    options: ['?', '!', '*', '&'],
    correctAnswer: '?',
    explanation: 'Appending a question mark (e.g. String?) declares an Optional type in Swift.',
    hint: 'Question mark symbol.'
  },
  {
    id: 'sw-3',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which framework is Apple\'s modern declarative UI framework for building apps across iOS and macOS?',
    options: ['UIKit', 'SwiftUI', 'AppKit', 'InterfaceBuilder'],
    correctAnswer: 'SwiftUI',
    explanation: 'SwiftUI is the modern declarative framework introduced by Apple in 2019.',
    hint: 'Swift + UI.'
  },
  {
    id: 'sw-4',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In Swift, structs are value types and classes are reference types.',
    options: ['True', 'False', 'Both are value types', 'Both are reference types'],
    correctAnswer: 'True',
    explanation: 'Swift structs are copied upon assignment (value types); classes share references in memory (reference types).',
    hint: 'Structs are value types; classes are reference types.'
  },
  {
    id: 'sw-5',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this string interpolation print?',
    codeSnippet: 'let score = 100\nprint("Score: \\(score)")',
    options: ['Score: 100', 'Score: \\(score)', 'Score: score', 'Error'],
    correctAnswer: 'Score: 100',
    explanation: 'Swift uses \\(...) syntax for string interpolation.',
    hint: 'Backslash parentheses evaluate expressions.'
  },
  {
    id: 'sw-6',
    categoryId: 'swift',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword is used to declare a function in Swift?',
    options: ['func', 'function', 'def', 'fun'],
    correctAnswer: 'func',
    explanation: 'Swift uses the "func" keyword to declare functions and methods.',
    hint: 'Short for function.'
  },
  {
    id: 'sw-7',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does optional binding using "if let" or "guard let" accomplish in Swift?',
    options: [
      'Safely unwraps an optional, executing code only if the value is non-nil without runtime crashing',
      'Forces the app to crash if nil',
      'Converts nil to empty string',
      'Encrypts optional memory'
    ],
    correctAnswer: 'Safely unwraps an optional, executing code only if the value is non-nil without runtime crashing',
    explanation: 'Optional binding safely checks for a non-nil value and unwraps it into a temporary constant.',
    hint: 'Safe unwrapping pattern.'
  },
  {
    id: 'sw-8',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What is the key difference between "if let" and "guard let"?',
    options: [
      'guard let requires an early return/exit from the scope in its else branch, keeping unwrapped variables in outer scope',
      'guard let only works on booleans',
      'if let cannot be used inside functions',
      'guard let is deprecated'
    ],
    correctAnswer: 'guard let requires an early return/exit from the scope in its else branch, keeping unwrapped variables in outer scope',
    explanation: 'guard let unwraps values and keeps them in scope for the rest of the function, mandating an else block that transfers control (return/throw).',
    hint: 'Guard statement requires an exit transfer like return or throw.'
  },
  {
    id: 'sw-9',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'output',
    question: 'What does the nil-coalescing operator (??) return here?',
    codeSnippet: 'let username: String? = nil\nlet display = username ?? "Guest"\nprint(display)',
    options: ['nil', 'Guest', 'Optional("Guest")', 'Crash'],
    correctAnswer: 'Guest',
    explanation: 'The nil-coalescing operator ?? provides a fallback value if the optional is nil.',
    hint: 'Fallback when optional is nil.'
  },
  {
    id: 'sw-10',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In Swift, a method on a struct that modifies its own properties must be marked with the _______ keyword.',
    options: ['mutating', 'modifying', 'changeable', 'var'],
    correctAnswer: 'mutating',
    explanation: 'Because structs are value types, methods modifying instance properties must be declared "mutating func".',
    hint: 'Mutating keyword.'
  },
  {
    id: 'sw-11',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What memory management technique does Swift use instead of a tracing garbage collector?',
    options: ['Automatic Reference Counting (ARC)', 'Mark and Sweep GC', 'Manual malloc/free only', 'Generational GC'],
    correctAnswer: 'Automatic Reference Counting (ARC)',
    explanation: 'Swift uses ARC (Automatic Reference Counting) to track and free class instances deterministically at runtime.',
    hint: 'ARC.'
  },
  {
    id: 'sw-12',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'true_false',
    question: 'To prevent strong reference retention cycles between class instances in ARC, you use "weak" or "unowned" references.',
    options: ['True', 'False', 'Only in Objective-C', 'Only inside SwiftUI views'],
    correctAnswer: 'True',
    explanation: 'weak references break retain cycles by not increasing the retain count and becoming nil when the object deallocates.',
    hint: 'Breaks retain cycles in ARC.'
  },
  {
    id: 'sw-13',
    categoryId: 'swift',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this Swift closure trailing syntax do?',
    codeSnippet: 'let numbers = [1, 2, 3]\nlet doubled = numbers.map { $0 * 2 }',
    options: ['[2, 4, 6]', '[1, 2, 3, 2]', '[2]', 'Error'],
    correctAnswer: '[2, 4, 6]',
    explanation: '$0 represents the first shorthand argument to the closure, multiplying each element by 2.',
    hint: '$0 shorthand closure argument.'
  },
  {
    id: 'sw-14',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is an "actor" in Swift 5.5+ concurrency?',
    options: [
      'A reference type that protects its mutable state against data races through automatic actor isolation and async synchronization',
      'A UI animation controller',
      'An audio synthesizer',
      'A unit test framework mock'
    ],
    correctAnswer: 'A reference type that protects its mutable state against data races through automatic actor isolation and async synchronization',
    explanation: 'Actors isolate state to ensure only one task can access their mutable properties at a given time, preventing race conditions.',
    hint: 'Prevents data races in concurrent code.'
  },
  {
    id: 'sw-15',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the @MainActor attribute designate?',
    options: [
      'Guarantees that the annotated class or method executes on the main thread for UI safety',
      'Designates the primary entry point in main.swift',
      'Runs code with root operating system privileges',
      'Prevents any background tasks from launching'
    ],
    correctAnswer: 'Guarantees that the annotated class or method executes on the main thread for UI safety',
    explanation: '@MainActor coordinates execution on the main dispatch queue where UI updates must occur.',
    hint: 'Ensures execution on the main UI thread.'
  },
  {
    id: 'sw-16',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does the "some" keyword signify in "var body: some View"?',
    options: [
      'An opaque return type that hides concrete implementation details while preserving type identity for the compiler',
      'Any view conforming to class inheritance',
      'A randomly selected view',
      'A nullable view'
    ],
    correctAnswer: 'An opaque return type that hides concrete implementation details while preserving type identity for the compiler',
    explanation: 'The "some" keyword denotes an opaque return type conforming to a protocol without exposing the internal nested type hierarchy.',
    hint: 'Opaque return type.'
  },
  {
    id: 'sw-17',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is Copy-on-Write (CoW) optimization in Swift collections (Array, Dictionary)?',
    options: [
      'Copies of collections share underlying storage until one of the copies is modified, avoiding unnecessary allocations',
      'Writes files directly to hard drive cache',
      'Encrypts array copies on the fly',
      'Syncs arrays over iCloud'
    ],
    correctAnswer: 'Copies of collections share underlying storage until one of the copies is modified, avoiding unnecessary allocations',
    explanation: 'Copy-on-write delays deep cloning until mutation occurs, giving value types the performance of reference sharing.',
    hint: 'Shares buffer until mutation occurs.'
  },
  {
    id: 'sw-18',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the purpose of @escaping in a closure parameter?',
    options: [
      'Indicates the closure can outlive the function it was passed into (e.g. stored in a property or dispatched asynchronously)',
      'Escapes dangerous shell strings',
      'Runs closure in a background sandbox',
      'Stops infinite recursion'
    ],
    correctAnswer: 'Indicates the closure can outlive the function it was passed into (e.g. stored in a property or dispatched asynchronously)',
    explanation: 'An escaping closure is called after the enclosing function returns, requiring explicit retain management.',
    hint: 'Closure outlives the function call.'
  },
  {
    id: 'sw-19',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'true_false',
    question: 'Swift Protocols can provide default method implementations via Protocol Extensions.',
    options: ['True', 'False', 'Protocols can never contain implementations', 'Only when inheriting from NSObject'],
    correctAnswer: 'True',
    explanation: 'Extensions on protocols can implement methods, providing default behavior across all conforming types.',
    hint: 'Protocol extensions enable mixin-like default implementations.'
  },
  {
    id: 'sw-20',
    categoryId: 'swift',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the Sendable protocol represent in Swift Concurrency?',
    options: [
      'A marker protocol indicating a type is safe to transfer across concurrent task boundaries without data races',
      'Types that can be converted to JSON network packets',
      'Email protocol wrappers',
      'Bluetooth communication interface'
    ],
    correctAnswer: 'A marker protocol indicating a type is safe to transfer across concurrent task boundaries without data races',
    explanation: 'Sendable types can be safely shared across concurrent domains without causing data races.',
    hint: 'Thread-safe across concurrent task boundaries.'
  }
];
