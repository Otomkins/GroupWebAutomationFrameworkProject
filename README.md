# Group Web Automation Framework Project

## Summary

The project specification required us to create a test framework to explore and test. https://www.saucedemo.com/. This site was created specifically for practicing automation. Using exploratory testing, we identified the pages that we could test, how we could test them in different ways and noted defects that we discovered along the way. We then used Selenium and SpecFlow to create automated tests in Gherkin to test the website.

## Architecture

![](https://github.com/Otomkins/GroupWebAutomationFrameworkProject/blob/main/ClassDiagram.PNG)

## Login Tests



## Cart Tests



## Inventory Tests

The inventory feature covers everything the user can do on the main product page which is covered by the three separate user stories and broken down into individual scenarios

### Sort Products

As a user, I want to be able to sort the list of products, so that I can find different products easier.

- Scenario 1: Products sorted correctly when sort A-Z 

- Scenario 2: Products sorted correctly when sort Z-A

- Scenario 3: Products sorted correctly when sort low to high

- Scenario 4: Products sorted correctly when when sort high to low

### Add Product to Cart

As a user, I want to be able to add a product to the cart, so that I can order the product.

- Scenario 1: Add item to cart

- Scenario 2: Add multiple items to cart

- Scenario 3: Pressing add to cart twice sets button state to AddToCart

- Scenario 4: Add item to cart changes button to Remove

### Go to Product Through Inventory Page

As a user, I want to be able to select a product, so that I can go to that product page and view more information.

- Scenario 1: Clicking on product name takes user to product page 

## 

