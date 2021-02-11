Feature: SDLogin
	This is to test the login and logout functionality of https://www.saucedemo.com/

Background: The users journey should start from the home page
	Given I am on the home page

Scenario: 1.1 No Username or Password - Login failed
	When I click login
	Then I should receive an error containing "Username is required"

Scenario: 1.2 No Password - Login failed
	Given I have a registered username standard_user
	When I click login
	Then I should receive an error containing "Password is required"

Scenario: 1.3 No username - Login failed
	Given I have a valid password secret_sauce
	When I click login
	Then I should receive an error containing "Username is required"

Scenario: 1.4 User doesn't exist - Login failed
	Given I have not registered a user account
	When I click login
	Then I should receive an error containing "Username and password do not match any user in this service"

Scenario Outline: 1.5 Locked out user - Login failed
	Given I have a registered username <username>
	And I have a valid password <password>
	When I click login
	Then I should receive an error containing "this user has been locked out."
	Examples:
	| username        | password     |
	| locked_out_user | secret_sauce |

Scenario Outline: 1.6 Standard user - Login success
	Given I have a registered username <username>
	And I have a valid password <password>
	When I click login
	Then I should be redirected to the inventory page
	Examples:
	| username                | password     |
	| standard_user           | secret_sauce |
	| problem_user            | secret_sauce |
	| performance_glitch_user | secret_sauce |

Scenario: 2.1 Standard user - Logout success
	Given I am logged in as a user
	When I click logout
	Then I should be redirected to the login page