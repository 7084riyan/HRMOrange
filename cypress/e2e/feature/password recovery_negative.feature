@negative
Feature: password recovery
 Scenario: Unsuccessful password recovery with invalid username
    Given I visit the forgot password page
    When I enter an invalid username for password recovery
    And I click the submit button for password recovery
    Then I should see a password reset link sent confirmation
