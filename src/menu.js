import * as helper from './helperFunctions.js';

const renderMenu = event => {
	helper.clearContent();
	helper.toggleClick(event.target);
	console.log("Menu");
}

export default renderMenu;