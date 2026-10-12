export const kotlinQuestions = [
  {
    id: 'kt-1',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword declares an immutable (read-only) variable in Kotlin?',
    options: ['val', 'var', 'const', 'let'],
    correctAnswer: 'val',
    explanation: 'In Kotlin, "val" declares a read-only variable that cannot be reassigned. "var" declares a mutable variable.',
    hint: 'Short for value.'
  },
  {
    id: 'kt-2',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In Kotlin, functions are declared using the _______ keyword.',
    options: ['fun', 'function', 'def', 'fn'],
    correctAnswer: 'fun',
    explanation: 'Kotlin uses the concise keyword "fun" to declare top-level or member functions.',
    hint: 'Short for function, sounds like having a good time.'
  },
  {
    id: 'kt-3',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How do you declare a variable that can hold null in Kotlin?',
    options: ['String?', 'Nullable<String>', 'String*', 'Optional<String>'],
    correctAnswer: 'String?',
    explanation: 'Appending a question mark to the type (e.g., String?) explicitly declares it as a nullable type in Kotlin.',
    hint: 'Question mark represents nullability.'
  },
  {
    id: 'kt-4',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Kotlin is fully interoperable with existing Java code and libraries.',
    options: ['True', 'False', 'Only on Android', 'Only with bytecode transpilation'],
    correctAnswer: 'True',
    explanation: 'Kotlin was designed from inception for 100% two-way interoperability with the Java ecosystem.',
    hint: 'Java and Kotlin work seamlessly together on the JVM.'
  },
  {
    id: 'kt-5',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this string template print?',
    codeSnippet: 'val lang = "Kotlin"\nprintln("Hello, $lang!")',
    options: ['Hello, Kotlin!', 'Hello, $lang!', 'Hello, lang!', 'Error'],
    correctAnswer: 'Hello, Kotlin!',
    explanation: '$lang evaluates the variable inside the string template.',
    hint: 'Direct variable interpolation.'
  },
  {
    id: 'kt-6',
    categoryId: 'kotlin',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which class modifier automatically generates equals(), hashCode(), toString(), and copy() methods?',
    options: ['data class', 'record class', 'model class', 'entity class'],
    correctAnswer: 'data class',
    explanation: 'Kotlin "data class" automatically synthesizes standard utility boilerplate for holding data.',
    hint: 'Prefix class with "data".'
  },
  {
    id: 'kt-7',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is the Elvis operator in Kotlin?',
    options: ['?:', '?.', '!!', '?:='],
    correctAnswer: '?:',
    explanation: 'The Elvis operator (?:) returns its left-hand operand if not null; otherwise it evaluates its right-hand operand.',
    hint: 'Turned sideways, it looks like Elvis\'s hair and eyes.'
  },
  {
    id: 'kt-8',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What does the not-null assertion operator (!!) do in Kotlin?',
    options: [
      'Converts any value to a non-null type, throwing a NullPointerException if the value is null',
      'Checks if a number is positive',
      'Negates a boolean twice',
      'Forces garbage collection'
    ],
    correctAnswer: 'Converts any value to a non-null type, throwing a NullPointerException if the value is null',
    explanation: 'The double bang (!!) asserts that an expression is non-null, throwing NPE at runtime if it happens to be null.',
    hint: 'Double exclamation mark assertion.'
  },
  {
    id: 'kt-9',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Kotlin\'s replacement for Java\'s switch statement is the _______ expression.',
    options: ['when', 'match', 'choose', 'case'],
    correctAnswer: 'when',
    explanation: 'The "when" expression provides powerful pattern matching and branch handling with exhaustive checks.',
    hint: 'Starts with w.'
  },
  {
    id: 'kt-10',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What are Extension Functions in Kotlin?',
    options: [
      'Functions that extend a class with new functionality without having to inherit from it or modify its source',
      'Plugins for the Kotlin compiler',
      'Browser extensions written in Kotlin/JS',
      'Functions that run in a separate thread'
    ],
    correctAnswer: 'Functions that extend a class with new functionality without having to inherit from it or modify its source',
    explanation: 'Extension functions (e.g. fun String.addExclamation() = this + "!") let you add methods to existing types.',
    hint: 'Extend classes without subclassing.'
  },
  {
    id: 'kt-11',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this scope function return?',
    codeSnippet: 'val result = "hello".let {\n    it.uppercase()\n}',
    options: ['"HELLO"', '"hello"', 'Unit', 'null'],
    correctAnswer: '"HELLO"',
    explanation: 'The .let scope function returns the result of the lambda expression, which is "HELLO".',
    hint: 'let returns the lambda result.'
  },
  {
    id: 'kt-12',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In Kotlin, classes are final (closed to inheritance) by default unless marked with the "open" keyword.',
    options: ['True', 'False', 'Only abstract classes', 'Only in companion objects'],
    correctAnswer: 'True',
    explanation: 'Kotlin classes are non-inheritable (final) by default; you must declare them "open" to allow inheritance.',
    hint: 'Closed by default to enforce design for inheritance.'
  },
  {
    id: 'kt-13',
    categoryId: 'kotlin',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What replaces static methods in Kotlin classes?',
    options: ['Companion Objects', 'Shared Modules', 'Global Singletons', 'Package Managers'],
    correctAnswer: 'Companion Objects',
    explanation: 'Companion objects tied to a class provide factory methods and shared functions similar to static methods in Java.',
    hint: 'Companion object declared inside class.'
  },
  {
    id: 'kt-14',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is a Coroutine in Kotlin?',
    options: [
      'A light-weight thread of execution that can be suspended and resumed without blocking OS threads',
      'A hardware GPU process',
      'A database transaction',
      'A method with multiple return values'
    ],
    correctAnswer: 'A light-weight thread of execution that can be suspended and resumed without blocking OS threads',
    explanation: 'Coroutines provide non-blocking asynchronous programming by suspending computation instead of blocking native threads.',
    hint: 'Lightweight cooperative concurrency.'
  },
  {
    id: 'kt-15',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which keyword marks a function that can pause execution without blocking the underlying thread in Kotlin Coroutines?',
    options: ['suspend', 'async', 'yield', 'pause'],
    correctAnswer: 'suspend',
    explanation: 'A "suspend" function can pause execution and resume later without locking the thread.',
    hint: 'The suspend keyword.'
  },
  {
    id: 'kt-16',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What is a "sealed class" or "sealed interface" in Kotlin?',
    options: [
      'A class hierarchy with a restricted, known set of subclasses known at compile time, enabling exhaustive when expressions',
      'A class encrypted with AES',
      'A class that cannot be serialized',
      'A singleton object'
    ],
    correctAnswer: 'A class hierarchy with a restricted, known set of subclasses known at compile time, enabling exhaustive when expressions',
    explanation: 'Sealed classes constrain subclass hierarchies, allowing the compiler to guarantee that all cases are handled in "when" expressions.',
    hint: 'Restricted subclass hierarchy enabling exhaustive pattern matching.'
  },
  {
    id: 'kt-17',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "reified" keyword allow when paired with an "inline" function in Kotlin?',
    options: [
      'Retains the generic type argument at runtime, overcoming JVM type erasure (e.g., T::class.java)',
      'Speeds up integer loops',
      'Allows generic parameters to be primitive types',
      'Prevents inline function inlining'
    ],
    correctAnswer: 'Retains the generic type argument at runtime, overcoming JVM type erasure (e.g., T::class.java)',
    explanation: 'inline fun <reified T> copies the function body at the call site, allowing access to the concrete type T at runtime.',
    hint: 'Enables access to generic type T at runtime.'
  },
  {
    id: 'kt-18',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'output',
    question: 'What does Property Delegation using "by lazy" accomplish in Kotlin?',
    codeSnippet: 'val heavyData: String by lazy {\n    println("Computing")\n    "Done"\n}',
    options: [
      'Computes the property value only upon first access and caches the result for future reads',
      'Computes value in a background thread continuously',
      'Computes value upon class loading',
      'Recomputes value every time the property is accessed'
    ],
    correctAnswer: 'Computes the property value only upon first access and caches the result for future reads',
    explanation: 'by lazy provides thread-safe lazy initialization, postponing execution until first read.',
    hint: 'Lazy evaluation and caching.'
  },
  {
    id: 'kt-19',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In Kotlin, inline value classes (@JvmInline value class) wrap a single underlying value without runtime object allocation overhead.',
    options: ['True', 'False', 'Only for strings', 'Requires Android API 34+'],
    correctAnswer: 'True',
    explanation: 'Value classes introduce domain-specific types without heap allocation penalties because the compiler inlines the primitive representation.',
    hint: 'Zero-overhead type-safe wrapper.'
  },
  {
    id: 'kt-20',
    categoryId: 'kotlin',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does Kotlin Flow represent in reactive programming?',
    options: [
      'A cold asynchronous data stream that sequentially emits values and completes normally or with an exception',
      'A UI layout engine similar to Flexbox',
      'A networking socket manager',
      'An animation controller'
    ],
    correctAnswer: 'A cold asynchronous data stream that sequentially emits values and completes normally or with an exception',
    explanation: 'Kotlin Flow provides cold asynchronous streams built on top of coroutines for reactive data pipelines.',
    hint: 'Cold asynchronous stream of values.'
  }
];
