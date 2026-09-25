Feature: Purchase flow in Sauce Demo
  Como cliente de Sauce Demo
  I want to log in, add products to the cart and complete the purchase
  So that I can acquire the products I need

  Scenario: Standard user can log in and complete a successful purchase
    Given I open the Sauce Demo login page
    And I login as "standard_user" with password "secret_sauce"
    Then I should see the products page
    When I add the "Sauce Labs Backpack" product to the cart
    And I open the shopping cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I proceed to checkout
    And I fill the checkout form with first name "QA", last name "Tester", postal code "12345"
    And I finish the purchase
    Then the order confirmation message should contain "Thank you for your order!"

  Scenario: Invalid credentials are rejected
    Given I open the Sauce Demo login page
    When I login as "standard_user" with password "wrong_password"
    Then I should see the login error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Locked out user cannot access the platform
    Given I open the Sauce Demo login page
    When I login as "locked_out_user" with password "secret_sauce"
    Then I should see the login error message "Epic sadface: Sorry, this user has been locked out."
