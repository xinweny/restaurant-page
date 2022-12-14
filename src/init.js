import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

import crestSrc from '../assets/crest.png';
import ghSrc from '../assets/github.png';

const addCrest = (parentNode) => {
	const crest = new Image();
	crest.classList.add('crest');
	crest.src = crestSrc;

	parentNode.appendChild(crest);
}

const renderHeader = () => {
	const header = document.createElement('div');
	header.id = 'header';

	const div = document.createElement('div');

	addCrest(div);
	const title = document.createElement('h1');
	title.textContent = 'Breath of the Wok';
	div.appendChild(title);
	addCrest(div);

	header.appendChild(div);

	const tabs = document.createElement('ul');
	tabs.id = 'tabs';
	for (const tabText of ['Home', 'Menu', 'Contact']) {
		let tab = document.createElement('li');
		tab.textContent = tabText;
		tabs.appendChild(tab);
	}
	header.appendChild(tabs);

	document.body.appendChild(header);
}

const renderContent = () => {
	const content = document.createElement('div');
	content.id = 'content';
	document.body.appendChild(content);
}

const renderFooter = () => {
	const footer = document.createElement('footer');
	footer.id = 'footer';

	const footerText = document.createElement('p');
	footerText.innerHTML = 'Made by <a href="https://github.com/xinweny">xinweny<a> in 2022'
	footer.appendChild(footerText);

	const projectLink = document.createElement('a');
	projectLink.href = 'https://github.com/xinweny/restaurant-page';
	const githubLogo = new Image();
	githubLogo.src = ghSrc;
	projectLink.appendChild(githubLogo);
	footer.append(projectLink);

	document.body.appendChild(footer);
}

const addTabEvtListeners = () => {
	const buttons = Array.from(document.querySelectorAll('#header li'));

	buttons[0].addEventListener('click', renderHome);
	buttons[1].addEventListener('click', renderMenu);
	buttons[2].addEventListener('click', renderContact);
}

const initApp = () => {
	renderHeader();
	renderContent();
	renderFooter();
	addTabEvtListeners();
	document.querySelector('#header li').click();
}

export default initApp;