import * as helper from './helperFunctions.js';

const renderContact = event => {
	helper.clearContent();
	helper.toggleClick(event.target);
	console.log("Contact");
}

export default renderContact;