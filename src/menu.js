import * as helper from './helperFunctions.js';

const cache = {};
const importAll = r => r.keys().forEach((key) => (cache[key] = r(key)));
importAll(require.context('../assets/food', true, /\.png$/));

function Food(name, price, description) {
	const kebabCase = name => name.toLowerCase().replaceAll(' ', '-');

	const src = cache[`./${kebabCase(name)}.png`];

	return { 
		name,
		src,
		price,
		description
	};
}

const createFoodCard = food => {
	const card = document.createElement('div');
	card.classList.add('food-card');
	
	const foodName = document.createElement('h2');
	foodName.textContent = food.name;

	const foodDesc = document.createElement('p');
	foodDesc.textContent = food.description;

	const foodPrice = document.createElement('p');
	foodPrice.classList.add('price');
	foodPrice.textContent = food.price;

	const foodImg = new Image();
	foodImg.src = food.src;

	const div = document.createElement('div');
	div.appendChild(foodImg);
	div.appendChild(foodPrice);

	for (const element of [foodName, div, foodDesc]) {
		card.appendChild(element);
	}

	return card;
}

const foodItems = [
	Food('Meat-Stuffed Pumpkin', 60, "This hollow, meat-filled fortified pumpkin is a local specialty or Kakariko Village."),
	Food('Salt-Grilled Meat', 50, "This lavish grilled dish makes liberal use of high-quality cuts of meat."),
	Food('Poultry Pilaf', 45, "Made with the highest-quality poultry, every bite of this pilaf floods your mouth with flavor."),
	Food('Meat Pie', 35, "You'll need an extra napkin to deal with this juicy pie of perfectly baked minced meat."),
	Food('Salmon Meuniere', 60, "The crispy skin of this fried hearty salmon puts its texture in a class all its own."),
	Food('Seafood Paella', 50, "No fisherman's birthday bash would be complete without this top-shelf seafood dish."),
	Food('Crab Omelet with Rice', 45, "The fluffy crab legs pair perfectly with the rice for a truly scrumptious dish."),
	Food('Clam Chowder', 30, "The nutritional value of hearty blueshell snail combines with butter and milk in a rich soup."),
	Food('Vegetable Omelet', 35, "This home-style dish mixes fluffy eggs with chopped vegetables for nutritional balance."),
	Food('Vegetable Curry', 30, "This healthy curry is popular for its mild flavor and moderate spiciness."),
	Food('Mushroom Rice Balls', 25, "The aroma of the mushrooms tickles your nose as you peel back the leafy wrapping."),
	Food('Fried Wild Greens', 20, "A healthy dish made by cooking mixed greens over a strong flame."),
	Food('Creamy Heart Soup', 30, "Enjoying this sweet soup with another person will bring you both closer together."),
	Food('Monster Cake', 25, "It's said that once you have a taste of this cake, you'll never forget its sweetness."),
	Food('Wildberry Crepe', 20, "Sweet, tart wildberries are folded into thin, springy dough to make this dessert."),
	Food('Honeyed Fruits', 15, "A dish that combines the thick sweetness of honey with the acidity of sour fruits."),
	Food('Fairy Tonic', 20, "This powerful recovery elixir harnesses the power of fairies. It has a sweet fragrance."),
	Food('Warm Milk', 10, "Make this by heating up some milk. Drink it before bed to ensure a good night's sleep."),
	Food('Rock-Hard Food', 5, "A dish gone awry after adding the wrong ingredient. Chewing your way through this won't be fun, but it will fill you up when you're between a rock and a hard place."),
	Food('Dubious Food', 1, "It's too gross to even look at. A bizarre smell issues forth from this heap. Eating it won't hurt you, though... probably.")
];

const renderMenu = event => {
	helper.clearContent();
	helper.toggleClick(event.target);

	const menuDiv = helper.createContentDiv('menu-div');
	for (const food of foodItems) {
		let foodCard = createFoodCard(food);
		menuDiv.appendChild(foodCard);
	}

	helper.appendToContent(menuDiv);
}

export default renderMenu;