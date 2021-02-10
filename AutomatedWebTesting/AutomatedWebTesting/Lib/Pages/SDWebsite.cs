using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutomatedWebTesting.Lib.Pages
{
    public class SDWebsite<driver> : IDisposable where driver : IWebDriver, new()
    {
        public driver SeleniumDriver { get; internal set; }

        public SDWebsite(int pageLoadInSecs = 10, int implicitWaitInSecs = 10)
        {
            SeleniumDriver = new SeleniumDriverConfig<driver>(pageLoadInSecs, implicitWaitInSecs).Driver;
        }

        public void Dispose()
        {
            SeleniumDriver.Quit();
        }
    }
}
