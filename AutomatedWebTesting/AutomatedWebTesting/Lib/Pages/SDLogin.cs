using OpenQA.Selenium;

namespace AutomatedWebTesting.Lib.Pages
{
    public class SDLogin
    {
        private readonly IWebDriver _driver;

        public SDLogin(IWebDriver driver) => _driver = driver;

        public string Username { get; set; }

        public string Password { get; set; }

        public void EnterUsername()
        {
            _driver.FindElement(By.Id("user-name")).SendKeys(Username);
        }

        public void EnterPassword()
        {
            _driver.FindElement(By.Id("password")).SendKeys(Password);
        }

        public void ClickLogin()
        {
            _driver.FindElement(By.Id("login-button")).Click();
        }

        public string GetErrorMessage()
        {
            return _driver.FindElement(By.CssSelector("#login_button_container > div > form > h3")).Text;
        }

        public void ClickLogout()
        {
            _driver.FindElement(By.CssSelector(".bm-burger-button")).Click();
            _driver.FindElement(By.LinkText("Logout")).Click();
        }
    }
}
