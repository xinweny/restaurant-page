import * as helper from './helperFunctions.js';

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
	profilePic.src = '../assets/profile-pic.jpeg';
	contactCard.appendChild(profilePic);

	contactDiv.appendChild(contactCard);

	const mapCard = document.createElement('div');
	mapCard.classList.add('map-card');

	const map = new Image();
	map.src = '../assets/map.jpeg';
	mapCard.appendChild(map);

	contactDiv.appendChild(mapCard);

	helper.appendToContent(contactDiv);
}

export default renderContact;