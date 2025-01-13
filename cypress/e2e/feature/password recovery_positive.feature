@positive
Feature: Password recovery
 Scenario: Successful password recovery with valid username
    Given I visit the forgot password page
    When I enter a valid username for password recovery
    And I click the submit button for password recovery
    Then I should see a password reset link sent confirmation