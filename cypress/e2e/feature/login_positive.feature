@positive
Feature: User Authentication
  Scenario: Successful login with correct credentials
    Given I visit the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard

 