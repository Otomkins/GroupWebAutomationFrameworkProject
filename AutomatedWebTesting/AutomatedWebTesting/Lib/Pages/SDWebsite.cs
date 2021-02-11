using AutomatedWebTesting.Lib.Pages;
using OpenQA.Selenium;
using System;

namespace AutomatedWebTesting
{
    public class SDWebsite<driver> : IDisposable where driver : IWebDriver, new()
    {
        public driver SeleniumDriver { get; internal set; }
        public SDLogin SDLoginPage { get; internal set; }
        public SDInventory SDInventory { get; internal set; }
        public SDCart SDCart { get; internal set; }

        public SDWebsite(int pageLoadInSecs = 10, int implicitWaitInSecs = 10)
        {
            SeleniumDriver = new SeleniumDriverConfig<driver>(pageLoadInSecs, implicitWaitInSecs).Driver;
            SDLoginPage = new SDLogin(SeleniumDriver);
            SDInventory = new SDInventory(SeleniumDriver);
            SDCart = new SDCart(SeleniumDriver);
        }

        public void Dispose()
        {
            SeleniumDriver.Quit();
        }
    }
}
