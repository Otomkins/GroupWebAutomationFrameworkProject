Feature: SDInventory

@InventoryToProduct
Scenario Outline: Clicking on product name takes user to product page
	Given I am on the inventory page
	When I click the product name at index <index>
	Then the page url will be <url>
		Examples: 
		| index | url                                                |
		| 0     | https://www.saucedemo.com/inventory-item.html?id=4 |
		| 1     | https://www.saucedemo.com/inventory-item.html?id=0 |
		| 2     | https://www.saucedemo.com/inventory-item.html?id=1 |
		| 3     | https://www.saucedemo.com/inventory-item.html?id=5 |
		| 4     | https://www.saucedemo.com/inventory-item.html?id=2 |
		| 5     | https://www.saucedemo.com/inventory-item.html?id=3 |

@InventoryAddToCart
Scenario: Add item to cart
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	Then the cart label is equal to 1

@InventoryAddToCart
Scenario: Add multiple items to cart
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	When I click the product at index 1 add to cart button
	Then the cart label is equal to 2

@InventoryAddToCart
Scenario Outline: Add item to cart changes button to remove
	Given I am on the inventory page
	When I click the product at index <index> add to cart button
	Then the product at index <index> add to cart button is "REMOVE"
		Examples: 
		| index |
		| 0     |
		| 1     |
		| 2     |
		| 3     |
		| 4     |
		| 5     |

@InventoryAddToCart
Scenario: Pressing add to cart twice sets button state to AddToCart
	Given I am on the inventory page
	When I click the product at index 0 add to cart button
	And I click the product at index 0 add to cart button
	Then the product at index 0 add to cart button is "ADD TO CART"

@InventorySorting
Scenario Outline: Products sorted correctly when sort A-Z
	Given I am on the inventory page
	When products are sorted by value "az"
	Then the product at index <index> name will be <prodName>
		Examples: 
		| index | prodName                          |
		| 0     | Sauce Labs Backpack               |
		| 5     | Test.allTheThings() T-Shirt (Red) |

@InventorySorting
Scenario Outline: Products sorted correctly when sort Z-A
	Given I am on the inventory page
	When products are sorted by value "za"
	Then the product at index <index> name will be <prodName>
		Examples: 
		| index | prodName                          |
		| 0     | Test.allTheThings() T-Shirt (Red) |
		| 5     | Sauce Labs Backpack               |

@InventorySorting
Scenario Outline: Products sorted correctly when sort low to high
	Given I am on the inventory page
	When products are sorted by value "lohi"
	Then the product at index <index> price will be <price>
		Examples: 
		| index | price |
		| 0     | 7.99  |
		| 5     | 49.99 |

@InventorySorting
Scenario Outline: Products sorted correctly when when sort high to low
	Given I am on the inventory page
	When products are sorted by value "hilo"
	Then the product at index <index> price will be <price>
		Examples: 
		| index | price |
		| 0     | 49.99  |
		| 5     | 7.99 |