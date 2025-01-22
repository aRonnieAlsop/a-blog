// This script will dynamically insert escaped HTML code as text.
var code = `
    &lt;div&gt;This is a div element&lt;/div&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
`;

document.getElementById('codeContainer').textContent = code;
