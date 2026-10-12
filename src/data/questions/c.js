export const cQuestions = [
  {
    id: 'c-1',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which operator is used to determine the memory address of a variable in C?',
    options: ['*', '&', '%', '->'],
    correctAnswer: '&',
    explanation: 'The ampersand (&) is the address-of operator, returning the memory address of its operand.',
    hint: 'Address-of operator.'
  },
  {
    id: 'c-2',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which header file must be included to use printf() and scanf()?',
    options: ['<stdlib.h>', '<conio.h>', '<stdio.h>', '<string.h>'],
    correctAnswer: '<stdio.h>',
    explanation: '<stdio.h> stands for Standard Input/Output header file, declaring I/O functions like printf and scanf.',
    hint: 'Standard Input Output.'
  },
  {
    id: 'c-3',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'output',
    question: 'What does this program print?',
    codeSnippet: 'int a = 10, b = 3;\nprintf("%d", a / b);',
    options: ['3.33', '3', '4', '0'],
    correctAnswer: '3',
    explanation: 'Integer division in C truncates any fractional portion, leaving 10 / 3 = 3.',
    hint: 'Integer divided by integer discards decimals.'
  },
  {
    id: 'c-4',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A C string is terminated by the null character _______ in memory.',
    options: ['\\0', '\\n', '\\t', 'EOF'],
    correctAnswer: '\\0',
    explanation: 'Strings in C are null-terminated character arrays, where \'\\0\' marks the boundary.',
    hint: 'Backslash zero.'
  },
  {
    id: 'c-5',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Arrays in C are 0-indexed.',
    options: ['True', 'False', 'Only static arrays', 'Only in C99'],
    correctAnswer: 'True',
    explanation: 'C arrays always start with index 0 through size - 1.',
    hint: 'First element is at index 0.'
  },
  {
    id: 'c-6',
    categoryId: 'c',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the return type of the main() function in ISO C standard?',
    options: ['void', 'int', 'float', 'char*'],
    correctAnswer: 'int',
    explanation: 'The standard specifies int main() or int main(int argc, char *argv[]), returning an exit code to the host OS.',
    hint: 'Returns an integer status code to the operating system.'
  },
  {
    id: 'c-7',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'output',
    question: 'What is printed by this pointer arithmetic code?',
    codeSnippet: 'int arr[] = {10, 20, 30, 40};\nint *ptr = arr;\nprintf("%d", *(ptr + 2));',
    options: ['10', '20', '30', '40'],
    correctAnswer: '30',
    explanation: 'ptr points to arr[0]. *(ptr + 2) offsets 2 elements ahead to arr[2], which contains 30.',
    hint: 'ptr + 2 dereferences element at index 2.'
  },
  {
    id: 'c-8',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which function allocates raw memory on the heap without zero-initializing it?',
    options: ['calloc()', 'malloc()', 'realloc()', 'free()'],
    correctAnswer: 'malloc()',
    explanation: 'malloc() allocates bytes leaving memory contents uninitialized (garbage values). calloc() zero-initializes memory.',
    hint: 'Memory allocate, leaving garbage data in place.'
  },
  {
    id: 'c-9',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'output',
    question: 'What will be the output of this code?',
    codeSnippet: 'int x = 5;\nint *p = &x;\n*p = 25;\nprintf("%d", x);',
    options: ['5', '25', 'Address of x', 'Error'],
    correctAnswer: '25',
    explanation: '*p dereferences the pointer p, mutating the value held in variable x to 25.',
    hint: 'Dereferencing writes to the original variable.'
  },
  {
    id: 'c-10',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'What causes a segmentation fault in this snippet?',
    codeSnippet: 'char *str = "Hello";\nstr[0] = \'h\';',
    options: [
      'String literals in C are stored in read-only memory; modifying them triggers undefined behavior/segfault',
      'str is not declared static',
      'Missing semicolon',
      'Single quotes cannot be used'
    ],
    correctAnswer: 'String literals in C are stored in read-only memory; modifying them triggers undefined behavior/segfault',
    explanation: 'String literals are placed in read-only text segment memory. Modifying them causes illegal memory access.',
    hint: 'String literals reside in read-only pages.'
  },
  {
    id: 'c-11',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To release heap memory previously allocated with malloc(), pass the pointer to _______(ptr).',
    options: ['delete', 'free', 'release', 'destroy'],
    correctAnswer: 'free',
    explanation: 'free(ptr) deallocates heap memory associated with the pointer to prevent memory leaks.',
    hint: 'free memory.'
  },
  {
    id: 'c-12',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is the purpose of the "sizeof" operator in C?',
    options: [
      'Returns the size in bytes of a data type or object',
      'Returns the number of elements in any heap array',
      'Allocates memory on the stack',
      'Counts characters in a string'
    ],
    correctAnswer: 'Returns the size in bytes of a data type or object',
    explanation: 'sizeof is a compile-time operator yielding the memory size in bytes of its operand.',
    hint: 'Yields the byte width.'
  },
  {
    id: 'c-13',
    categoryId: 'c',
    difficulty: 'medium',
    type: 'true_false',
    question: 'Structures in C can contain pointers to the same structure type (self-referential structs).',
    options: ['True', 'False', 'Only in C++', 'Causes infinite compilation loop'],
    correctAnswer: 'True',
    explanation: 'Self-referential structs (like struct Node { struct Node *next; };) form the foundation of linked lists and trees.',
    hint: 'Essential for building linked lists.'
  },
  {
    id: 'c-14',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'output',
    question: 'What does this macro expansion print?',
    codeSnippet: '#define SQUARE(x) x * x\nint res = SQUARE(2 + 3);\nprintf("%d", res);',
    options: ['25', '11', '13', '15'],
    correctAnswer: '11',
    explanation: 'Macro replacement is textual: 2 + 3 * 2 + 3. Multiplication precedence gives 2 + (3 * 2) + 3 = 2 + 6 + 3 = 11.',
    hint: 'Macros perform naive text substitution without parentheses.'
  },
  {
    id: 'c-15',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is a "Dangling Pointer"?',
    options: [
      'A pointer pointing to a memory location that has already been deallocated',
      'A pointer initialized to NULL',
      'A pointer to a function',
      'A pointer that cannot be dereferenced'
    ],
    correctAnswer: 'A pointer pointing to a memory location that has already been deallocated',
    explanation: 'Dangling pointers arise when an object is deleted or deallocated without modifying the value of the pointer to NULL.',
    hint: 'Points to freed or dead memory.'
  },
  {
    id: 'c-16',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'In C, what is the declaration of a function pointer pointing to a function that takes an int and returns void?',
    options: ['void (*fptr)(int);', 'void *fptr(int);', 'void (fptr*)(int);', '(*void)(int) fptr;'],
    correctAnswer: 'void (*fptr)(int);',
    explanation: 'Parentheses around (*fptr) are necessary to bind the pointer to the identifier rather than having the function return void*.',
    hint: 'Parentheses enclose the asterisk and variable name.'
  },
  {
    id: 'c-17',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the effect of structure padding (alignment) in C?',
    options: [
      'Compiler inserts unused bytes between struct members to align them with hardware memory word boundaries',
      'Encrypts data structures in RAM',
      'Prevents buffer overflow exploits automatically',
      'Shrinks struct size'
    ],
    correctAnswer: 'Compiler inserts unused bytes between struct members to align them with hardware memory word boundaries',
    explanation: 'CPUs read words from memory addresses matching word multiples; compilers insert padding bytes for performance.',
    hint: 'Aligns struct fields with memory boundaries.'
  },
  {
    id: 'c-18',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the value of x after this bitwise manipulation?',
    codeSnippet: 'unsigned char x = 0x0F;\nx = x ^ 0xFF;',
    options: ['0x00', '0xF0', '0xFF', '0x0F'],
    correctAnswer: '0xF0',
    explanation: '0x0F is 00001111. XOR with 0xFF (11111111) flips each bit to 11110000, which is 0xF0.',
    hint: 'XOR with all 1s inverts all bits.'
  },
  {
    id: 'c-19',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'true_false',
    question: 'In C, passing an array to a function causes it to decay into a pointer to its first element.',
    options: ['True', 'False', 'Only for multidimensional arrays', 'Arrays are passed by value completely'],
    correctAnswer: 'True',
    explanation: 'Arrays decay into pointers when passed to functions, losing their compile-time sizeof array length info.',
    hint: 'Array decay to pointer.'
  },
  {
    id: 'c-20',
    categoryId: 'c',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the purpose of the "setjmp" and "longjmp" functions in C?',
    options: [
      'Provides non-local control transfer (primitive exception handling mechanism)',
      'Performs atomic compare-and-swap on CPU registers',
      'Jumps between different threads',
      'Reboots the system'
    ],
    correctAnswer: 'Provides non-local control transfer (primitive exception handling mechanism)',
    explanation: 'setjmp saves the stack context / registers, and longjmp restores them, providing non-local goto across function boundaries.',
    hint: 'Non-local goto mechanism.'
  }
];
