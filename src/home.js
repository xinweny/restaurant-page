import * as helper from './helperFunctions.js';

const renderHome = event => {
	const content = document.getElementById('content');
	helper.clearContent();
	
	const introDiv = document.createElement('div');
	const introText = document.createElement('p');
	introText.textContent = 'Hi';
	introDiv.appendChild(introText);

	content.appendChild(introDiv)
}

export default renderHome;