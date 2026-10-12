export const csharpQuestions = [
  {
    id: 'cs-1',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which framework runtime executes compiled C# Intermediate Language (IL) code?',
    options: ['JVM', '.NET CLR (Common Language Runtime)', 'Node.js', 'LLVM'],
    correctAnswer: '.NET CLR (Common Language Runtime)',
    explanation: 'The Common Language Runtime (CLR) is the virtual execution environment for .NET applications.',
    hint: 'CLR stands for Common Language Runtime.'
  },
  {
    id: 'cs-2',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In C#, a class inherits from a base class or implements an interface using the _______ symbol.',
    options: [':', 'extends', 'implements', '->'],
    correctAnswer: ':',
    explanation: 'C# uses a colon (:) for both class inheritance and interface implementation.',
    hint: 'Single colon punctuation.'
  },
  {
    id: 'cs-3',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword allows implicitly typed local variables where the compiler infers the type?',
    options: ['auto', 'var', 'let', 'val'],
    correctAnswer: 'var',
    explanation: 'In C#, "var" tells the compiler to infer the variable type from the expression on the right-hand side.',
    hint: 'Three-letter keyword starting with v.'
  },
  {
    id: 'cs-4',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In C#, "int" is an alias for System.Int32.',
    options: ['True', 'False', 'Only in 64-bit systems', 'Only in .NET Framework 4'],
    correctAnswer: 'True',
    explanation: '"int" in C# is a direct compiler alias for the .NET System.Int32 value type structure.',
    hint: '32-bit signed integer value type.'
  },
  {
    id: 'cs-5',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this string interpolation produce?',
    codeSnippet: 'string name = "Antigravity";\nConsole.WriteLine($"Hello, {name}!");',
    options: ['Hello, {name}!', 'Hello, Antigravity!', 'Hello, name!', 'Compilation error'],
    correctAnswer: 'Hello, Antigravity!',
    explanation: 'String interpolation prefixed with $ evaluates the expression inside curly brackets {name}.',
    hint: '$ string interpolation.'
  },
  {
    id: 'cs-6',
    categoryId: 'csharp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which method prints a line of text to the console in C#?',
    options: ['System.out.println()', 'Console.WriteLine()', 'print()', 'echo()'],
    correctAnswer: 'Console.WriteLine()',
    explanation: 'Console.WriteLine() writes the specified data followed by the current line terminator to the standard output stream.',
    hint: 'Console dot WriteLine.'
  },
  {
    id: 'cs-7',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the key difference between a class and a struct in C#?',
    options: [
      'Classes are reference types (allocated on heap); structs are value types (allocated inline/on stack)',
      'Structs cannot have methods',
      'Classes cannot implement interfaces',
      'Structs support inheritance while classes do not'
    ],
    correctAnswer: 'Classes are reference types (allocated on heap); structs are value types (allocated inline/on stack)',
    explanation: 'In C#, classes are reference types with heap allocation and garbage collection; structs are value types copied by value.',
    hint: 'Reference type vs value type.'
  },
  {
    id: 'cs-8',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does LINQ stand for in C#?',
    options: [
      'Language Integrated Query',
      'Logical Interface Network Query',
      'Local Indexed Node Queue',
      'Linear Interpreted Null Qualifier'
    ],
    correctAnswer: 'Language Integrated Query',
    explanation: 'LINQ (Language Integrated Query) brings query syntax directly into C# for databases, XML, collections, and APIs.',
    hint: 'Language Integrated Query.'
  },
  {
    id: 'cs-9',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The _______ statement ensures that IDisposable objects (like streams or database connections) are automatically disposed.',
    options: ['using', 'try', 'dispose', 'with'],
    correctAnswer: 'using',
    explanation: 'The using statement / declaration wraps execution in an automatic try-finally block that calls .Dispose() on exit.',
    hint: 'The using keyword.'
  },
  {
    id: 'cs-10',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this nullable operator code output?',
    codeSnippet: 'string text = null;\nstring result = text ?? "Default";\nConsole.WriteLine(result);',
    options: ['null', 'Default', 'Empty string', 'NullReferenceException'],
    correctAnswer: 'Default',
    explanation: 'The null-coalescing operator (??) returns the left-hand operand if not null; otherwise returns the right-hand operand.',
    hint: 'Null coalescing operator.'
  },
  {
    id: 'cs-11',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Which keyword must be placed on an overriding method in a derived class?',
    options: ['override', 'virtual', 'new', 'shadow'],
    correctAnswer: 'override',
    explanation: 'C# requires the "override" keyword explicitly when providing a new implementation for a virtual or abstract base method.',
    hint: 'Explicitly overriding a base virtual method.'
  },
  {
    id: 'cs-12',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In C#, asynchronous methods returning Task or Task<T> should be marked with the async keyword.',
    options: ['True', 'False', 'Only if returning void', 'Only in WPF'],
    correctAnswer: 'True',
    explanation: 'The async keyword enables the use of await inside the method and sets up the state machine.',
    hint: 'Pairs with await.'
  },
  {
    id: 'cs-13',
    categoryId: 'csharp',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is Boxing in C#?',
    options: [
      'Converting a value type to a reference type (object or interface)',
      'Packaging classes into NuGet assemblies',
      'Encrypting variables in memory',
      'Compressing arrays'
    ],
    correctAnswer: 'Converting a value type to a reference type (object or interface)',
    explanation: 'Boxing wraps a value type in an object instance on the heap. Unboxing extracts the value type back.',
    hint: 'Wrapping a value type in a heap object.'
  },
  {
    id: 'cs-14',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What are C# 9+ Records primarily designed for?',
    options: [
      'Immutable data transfer objects with built-in value-based equality semantics',
      'Direct sound recording from microphone',
      'Database transactional logging only',
      'Compiling to C++ headers'
    ],
    correctAnswer: 'Immutable data transfer objects with built-in value-based equality semantics',
    explanation: 'Records provide concise syntax for immutable reference types with value-based equality and non-destructive mutation (with expressions).',
    hint: 'Value equality and immutability for data objects.'
  },
  {
    id: 'cs-15',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'output',
    question: 'What does this pattern matching switch expression return?',
    codeSnippet: 'object obj = 42;\nstring res = obj switch {\n    int n when n > 50 => "High",\n    int n => "Standard",\n    _ => "Other"\n};\nConsole.WriteLine(res);',
    options: ['High', 'Standard', 'Other', 'Compilation error'],
    correctAnswer: 'Standard',
    explanation: 'obj is int 42. Since 42 is not > 50, it matches the second pattern int n and produces "Standard".',
    hint: 'Pattern matching with guards.'
  },
  {
    id: 'cs-16',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is the purpose of Span<T> and ReadOnlySpan<T> introduced in .NET Core?',
    options: [
      'Zero-allocation, contiguous representation of arbitrary memory (stack, heap, unmanaged)',
      'Multi-core thread scheduling',
      'High-resolution canvas drawing',
      'Distributed caching'
    ],
    correctAnswer: 'Zero-allocation, contiguous representation of arbitrary memory (stack, heap, unmanaged)',
    explanation: 'Span<T> provides a type-safe and memory-safe contiguous window over memory without allocating heap objects or copying buffers.',
    hint: 'High-performance zero-allocation memory slicing.'
  },
  {
    id: 'cs-17',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "yield return" statement do in an IEnumerable<T> iterator method?',
    options: [
      'Lazily produces elements on demand, maintaining state machine position between iterations',
      'Stops execution and terminates the thread',
      'Returns the entire collection at once',
      'Throws an YieldException'
    ],
    correctAnswer: 'Lazily produces elements on demand, maintaining state machine position between iterations',
    explanation: 'yield return constructs a state machine that defers execution until each MoveNext() call on the enumerator.',
    hint: 'Lazy evaluation and deferred execution.'
  },
  {
    id: 'cs-18',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What is the difference between Task.Run and Task.Factory.StartNew?',
    options: [
      'Task.Run is a simplified wrapper with safe defaults (unwraps nested tasks, uses default task scheduler)',
      'Task.Run only works on background threads in ASP.NET',
      'StartNew is deprecated and removed in .NET 8',
      'They are exact bit-for-bit equivalents'
    ],
    correctAnswer: 'Task.Run is a simplified wrapper with safe defaults (unwraps nested tasks, uses default task scheduler)',
    explanation: 'Task.Run handles async delegates correctly by unwrapping Task<Task<T>> and defaulting to the default ThreadPool scheduler.',
    hint: 'Task.Run provides safe modern defaults.'
  },
  {
    id: 'cs-19',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In C# with nullable reference types enabled (#nullable enable), declaring string? means the string can be null.',
    options: ['True', 'False', 'Only for value types', 'Causes compilation warning always'],
    correctAnswer: 'True',
    explanation: 'With nullable reference types enabled, non-null is the default; appending ? marks reference types as explicitly nullable.',
    hint: 'Static analysis for null safety.'
  },
  {
    id: 'cs-20',
    categoryId: 'csharp',
    difficulty: 'hard',
    type: 'output',
    question: 'What does GC.Collect(2) target in the .NET generational garbage collector?',
    options: [
      'Triggers garbage collection across all generations (Gen 0, Gen 1, and Gen 2 / LOH)',
      'Collects only generation 2 objects and leaves Gen 0 untouched',
      'Limits garbage collection to 2 megabytes',
      'Terminates thread number 2'
    ],
    correctAnswer: 'Triggers garbage collection across all generations (Gen 0, Gen 1, and Gen 2 / LOH)',
    explanation: 'Passing generation 2 collects that generation and all younger generations, representing a full garbage collection.',
    hint: 'Generation 2 collection collects all generations.'
  }
];
