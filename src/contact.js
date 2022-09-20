import * as helper from './helperFunctions.js';

import profileSrc from '../assets/profile-pic.jpeg';
import mapSrc from '../assets/map.jpeg';

const renderContact = event => {
	helper.clearContent();
	helper.toggleClick(event.target);
	
	const contactDiv = helper.createContentDiv('contact-div');
	const contactCard = document.createElement('div');
	contactCard.classList.add('contact-card');

	const div = document.createElement('div');
	const contactTitle = document.createElement('h2');
	contactTitle.textContent = 'Chef Link';
	div.appendChild(contactTitle);

	const chefDesc = document.createElement('p');
	chefDesc.textContent = "Seasoned chef and Hero of Hyrule. Expert forager and hunter with over 100 years of experience. Traveling across Hyrule in the blink of an eye - come join us for a meal when we cross paths!";
	div.appendChild(chefDesc);

	contactCard.appendChild(div);

	const profilePic = new Image();
	profilePic.src = profileSrc;
	contactCard.appendChild(profilePic);

	contactDiv.appendChild(contactCard);

	const mapCard = document.createElement('div');
	mapCard.classList.add('map-card');

	const map = new Image();
	map.src = mapSrc;
	mapCard.appendChild(map);

	contactDiv.appendChild(mapCard);

	helper.appendToContent(contactDiv);
}

export default renderContact;