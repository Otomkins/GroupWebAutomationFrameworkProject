using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace AutomatedWebTesting.Lib.Steps
{
    [Binding]
    public class SDLoginSteps
    {
        private SDWebsite<ChromeDriver> _website;

        [BeforeScenario]
        public void SetUp() => _website = new SDWebsite<ChromeDriver>();

        [Given(@"I am on the home page")]
        public void GivenIAmOnTheHomePage()
        {
            _website.SeleniumDriver.Navigate().GoToUrl("https://www.saucedemo.com/");
        }

        [Given(@"I have not registered a user account")]
        public void GivenIHaveNotRegisteredAUserAccount()
        {
            _website.SDLoginPage.Username = "not_registered";
            _website.SDLoginPage.Password = "1234";
            _website.SDLoginPage.EnterUsername();
            _website.SDLoginPage.EnterPassword();
        }

        [Given(@"I have a registered username (.*)")]
        public void GivenIHaveARegisteredUsername(string username)
        {
            _website.SDLoginPage.Username = username;
            _website.SDLoginPage.EnterUsername();
        }
        
        [Given(@"I have a valid password (.*)")]
        public void GivenIHaveAValidPassword(string password)
        {
            _website.SDLoginPage.Password = password;
            _website.SDLoginPage.EnterPassword();
        }
        
        [Given(@"I am logged in as a user")]
        public void GivenIAmLoggedInAsAUser()
        {
            _website.SDLoginPage.Username = "standard_user";
            _website.SDLoginPage.Password = "secret_sauce";
            _website.SDLoginPage.EnterUsername();
            _website.SDLoginPage.EnterPassword();
            _website.SDLoginPage.ClickLogin();
        }
        
        [When(@"I click login")]
        public void WhenIClickLogin()
        {
            _website.SDLoginPage.ClickLogin();
        }
        
        [When(@"I click logout")]
        public void WhenIClickLogout()
        {
            _website.SDLoginPage.ClickLogout();
        }
        
        [Then(@"I should be redirected to the inventory page")]
        public void ThenIShouldBeRedirectedToTheInventoryPage()
        {
            Assert.That(_website.SeleniumDriver.Url, Does.Contain("inventory"));
        }
        
        [Then(@"I should receive an error containing ""(.*)""")]
        public void ThenIShouldReceiveAnErrorContaining(string error)
        {
            Assert.That(_website.SDLoginPage.GetErrorMessage(), Does.Contain(error));
        }
        
        [Then(@"I should be redirected to the login page")]
        public void ThenIShouldBeRedirectedToTheLoginPage()
        {
            Assert.That(_website.SeleniumDriver.Url, Does.Contain("index"));
        }

        [AfterScenario]
        public void TearDown() => _website.Dispose();
    }
}
