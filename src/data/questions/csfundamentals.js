export const csfundamentalsQuestions = [
  {
    id: 'csf-1',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many bits are in a single standard byte?',
    options: ['4', '8', '16', '32'],
    correctAnswer: '8',
    explanation: 'A standard computer byte consists of 8 bits, capable of representing 256 distinct binary values (0 to 255).',
    hint: '2 to the power of 3.'
  },
  {
    id: 'csf-2',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The base-16 number system widely used in computing is called _______.',
    options: ['hexadecimal', 'binary', 'octal', 'decimal'],
    correctAnswer: 'hexadecimal',
    explanation: 'Hexadecimal uses 16 symbols (0-9 and A-F) to concisely represent 4-bit binary nibbles.',
    hint: 'Hex + decimal.'
  },
  {
    id: 'csf-3',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which component of a computer CPU performs arithmetic and logical decisions?',
    options: ['ALU (Arithmetic Logic Unit)', 'Control Unit', 'L1 Cache', 'Bus Interface'],
    correctAnswer: 'ALU (Arithmetic Logic Unit)',
    explanation: 'The ALU (Arithmetic Logic Unit) executes mathematical calculations (+, -, *, /) and bitwise operations.',
    hint: 'ALU.'
  },
  {
    id: 'csf-4',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'true_false',
    question: 'RAM (Random Access Memory) is volatile memory that loses its contents when power is turned off.',
    options: ['True', 'False', 'Only DDR5 RAM is volatile', 'Only when CPU is idle'],
    correctAnswer: 'True',
    explanation: 'RAM requires electrical current to maintain storage states; power loss erases all volatile RAM data.',
    hint: 'Volatile vs non-volatile storage.'
  },
  {
    id: 'csf-5',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'output',
    question: 'What is the binary representation of the decimal number 13?',
    options: ['1101', '1011', '1110', '1001'],
    correctAnswer: '1101',
    explanation: '13 in binary = 8 + 4 + 0 + 1 = 1101 in base 2.',
    hint: '8 (1) + 4 (1) + 2 (0) + 1 (1).'
  },
  {
    id: 'csf-6',
    categoryId: 'csfundamentals',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the OSI networking model, at which layer does the HTTP protocol operate?',
    options: ['Layer 7 (Application)', 'Layer 4 (Transport)', 'Layer 3 (Network)', 'Layer 2 (Data Link)'],
    correctAnswer: 'Layer 7 (Application)',
    explanation: 'HTTP, DNS, SMTP, and FTP operate at Layer 7, the Application layer of the 7-layer OSI model.',
    hint: 'The top user-facing layer.'
  },
  {
    id: 'csf-7',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the main difference between a Process and a Thread in operating systems?',
    options: [
      'A process has its own isolated memory address space; threads within a process share the same memory address space',
      'Processes run on GPU; threads run on CPU',
      'Threads cannot be scheduled concurrently',
      'A process cannot have more than one thread'
    ],
    correctAnswer: 'A process has its own isolated memory address space; threads within a process share the same memory address space',
    explanation: 'Processes provide strong memory isolation; threads are lightweight execution contexts sharing heap and resources of the parent process.',
    hint: 'Address space isolation vs shared memory.'
  },
  {
    id: 'csf-8',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is a "Deadlock" in concurrent computing?',
    options: [
      'A condition where two or more processes are permanently blocked because each holds a resource that the other requires',
      'A processor running at 100% capacity',
      'A hard drive disconnection',
      'A memory leak that fills RAM'
    ],
    correctAnswer: 'A condition where two or more processes are permanently blocked because each holds a resource that the other requires',
    explanation: 'Coffman conditions describe deadlocks where circular waits prevent any thread from advancing.',
    hint: 'Circular wait on locked resources.'
  },
  {
    id: 'csf-9',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In TCP networking, establishing a connection requires a _______-way handshake (SYN, SYN-ACK, ACK).',
    options: ['three', 'two', 'four', 'one'],
    correctAnswer: 'three',
    explanation: 'TCP guarantees reliable connection establishment through the classic 3-way handshake (SYN, SYN-ACK, ACK).',
    hint: 'Three steps.'
  },
  {
    id: 'csf-10',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What does the Two\'s Complement representation accomplish for binary numbers?',
    options: [
      'Represents negative integers so addition and subtraction can use the exact same hardware circuit',
      'Doubles the speed of CPU multiplication',
      'Compresses ASCII strings',
      'Prevents buffer overflow'
    ],
    correctAnswer: 'Represents negative integers so addition and subtraction can use the exact same hardware circuit',
    explanation: 'Two\'s complement simplifies hardware ALU design by avoiding separate subtraction logic and eliminating positive/negative zero ambiguity.',
    hint: 'Signed integer representation in hardware.'
  },
  {
    id: 'csf-11',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'output',
    question: 'Which CPU cache level is closest to the execution cores and fastest in latency?',
    options: ['L1 Cache', 'L2 Cache', 'L3 Cache', 'Main RAM'],
    correctAnswer: 'L1 Cache',
    explanation: 'L1 cache is the smallest, fastest memory layer located directly on the processor core, operating in ~1 nanosecond.',
    hint: 'Level 1 is closest and fastest.'
  },
  {
    id: 'csf-12',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'true_false',
    question: 'Virtual Memory allows operating systems to map physical RAM and disk swap into a contiguous virtual address space per process.',
    options: ['True', 'False', 'Only on 32-bit systems', 'Only when RAM is less than 4GB'],
    correctAnswer: 'True',
    explanation: 'The MMU (Memory Management Unit) translates virtual page addresses into physical RAM frames or swap space.',
    hint: 'MMU page translation and isolation.'
  },
  {
    id: 'csf-13',
    categoryId: 'csfundamentals',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the purpose of the Domain Name System (DNS)?',
    options: [
      'Translates human-friendly domain names (e.g. google.com) into numerical IP addresses',
      'Encrypts credit card transactions',
      'Balances server CPU load',
      'Controls Wi-Fi radio frequencies'
    ],
    correctAnswer: 'Translates human-friendly domain names (e.g. google.com) into numerical IP addresses',
    explanation: 'DNS acts as the phonebook of the internet, mapping domain names to IP addresses.',
    hint: 'Internet phonebook.'
  },
  {
    id: 'csf-14',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What are the four necessary Coffman conditions required for a Deadlock to occur?',
    options: [
      'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait',
      'Race Condition, Memory Leak, Segmentation Fault, Starvation',
      'Paging, Thrashing, Swapping, Scheduling',
      'SYN, ACK, FIN, RST'
    ],
    correctAnswer: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait',
    explanation: 'All four Coffman conditions must hold simultaneously for a deadlock to exist; breaking any one eliminates deadlock.',
    hint: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.'
  },
  {
    id: 'csf-15',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is "Thrashing" in Operating System virtual memory management?',
    options: [
      'A state where the CPU spends excessive time swapping pages between RAM and disk rather than executing instructions',
      'Overclocking the CPU until thermal shutdown',
      'Rapid hard drive platter spin',
      'Corrupted partition tables'
    ],
    correctAnswer: 'A state where the CPU spends excessive time swapping pages between RAM and disk rather than executing instructions',
    explanation: 'Thrashing occurs when high page fault rates cause the OS to spend more time servicing page replacement than doing productive work.',
    hint: 'Excessive page faulting and disk swapping.'
  },
  {
    id: 'csf-16',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'output',
    question: 'What does the CAP Theorem state regarding distributed data systems?',
    options: [
      'A distributed system can guarantee at most two of: Consistency, Availability, and Partition Tolerance',
      'Calculations Are Parallel',
      'Caches Are Persistent',
      'Concurrency Always Prevails'
    ],
    correctAnswer: 'A distributed system can guarantee at most two of: Consistency, Availability, and Partition Tolerance',
    explanation: 'Eric Brewer\'s CAP theorem proves that in the presence of network partitions (P), a distributed system must choose between Consistency (C) and Availability (A).',
    hint: 'Consistency, Availability, Partition tolerance trade-off.'
  },
  {
    id: 'csf-17',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What is a Context Switch in CPU multitasking?',
    options: [
      'The process of saving the execution state (registers, program counter) of a running thread and restoring another so execution can resume',
      'Switching between two monitors',
      'Changing programming languages',
      'Compiling from debug to release'
    ],
    correctAnswer: 'The process of saving the execution state (registers, program counter) of a running thread and restoring another so execution can resume',
    explanation: 'Context switching preserves CPU register states, stack pointers, and program counters to swap execution between threads.',
    hint: 'Saves and restores process/thread register state.'
  },
  {
    id: 'csf-18',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What distinguishes Symmetric encryption (e.g. AES) from Asymmetric encryption (e.g. RSA)?',
    options: [
      'Symmetric encryption uses the same secret key for encryption and decryption; Asymmetric uses a public/private key pair',
      'Asymmetric encryption is faster than Symmetric encryption',
      'Symmetric encryption cannot encrypt files larger than 1MB',
      'Asymmetric encryption does not use mathematical keys'
    ],
    correctAnswer: 'Symmetric encryption uses the same secret key for encryption and decryption; Asymmetric uses a public/private key pair',
    explanation: 'Symmetric uses one shared secret; Asymmetric uses mathematically related public and private key pairs.',
    hint: 'One shared secret vs public/private key pair.'
  },
  {
    id: 'csf-19',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'true_false',
    question: 'The Little-Endian byte order stores the least significant byte (LSB) at the lowest memory address.',
    options: ['True', 'False', 'Big-Endian stores LSB at lowest address', 'Endianness only applies to text strings'],
    correctAnswer: 'True',
    explanation: 'Little-Endian (used by x86 and ARM by default) places the lowest-order byte first at the smallest memory address.',
    hint: 'Little end (least significant byte) first.'
  },
  {
    id: 'csf-20',
    categoryId: 'csfundamentals',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is the purpose of the Translation Lookaside Buffer (TLB) in computer architecture?',
    options: [
      'A high-speed hardware cache in the MMU that stores recent virtual-to-physical address translations',
      'A buffer for network packets',
      'A GPU texture cache',
      'A disk write buffer'
    ],
    correctAnswer: 'A high-speed hardware cache in the MMU that stores recent virtual-to-physical address translations',
    explanation: 'The TLB avoids walking page tables in RAM for every memory access by caching recent address translations in silicon.',
    hint: 'MMU cache for virtual-to-physical address translations.'
  }
];
