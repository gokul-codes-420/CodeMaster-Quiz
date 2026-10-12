export const cssQuestions = [
  {
    id: 'css-1',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which CSS property is used to change the text color of an element?',
    options: ['font-style', 'background-color', 'color', 'text-decoration'],
    correctAnswer: 'color',
    explanation: 'The "color" property sets the foreground text color of an element. "background-color" sets the background.',
    hint: 'Simply the word for what tint/hue you see on text.'
  },
  {
    id: 'css-2',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To select an HTML element with id="main-header", you use the _______ selector in CSS.',
    options: ['.main-header', '#main-header', '*main-header', '@main-header'],
    correctAnswer: '#main-header',
    explanation: 'The hash (#) symbol selects elements by their ID, whereas a dot (.) selects by class name.',
    hint: 'The hash or pound symbol.'
  },
  {
    id: 'css-3',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which property controls the space between the content of an element and its border?',
    options: ['margin', 'padding', 'spacing', 'gap'],
    correctAnswer: 'padding',
    explanation: 'Padding defines the inner spacing between element content and its border. Margin is the outer spacing.',
    hint: 'Inner cushion inside the border.'
  },
  {
    id: 'css-4',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the default value of the "position" property in CSS?',
    options: ['relative', 'absolute', 'static', 'fixed'],
    correctAnswer: 'static',
    explanation: 'Elements default to position: static, meaning they flow naturally according to standard document flow.',
    hint: 'Does not move with top/bottom/left/right unless positioned otherwise.'
  },
  {
    id: 'css-5',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In CSS, margin: 0 auto; will horizontally center a block element with a defined width.',
    options: ['True', 'False', 'Only in Flexbox', 'Only with table-cell display'],
    correctAnswer: 'True',
    explanation: 'Setting left and right margins to auto distributes available horizontal space equally, centering the block.',
    hint: 'Standard technique for centering fixed-width blocks.'
  },
  {
    id: 'css-6',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which CSS unit is relative to the font-size of the root <html> element?',
    options: ['em', 'rem', 'vw', 'px'],
    correctAnswer: 'rem',
    explanation: 'rem stands for "root em", calculating units relative to the font-size of the root <html> element.',
    hint: 'r + em.'
  },
  {
    id: 'css-7',
    categoryId: 'css',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which property is used to change the background color of an element?',
    options: ['bgcolor', 'color', 'background-color', 'canvas-color'],
    correctAnswer: 'background-color',
    explanation: 'The background-color property sets the background color of an element.',
    hint: 'background hyphen color.'
  },
  {
    id: 'css-8',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the calculated total width of this box using standard box-sizing: content-box?',
    codeSnippet: 'div {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}',
    options: ['200px', '250px', '270px', '240px'],
    correctAnswer: '250px',
    explanation: 'With content-box: Total width = width (200) + left/right padding (40) + left/right border (10) = 250px. (Margins are outer spacing).',
    hint: 'Total width = width + padding*2 + border*2.'
  },
  {
    id: 'css-9',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which CSS property changes the box model so width includes padding and border?',
    options: ['box-sizing: border-box', 'box-sizing: content-box', 'display: compact', 'padding-box: true'],
    correctAnswer: 'box-sizing: border-box',
    explanation: 'box-sizing: border-box causes width and height to encompass content, padding, and border.',
    hint: 'The most popular reset value used in modern CSS.'
  },
  {
    id: 'css-10',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'In Flexbox, which property aligns items along the CROSS axis?',
    options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
    correctAnswer: 'align-items',
    explanation: 'justify-content aligns along the main axis, while align-items aligns items along the cross axis.',
    hint: 'Main axis is justify-content; cross axis is...'
  },
  {
    id: 'css-11',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'syntax_error',
    question: 'Which CSS specificity calculation has the highest priority?',
    options: ['div.container p (0, 0, 1, 2)', '#nav .link (0, 1, 1, 0)', 'ul li a:hover (0, 0, 1, 3)', 'header#main (0, 1, 0, 1)'],
    correctAnswer: '#nav .link (0, 1, 1, 0)',
    explanation: '#nav .link has 1 ID + 1 class (specificity 0, 1, 1, 0), beating header#main (1 ID + 1 element = 0, 1, 0, 1).',
    hint: 'Count IDs first, then classes/pseudo-classes, then elements.'
  },
  {
    id: 'css-12',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In CSS Grid, the unit that represents a fraction of available free space is the _______ unit.',
    options: ['fr', 'pct', 'flex', 'gr'],
    correctAnswer: 'fr',
    explanation: 'The "fr" unit represents a fractional share of flexible grid space.',
    hint: 'Short for fraction.'
  },
  {
    id: 'css-13',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What does the CSS property "z-index" require to take effect on an element?',
    options: ['The element must be a flex container', 'The element must have a positioned context (not static)', 'The element must have a defined border', 'The element must have opacity < 1'],
    correctAnswer: 'The element must have a positioned context (not static)',
    explanation: 'z-index only applies to positioned elements (relative, absolute, fixed, sticky) or direct children of flex/grid containers.',
    hint: 'Static elements ignore z-index.'
  },
  {
    id: 'css-14',
    categoryId: 'css',
    difficulty: 'medium',
    type: 'output',
    question: 'What is the color of the text in this rule cascade?',
    codeSnippet: 'p { color: red !important; }\n#special { color: blue; }\np.active { color: green !important; }',
    options: ['red', 'blue', 'green', 'black'],
    correctAnswer: 'green',
    explanation: 'Both red and green use !important, so specificity resolves the tie: p.active (class + element) beats p (element alone).',
    hint: 'When two rules both have !important, standard specificity rules break the tie.'
  },
  {
    id: 'css-15',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the CSS ":has()" pseudo-class selector represent?',
    options: [
      'A parent/relational selector matching elements that contain specific descendants',
      'A pseudo-class matching elements with specific inline styles',
      'A pseudo-class for custom web components with shadow DOM',
      'An animation state checker'
    ],
    correctAnswer: 'A parent/relational selector matching elements that contain specific descendants',
    explanation: ':has() is often referred to as the "parent selector" because it matches elements containing descendants meeting a criterion.',
    hint: 'Long awaited relational selector allowing parent styling.'
  },
  {
    id: 'css-16',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Which of the following creates a new Stacking Context in CSS?',
    options: [
      'opacity: 0.99',
      'transform: translateZ(0)',
      'filter: blur(2px)',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'Any element with opacity < 1, transform not none, or filter not none establishes a brand new stacking context.',
    hint: 'Modern compositing properties trigger new stacking contexts.'
  },
  {
    id: 'css-17',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'How do you access a CSS custom property (variable) named --accent-color?',
    options: ['var(--accent-color)', '$--accent-color', 'env(--accent-color)', 'css(--accent-color)'],
    correctAnswer: 'var(--accent-color)',
    explanation: 'CSS variables are read using the var() function, e.g. color: var(--accent-color).',
    hint: 'Uses the var() functional notation.'
  },
  {
    id: 'css-18',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'output',
    question: 'What happens with subgrid in CSS Grid?',
    codeSnippet: 'grid-template-columns: subgrid;',
    options: [
      'A nested grid inherits column tracks from its parent grid container',
      'Creates a 3D isometric grid',
      'Merges all cells into a single flexible track',
      'Renders an SVG grid background'
    ],
    correctAnswer: 'A nested grid inherits column tracks from its parent grid container',
    explanation: 'subgrid delegates the definition of tracks to the parent grid, aligning nested items with the grandparent grid.',
    hint: 'Inheriting parent grid tracks.'
  },
  {
    id: 'css-19',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'true_false',
    question: 'CSS Container Queries (@container) evaluate conditions against a container\'s size rather than the entire browser viewport.',
    options: ['True', 'False', 'Only works with media="screen"', 'Deprecated in CSS3'],
    correctAnswer: 'True',
    explanation: '@container queries allow components to respond dynamically to the dimensions of their parent container.',
    hint: 'Designed to solve modular component-level responsiveness.'
  },
  {
    id: 'css-20',
    categoryId: 'css',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What is the function of the "content-visibility: auto" property?',
    options: [
      'Hides text until screen readers finish parsing',
      'Skips rendering off-screen elements until they approach viewport, boosting rendering speed',
      'Automatically translates text content into multiple languages',
      'Replaces images with vector placeholders'
    ],
    correctAnswer: 'Skips rendering off-screen elements until they approach viewport, boosting rendering speed',
    explanation: 'content-visibility: auto boosts initial page load performance by postponing layout and paint for off-screen elements.',
    hint: 'Performance optimization for off-screen DOM nodes.'
  }
];
