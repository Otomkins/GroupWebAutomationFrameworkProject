using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using System;
using System.Threading;
using TechTalk.SpecFlow;

namespace AutomatedWebTesting.Lib.Features
{
    [Binding]
    public class SDCartSteps
    {
        SDWebsite<ChromeDriver> website;
        int initialCartCount;

        [BeforeScenario]
        public void SetUp() => website = new SDWebsite<ChromeDriver>();

        [Given(@"I am on the inventory page to add items")]
        public void GivenIAmOnTheInventoryPageToAddItems()
        {
            website.SDCart.GoToInventory();
        }


        [Given(@"I add all available items to the cart")]
        public void GivenIAddAllAvailableItemsToTheCart()
        {
            website.SDCart.AddAllProductsToCart();
        }
        
        [Given(@"I click onto the cart page")]
        public void GivenIClickOntoTheCartPage()
        {
            website.SDCart.GoToCheckout();
        }

        [When(@"I click on the remove button for item number (.*)")]
        public void WhenIClickOnTheRemoveButtonForItemNumber(int itemNum)
        {
            initialCartCount = website.SDCart.GetCartCount();
            website.SDCart.RemoveItemFromCart(itemNum);
        }

        [Then(@"the item (.*) should be removed from my cart")]
        public void ThenTheItemShouldBeRemovedFromMyCart(string itemName)
        {
            Assert.That(website.SDCart.CheckIfItemIsRemovedFromCart(itemName), Is.True);
        }

        [When(@"I click on the remove button for the red shirt")]
        public void WhenIClickOnTheRemoveButtonForTheRedShirt()
        {
            initialCartCount = website.SDCart.GetCartCount();
            website.SDCart.RemoveRedShirtFromCart();
        }

        [Then(@"the cart count should decrease by (.*)")]
        public void ThenTheCartCountShouldDecreaseBy(int cartDecrease)
        {
            Assert.That(website.SDCart.GetCartCount(), Is.EqualTo(initialCartCount - cartDecrease));
        }

        //website.SDCart.ClickItemNameCartLink(itemName);
        //    Assert.That(website.SeleniumDriver.Url, Is.EqualTo($"https://www.saucedemo.com/inventory-item.html?id=" + itemId.ToString()));


        [When(@"I click on the name link for the item (.*)")]
        public void WhenIClickOnTheNameLinkForTheItem(string itemName)
        {
            website.SDCart.ClickItemNameCartLink(itemName);
        }


        [Then(@"I should be taken to the item page with id (.*)")]
        public void ThenIShouldBeTakenToTheItemPageWithId(int itemId)
        {
            Thread.Sleep(5000);
            Assert.That(website.SeleniumDriver.Url, Is.EqualTo($"https://www.saucedemo.com/inventory-item.html?id=" + itemId.ToString()));
        }





    }
}
