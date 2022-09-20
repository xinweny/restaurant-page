export function clearContent() {
	const content = document.getElementById('content');
	content.innerHTML = null;
}

export function toggleClick(target) {
	const tabs = document.querySelectorAll('#header li');

	for (const tab of tabs) {
		if (tab == target) {
			tab.classList.add('clicked');
		} else if (tab.classList.contains('clicked')) {
			tab.classList.remove('clicked');
		}
	}
}

export function createContentDiv(id) {
	const div = document.createElement('div');
	div.id = id;
	div.classList.add('content-div');

	return div;
}

export function appendToContent(node) {
	const content = document.getElementById('content');
	content.appendChild(node);
}