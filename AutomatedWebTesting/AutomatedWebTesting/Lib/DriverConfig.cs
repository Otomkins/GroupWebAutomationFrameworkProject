using System;
using OpenQA.Selenium;

namespace AutomatedWebTesting
{
    public class SeleniumDriverConfig<T> where T : IWebDriver, new()
    {
        public SeleniumDriverConfig(int pageLoadInSecs, int implicitWaitInSecs)
        {
            Driver = new T();
            DriverSetup(pageLoadInSecs, implicitWaitInSecs);
        }

        public T Driver { get; set; }

        private void DriverSetup(int pageLoadInSecs, int implicitWaitInSecs)
        {
            SetDriverConfiguration(pageLoadInSecs, implicitWaitInSecs);
        }

        private void SetDriverConfiguration(int pageLoadInSecs, int implicitWaitInSecs)
        {
            Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(implicitWaitInSecs);
            Driver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(pageLoadInSecs);
        }
    }
}
