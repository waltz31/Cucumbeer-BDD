@smoke
Feature: As a Kiora KMC User I need to Login and Logout from the Portal

  Scenario: Login into the Application with Valid Credentials

    Given I am on the page "https://stage2-kmc.kioramedia.tv/"
    When I enter the userName as "Walter"
    And I enter the Password as "ztqU1B8Ys7CiEbGEfZhr"
    And I click on the Login Button
    Then I Should Successfully Login to the KMC Portal





