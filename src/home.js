import * as helper from './helperFunctions.js';

const renderHome = event => {
	helper.clearContent();
	helper.toggleClick(event.target);

	const content = document.getElementById('content');
	
	const introDiv = document.createElement('div');
	const introText = document.createElement('p');
	introText.textContent = 'Serving delicious, rustic meals made from the best ingredients across Hyrule. Our ingredients are foraged and hunted daily for the best quality and freshness. Our cooking represents a diverse range of local dishes from the many regions of our vast land.';
	introDiv.appendChild(introText);
	content.appendChild(introDiv);
}

export default renderHome;