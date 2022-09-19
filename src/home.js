import * as helper from './helperFunctions.js';

const renderHome = event => {
	helper.clearContent();
	helper.toggleClick(event.target);

	const content = document.getElementById('content');
	
	const introDiv = document.createElement('div');
	const introText = document.createElement('p');
	introText.textContent = 'Hi';
	introDiv.appendChild(introText);

	content.appendChild(introDiv);
}

export default renderHome;