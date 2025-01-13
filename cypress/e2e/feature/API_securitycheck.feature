@positive
Feature: API method not allowed
Scenario: Method not allowed when accessing the login API directly
    Given I send a POST request to the login API with valid credentials
    Then I should receive a 405 status code