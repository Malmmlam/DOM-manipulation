const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = "Hey I'm red!";
para1.style.color = 'red';

const blueHeading = document.createElement('h3');
blueHeading.classList.add('blueHeading');
blueHeading.textContent = "I'm a blue H3!";
blueHeading.style.color = ("blue");

const box = document.createElement('div');
box.classList.add('box');
box.style.borderStyle = 'solid';
box.style.backgroundColor = 'pink';

const innerHeading = document.createElement('h1');
innerHeading.classList.add('innerHeading');
innerHeading.textContent = "I'm in a div";

const innerText = document.createElement('p');
innerText.classList.add('innerText');
innerText.textContent = 'ME TOO!';

box.appendChild(innerHeading);
box.appendChild(innerText);

container.appendChild(content);
container.appendChild(para1);
container.appendChild(blueHeading);
container.appendChild(box);

