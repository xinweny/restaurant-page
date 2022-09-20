import * as helper from './helperFunctions.js';

const renderHome = event => {
	helper.clearContent();
	helper.toggleClick(event.target);
	
	const introDiv = helper.createContentDiv('home-div');

	const chefPic = new Image();
	chefPic.src = '../assets/chef.gif'
	chefPic.classList.add('chef-img');
	introDiv.append(chefPic);

	const introText = document.createElement('p');
	introText.textContent = 'Serving delicious, rustic meals made from the best ingredients across the Hyrule wilderness. We cook a wide selection of dishes representing the diverse regions of our land.';
	introDiv.appendChild(introText);

	helper.appendToContent(introDiv);
}

export default renderHome;