package com.cucumberFramework.testRunner;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;
import java.io.IOException;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
		glue = {"com/cucumberFramework/stepdefinitions" },
		plugin = {"pretty", "html:output/HTML_Report",
				"com.cucumber.listener.ExtentCucumberFormatter:",},
		tags = "@smoke",
		monochrome = false,
		dryRun = false)

public class RunnerTest {

	@AfterClass
	public static void setup() throws IOException {

		Reporter.loadXMLConfig(new File("src/main/java/com/cucumberFramework/configuration/extent-config.xml"));
		Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Production");

	}

}
