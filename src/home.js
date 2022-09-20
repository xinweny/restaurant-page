import * as helper from './helperFunctions.js';

import gifSrc from '../assets/chef.gif';

const renderHome = event => {
	helper.clearContent();
	helper.toggleClick(event.target);
	
	const introDiv = helper.createContentDiv('home-div');

	const chefGif = new Image();
	chefGif.src = gifSrc;
	chefGif.classList.add('chef-img');
	introDiv.append(chefGif);

	const introText = document.createElement('p');
	introText.textContent = 'Serving delicious, rustic meals made from the best ingredients across the Hyrule wilderness. We cook a wide selection of dishes representing the diverse regions of our land.';
	introDiv.appendChild(introText);

	helper.appendToContent(introDiv);
}

export default renderHome;