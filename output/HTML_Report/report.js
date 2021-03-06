$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login_logout.feature");
formatter.feature({
  "line": 2,
  "name": "As a Kiora KMC User I need to Login and Logout from the Portal",
  "description": "",
  "id": "as-a-kiora-kmc-user-i-need-to-login-and-logout-from-the-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 2659483006,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into the Application with Valid Credentials",
  "description": "",
  "id": "as-a-kiora-kmc-user-i-need-to-login-and-logout-from-the-portal;login-into-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the page \"https://stage2-kmc.kioramedia.tv/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the userName as \"Walter\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the Password as \"ztqU1B8Ys7CiEbGEfZhr\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Should Successfully Login to the KMC Portal",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://stage2-kmc.kioramedia.tv/",
      "offset": 18
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_page(String)"
});
formatter.result({
  "duration": 4821779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walter",
      "offset": 25
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_the_userName_as(String)"
});
formatter.result({
  "duration": 224673861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ztqU1B8Ys7CiEbGEfZhr",
      "offset": 25
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_the_Password_as(String)"
});
formatter.result({
  "duration": 129182153,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_the_Login_Button()"
});
formatter.result({
  "duration": 87998409,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Should_Successfully_Login_to_the_KMC_Portal()"
});
formatter.result({
  "duration": 7343525,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 609845801,
  "status": "passed"
});
});