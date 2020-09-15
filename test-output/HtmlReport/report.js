$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login_logout.feature");
formatter.feature({
  "line": 1,
  "name": "As a Kiora KMC User I need to Login and Logout from the Portal",
  "description": "",
  "id": "as-a-kiora-kmc-user-i-need-to-login-and-logout-from-the-portal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1691789322,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into the Application with Valid Credentials",
  "description": "",
  "id": "as-a-kiora-kmc-user-i-need-to-login-and-logout-from-the-portal;login-into-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
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
  "name": "I Will click on the Profile",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I will Logout",
  "keyword": "And "
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
  "duration": 4654540023,
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
  "duration": 164584611,
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
  "duration": 145410121,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_the_Login_Button()"
});
formatter.result({
  "duration": 70354324,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Will_click_on_the_Profile()"
});
formatter.result({
  "duration": 45690170,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"root\"]/div/header/div/button[2]/span[1]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027C02X871FJHC9\u0027, ip: \u0027fe80:0:0:0:8a5:aed4:3ecf:9f6c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/58/zfy034t94fn...}, goog:chromeOptions: {debuggerAddress: localhost:64149}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f145b2fc6bd8c907ef5740932a91b800\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"root\"]/div/header/div/button[2]/span[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.cucumberFramework.pageObjects.LoginLogoutPage.clickProfile(LoginLogoutPage.java:50)\n\tat com.cucumberFramework.stepdefinitions.loginLogoutPageStepDefinitions.i_Will_click_on_the_Profile(loginLogoutPageStepDefinitions.java:38)\n\tat ✽.Then I Will click on the Profile(login/login_logout.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_will_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 561829758,
  "status": "passed"
});
});