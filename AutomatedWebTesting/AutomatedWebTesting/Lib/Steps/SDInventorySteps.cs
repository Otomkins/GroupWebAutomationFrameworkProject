using System;
using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace AutomatedWebTesting
{
    [Binding]
    public class SDInventorySteps
    {
        SDWebsite<ChromeDriver> SDWebsite = new SDWebsite<ChromeDriver>();

        [Given(@"I am on the inventory page")]
        public void GivenIAmOnTheInventoryPage()
        {
            SDWebsite.SDInventory.GoToInventory();
        }
        
        [When(@"I click on the first products add to cart button")]
        public void WhenIClickOnTheFirstProductsAddToCartButton()
        {
            SDWebsite.SDInventory.AddProductToCart(0);
        }
        
        [Then(@"the cart label is equal to (.*)")]
        public void ThenTheCartLabelIsEqualTo(int p0)
        {
            Assert.That(SDWebsite.SDInventory.GetCartCount(), Is.EqualTo(1));
        }

        [Then(@"the first products add to cart button text is ""(.*)""")]
        public void ThenTheFirstProductsAddToCartButtonTextIs(string result)
        {
            Assert.That(SDWebsite.SDInventory.GetButtonState(0), Is.EqualTo(result));
        }

        [After]
        public void Cleanup() => SDWebsite.Dispose();
    }
}
