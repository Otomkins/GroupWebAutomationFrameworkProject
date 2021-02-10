using AutomatedWebTesting.Lib.Pages;
using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace AutomatedWebTesting.Lib.Steps
{
    [Binding]
    public class SDLoginSteps
    {
        SDWebsite<ChromeDriver> website;
        [BeforeScenario]
        public void SetUp()
        {
            website = new SDWebsite<ChromeDriver>();
            website.SeleniumDriver.Navigate().GoToUrl("https://www.saucedemo.com/");
        }
        
        [Given(@"I have a registered username (.*)")]
        public void GivenIHaveARegisteredUsername(string username)
        {
            website.SDLoginPage.Username = username;
            website.SDLoginPage.EnterUsername();
        }
        
        [Given(@"I have a valid password (.*)")]
        public void GivenIHaveAValidPassword(string password)
        {
            website.SDLoginPage.Password = password;
            website.SDLoginPage.EnterPassword();
        }
        
        [Given(@"I am logged in as a user")]
        public void GivenIAmLoggedInAsAUser()
        {
            website.SDLoginPage.Username = "standard_user";
            website.SDLoginPage.Password = "secret_sauce";
            website.SDLoginPage.EnterUsername();
            website.SDLoginPage.EnterPassword();
            website.SDLoginPage.ClickLogin();
        }
        
        [When(@"I click login")]
        public void WhenIClickLogin()
        {
            website.SDLoginPage.ClickLogin();
        }
        
        [When(@"I click logout")]
        public void WhenIClickLogout()
        {
            website.SDLoginPage.ClickLogout();
        }
        
        [Then(@"I should be redirected to the inventory page")]
        public void ThenIShouldBeRedirectedToTheInventoryPage()
        {
            Assert.That(website.SeleniumDriver.Url, Does.Contain("inventory"));
        }
        
        [Then(@"I should receive an error containing ""(.*)""")]
        public void ThenIShouldReceiveAnErrorContaining(string error)
        {
            Assert.That(website.SDLoginPage.GetErrorMessage(), Does.Contain(error));
        }
        
        [Then(@"I should be redirected to the login page")]
        public void ThenIShouldBeRedirectedToTheLoginPage()
        {
            Assert.That(website.SeleniumDriver.Url, Does.Contain("index"));
        }

        [AfterScenario]
        public void TearDown()
        {
            website.Dispose();
        }
    }
}
