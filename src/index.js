import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

const renderHeader = () => {
	const header = document.createElement('div');
	header.id = 'header';

	const title = document.createElement('h1');
	title.textContent = 'Breath of the Wok';
	header.appendChild(title);

	const tabs = document.createElement('ul');
	tabs.id = 'tabs';
	for (const tabText of ['Home', 'Menu', 'Content']) {
		let tab = document.createElement('li');
		tab.textContent = tabText;
		tabs.appendChild(tab);
	}
	header.appendChild(tabs);

	document.body.insertBefore(header, content);
}

const renderFooter = () => {
	const footer = document.createElement('footer');
	footer.id = 'footer';

	const footerText = document.createElement('p');
	footerText.innerHTML = 'Made by <a href="https://xinweny.github.com">xinweny<a> in 2022'
	footer.appendChild(footerText);

	document.body.appendChild(footer);
}

renderHeader();
renderFooter()
