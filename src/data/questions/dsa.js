export const dsaQuestions = [
  {
    id: 'dsa-1',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the time complexity of searching for an element in an unsorted array of size N?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correctAnswer: 'O(N)',
    explanation: 'Linear search must inspect each of the N elements in the worst case.',
    hint: 'Must check each element sequentially.'
  },
  {
    id: 'dsa-2',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Binary Tree'],
    correctAnswer: 'Stack',
    explanation: 'A Stack pushes and pops elements in LIFO order (last in, first out). Queues are FIFO.',
    hint: 'Like a stack of dinner plates.'
  },
  {
    id: 'dsa-3',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A Queue operates on the _______ (FIFO) principle.',
    options: ['First-In, First-Out', 'Last-In, First-Out', 'Random Access', 'Priority First'],
    correctAnswer: 'First-In, First-Out',
    explanation: 'Queues maintain FIFO ordering: the earliest enqueued element is dequeued first.',
    hint: 'Like standing in a line at a store checkout.'
  },
  {
    id: 'dsa-4',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'true_false',
    question: 'Binary Search requires the input array to be sorted before execution.',
    options: ['True', 'False', 'Only for arrays with odd numbers of elements', 'Only if the array contains negative numbers'],
    correctAnswer: 'True',
    explanation: 'Binary Search halves the search space based on ordering; it fails completely on unsorted data.',
    hint: 'Relies on sorted order to discard half the elements.'
  },
  {
    id: 'dsa-5',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the average time complexity of QuickSort?',
    options: ['O(N log N)', 'O(N^2)', 'O(log N)', 'O(N)'],
    correctAnswer: 'O(N log N)',
    explanation: 'QuickSort divides the array around pivots, achieving O(N log N) average performance.',
    hint: 'Standard divide-and-conquer sorting complexity.'
  },
  {
    id: 'dsa-6',
    categoryId: 'dsa',
    difficulty: 'easy',
    type: 'output',
    question: 'What is the value of the head element after these operations on an empty Queue?',
    codeSnippet: 'enqueue(10);\nenqueue(20);\ndequeue();\nenqueue(30);',
    options: ['10', '20', '30', 'Queue is empty'],
    correctAnswer: '20',
    explanation: '10 is added, then 20. dequeue() removes 10. Front of queue is now 20. enqueue(30) adds to back.',
    hint: 'FIFO: first element in is first removed.'
  },
  {
    id: 'dsa-7',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the worst-case time complexity of inserting a node into a Binary Search Tree (BST) with N nodes?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 'O(N)',
    explanation: 'In a degenerate skewed BST (like a linked list with sorted inserts), tree height is N, leading to O(N) worst-case time.',
    hint: 'A degenerate tree becomes a linear chain.'
  },
  {
    id: 'dsa-8',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'Which graph traversal algorithm uses a Queue to visit vertices layer by layer?',
    options: ['Breadth-First Search (BFS)', 'Depth-First Search (DFS)', 'Dijkstra\'s with stack', 'Topological Sort with recursion'],
    correctAnswer: 'Breadth-First Search (BFS)',
    explanation: 'BFS explores vertices in expanding concentric waves using a FIFO queue.',
    hint: 'Breadth explores all immediate neighbors first.'
  },
  {
    id: 'dsa-9',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In a Hash Table, when two distinct keys hash to the identical index, it is called a _______.',
    options: ['collision', 'deadlock', 'overflow', 'clustering'],
    correctAnswer: 'collision',
    explanation: 'Hash collisions occur when the hash function computes the same slot for different keys.',
    hint: 'Two keys colliding into the same slot.'
  },
  {
    id: 'dsa-10',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the Inorder traversal of this BST?',
    codeSnippet: '    (4)\n   /   \\\n  (2)   (5)\n /   \\\n(1)   (3)',
    options: ['1, 2, 3, 4, 5', '4, 2, 1, 3, 5', '1, 3, 2, 5, 4', '5, 4, 3, 2, 1'],
    correctAnswer: '1, 2, 3, 4, 5',
    explanation: 'Inorder traversal (Left, Root, Right) on a valid BST always yields keys in ascending sorted order.',
    hint: 'Inorder on BST always produces sorted keys.'
  },
  {
    id: 'dsa-11',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Which sorting algorithm is GUARANTEED to be stable and run in O(N log N) worst-case time?',
    options: ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Selection Sort'],
    correctAnswer: 'Merge Sort',
    explanation: 'Merge Sort consistently achieves O(N log N) in all cases and preserves relative order of duplicate elements (stable).',
    hint: 'Divide and conquer algorithm with guaranteed O(N log N) and stability.'
  },
  {
    id: 'dsa-12',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'true_false',
    question: 'A cycle can exist in an undirected graph if and only if a Depth-First Search discovers a back-edge to an already visited ancestor node.',
    options: ['True', 'False', 'Only if the graph has weights', 'Only with negative cycles'],
    correctAnswer: 'True',
    explanation: 'Detecting back-edges during DFS traversal is the canonical algorithm for cycle detection in undirected and directed graphs.',
    hint: 'Back-edge indicates a loop/cycle.'
  },
  {
    id: 'dsa-13',
    categoryId: 'dsa',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the time complexity to find the minimum element in a Min-Heap of size N?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 'O(1)',
    explanation: 'In a Min-Heap, the root node at index 0 always holds the minimum element, accessible in constant O(1) time.',
    hint: 'The minimum element is stored directly at the root.'
  },
  {
    id: 'dsa-14',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What property balances an AVL tree?',
    options: [
      'For every node, the height difference (balance factor) between its left and right subtrees is at most 1',
      'The tree must be completely full at all levels',
      'Nodes alternate between red and black colors',
      'Leaves must have odd values'
    ],
    correctAnswer: 'For every node, the height difference (balance factor) between its left and right subtrees is at most 1',
    explanation: 'AVL trees enforce a strict balance factor balance in {-1, 0, 1} through tree rotations.',
    hint: 'Balance factor between left and right subtrees.'
  },
  {
    id: 'dsa-15',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'Which algorithm finds all-pairs shortest paths in a weighted directed graph in O(V^3) time?',
    options: ['Floyd-Warshall algorithm', 'Dijkstra\'s algorithm', 'Kruskal\'s algorithm', 'Bellman-Ford algorithm'],
    correctAnswer: 'Floyd-Warshall algorithm',
    explanation: 'Floyd-Warshall computes shortest paths between every pair of vertices using dynamic programming in O(V^3) time.',
    hint: 'Triple nested loop dynamic programming for all pairs.'
  },
  {
    id: 'dsa-16',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'output',
    question: 'What is the amortized time complexity of the Union and Find operations in a Disjoint Set Union (DSU) using path compression and union by rank?',
    options: ['O(α(N)) (Inverse Ackermann function)', 'O(1) strict', 'O(log N)', 'O(N)'],
    correctAnswer: 'O(α(N)) (Inverse Ackermann function)',
    explanation: 'Combining path compression with union by rank yields nearly O(1) amortized time bounded by the inverse Ackermann function α(N) <= 4.',
    hint: 'Inverse Ackermann function.'
  },
  {
    id: 'dsa-17',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'Why does standard Dijkstra\'s algorithm fail on graphs containing negative edge weights?',
    options: [
      'It greedily marks visited nodes as finalized, assuming once visited, a shorter path cannot be discovered later',
      'It causes division by zero',
      'Priority queues cannot hold negative numbers',
      'It enters infinite recursion'
    ],
    correctAnswer: 'It greedily marks visited nodes as finalized, assuming once visited, a shorter path cannot be discovered later',
    explanation: 'Dijkstra\'s greedy assumption breaks when negative edges decrease path distances for already finalized nodes. (Use Bellman-Ford instead).',
    hint: 'Greedy finality assumption broken by negative edge weights.'
  },
  {
    id: 'dsa-18',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is a Trie data structure primarily optimized for?',
    options: [
      'Prefix search, auto-completion, and string dictionary retrieval in O(L) time where L is word length',
      'Matrix multiplication',
      'Sorting floating point numbers',
      'Finding convex hulls'
    ],
    correctAnswer: 'Prefix search, auto-completion, and string dictionary retrieval in O(L) time where L is word length',
    explanation: 'A Trie (prefix tree) stores character paths, enabling prefix lookup in time proportional to key length.',
    hint: 'Prefix tree for string lookups.'
  },
  {
    id: 'dsa-19',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'true_false',
    question: 'Dynamic programming requires problems to exhibit both Optimal Substructure and Overlapping Subproblems.',
    options: ['True', 'False', 'Only optimal substructure is required', 'Only overlapping subproblems are required'],
    correctAnswer: 'True',
    explanation: 'Dynamic programming is applicable when optimal solutions are built from optimal subproblems, and subproblems recur repeatedly.',
    hint: 'Both properties are fundamental prerequisites for DP.'
  },
  {
    id: 'dsa-20',
    categoryId: 'dsa',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is the difference between Kruskal\'s and Prim\'s algorithms for finding a Minimum Spanning Tree (MST)?',
    options: [
      'Kruskal\'s is edge-based (sorts edges and joins components via DSU); Prim\'s is vertex-based (grows a single tree from a starting vertex)',
      'Prim\'s only works on directed graphs',
      'Kruskal\'s has exponential time complexity',
      'They yield different total weights'
    ],
    correctAnswer: 'Kruskal\'s is edge-based (sorts edges and joins components via DSU); Prim\'s is vertex-based (grows a single tree from a starting vertex)',
    explanation: 'Kruskal\'s adds lowest weight edges avoiding cycles; Prim\'s grows the tree outward from an initial node using a priority queue.',
    hint: 'Edge-centric with DSU vs vertex-centric tree growing.'
  }
];
