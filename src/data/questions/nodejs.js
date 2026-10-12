export const nodejsQuestions = [
  {
    id: 'node-1',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which built-in module is commonly used to create an HTTP server in Node.js?',
    options: ['fs', 'path', 'http', 'events'],
    correctAnswer: 'http',
    explanation: 'The core "http" module provides HTTP server and client interfaces through http.createServer().',
    hint: 'Named after the protocol itself.'
  },
  {
    id: 'node-2',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which JavaScript engine powers Node.js?',
    options: ['SpiderMonkey', 'JavaScriptCore', 'V8', 'Chakra'],
    correctAnswer: 'V8',
    explanation: 'Node.js is built on Google Chrome\'s high-performance open-source V8 JavaScript engine.',
    hint: 'Created by Google for Chrome.'
  },
  {
    id: 'node-3',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The default package manager bundled with Node.js is _______.',
    options: ['yarn', 'pnpm', 'npm', 'bun'],
    correctAnswer: 'npm',
    explanation: 'npm (Node Package Manager) is shipped automatically with official Node.js distributions.',
    hint: 'Three lowercase letters.'
  },
  {
    id: 'node-4',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which built-in module is used to interact with the file system?',
    options: ['os', 'fs', 'file', 'storage'],
    correctAnswer: 'fs',
    explanation: 'The "fs" (File System) module allows reading, writing, and manipulating files asynchronously or synchronously.',
    hint: 'Short for File System.'
  },
  {
    id: 'node-5',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Node.js runs single-threaded for JavaScript execution on its event loop.',
    options: ['True', 'False', 'Only in cluster mode', 'Only on Linux'],
    correctAnswer: 'True',
    explanation: 'Node.js executes user JavaScript code on a single thread event loop, offloading heavy I/O to libuv worker threads.',
    hint: 'Single main thread event loop.'
  },
  {
    id: 'node-6',
    categoryId: 'nodejs',
    difficulty: 'easy',
    type: 'syntax_error',
    question: 'In CommonJS, which syntax correctly exports a function named calculate?',
    options: ['export calculate;', 'module.exports = { calculate };', 'export default calculate;', 'exports := calculate;'],
    correctAnswer: 'module.exports = { calculate };',
    explanation: 'CommonJS uses module.exports or exports to expose functionality across files in Node.js.',
    hint: 'module dot exports.'
  },
  {
    id: 'node-7',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the output of this path resolution?',
    codeSnippet: 'const path = require("path");\nconsole.log(path.join("/users", "john", "../jane"));',
    options: ['/users/john/jane', '/users/jane', '/users/john/../jane', 'Error'],
    correctAnswer: '/users/jane',
    explanation: 'path.join resolves relative path segments like "..", traversing back up to /users and appending /jane.',
    hint: 'The ".." navigates one level up.'
  },
  {
    id: 'node-8',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What C library handles the asynchronous I/O and thread pool behind Node.js?',
    options: ['glibc', 'libuv', 'OpenSSL', 'zlib'],
    correctAnswer: 'libuv',
    explanation: 'libuv is the multi-platform support library providing asynchronous I/O event loops and thread pools for Node.js.',
    hint: 'Starts with lib...'
  },
  {
    id: 'node-9',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'What is the purpose of process.nextTick()?',
    options: [
      'Executes a callback immediately after the current phase before the event loop continues',
      'Waits 1 millisecond before executing',
      'Schedules a task for the next CPU core',
      'Runs code only on application shutdown'
    ],
    correctAnswer: 'Executes a callback immediately after the current phase before the event loop continues',
    explanation: 'process.nextTick() fires immediately after the current operation finishes, before any other I/O or timer events.',
    hint: 'Highest priority microtask queue in Node.js.'
  },
  {
    id: 'node-10',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To handle streams without memory overflow by matching reading and writing speeds, you use the _______ method.',
    options: ['buffer', 'pipe', 'streamSync', 'transfer'],
    correctAnswer: 'pipe',
    explanation: 'readableStream.pipe(writableStream) automatically handles backpressure and streams chunks efficiently.',
    hint: 'Think of connecting physical plumbing.'
  },
  {
    id: 'node-11',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which event is emitted by an EventEmitter when an unhandled error condition occurs?',
    options: ['"fail"', '"exception"', '"error"', '"crash"'],
    correctAnswer: '"error"',
    explanation: 'If an EventEmitter emits "error" with no listeners registered, Node.js prints the stack trace and crashes the process.',
    hint: 'The standard error string.'
  },
  {
    id: 'node-12',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'true_false',
    question: 'In modern Node.js, ES modules (import/export) can be enabled by setting "type": "module" in package.json.',
    options: ['True', 'False', 'Only with TypeScript compiler', 'Only via CLI flag --harmony'],
    correctAnswer: 'True',
    explanation: 'Setting "type": "module" in package.json informs Node.js to treat .js files as ES Modules natively.',
    hint: 'Standard package.json field.'
  },
  {
    id: 'node-13',
    categoryId: 'nodejs',
    difficulty: 'medium',
    type: 'output',
    question: 'What does Buffer.from("ABC").toString("hex") produce?',
    codeSnippet: 'const buf = Buffer.from("ABC");\nconsole.log(buf.toString("hex"));',
    options: ['414243', '656667', 'ABC', '313233'],
    correctAnswer: '414243',
    explanation: 'ASCII codes for "A", "B", "C" in hexadecimal are 0x41, 0x42, and 0x43, resulting in "414243".',
    hint: 'ASCII 65 = 0x41 in hex.'
  },
  {
    id: 'node-14',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'mcq',
    question: 'How many worker threads are in the default libuv thread pool?',
    options: ['1', '2', '4', '8'],
    correctAnswer: '4',
    explanation: 'The default size of UV_THREADPOOL_SIZE in Node.js is 4 threads, which can be modified via environment variables.',
    hint: 'UV_THREADPOOL_SIZE defaults to four.'
  },
  {
    id: 'node-15',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which built-in module allows creating child worker processes that share server ports across multi-core CPUs?',
    options: ['cluster', 'worker_threads', 'child_process', 'v8'],
    correctAnswer: 'cluster',
    explanation: 'The cluster module creates worker child processes sharing the same server port to take advantage of multi-core CPUs.',
    hint: 'Clustering processes together.'
  },
  {
    id: 'node-16',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'What happens when an uncaught promise rejection occurs in Node.js v15+?',
    options: [
      'Silently ignored with a deprecation warning',
      'The Node.js process terminates with a non-zero exit code (exit status 1)',
      'Automatically restarts the script from main()',
      'Redirects to stderr and pauses execution'
    ],
    correctAnswer: 'The Node.js process terminates with a non-zero exit code (exit status 1)',
    explanation: 'Starting with Node.js 15, unhandledRejection mode was changed to terminate the process by default.',
    hint: 'Modern Node treats unhandled rejections as fatal crashes.'
  },
  {
    id: 'node-17',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the purpose of the "worker_threads" module compared to the "cluster" module?',
    options: [
      'worker_threads runs lightweight threads inside the same OS process sharing memory (ArrayBuffers)',
      'worker_threads is only for HTTP routing',
      'cluster is for front-end only',
      'worker_threads replaces async/await'
    ],
    correctAnswer: 'worker_threads runs lightweight threads inside the same OS process sharing memory (ArrayBuffers)',
    explanation: 'worker_threads execute multiple JavaScript threads sharing memory via SharedArrayBuffer within a single OS process.',
    hint: 'True multithreading with shared memory inside one process.'
  },
  {
    id: 'node-18',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'output',
    question: 'Which order do these event loop callbacks fire in Node.js?',
    codeSnippet: 'const fs = require("fs");\nfs.readFile(__filename, () => {\n  setTimeout(() => console.log("timeout"), 0);\n  setImmediate(() => console.log("immediate"));\n});',
    options: [
      'immediate always before timeout',
      'timeout always before immediate',
      'Random order depending on OS clock',
      'Both fire simultaneously'
    ],
    correctAnswer: 'immediate always before timeout',
    explanation: 'Within an I/O cycle (like readFile), the "check" phase (setImmediate) executes before the next "timers" phase (setTimeout).',
    hint: 'Inside I/O callbacks, check phase follows poll phase directly.'
  },
  {
    id: 'node-19',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'true_false',
    question: 'The Node.js vm module provides an entirely secure sandbox to execute untrusted code without any escape vulnerabilities.',
    options: ['True', 'False', 'Only in Node.js 20+', 'Only when passing contextified objects'],
    correctAnswer: 'False',
    explanation: 'The official Node.js documentation warns that the vm module is NOT a security sandbox and should not run untrusted code.',
    hint: 'The Node docs explicitly state vm is not a security sandbox.'
  },
  {
    id: 'node-20',
    categoryId: 'nodejs',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the AsyncLocalStorage API in the "async_hooks" module provide?',
    options: [
      'Stores web cookies on the server disk',
      'Propagates request-scoped context across asynchronous operation chains without prop-drilling',
      'High-speed local file caching',
      'Thread-safe SQLite storage'
    ],
    correctAnswer: 'Propagates request-scoped context across asynchronous operation chains without prop-drilling',
    explanation: 'AsyncLocalStorage provides continuation-local storage, allowing tracing and context propagation throughout async workflows.',
    hint: 'Similar to ThreadLocal in Java, but for async contexts.'
  }
];
