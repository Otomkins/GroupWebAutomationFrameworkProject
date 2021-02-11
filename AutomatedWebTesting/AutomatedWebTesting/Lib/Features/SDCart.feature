Feature: SDCart
	As a user of the Swap Labs website
	I want to be able to access the cart
	In order to edit and checkout my orders

	Background: 
	Given I am on the inventory page to add items
	And I add all available items to the cart
	And I click onto the cart page

@remove
Scenario Outline: Removing items from the cart
	When I click on the remove button for item number <itemNum>
	Then the item <itemName> should be removed from my cart
	Examples: 
	| itemNum | itemName  |
	| 0       | backpack  |
	| 1       | bikeLight |
	| 2       | boltShirt |
	| 3       | fleece    |
	| 4       | onesie    |

@remove @redShirt
Scenario Outline: Removing red shirt item from the cart
	When I click on the remove button for the red shirt
	Then the item <itemName> should be removed from my cart
	Examples: 
	| itemName |
	| redShirt |

@remove
Scenario Outline: Removing item from the cart decreases the cart count
	When I click on the remove button for item number <itemNum>
	Then the cart count should decrease by 1
	Examples: 
	| itemNum |
	| 0       |
	| 1       |
	| 2       |
	| 3       |
	| 4       |

@remove @redShirt
Scenario: Removing red shirt item from the cart decreases cart count
	When I click on the remove button for the red shirt
	Then the cart count should decrease by 1

	@product
Scenario Outline: Clicking on the item name link
	When I click on the name link for the item <itemName>
	Then I should be taken to the item page with id <itemId>
	Examples:
	| itemId | itemName  |
	| 4      | backpack  |
	| 0      | bikeLight |
	| 1      | boltShirt |
	| 5      | fleece    |
	| 2      | onesie    |
	| 3      | redShirt  |



	# can go back
	# can checkout