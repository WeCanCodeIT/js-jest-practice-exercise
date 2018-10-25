const cardContainer = document.querySelector('.cards')

main()

function main() {
	createEventListeners()
}

function createEventListeners() {
	onCardCloseButton(cardContainer)
}