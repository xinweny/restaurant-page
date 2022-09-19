import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

const content = document.getElementById('content');

const renderHeader = () => {
	const header = document.createElement('div');
	header.id = 'header';

	const title = document.createElement('h1');
	title.textContent = 'Breath of the Wok';
	header.appendChild(title);

	const tabs = document.createElement('ul');
	for (const tabText of ['Home', 'Menu', 'Content']) {
		let tab = document.createElement('li');
		tab.textContent = tabText;
		tabs.appendChild(tab);
	}
	header.appendChild(tabs);

	document.body.insertBefore(header, content);
}

renderHeader();
renderHome();
renderMenu();
renderContact();