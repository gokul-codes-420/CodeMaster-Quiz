export const oopQuestions = [
  {
    id: 'oop-1',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is considered one of the four foundational pillars of Object-Oriented Programming?',
    options: ['Encapsulation', 'Recursion', 'Iteration', 'Compilation'],
    correctAnswer: 'Encapsulation',
    explanation: 'The four classic pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.',
    hint: 'Wrapping data and methods together.'
  },
  {
    id: 'oop-2',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'An individual instance created from a class blueprint in OOP is called an _______.',
    options: ['object', 'method', 'interface', 'event'],
    correctAnswer: 'object',
    explanation: 'A class is a blueprint; an object is a concrete runtime instance created from that blueprint.',
    hint: 'The \'O\' in OOP.'
  },
  {
    id: 'oop-3',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the OOP concept of hiding internal implementation details and exposing only necessary operations?',
    options: ['Abstraction', 'Polymorphism', 'Overloading', 'Serializing'],
    correctAnswer: 'Abstraction',
    explanation: 'Abstraction filters out complex internal implementation mechanics, presenting only relevant interfaces to callers.',
    hint: 'Hides unnecessary complexity.'
  },
  {
    id: 'oop-4',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Encapsulation bundles data (attributes) and methods operating on that data within a single unit and restricts direct access to internal state.',
    options: ['True', 'False', 'Only in Java and C++', 'Only when using private fields'],
    correctAnswer: 'True',
    explanation: 'Encapsulation combines state with behavior while controlling mutation through accessors and mutators.',
    hint: 'Data hiding and bundling.'
  },
  {
    id: 'oop-5',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is a constructor method in OOP?',
    options: [
      'A special method automatically invoked when a new object instance is created to initialize its state',
      'A function that deletes old objects',
      'A design pattern for GUI windows',
      'A compiler optimization step'
    ],
    correctAnswer: 'A special method automatically invoked when a new object instance is created to initialize its state',
    explanation: 'Constructors set up initial values for instance properties when "new" is invoked.',
    hint: 'Initializes new object state.'
  },
  {
    id: 'oop-6',
    categoryId: 'oop',
    difficulty: 'easy',
    type: 'match_concept',
    question: 'Which relationship does Class Inheritance typically represent?',
    options: ['"is-a" relationship (e.g. Dog is-a Animal)', '"has-a" relationship (e.g. Car has-a Engine)', '"uses-a" relationship', '"depends-on" relationship'],
    correctAnswer: '"is-a" relationship (e.g. Dog is-a Animal)',
    explanation: 'Inheritance models taxonomic specialization: a Dog "is-a" Animal. Composition models "has-a".',
    hint: '"is-a" specialization.'
  },
  {
    id: 'oop-7',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is Polymorphism in Object-Oriented Programming?',
    options: [
      'The ability of different classes to respond to the same method call with their own specialized behavior',
      'Converting code into multiple machine languages',
      'Having multiple constructors in the same class',
      'Storing variables in multiple threads'
    ],
    correctAnswer: 'The ability of different classes to respond to the same method call with their own specialized behavior',
    explanation: 'Polymorphism (many forms) allows treating derived objects uniformly through a common base interface.',
    hint: 'Many forms: same interface, different behaviors.'
  },
  {
    id: 'oop-8',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is the difference between Method Overloading and Method Overriding?',
    options: [
      'Overloading is compile-time polymorphism (same name, different parameters); Overriding is runtime polymorphism (derived class redefines base method with same signature)',
      'Overloading occurs across classes; Overriding occurs in the same class',
      'Overriding requires final keyword',
      'They are exact synonyms'
    ],
    correctAnswer: 'Overloading is compile-time polymorphism (same name, different parameters); Overriding is runtime polymorphism (derived class redefines base method with same signature)',
    explanation: 'Overloading changes signatures within the same class; Overriding re-implements a base class method with the exact same signature in a child class.',
    hint: 'Static compile-time vs dynamic runtime dispatch.'
  },
  {
    id: 'oop-9',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In the SOLID principles of object-oriented design, the "S" stands for the _______ Responsibility Principle.',
    options: ['Single', 'Static', 'Shared', 'Synchronous'],
    correctAnswer: 'Single',
    explanation: 'The Single Responsibility Principle (SRP) states that a class should have only one reason to change.',
    hint: 'One single purpose.'
  },
  {
    id: 'oop-10',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What is the "Diamond Problem" in multiple class inheritance?',
    options: [
      'Ambiguity that arises when two parent classes inherit from the same grandparent class, causing confusion over which method override the child inherits',
      'An error when memory runs out',
      'A syntax error when nesting structs in C',
      'A loop in garbage collection'
    ],
    correctAnswer: 'Ambiguity that arises when two parent classes inherit from the same grandparent class, causing confusion over which method override the child inherits',
    explanation: 'When class D inherits from B and C, both inheriting from A, conflicting implementations in B and C create diamond ambiguity.',
    hint: 'Ambiguity from multiple inheritance paths from a common grandparent.'
  },
  {
    id: 'oop-11',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'true_false',
    question: 'Object Composition ("favor composition over inheritance") promotes combining simpler objects to achieve complex behavior with lower coupling.',
    options: ['True', 'False', 'Inheritance is always preferred over composition', 'Only applicable in functional languages'],
    correctAnswer: 'True',
    explanation: 'The Gang of Four famously advised favor object composition over class inheritance for greater flexibility.',
    hint: 'Has-a relationships provide greater modularity than is-a hierarchies.'
  },
  {
    id: 'oop-12',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'output',
    question: 'Which design pattern guarantees that a class has only one instance and provides a global access point to it?',
    options: ['Singleton', 'Factory Method', 'Observer', 'Adapter'],
    correctAnswer: 'Singleton',
    explanation: 'Singleton restricts instantiation to a single unique instance throughout runtime.',
    hint: 'Only one single instance.'
  },
  {
    id: 'oop-13',
    categoryId: 'oop',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What does the Open/Closed Principle (the "O" in SOLID) dictate?',
    options: [
      'Software entities should be open for extension, but closed for modification',
      'Files must be closed after opening',
      'Classes must be public (open) never private (closed)',
      'Source code must be open source'
    ],
    correctAnswer: 'Software entities should be open for extension, but closed for modification',
    explanation: 'You should be able to extend a module\'s behavior without editing and risking regressions in its verified source code.',
    hint: 'Open for extension, closed for modification.'
  },
  {
    id: 'oop-14',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the Liskov Substitution Principle (LSP) state in SOLID design?',
    options: [
      'Subtypes must be substitutable for their base types without altering the correctness of the program',
      'Subclasses must override every method of the superclass',
      'Every class must implement an interface named after itself',
      'Constructors must be private'
    ],
    correctAnswer: 'Subtypes must be substitutable for their base types without altering the correctness of the program',
    explanation: 'LSP guarantees that derived classes honor the behavioral contracts and expectations of their base abstractions.',
    hint: 'Subtypes must be cleanly substitutable for base types.'
  },
  {
    id: 'oop-15',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which Gang of Four pattern defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically?',
    options: ['Observer pattern', 'Strategy pattern', 'Decorator pattern', 'Command pattern'],
    correctAnswer: 'Observer pattern',
    explanation: 'The Observer pattern (publish/subscribe) notifies registered listeners of subject state transitions.',
    hint: 'Publisher and subscriber observer pattern.'
  },
  {
    id: 'oop-16',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does the Dependency Inversion Principle (DIP) state?',
    options: [
      'High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces)',
      'Modules should invert their loop counters',
      'Dependencies should be compiled in reverse order',
      'Databases should control business logic'
    ],
    correctAnswer: 'High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces)',
    explanation: 'DIP decouples high-level policy code from low-level infrastructure implementations by inserting abstract interfaces between them.',
    hint: 'Depend upon abstractions, not concrete implementations.'
  },
  {
    id: 'oop-17',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'output',
    question: 'Which design pattern dynamically attaches additional responsibilities to an object as an alternative to subclassing?',
    options: ['Decorator pattern', 'Facade pattern', 'Singleton pattern', 'Prototype pattern'],
    correctAnswer: 'Decorator pattern',
    explanation: 'The Decorator pattern wraps an object to augment its behavior without altering the underlying class definition.',
    hint: 'Decorates an existing object with extra features.'
  },
  {
    id: 'oop-18',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the Law of Demeter (Principle of Least Knowledge)?',
    options: [
      'A unit should only speak to its immediate friends (e.g. avoid chain calls like a.getB().getC().doAction())',
      'Classes should have less than 10 methods',
      'Variables should never exceed 1000 in memory',
      'Comments should be under 50 characters'
    ],
    correctAnswer: 'A unit should only speak to its immediate friends (e.g. avoid chain calls like a.getB().getC().doAction())',
    explanation: 'The Law of Demeter reduces structural coupling by prohibiting objects from navigating through complex object graphs of collaborators.',
    hint: 'Talk only to your immediate friends.'
  },
  {
    id: 'oop-19',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In OOP, an Abstract Class can contain concrete methods with implementations, whereas a traditional pure Interface specifies only method signatures.',
    options: ['True', 'False', 'Abstract classes can never have code implementations', 'Interfaces can always store mutable state'],
    correctAnswer: 'True',
    explanation: 'Abstract classes provide base implementations and shared state, while pure interfaces define contracts.',
    hint: 'Abstract classes can provide base method code.'
  },
  {
    id: 'oop-20',
    categoryId: 'oop',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the Strategy pattern achieve in software architecture?',
    options: [
      'Defines a family of interchangeable algorithms, encapsulating each one and making them swappable at runtime',
      'Creates a tree structure of UI components',
      'Restores previous object states (undo/redo)',
      'Manages database transaction logs'
    ],
    correctAnswer: 'Defines a family of interchangeable algorithms, encapsulating each one and making them swappable at runtime',
    explanation: 'The Strategy pattern encapsulates interchangeable algorithms behind a common interface, selected dynamically at runtime.',
    hint: 'Interchangeable algorithms selected at runtime.'
  }
];
