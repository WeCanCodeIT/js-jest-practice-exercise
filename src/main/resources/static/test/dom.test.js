const { deleteCard, onCardCloseButton } = require('../js/dom.js')
// Create tests for each of the following and then create methods to make them pass

// 1. Delete a card when the 'x' button is clicked
describe('Delete a card when the \'x\' button is clicked', () => {
	// Arrange
	const cards = document.createElement('section')
	cards.classList.add('cards')
	const card = document.createElement('section')
	card.classList.add('card')
	const header = document.createElement('header')
	const button = document.createElement('button')
	button.classList.add('closeButton')
	header.appendChild(button)
	card.appendChild(header)
	cards.appendChild(card)
	
	describe('deleteCard', () => {	
		test('should delete a card', () => {
			// Act
			deleteCard(card)
			
			// Assert
			expect(cards.querySelector('.card')).toBeFalsy()
		})
	})
	
	describe('clickButtonX', () => {
		test('should be clicked and remove card', () => {
			// Act
			onCardCloseButton(cards)
			button.click()
			
			// Assert
			expect(cards.querySelector('.card')).toBeFalsy()
		})
	})
})

// 2. Display navigation when menu button is clicked

// 3. Make a new card with the 'New Card' form

// 4. Add 'active' class to navigation elements when they are clicked

// 5. Remove 'active' class from other navigation elements when one is clicked
