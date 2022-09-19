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