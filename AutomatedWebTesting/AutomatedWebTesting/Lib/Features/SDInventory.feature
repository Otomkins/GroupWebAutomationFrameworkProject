Feature: SDInventory
	Simple calculator for adding two numbers

@Inventory
Scenario: Add item to cart
	Given I am on the inventory page
	When I click on the first products add to cart button
	Then the cart label is equal to 1

@Inventory
Scenario: Add item to cart changes button to remove
	Given I am on the inventory page
	When I click on the first products add to cart button
	Then the first products add to cart button text is REMOVE
