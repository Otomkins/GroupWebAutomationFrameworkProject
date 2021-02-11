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

        [When(@"I click the product at index (.*) add to cart button")]
        public void WhenIClickTheProductAtIndexAddToCartButton(int index)
        {
            SDWebsite.SDInventory.AddProductToCart(index);
        }

        [Then(@"the product at index (.*) name will be ""(.*)""")]
        public void ThenTheProductAtIndexNameWillBe(int index, string name)
        {
            Assert.That(SDWebsite.SDInventory.GetAllProductNames()[index], Is.EqualTo(name));
        }

		[When(@"products are sorted by A-Z")]
		public void WhenProductsAreSortedByA_Z()
		{
			SDWebsite.SDInventory.SetProductSortDropdown("az");
		}

		[Then(@"the cart label is equal to (.*)")]
        public void ThenTheCartLabelIsEqualTo(int cartNum)
        {
            Assert.That(SDWebsite.SDInventory.GetCartCount(), Is.EqualTo(cartNum));
        }

        [Then(@"the product at index (.*) add to cart button is ""(.*)""")]
        public void ThenTheProductAtIndexAddToCartButtonIs(int index, string result)
        {
            Assert.That(SDWebsite.SDInventory.GetButtonState(index), Is.EqualTo(result));
        }

        [After]
        public void Cleanup() => SDWebsite.Dispose();
    }
}
