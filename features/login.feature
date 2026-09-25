Feature: Login in Sauce Demo
  Como cliente de Sauce Demo
  I want to log in with my credentials
  So that I can access the store and make purchases

  Scenario: Standard user can log in successfully
    Given I open the Sauce Demo login page
    When I log in with valid credentials
    Then I should see the products page

  Scenario: Invalid credentials are rejected
    Given I open the Sauce Demo login page
    When I log in with invalid credentials
    Then I should see the login error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Locked user cannot access the platform
    Given I open the Sauce Demo login page
    When I log in with a locked user
    Then I should see the login error message "Epic sadface: Sorry, this user has been locked out."
