Feature: Purchase flow in Sauce Demo
  Como cliente de Sauce Demo
  I want to complete the purchase process
  So that I can buy the selected products

  Scenario: User can complete a successful purchase
    Given I open the Sauce Demo login page
    And I log in with valid credentials
    Then I should see the products page
    When I add the "Sauce Labs Backpack" product to the cart
    And I open the shopping cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I proceed to checkout
    And I fill the checkout form with first name "QA", last name "Tester", postal code "12345"
    And I finish the purchase
    Then the order confirmation message should contain "Thank you for your order!"
