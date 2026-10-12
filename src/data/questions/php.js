export const phpQuestions = [
  {
    id: 'php-1',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'mcq',
    question: 'All variables in PHP must begin with which character?',
    options: ['$', '@', '&', '#'],
    correctAnswer: '$',
    explanation: 'In PHP, every variable identifier begins with a dollar sign ($), e.g., $name, $count.',
    hint: 'Currency symbol.'
  },
  {
    id: 'php-2',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Standard PHP code blocks in a web file start with the open tag _______.',
    options: ['<?php', '<script php>', '<%', '<php>'],
    correctAnswer: '<?php',
    explanation: 'The standard opening tag for PHP scripts is <?php. Modern standards require this over short tags.',
    hint: 'Starts with <?.'
  },
  {
    id: 'php-3',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which operator is used for string concatenation in PHP?',
    options: ['.', '+', '&', 'concat'],
    correctAnswer: '.',
    explanation: 'PHP uses the dot (.) operator for string concatenation, unlike JavaScript or Java which use (+).',
    hint: 'A single period or dot.'
  },
  {
    id: 'php-4',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'output',
    question: 'What does echo "Hello " . "World"; output?',
    options: ['Hello World', 'HelloWorld', '0', 'Error'],
    correctAnswer: 'Hello World',
    explanation: 'The dot operator joins the two strings with the space in "Hello " preserved.',
    hint: 'String concatenation with space.'
  },
  {
    id: 'php-5',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In PHP, variable names are case-sensitive ($foo is distinct from $Foo).',
    options: ['True', 'False', 'Only in PHP 8', 'Function names are also case sensitive'],
    correctAnswer: 'True',
    explanation: 'Variable names are case-sensitive in PHP. However, function names, class names, and keywords are case-insensitive.',
    hint: 'Variables are case sensitive.'
  },
  {
    id: 'php-6',
    categoryId: 'php',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which superglobal array contains form data sent via HTTP POST method?',
    options: ['$_POST', '$_GET', '$_REQUEST_POST', '$_FORM'],
    correctAnswer: '$_POST',
    explanation: '$_POST is the associative array containing variables passed via HTTP POST.',
    hint: 'Capitalized superglobal for POST requests.'
  },
  {
    id: 'php-7',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'output',
    question: 'What will this comparison return in PHP 8?',
    codeSnippet: 'echo (0 == "hello") ? "True" : "False";',
    options: ['True', 'False', 'Notice', 'Fatal Error'],
    correctAnswer: 'False',
    explanation: 'In PHP 8+, non-numeric strings are no longer converted to 0 when compared with integers; 0 == "hello" is now False (was True in PHP 7).',
    hint: 'PHP 8 fixed relaxed string-to-number comparisons.'
  },
  {
    id: 'php-8',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What does the spaceship operator (<=>) return when $a is less than $b in $a <=> $b?',
    options: ['-1', '0', '1', 'false'],
    correctAnswer: '-1',
    explanation: 'The spaceship operator returns -1 if left < right, 0 if equal, and 1 if left > right.',
    hint: 'Three-way comparison returning -1, 0, or 1.'
  },
  {
    id: 'php-9',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To prevent SQL Injection when querying relational databases in modern PHP, developers use _______ with PDO or MySQLi.',
    options: ['prepared statements', 'strip_tags()', 'addslashes()', 'md5()'],
    correctAnswer: 'prepared statements',
    explanation: 'Prepared statements separate SQL logic from parameter data, effectively neutralizing SQL injection attacks.',
    hint: 'Parameter binding and preparation.'
  },
  {
    id: 'php-10',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Which modern keyword introduced in PHP 7.4 declares typed class properties?',
    codeSnippet: 'class User {\n    public string $name;\n    public int $age;\n}',
    options: ['This is valid syntax in PHP 7.4+', 'Typed properties are not allowed in PHP', 'Types must use @var annotations only', 'string must be capitalized'],
    correctAnswer: 'This is valid syntax in PHP 7.4+',
    explanation: 'PHP 7.4 introduced first-class typed properties with type enforcement at assignment.',
    hint: 'PHP 7.4 brought native typed class properties.'
  },
  {
    id: 'php-11',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is the package manager for PHP used to manage dependencies like Laravel or Symfony?',
    options: ['Composer', 'Pip', 'Packagist-cli', 'Pear'],
    correctAnswer: 'Composer',
    explanation: 'Composer is the industry standard dependency management tool for PHP libraries.',
    hint: 'Musical composer.'
  },
  {
    id: 'php-12',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In PHP, require_once produces a fatal error and halts execution if the target file cannot be loaded.',
    options: ['True', 'False', 'Only produces a warning', 'Silently continues'],
    correctAnswer: 'True',
    explanation: 'require and require_once generate a fatal E_COMPILE_ERROR on failure, halting script execution unlike include.',
    hint: 'require causes fatal error; include emits warning.'
  },
  {
    id: 'php-13',
    categoryId: 'php',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the output of count() on this associative array?',
    codeSnippet: '$arr = ["a" => 1, "b" => 2, "c" => [3, 4]];\necho count($arr);',
    options: ['3', '4', '2', '5'],
    correctAnswer: '3',
    explanation: 'count() counts the top-level keys ("a", "b", "c") unless recursive mode (COUNT_RECURSIVE) is requested.',
    hint: 'Top-level key count.'
  },
  {
    id: 'php-14',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the PHP 8 "match" expression compared to a traditional "switch" statement?',
    options: [
      'An expression that returns a value, uses strict identity comparison (===), and does not require break statements',
      'A pattern matcher for regular expressions only',
      'A multi-threaded branching tool',
      'An alias for switch with identical loose equality'
    ],
    correctAnswer: 'An expression that returns a value, uses strict identity comparison (===), and does not require break statements',
    explanation: 'The match expression does strict comparison (===), returns values directly, and does not suffer from fallthrough bugs.',
    hint: 'Strict equality and expression return value.'
  },
  {
    id: 'php-15',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What does PHP 8.1 "readonly" property modifier enforce?',
    options: [
      'The property can only be initialized once inside the class and cannot be modified afterwards',
      'The property cannot be read outside the file',
      'The property can only store integer constants',
      'It freezes the entire operating system file'
    ],
    correctAnswer: 'The property can only be initialized once inside the class and cannot be modified afterwards',
    explanation: 'readonly properties prevent modification of state after construction, ensuring immutability.',
    hint: 'Write-once immutability.'
  },
  {
    id: 'php-16',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What are PHP 8 Attributes (syntax #[...])?',
    options: [
      'Native structured metadata declarations for classes and functions replacing docblock annotations',
      'HTML DOM attributes inside template strings',
      'Global environment variables',
      'Database column triggers'
    ],
    correctAnswer: 'Native structured metadata declarations for classes and functions replacing docblock annotations',
    explanation: 'Attributes provide structured, type-safe metadata inspectable via PHP Reflection without parsing string docblocks.',
    hint: 'Replaces @annotation docblocks with native language syntax.'
  },
  {
    id: 'php-17',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'output',
    question: 'What does Constructor Property Promotion in PHP 8 do?',
    codeSnippet: 'class Point {\n    public function __construct(\n        public float $x = 0.0,\n        public float $y = 0.0\n    ) {}\n}',
    options: [
      'Automatically declares and assigns class member properties from constructor parameters',
      'Promotes parameters to global scope',
      'Generates getter and setter methods in memory',
      'Throws syntax error'
    ],
    correctAnswer: 'Automatically declares and assigns class member properties from constructor parameters',
    explanation: 'Constructor promotion eliminates boilerplate by declaring properties directly inside constructor argument list.',
    hint: 'Combines property declaration and parameter assignment.'
  },
  {
    id: 'php-18',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does Fibers (introduced in PHP 8.1) provide to PHP runtimes?',
    options: [
      'Full-stack coroutines enabling non-blocking concurrency frameworks (like Revolt / Amp)',
      'Memory compression for arrays',
      'WebAssembly compilation target',
      'Direct fiber-optic network access'
    ],
    correctAnswer: 'Full-stack coroutines enabling non-blocking concurrency frameworks (like Revolt / Amp)',
    explanation: 'Fibers represent stackable coroutines that can be paused and resumed, powering modern async PHP frameworks.',
    hint: 'Stackful coroutines for async PHP.'
  },
  {
    id: 'php-19',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In PHP 8.1+, enums can be backed by strings or integers (Backed Enums).',
    options: ['True', 'False', 'Only integer enums exist', 'Only in Symfony framework'],
    correctAnswer: 'True',
    explanation: 'PHP supports pure enums as well as backed enums declared with "enum Status: string" or "enum Status: int".',
    hint: 'Backed Enums have scalar string or int representations.'
  },
  {
    id: 'php-20',
    categoryId: 'php',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is OPcache in PHP production environments?',
    options: [
      'A built-in extension that stores precompiled script bytecode in shared memory, eliminating recompilation on every request',
      'A distributed key-value database like Redis',
      'A browser cache header utility',
      'A CDN load balancer'
    ],
    correctAnswer: 'A built-in extension that stores precompiled script bytecode in shared memory, eliminating recompilation on every request',
    explanation: 'OPcache caches opcode bytecode in shared RAM so PHP does not need to parse and compile files on each incoming request.',
    hint: 'Caches precompiled opcode in shared memory.'
  }
];
