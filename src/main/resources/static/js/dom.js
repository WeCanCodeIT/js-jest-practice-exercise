function deleteCard(card) {
	card.remove()
}

function onCardCloseButton(cards) {
	on(cards, 'click', event => {
		if(event.target.classList.contains('closeButton')) {
			deleteCard(event.target.parentElement.parentElement)
		}
	})
}

function on(element, eventType, callback) {
	element.addEventListener(eventType, callback)
}

module.exports = {
		deleteCard,
		onCardCloseButton
}