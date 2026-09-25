Feature: Product management in Sauce Demo
  Como cliente de Sauce Demo
  I want to add products to the cart
  So that I can review them before buying

  Scenario: User can add a product to the cart from the products page
    Given I open the Sauce Demo login page
    And I log in with valid credentials
    Then I should see the products page
    When I add the "Sauce Labs Backpack" product to the cart
    And I open the shopping cart
    Then I should see "Sauce Labs Backpack" in the cart
