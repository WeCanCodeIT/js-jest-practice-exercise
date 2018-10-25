function deleteCard(card) {
	card.remove()
}

// Specific implementation of 'on' function
function onCardCloseButton(cards) {
	on(cards, 'click', event => {
		if(event.target.classList.contains('closeButton')) {
			deleteCard(event.target.parentElement.parentElement)
		}
	})
}

// Generic event listener factory
function on(element, eventType, callback) {
	element.addEventListener(eventType, callback)
}

module.exports = {
		deleteCard,
		onCardCloseButton
}