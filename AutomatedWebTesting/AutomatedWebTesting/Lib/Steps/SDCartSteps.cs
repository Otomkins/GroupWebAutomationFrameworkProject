using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using TechTalk.SpecFlow;

namespace AutomatedWebTesting.Lib.Features
{
    [Binding]
    public class SDCartSteps
    {
        private int _initialCartCount;
        private SDWebsite<ChromeDriver> _website;

        [BeforeScenario]
        public void SetUp() => _website = new SDWebsite<ChromeDriver>();

        [Given(@"I am on the inventory page to add items")]
        public void GivenIAmOnTheInventoryPageToAddItems()
        {
            _website.SDCart.GoToInventory();
        }

        [Given(@"I add all available items to the cart")]
        public void GivenIAddAllAvailableItemsToTheCart()
        {
            _website.SDCart.AddAllProductsToCart();
        }
        
        [Given(@"I click onto the cart page")]
        public void GivenIClickOntoTheCartPage()
        {
            _website.SDCart.GoToCheckout();
        }

        [When(@"I click on the remove button for item number (.*)")]
        public void WhenIClickOnTheRemoveButtonForItemNumber(int itemNum)
        {
            _initialCartCount = _website.SDCart.GetCartCount();
            _website.SDCart.RemoveItemFromCart(itemNum);
        }

        [Then(@"the item (.*) should be removed from my cart")]
        public void ThenTheItemShouldBeRemovedFromMyCart(string itemName)
        {
            Assert.That(_website.SDCart.CheckIfItemIsRemovedFromCart(itemName), Is.True);
        }

        [When(@"I click on the remove button for the red shirt")]
        public void WhenIClickOnTheRemoveButtonForTheRedShirt()
        {
            _initialCartCount = _website.SDCart.GetCartCount();
            _website.SDCart.RemoveRedShirtFromCart();
        }

        [Then(@"the cart count should decrease by (.*)")]
        public void ThenTheCartCountShouldDecreaseBy(int cartDecrease)
        {
            Assert.That(_website.SDCart.GetCartCount(), Is.EqualTo(_initialCartCount - cartDecrease));
        }

        [When(@"I click on the name link for the item (.*)")]
        public void WhenIClickOnTheNameLinkForTheItem(string itemName)
        {
            _website.SDCart.ClickItemNameCartLink(itemName);
        }

        [Then(@"I should be taken to the item page with id (.*)")]
        public void ThenIShouldBeTakenToTheItemPageWithId(int itemId)
        {
            Thread.Sleep(5000);
            Assert.That(_website.SeleniumDriver.Url, Is.EqualTo($"https://www.saucedemo.com/inventory-item.html?id=" + itemId.ToString()));
        }
    }
}
