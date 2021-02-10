Feature: SDLogin
	This is to test the login and logout functionality of the website

Scenario Outline: Standard user - Login success
	Given I have a registered username <username>
	And I have a valid password <password>
	When I click login
	Then I should be redirected to the inventory page
	Examples:
	| username                | password     |
	| standard_user           | secret_sauce |
	| problem_user            | secret_sauce |
	| performance_glitch_user | secret_sauce |

Scenario: Locked out user - Login failed
	Given I have a registered username <username>
	And I have a valid password <password>
	When I click login
	Then I should receive an error containing "this user has been locked out."
	Examples:
	| username        | password     |
	| locked_out_user | secret_sauce |

Scenario: Standard user - Logout success
	Given I am logged in as a user
	When I click logout
	Then I should be redirected to the login page