Feature: SDInventory

@Inventory
Scenario: Add item to cart
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	Then the cart label is equal to 1

@Inventory
Scenario: Add item to cart changes button to remove
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	Then the product at index 0 add to cart button is "REMOVE"

@Inventory
Scenario: Pressing add to cart twice sets button state to AddToCart
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	And I click the product at index 0 add to cart button
	Then the product at index 0 add to cart button is "ADD TO CART"

@InventorySorting
Scenario: The first product is the Sauce Labs backpack when sort A-Z
	Given I am on the inventory page
	When products are sorted by value "az"
	Then the product at index 0 name will be "Sauce Labs Backpack"

@InventorySorting
Scenario: The last product is the Test All The Things shirt when sort A-Z
	Given I am on the inventory page
	When products are sorted by value "az"
	Then the product at index 5 name will be "Test.allTheThings() T-Shirt (Red)"

@InventorySorting
Scenario: The first product is the Test All The Things shirt when sort Z-A
	Given I am on the inventory page
	When products are sorted by value "za"
	Then the product at index 0 name will be "Test.allTheThings() T-Shirt (Red)"

@InventorySorting
Scenario: The last product is the Sauce Labs backpack when sort Z-A
	Given I am on the inventory page
	When products are sorted by value "za"
	Then the product at index 5 name will be "Sauce Labs Backpack"

@InventorySorting
Scenario: The first product is 7.99 when sort low to high
	Given I am on the inventory page
	When products are sorted by value "lohi"
	Then the product at index 0 price will be 7.99

@InventorySorting
Scenario: The last product is 49.99 when sort low to high
	Given I am on the inventory page
	When products are sorted by value "lohi"
	Then the product at index 5 price will be 49.99

@InventorySorting
Scenario: The first product is 49.99 when sort high to low
	Given I am on the inventory page
	When products are sorted by value "hilo"
	Then the product at index 0 price will be 49.99

@InventorySorting
Scenario: The last product is 7.99 when sort high to low
	Given I am on the inventory page
	When products are sorted by value "hilo"
	Then the product at index 5 price will be 7.99