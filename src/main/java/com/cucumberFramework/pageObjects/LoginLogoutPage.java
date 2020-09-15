package com.cucumberFramework.pageObjects;

import com.cucumberFramework.helper.WaitHelper;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginLogoutPage {
	
	private WebDriver driver;


	@FindBy(id = "username")
	public WebElement userName;

	@FindBy(id = "password")
	public WebElement password;

	@FindBy(xpath = "//*[@id=\"root\"]/div/div/div[3]/div[2]/form/div[4]/button[1]/span[1]")
	public WebElement login;

	@FindBy(xpath = "//*[@id=\"root\"]/div/header/div/button[2]/span[1]")
	public WebElement profile;

	@FindBy(name = "logout")
	public WebElement logout;

	WaitHelper waitHelper;

	public LoginLogoutPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver,this);
		waitHelper = new WaitHelper(driver);
	}

	public void enterUsername(String userName) {
		this.userName.sendKeys(userName);
	}

	public void enterPassword(String password) {
		this.password.sendKeys(password);
	}

	public void clickLogin() {
		this.login.click();
	}

	public void VerifyLogin(){
		Assert.assertEquals(driver.getTitle(),"KMC | Login");
	}

	public void clickProfile() {
		this.profile.click();
	}

	public void clickLogout() {
		this.logout.click();
	}
}
