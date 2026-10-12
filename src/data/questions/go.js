export const goQuestions = [
  {
    id: 'go-1',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword declares a function in Go?',
    options: ['func', 'function', 'def', 'fn'],
    correctAnswer: 'func',
    explanation: 'Go uses the keyword "func" to define functions and methods.',
    hint: 'Four letters starting with f.'
  },
  {
    id: 'go-2',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The short variable declaration and initialization operator in Go is _______.',
    options: [':=', '=', '==', '::'],
    correctAnswer: ':=',
    explanation: 'The walrus operator := declares and initializes a variable with inferred type inside function bodies.',
    hint: 'Colon followed by equals.'
  },
  {
    id: 'go-3',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword spawns a lightweight concurrent goroutine in Go?',
    options: ['go', 'async', 'spawn', 'thread'],
    correctAnswer: 'go',
    explanation: 'Prefixing a function call with the "go" keyword runs it concurrently as an independent goroutine.',
    hint: 'The name of the language itself.'
  },
  {
    id: 'go-4',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'output',
    question: 'What is the default zero-value of an uninitialized int variable in Go?',
    codeSnippet: 'var x int\nfmt.Println(x)',
    options: ['0', 'nil', 'undefined', 'NaN'],
    correctAnswer: '0',
    explanation: 'Go automatically zero-initializes variables. The zero value for numeric types is 0.',
    hint: 'Numeric zero.'
  },
  {
    id: 'go-5',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In Go, identifiers starting with a capital letter are automatically exported (public) outside the package.',
    options: ['True', 'False', 'Requires export keyword', 'Only for struct types'],
    correctAnswer: 'True',
    explanation: 'Capitalization determines package visibility in Go: capital letter means exported, lowercase means unexported (package-private).',
    hint: 'Visibility is determined by letter case.'
  },
  {
    id: 'go-6',
    categoryId: 'go',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which loop construct is the ONLY looping construct supported in Go?',
    options: ['for', 'while', 'do-while', 'loop'],
    correctAnswer: 'for',
    explanation: 'Go unified all loops into the "for" keyword (which can serve as a standard loop, while loop, or infinite loop).',
    hint: 'Go has only one keyword for all loops.'
  },
  {
    id: 'go-7',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What does the "defer" statement do in Go?',
    options: [
      'Postpones the execution of a function until the surrounding function returns',
      'Cancels function execution',
      'Sends a task to another CPU core',
      'Caches function results'
    ],
    correctAnswer: 'Postpones the execution of a function until the surrounding function returns',
    explanation: 'A defer statement pushes a function call onto a stack; saved calls are executed in LIFO order when the surrounding function returns.',
    hint: 'Frequently used to close files and unlock mutexes.'
  },
  {
    id: 'go-8',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'output',
    question: 'What will this slice append operation print?',
    codeSnippet: 's := []int{1, 2}\ns = append(s, 3, 4)\nfmt.Println(len(s))',
    options: ['2', '4', '3', 'Error'],
    correctAnswer: '4',
    explanation: 'append(s, 3, 4) appends both elements to the slice, making len(s) equal to 4.',
    hint: 'Appends 2 items to an initial slice of 2 items.'
  },
  {
    id: 'go-9',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How are errors idiomatically handled in Go functions?',
    options: [
      'Returning an error as the final return value (e.g. result, err := doWork()) and checking if err != nil',
      'Using try / catch blocks',
      'Using global error codes',
      'Printing to console only'
    ],
    correctAnswer: 'Returning an error as the final return value (e.g. result, err := doWork()) and checking if err != nil',
    explanation: 'Go treats errors as ordinary values returned explicitly from functions rather than thrown exceptions.',
    hint: 'if err != nil.'
  },
  {
    id: 'go-10',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What happens when reading from an unbuffered channel when no goroutine is writing to it?',
    options: [
      'The reading goroutine blocks indefinitely (causing a deadlock if no other goroutines are running)',
      'Returns nil immediately',
      'Returns zero value immediately',
      'Throws a PanicException'
    ],
    correctAnswer: 'The reading goroutine blocks indefinitely (causing a deadlock if no other goroutines are running)',
    explanation: 'Unbuffered channels require both sender and receiver to synchronize; reading blocks until a sender is ready.',
    hint: 'Unbuffered channels block until sender is available.'
  },
  {
    id: 'go-11',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To communicate between concurrent goroutines and synchronize execution, Go uses _______.',
    options: ['channels', 'pipes', 'promises', 'callbacks'],
    correctAnswer: 'channels',
    explanation: 'Channels are Go\'s typed conduits that allow goroutines to synchronize and communicate values.',
    hint: '"Do not communicate by sharing memory; instead, share memory by communicating."'
  },
  {
    id: 'go-12',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In Go, interfaces are implemented implicitly without any "implements" keyword.',
    options: ['True', 'False', 'Only if declared in the same package', 'Requires struct tags'],
    correctAnswer: 'True',
    explanation: 'A type implements an interface simply by implementing all of the methods defined in that interface (structural duck typing).',
    hint: 'Implicit interface implementation.'
  },
  {
    id: 'go-13',
    categoryId: 'go',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the order of execution for multiple deferred statements?',
    codeSnippet: 'defer fmt.Print("A")\ndefer fmt.Print("B")\ndefer fmt.Print("C")',
    options: ['ABC', 'CBA', 'BAC', 'Random order'],
    correctAnswer: 'CBA',
    explanation: 'Deferred function calls are evaluated in Last-In-First-Out (LIFO) stack order.',
    hint: 'LIFO order.'
  },
  {
    id: 'go-14',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "select" statement do in Go concurrency?',
    options: [
      'Blocks until one of several channel communication cases is ready to proceed',
      'Selects rows from a SQL database',
      'Picks random elements from a slice',
      'Chooses which CPU core to run on'
    ],
    correctAnswer: 'Blocks until one of several channel communication cases is ready to proceed',
    explanation: 'The select statement lets a goroutine wait on multiple communication operations across channels.',
    hint: 'Like switch, but for channel communication.'
  },
  {
    id: 'go-15',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What occurs during a "panic" and how can it be intercepted in Go?',
    options: [
      'Halts normal execution and unwinds the stack, which can be intercepted using recover() inside a deferred function',
      'Crashes the OS kernel immediately without recovery possible',
      'Retries the function 3 times',
      'Logs to /var/log/syslog only'
    ],
    correctAnswer: 'Halts normal execution and unwinds the stack, which can be intercepted using recover() inside a deferred function',
    explanation: 'panic begins unwinding the goroutine stack, and recover() can capture the panic value when invoked inside a deferred function.',
    hint: 'panic and recover with defer.'
  },
  {
    id: 'go-16',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the difference between length len() and capacity cap() of a slice in Go?',
    options: [
      'len is the number of elements in the slice; cap is the total elements in the underlying backing array starting from the slice header',
      'cap is memory size in bytes',
      'len is maximum capacity',
      'They always match exactly'
    ],
    correctAnswer: 'len is the number of elements in the slice; cap is the total elements in the underlying backing array starting from the slice header',
    explanation: 'len() reports current visible elements, while cap() reports elements remaining in the underlying allocated backing array.',
    hint: 'Length vs capacity of underlying array.'
  },
  {
    id: 'go-17',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What happens if you send a value to a CLOSED channel in Go?',
    options: [
      'The runtime causes a panic',
      'The value is silently dropped',
      'Returns false',
      'Re-opens the channel'
    ],
    correctAnswer: 'The runtime causes a panic',
    explanation: 'Sending on a closed channel triggers a runtime panic: "panic: send on closed channel". Reading from a closed channel yields the zero value.',
    hint: 'Sending to a closed channel is an illegal panic state.'
  },
  {
    id: 'go-18',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'mcq',
    question: 'How do Go 1.18+ Generics define constraints on type parameters?',
    options: [
      'Using interface types (e.g. [T any] or [T comparable] or type sets like [T int | float64])',
      'Using template <> syntax identical to C++',
      'Using class inheritance hierarchies',
      'Using JSON schema annotations'
    ],
    correctAnswer: 'Using interface types (e.g. [T any] or [T comparable] or type sets like [T int | float64])',
    explanation: 'Go generics use square brackets with interface constraints and type approximation sets.',
    hint: 'Square brackets with interface-based constraints.'
  },
  {
    id: 'go-19',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'true_false',
    question: 'The Go runtime GMP scheduler uses M:N scheduling to map G (goroutines) onto M (OS threads) managed by P (logical processors).',
    options: ['True', 'False', 'Go uses 1:1 kernel threads exclusively', 'Go has no internal scheduler'],
    correctAnswer: 'True',
    explanation: 'The Go runtime scheduler uses the GMP model (Goroutine, Machine/Thread, Processor) for work-stealing concurrency.',
    hint: 'M:N work-stealing scheduler.'
  },
  {
    id: 'go-20',
    categoryId: 'go',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the sync.WaitGroup type coordinate in Go?',
    options: [
      'Waits for a collection of concurrent goroutines to finish executing',
      'Manages database query timeouts',
      'Encrypts channel payloads',
      'Provides distributed server clustering'
    ],
    correctAnswer: 'Waits for a collection of concurrent goroutines to finish executing',
    explanation: 'sync.WaitGroup provides Add(), Done(), and Wait() to coordinate synchronization across multiple goroutines.',
    hint: 'Add, Done, and Wait.'
  }
];
