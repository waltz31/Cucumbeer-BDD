package com.cucumberFramework.stepdefinitions;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.pageObjects.LoginLogoutPage;
import com.cucumberFramework.testBase.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class loginLogoutPageStepDefinitions extends TestBase {

	LoginLogoutPage loginPage = new LoginLogoutPage(driver);
	WaitHelper waitHelper = new WaitHelper(driver);

	@Given("^I am on the page \"([^\"]*)\"$")
	public void i_am_on_the_page(String arg1) throws Throwable {
		driver.get(arg1);
	}

	@When("^I enter the userName as \"([^\"]*)\"$")
	public void i_enter_the_userName_as(String arg1) throws Throwable {
		loginPage.enterUsername(arg1);
	}

	@When("^I enter the Password as \"([^\"]*)\"$")
	public void i_enter_the_Password_as(String arg1) throws Throwable {
		loginPage.enterPassword(arg1);
	}

	@When("^I click on the Login Button$")
	public void i_click_on_the_Login_Button() throws Throwable {
		loginPage.clickLogin();
	}

	@Then("^I Should Successfully Login to the KMC Portal$")
	public void i_Should_Successfully_Login_to_the_KMC_Portal() throws Throwable {
		loginPage.VerifyLogin();
	}


}