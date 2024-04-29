Feature: Login Functionality

Scenario: Login into website
    Given user open the website
    When user enter the credential
        | username | password |
        | qa.rajendra19@gmail.com | lsspl#123 |
    Then user login successfully