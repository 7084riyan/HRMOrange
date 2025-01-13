@negative
Feature: User Authentication
Scenario: Unsuccessful login with incorrect credentials
    Given I visit the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an invalid credentials message
    And I should remain on the login page