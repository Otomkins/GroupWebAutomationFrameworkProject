using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutomatedWebTesting
{
    public class SeleniumDriverConfig<T> where T : IWebDriver, new()
    {
        public T Driver { get; set; }

        public SeleniumDriverConfig(int pageLoadInSecs, int implicitWaitInSecs)
        {
            Driver = new T();
            DriverSetup(pageLoadInSecs, implicitWaitInSecs);
        }

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
