# Group Web Automation Framework Project

## Summary

The project specification required us to create a test framework to explore and test. https://www.saucedemo.com/. This site was created specifically for practicing automation. Using exploratory testing, we identified the pages that we could test, how we could test them in different ways and noted defects that we discovered along the way. We then used Selenium and SpecFlow to create automated tests in Gherkin to test the website.

## Architecture

![](https://github.com/Otomkins/GroupWebAutomationFrameworkProject/blob/main/ClassDiagram.PNG)

## Login Tests

The login tests cover user authentication and the different types of users that can login to the site

### Login

As a registered user of Swap Labs, I want to be able to log in so that I can access the website's services.

- Scenario 1: Log in fails with no details
- Scenario 2: Log in fails with only a username
- Scenario 3: Log in fails with only a password
- Scenario 4: Log in fails with an unregistered username and password
- Scenario 5: Locked out user cannot log in
- Scenario 6: Any user who is not locked out can log in

### Logout

As a non-locked out user of Swap Labs, I want to be able to log out so that I can securely leave the website.

- Scenario 1: Any user who is not locked out can log out

## Cart Tests

The cart tests cover everything the user can do with the product basket and checking out orders

### Checkout Information User Details Verification

As a non-locked out user of saucedemo, I want to be able to verify my details so that I can proceed to make a purchase for the products in my cart.

- Scenario 1: Any user who is not locked out cannot reach the checkout overview page without supplying their details
- Scenario 2: Any user who is not locked out cannot reach the checkout overview page with only their first name
- Scenario 3: Any user who is not locked out cannot reach the checkout overview page with only their last name
- Scenario 4: Any user who is not locked out cannot reach the checkout overview page with only their zip/postal code
- Scenario 5: Any user who is not locked out can reach the checkout overview page after entering all fields

### Remove products from cart
As a non-locked out user of Swap Labs, I want to be able to remove products from my cart so that I can modify my cart contents.

- Scenario 1:  Any user who is not locked out can remove a product from their cart
- Scenario 2: Removing a product decreases the cart count

## Inventory Tests

The inventory feature covers everything the user can do on the main product page

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