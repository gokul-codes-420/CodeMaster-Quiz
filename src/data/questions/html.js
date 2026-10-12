export const htmlQuestions = [
  {
    id: 'html-1',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which HTML tag is used to define an internal hyperlink?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    correctAnswer: '<a>',
    explanation: 'The <a> (anchor) tag with its href attribute defines a hyperlink to link from one page to another.',
    hint: 'Short for "anchor".'
  },
  {
    id: 'html-2',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Marking Layout', 'Home Tool Markup Language'],
    correctAnswer: 'Hyper Text Markup Language',
    explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for documents designed to be displayed in a web browser.',
    hint: 'Hyper + Text + Markup.'
  },
  {
    id: 'html-3',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which tag is used to display an image in an HTML document?',
    options: ['<image>', '<img>', '<pic>', '<graphic>'],
    correctAnswer: '<img>',
    explanation: 'The <img> tag embeds an image in an HTML page and requires the src attribute for the image path.',
    hint: 'A three-letter abbreviation of image.'
  },
  {
    id: 'html-4',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The _______ attribute of the <img> tag specifies an alternative text if the image cannot be displayed.',
    options: ['title', 'alt', 'caption', 'desc'],
    correctAnswer: 'alt',
    explanation: 'The alt attribute provides alternative text for accessibility (screen readers) and when images fail to load.',
    hint: 'Short for "alternative".'
  },
  {
    id: 'html-5',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which HTML element specifies the largest and most important heading?',
    options: ['<heading>', '<h6>', '<head>', '<h1>'],
    correctAnswer: '<h1>',
    explanation: '<h1> represents the highest level section heading on a webpage, descending in importance down to <h6>.',
    hint: 'Heading number one.'
  },
  {
    id: 'html-6',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'true_false',
    question: 'In modern HTML5, void elements like <br> and <img> do not require a closing slash (e.g. />).',
    options: ['True', 'False', 'Only in strict XML', 'Only inside tables'],
    correctAnswer: 'True',
    explanation: 'In HTML5, void tags do not require a self-closing slash. Writing <br> is completely valid.',
    hint: 'HTML5 is more forgiving than XHTML.'
  },
  {
    id: 'html-7',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which tag defines an unordered (bulleted) list?',
    options: ['<ol>', '<ul>', '<list>', '<dl>'],
    correctAnswer: '<ul>',
    explanation: '<ul> stands for Unordered List, rendering bullet items wrapped in <li> tags.',
    hint: 'U stands for Unordered.'
  },
  {
    id: 'html-8',
    categoryId: 'html',
    difficulty: 'easy',
    type: 'syntax_error',
    question: 'Which doctype declaration correctly specifies an HTML5 document?',
    options: ['<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<!DOCTYPE html PUBLIC>', '<!DOCTYPE document web>'],
    correctAnswer: '<!DOCTYPE html>',
    explanation: '<!DOCTYPE html> is the concise and standard doctype declaration defined by HTML5.',
    hint: 'HTML5 introduced the simplest doctype of all.'
  },
  {
    id: 'html-9',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which semantic HTML5 element represents independent, self-contained content such as a blog post or news item?',
    options: ['<section>', '<article>', '<aside>', '<main>'],
    correctAnswer: '<article>',
    explanation: '<article> is intended for self-contained syndicatable content that could be distributed independently.',
    hint: 'Think of newspaper articles or blog entries.'
  },
  {
    id: 'html-10',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which HTML5 input type provides built-in validation for email addresses on mobile keyboards?',
    options: ['type="text"', 'type="email"', 'type="mail"', 'type="address"'],
    correctAnswer: 'type="email"',
    explanation: 'type="email" automatically triggers browser email format validation and mobile @ keyboard layouts.',
    hint: 'The word is email.'
  },
  {
    id: 'html-11',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'To open a hyperlink in a new browser tab, set the _______ attribute to "_blank".',
    options: ['window', 'rel', 'target', 'href'],
    correctAnswer: 'target',
    explanation: 'The target="_blank" attribute specifies that the browser should open the linked document in a new tab or window.',
    hint: 'Specifies the target browsing context.'
  },
  {
    id: 'html-12',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'match_concept',
    question: 'Which HTML tag is used to group inline content without providing inherent visual styling?',
    options: ['<div>', '<span>', '<p>', '<section>'],
    correctAnswer: '<span>',
    explanation: '<span> is an inline container used to mark up a part of a text or a part of a document for styling or scripting.',
    hint: 'The inline equivalent of <div>.'
  },
  {
    id: 'html-13',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'output',
    question: 'What does this form snippet submit when the checkbox is not checked?',
    codeSnippet: '<form action="/submit">\n  <input type="checkbox" name="agree" value="yes">\n  <button type="submit">Go</button>\n</form>',
    options: ['agree=false', 'agree=null', 'Nothing for "agree"', 'agree=""'],
    correctAnswer: 'Nothing for "agree"',
    explanation: 'In standard HTML form submission, unchecked checkboxes are not submitted in the form payload at all.',
    hint: 'Browsers omit unchecked inputs entirely.'
  },
  {
    id: 'html-14',
    categoryId: 'html',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which attribute should be paired with target="_blank" for security against tabnabbing?',
    options: ['rel="noopener noreferrer"', 'crossorigin="anonymous"', 'security="strict"', 'sandbox="allow"'],
    correctAnswer: 'rel="noopener noreferrer"',
    explanation: 'rel="noopener noreferrer" prevents the new page from accessing window.opener, thwarting malicious redirect attacks.',
    hint: 'Prevents opener object access and referrer leakage.'
  },
  {
    id: 'html-15',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What is the key difference between the script "defer" and "async" attributes?',
    options: [
      '"defer" blocks HTML parsing while "async" does not',
      '"defer" executes in DOM order after parsing finishes; "async" executes as soon as downloaded regardless of order',
      '"async" waits for DOMContentLoaded event before firing',
      'They behave completely identically in modern browsers'
    ],
    correctAnswer: '"defer" executes in DOM order after parsing finishes; "async" executes as soon as downloaded regardless of order',
    explanation: '"defer" preserves document script ordering and runs right before DOMContentLoaded, whereas "async" executes immediately whenever network download finishes.',
    hint: 'Think about execution timing and guaranteed sequence.'
  },
  {
    id: 'html-16',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'match_concept',
    question: 'What does the HTML5 <picture> element provide over a standard <img> tag?',
    options: [
      'Built-in WebGL 3D rendering',
      'Art direction and multi-source responsive image selection based on media queries and image formats',
      'Automatic image compression on the fly',
      'Vector animation playback'
    ],
    correctAnswer: 'Art direction and multi-source responsive image selection based on media queries and image formats',
    explanation: '<picture> allows wrapping multiple <source> elements with media queries and type attributes (e.g., AVIF/WebP fallback).',
    hint: 'It allows supplying different source formats and screen widths.'
  },
  {
    id: 'html-17',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'mcq',
    question: 'What does the "contenteditable" attribute enable on an HTML element?',
    options: [
      'Allows users to directly edit the text and inner DOM content within the browser',
      'Enables server-side markdown parsing',
      'Converts an element into a form input field',
      'Prevents copy-pasting'
    ],
    correctAnswer: 'Allows users to directly edit the text and inner DOM content within the browser',
    explanation: 'Adding contenteditable="true" makes the element\'s contents interactive and editable by the end user directly.',
    hint: 'It makes regular elements editable in the viewport.'
  },
  {
    id: 'html-18',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'syntax_error',
    question: 'Which of the following is an invalid nesting according to the HTML specification?',
    options: [
      'A <p> element containing an <a> element',
      'An <a> element containing another <a> element',
      'A <section> containing multiple <article> tags',
      'A <button> inside a <div>'
    ],
    correctAnswer: 'An <a> element containing another <a> element',
    explanation: 'The HTML specification explicitly forbids interactive content (like <a>) from containing other interactive elements like nested <a> tags.',
    hint: 'Interactive elements cannot be nested inside each other.'
  },
  {
    id: 'html-19',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'true_false',
    question: 'The HTML5 <dialog> element provides a native modal system with a built-in ::backdrop pseudo-element.',
    options: ['True', 'False', 'Only with external polyfill', 'Only in Chrome'],
    correctAnswer: 'True',
    explanation: 'The standard <dialog> element is supported natively in all modern browsers, along with showModal() and ::backdrop.',
    hint: 'Modern browsers provide this native modal primitive.'
  },
  {
    id: 'html-20',
    categoryId: 'html',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Which attribute tells the browser to pre-render or pre-fetch a DNS host before an outbound link click?',
    options: [
      '<link rel="dns-prefetch" href="//example.com">',
      '<meta http-equiv="dns-resolve" content="example.com">',
      '<script preload="dns">',
      '<a dns="pre"> '
    ],
    correctAnswer: '<link rel="dns-prefetch" href="//example.com">',
    explanation: 'rel="dns-prefetch" is a resource hint that informs the browser to perform DNS resolution for an external domain in advance.',
    hint: 'It is a <link> resource hint.'
  }
];
