export const sqlQuestions = [
  {
    id: 'sql-1',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which SQL command is used to retrieve data from a database table?',
    options: ['SELECT', 'EXTRACT', 'GET', 'FETCH'],
    correctAnswer: 'SELECT',
    explanation: 'The SELECT statement is the standard command used to query and extract data from database tables.',
    hint: 'You select rows from a table.'
  },
  {
    id: 'sql-2',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To filter rows that meet a specific condition in a query, use the _______ clause.',
    options: ['WHERE', 'HAVING', 'FILTER', 'WHEN'],
    correctAnswer: 'WHERE',
    explanation: 'The WHERE clause filters individual records before grouping or ordering occurs.',
    hint: 'Where the condition is met.'
  },
  {
    id: 'sql-3',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which keyword sorts the result-set in descending order?',
    options: ['DESC', 'ASC', 'DOWN', 'REVERSE'],
    correctAnswer: 'DESC',
    explanation: 'DESC stands for descending order (e.g. ORDER BY score DESC). ASC is the default ascending order.',
    hint: 'Short for descending.'
  },
  {
    id: 'sql-4',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which aggregate function returns the total number of rows matching a query criteria?',
    options: ['COUNT()', 'SUM()', 'TOTAL()', 'LEN()'],
    correctAnswer: 'COUNT()',
    explanation: 'COUNT(*) counts all rows matching the criteria.',
    hint: 'Counts the number of records.'
  },
  {
    id: 'sql-5',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'true_false',
    question: 'A PRIMARY KEY uniquely identifies each record in a table and cannot contain NULL values.',
    options: ['True', 'False', 'Can contain one NULL', 'Only applies to numbers'],
    correctAnswer: 'True',
    explanation: 'Primary keys must be unique and are strictly non-null by relational database constraints.',
    hint: 'Unique and non-null.'
  },
  {
    id: 'sql-6',
    categoryId: 'sql',
    difficulty: 'easy',
    type: 'output',
    question: 'Which clause removes duplicate records from the query result?',
    codeSnippet: 'SELECT _______ country FROM customers;',
    options: ['DISTINCT', 'UNIQUE', 'DIFFERENT', 'SINGLE'],
    correctAnswer: 'DISTINCT',
    explanation: 'SELECT DISTINCT returns only unique values for the specified column.',
    hint: 'Select distinct values.'
  },
  {
    id: 'sql-7',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the key difference between the WHERE clause and the HAVING clause in SQL?',
    options: [
      'WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY',
      'WHERE only works on strings; HAVING works on numbers',
      'HAVING is faster than WHERE',
      'WHERE cannot be used with SELECT'
    ],
    correctAnswer: 'WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY',
    explanation: 'WHERE filters base rows prior to aggregation; HAVING filters aggregate values computed across groups.',
    hint: 'Grouping and aggregates determine which clause applies.'
  },
  {
    id: 'sql-8',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'Which JOIN returns all rows from the left table, and matching rows from the right table (with NULLs for non-matches)?',
    options: ['LEFT JOIN', 'INNER JOIN', 'CROSS JOIN', 'RIGHT JOIN'],
    correctAnswer: 'LEFT JOIN',
    explanation: 'LEFT JOIN (or LEFT OUTER JOIN) preserves all rows from the left table, filling non-matching right columns with NULL.',
    hint: 'Keeps all rows from the left table.'
  },
  {
    id: 'sql-9',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this query return?',
    codeSnippet: 'SELECT name FROM employees WHERE name LIKE "_a%";',
    options: [
      'Names with "a" as the second character',
      'Names starting with "a"',
      'Names containing exactly two "a" letters',
      'Names ending in "a"'
    ],
    correctAnswer: 'Names with "a" as the second character',
    explanation: 'The underscore wildcard (_) matches exactly one character, followed by "a", followed by any sequence of characters (%).',
    hint: 'Underscore matches one arbitrary character.'
  },
  {
    id: 'sql-10',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Why will this SQL query fail?',
    codeSnippet: 'SELECT department, AVG(salary) \nFROM employees \nWHERE AVG(salary) > 50000 \nGROUP BY department;',
    options: [
      'Aggregate functions cannot appear directly in the WHERE clause (use HAVING)',
      'AVG is not a valid SQL function',
      'Missing ORDER BY',
      'department must be wrapped in quotes'
    ],
    correctAnswer: 'Aggregate functions cannot appear directly in the WHERE clause (use HAVING)',
    explanation: 'Aggregates like AVG() or SUM() cannot be placed in a WHERE clause; filter aggregates with HAVING AVG(salary) > 50000.',
    hint: 'WHERE runs before aggregates are calculated.'
  },
  {
    id: 'sql-11',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A _______ key in one table references the primary key of another table to maintain referential integrity.',
    options: ['FOREIGN', 'CANDIDATE', 'COMPOSITE', 'SECONDARY'],
    correctAnswer: 'FOREIGN',
    explanation: 'A FOREIGN KEY establishes a direct relationship between columns in two tables, enforcing referential integrity.',
    hint: 'Refers to another table.'
  },
  {
    id: 'sql-12',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'true_false',
    question: 'UNION ALL is generally faster than UNION because it does not incur the overhead of sorting and removing duplicate rows.',
    options: ['True', 'False', 'Only in MySQL', 'Only with indexed tables'],
    correctAnswer: 'True',
    explanation: 'UNION performs a distinct deduplication pass over combined sets, while UNION ALL simply appends results without deduplication.',
    hint: 'UNION ALL avoids sorting/hashing for deduplication.'
  },
  {
    id: 'sql-13',
    categoryId: 'sql',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the result of comparing a value with NULL using standard equality (e.g. WHERE salary = NULL)?',
    codeSnippet: 'SELECT * FROM users WHERE age = NULL;',
    options: ['Returns no rows (evaluates to UNKNOWN/False)', 'Returns all rows where age is null', 'Throws a syntax error', 'Returns rows where age is 0'],
    correctAnswer: 'Returns no rows (evaluates to UNKNOWN/False)',
    explanation: 'In ANSI SQL three-valued logic, comparison with NULL evaluates to UNKNOWN. To check for nulls, use IS NULL.',
    hint: 'Null comparisons require IS NULL.'
  },
  {
    id: 'sql-14',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does a Window Function (OVER clause) do compared to a standard GROUP BY?',
    options: [
      'Performs calculations across related table rows without collapsing individual rows into a single summary row',
      'Splits queries across multiple GUI operating system windows',
      'Creates a temporary table in memory only',
      'Indexes columns in descending order'
    ],
    correctAnswer: 'Performs calculations across related table rows without collapsing individual rows into a single summary row',
    explanation: 'Window functions like ROW_NUMBER() OVER (...) retain each individual input row while computing partitions and rolling statistics.',
    hint: 'Keeps individual rows intact while aggregating.'
  },
  {
    id: 'sql-15',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the difference between RANK() and DENSE_RANK() when duplicate values occur?',
    options: [
      'RANK() leaves gaps in ranking numbers after ties (1, 2, 2, 4); DENSE_RANK() leaves no gaps (1, 2, 2, 3)',
      'DENSE_RANK() leaves gaps while RANK() does not',
      'RANK() works only on integers',
      'They behave identically'
    ],
    correctAnswer: 'RANK() leaves gaps in ranking numbers after ties (1, 2, 2, 4); DENSE_RANK() leaves no gaps (1, 2, 2, 3)',
    explanation: 'DENSE_RANK produces consecutive ranking integers without skips after duplicate ties.',
    hint: 'Dense ranking does not skip numbers after ties.'
  },
  {
    id: 'sql-16',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is a Common Table Expression (CTE) defined with?',
    options: ['WITH clause', 'LET clause', 'CREATE CTE', 'VIEW IF EXISTS'],
    correctAnswer: 'WITH clause',
    explanation: 'A CTE is a temporary named result set defined using the WITH clause preceding a query.',
    hint: 'Starts with the WITH keyword.'
  },
  {
    id: 'sql-17',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the ACID acronym stand for in database transaction management?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Asynchronous, Concurrent, Indexed, Distributed',
      'Availability, Consistency, Integrity, Dependency',
      'Automatic, Cached, Integrated, Durable'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    explanation: 'ACID guarantees that database transactions are processed reliably.',
    hint: 'Atomicity, Consistency, Isolation, Durability.'
  },
  {
    id: 'sql-18',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which transaction isolation level prevents Dirty Reads, Non-Repeatable Reads, AND Phantom Reads?',
    options: ['SERIALIZABLE', 'REPEATABLE READ', 'READ COMMITTED', 'READ UNCOMMITTED'],
    correctAnswer: 'SERIALIZABLE',
    explanation: 'SERIALIZABLE is the strictest isolation level, completely eliminating phantom reads by locking ranges or using snapshot isolation.',
    hint: 'The highest isolation level.'
  },
  {
    id: 'sql-19',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'true_false',
    question: 'A database B-Tree index improves SELECT read performance on filtered columns but introduces write overhead on INSERT/UPDATE/DELETE operations.',
    options: ['True', 'False', 'Indexes speed up writes as well', 'B-Trees are only used for full-text search'],
    correctAnswer: 'True',
    explanation: 'Indexes accelerate read lookups, but every write operation must update and rebalance the index tree structures.',
    hint: 'Read speed vs write maintenance trade-off.'
  },
  {
    id: 'sql-20',
    categoryId: 'sql',
    difficulty: 'hard',
    type: 'output',
    question: 'What is a Correlated Subquery?',
    options: [
      'A subquery that references column values from the outer query, evaluating once for each candidate row',
      'A subquery that executes only once before the main query',
      'A subquery stored permanently on disk as a procedure',
      'Two queries connected via UNION'
    ],
    correctAnswer: 'A subquery that references column values from the outer query, evaluating once for each candidate row',
    explanation: 'Correlated subqueries depend on values from the outer query, requiring execution for every row processed by the outer statement.',
    hint: 'It depends on values from the enclosing outer row.'
  }
];
