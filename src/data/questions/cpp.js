export const cppQuestions = [
  {
    id: 'cpp-1',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which header file is typically included for standard console stream I/O (cin, cout) in C++?',
    options: ['<iostream>', '<stdio.h>', '<stream.h>', '<conio.h>'],
    correctAnswer: '<iostream>',
    explanation: '<iostream> declares the standard input/output stream objects std::cin, std::cout, and std::cerr.',
    hint: 'Input Output Stream.'
  },
  {
    id: 'cpp-2',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In C++, dynamically allocated memory on the heap is freed using the _______ operator.',
    options: ['free', 'delete', 'release', 'destroy'],
    correctAnswer: 'delete',
    explanation: 'The delete operator deallocates memory allocated with the new operator, also invoking the destructor.',
    hint: 'Pairs with "new".'
  },
  {
    id: 'cpp-3',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Unlike C, C++ supports function overloading based on parameter types and counts.',
    options: ['True', 'False', 'Only in templates', 'Only in structs'],
    correctAnswer: 'True',
    explanation: 'C++ allows multiple functions in the same scope to share a name if their parameter signatures differ.',
    hint: 'Overloading functions is a key C++ feature.'
  },
  {
    id: 'cpp-4',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the default access specifier for members of a class in C++?',
    options: ['public', 'private', 'protected', 'internal'],
    correctAnswer: 'private',
    explanation: 'Class members default to private in C++. In contrast, members of a struct default to public.',
    hint: 'Hidden by default.'
  },
  {
    id: 'cpp-5',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this code output?',
    codeSnippet: 'int a = 10;\nint &ref = a;\nref = 20;\nstd::cout << a;',
    options: ['10', '20', 'Address of a', 'Compilation error'],
    correctAnswer: '20',
    explanation: 'ref is an alias reference to variable a. Mutating ref directly alters a.',
    hint: 'References are aliases to existing variables.'
  },
  {
    id: 'cpp-6',
    categoryId: 'cpp',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which operator is used for the Scope Resolution operator in C++?',
    options: ['::', '->', '.', ':'],
    correctAnswer: '::',
    explanation: 'The double colon (::) is the scope resolution operator, qualifying identifiers to namespaces or classes.',
    hint: 'Double colon.'
  },
  {
    id: 'cpp-7',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the purpose of the "virtual" keyword when applied to a base class member function?',
    options: [
      'Enables runtime dynamic polymorphism via dynamic dispatch (vtable)',
      'Inline compiles the function',
      'Makes the function execute in a separate thread',
      'Hides the function from child classes'
    ],
    correctAnswer: 'Enables runtime dynamic polymorphism via dynamic dispatch (vtable)',
    explanation: 'Declaring a function virtual tells the compiler to dispatch calls using a virtual method table (vtable) for polymorphism.',
    hint: 'Enables late binding and runtime polymorphism.'
  },
  {
    id: 'cpp-8',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this constructor delegation code output?',
    codeSnippet: 'struct Test {\n  Test() { std::cout << "A"; }\n  ~Test() { std::cout << "B"; }\n};\nint main() {\n  Test t;\n  std::cout << "C";\n}',
    options: ['ACB', 'ABC', 'CAB', 'AC'],
    correctAnswer: 'ACB',
    explanation: 'Constructor prints A. Next, C is printed. When t falls out of main\'s scope, destructor prints B. Result: ACB.',
    hint: 'Destructors run when variables exit scope.'
  },
  {
    id: 'cpp-9',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does the RAII idiom stand for in modern C++?',
    options: [
      'Resource Acquisition Is Initialization',
      'Runtime Allocation In Iteration',
      'Realtime Array Index Inspection',
      'Reference Access Inside Interfaces'
    ],
    correctAnswer: 'Resource Acquisition Is Initialization',
    explanation: 'RAII binds resource lifecycle (memory, file handles, mutex locks) to object lifetime via constructors and destructors.',
    hint: 'Resource Acquisition Is Initialization.'
  },
  {
    id: 'cpp-10',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Why does this pure virtual method declaration require syntax = 0?',
    codeSnippet: 'class Shape {\npublic:\n    virtual void draw() = 0;\n};',
    options: [
      'It defines a pure virtual function, making Shape an abstract base class',
      'It sets the return value of draw() to zero',
      'It resets the object memory',
      'It is a syntax error in modern C++'
    ],
    correctAnswer: 'It defines a pure virtual function, making Shape an abstract base class',
    explanation: '= 0 marks a function as pure virtual, preventing direct instantiation of the abstract class.',
    hint: 'Creates an abstract base class.'
  },
  {
    id: 'cpp-11',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In C++11+, the smart pointer that exclusively owns its dynamic resource is std::_______<T>.',
    options: ['shared_ptr', 'unique_ptr', 'weak_ptr', 'auto_ptr'],
    correctAnswer: 'unique_ptr',
    explanation: 'std::unique_ptr enforces sole ownership of heap memory with zero runtime overhead over raw pointers.',
    hint: 'Unique ownership.'
  },
  {
    id: 'cpp-12',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What happens when dynamic_cast<Derived*>(base_ptr) fails on a pointer?',
    options: ['Returns nullptr', 'Throws std::bad_cast exception', 'Crashes the application', 'Returns base_ptr unchanged'],
    correctAnswer: 'Returns nullptr',
    explanation: 'When dynamic_cast fails on a pointer, it returns nullptr. On references, it throws std::bad_cast.',
    hint: 'Pointer casts return null on failure.'
  },
  {
    id: 'cpp-13',
    categoryId: 'cpp',
    difficulty: 'medium',
    type: 'true_false',
    question: 'A base class with virtual methods should always declare a virtual destructor.',
    options: ['True', 'False', 'Only if the class has static members', 'Only if using multiple inheritance'],
    correctAnswer: 'True',
    explanation: 'Without a virtual destructor, deleting a derived instance through a base pointer causes undefined behavior (derived destructor not called).',
    hint: 'Prevents resource leaks when deleting derived objects via base pointers.'
  },
  {
    id: 'cpp-14',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the purpose of std::move in C++11?',
    codeSnippet: 'std::string a = "Hello";\nstd::string b = std::move(a);',
    options: [
      'It performs an unconditional static_cast of "a" to an rvalue reference (std::string&&)',
      'It moves the variable onto a different CPU thread',
      'It physically copies memory bytes in background',
      'It deletes the original string from RAM'
    ],
    correctAnswer: 'It performs an unconditional static_cast of "a" to an rvalue reference (std::string&&)',
    explanation: 'std::move does not move anything at runtime; it casts its argument to an rvalue reference to enable move semantics.',
    hint: 'It is a cast to an rvalue reference.'
  },
  {
    id: 'cpp-15',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is SFINAE in C++ template metaprogramming?',
    options: [
      'Substitution Failure Is Not An Error',
      'Static Function In Namespace Allocation Engine',
      'Stream File Initialization And Execution',
      'Single File Inline Assembly Extension'
    ],
    correctAnswer: 'Substitution Failure Is Not An Error',
    explanation: 'SFINAE states that if substituting a deduced type into a template fails, the compiler discards that overload without emitting a compile error.',
    hint: 'Substitution Failure Is Not An Error.'
  },
  {
    id: 'cpp-16',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does "constexpr" specify when decorating a function in modern C++?',
    options: [
      'The function can be evaluated at compile-time when passed constant expressions',
      'The function can never be called more than once',
      'The function is thread-locked',
      'The function arguments must be floats'
    ],
    correctAnswer: 'The function can be evaluated at compile-time when passed constant expressions',
    explanation: 'constexpr functions are eligible for compile-time evaluation if their parameters are known constants at compile-time.',
    hint: 'Compile-time constant evaluation.'
  },
  {
    id: 'cpp-17',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What problem does std::weak_ptr solve in C++?',
    options: [
      'Breaks cyclical reference loops that prevent std::shared_ptr from deallocating memory',
      'Creates non-blocking network streams',
      'Speeds up integer arithmetic',
      'Allocates memory in kernel space'
    ],
    correctAnswer: 'Breaks cyclical reference loops that prevent std::shared_ptr from deallocating memory',
    explanation: 'std::weak_ptr provides a non-owning observer reference without incrementing reference count, preventing circular shared_ptr deadlocks.',
    hint: 'Prevents circular reference memory leaks.'
  },
  {
    id: 'cpp-18',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does C++20 "Concepts" introduce to template metaprogramming?',
    options: [
      'Named compile-time constraints and requirements on template parameters with clear compiler diagnostics',
      'A new garbage collection system',
      'Built-in GUI rendering primitives',
      'An interpreted runtime layer'
    ],
    correctAnswer: 'Named compile-time constraints and requirements on template parameters with clear compiler diagnostics',
    explanation: 'Concepts constrain template parameters at compile time, eliminating confusing multi-page template compiler error messages.',
    hint: 'Compile-time constraints on template arguments.'
  },
  {
    id: 'cpp-19',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'true_false',
    question: 'Placement new (new (ptr) Type()) constructs an object in an already allocated memory buffer without allocating new heap memory.',
    options: ['True', 'False', 'Only for POD types', 'Deprecated in C++20'],
    correctAnswer: 'True',
    explanation: 'Placement new allows constructing an object into pre-existing storage (like custom memory arenas or std::vector buffers).',
    hint: 'Constructs an object in pre-allocated memory.'
  },
  {
    id: 'cpp-20',
    categoryId: 'cpp',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the purpose of perfect forwarding using std::forward<T>(arg)?',
    codeSnippet: 'template <typename T>\nvoid wrapper(T&& arg) {\n    target(std::forward<T>(arg));\n}',
    options: [
      'Preserves the exact value category (lvalue vs rvalue) of the passed argument',
      'Creates an atomic copy across memory barriers',
      'Converts types to void*',
      'Caches function parameters'
    ],
    correctAnswer: 'Preserves the exact value category (lvalue vs rvalue) of the passed argument',
    explanation: 'std::forward preserves an argument\'s original value category (lvalue or rvalue), forwarding it without unnecessary copies.',
    hint: 'Preserves lvalue/rvalue semantics.'
  }
];
