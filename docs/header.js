// Create the 'div' element with the class 'container'
const container = document.createElement('div');
container.className = 'container';

// Create the 'header' element with the necessary attributes
const header = document.createElement('header');
header.setAttribute('home', 'https://jetsadawijit.github.io');
header.setAttribute('logo-link', 'https://jetsadawijit.gitlab.io');
header.setAttribute('logo-pic', 'https://i.imgur.com/nSeavqM.jpg');
header.setAttribute('repository', 'https://github.com/JetsadaWijit/JetsadaWijit.github.io');

// Append the 'header' to the 'container'
container.appendChild(header);

// Finally, append the 'container' to the body or another element in your document
document.body.appendChild(container);