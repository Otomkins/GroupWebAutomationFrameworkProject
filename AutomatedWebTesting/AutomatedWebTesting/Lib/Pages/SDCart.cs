using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutomatedWebTesting
{
    public class SDCart
    {
		private IWebDriver _driver;
		private string _inventoryPageURL = "https://www.saucedemo.com/inventory.html";

		public SDCart(IWebDriver driver)
		{
			_driver = driver;
		}

		private IWebElement cart => _driver.FindElement(By.Id("shopping_cart_container"));
		private IReadOnlyCollection<IWebElement> inventoryItemsAddToCart => _driver.FindElements(By.ClassName("btn_inventory"));
		private IReadOnlyCollection<IWebElement> inventoryItemRemoveButtons => _driver.FindElements(By.ClassName("cart_button"));
		private IWebElement redShirtRemoveButton => _driver.FindElement(By.ClassName("cart_button"));

		private IWebElement cartItemCount => _driver.FindElement(By.ClassName("shopping_cart_badge"));

		private IWebElement backpack => _driver.FindElement(By.Id("item_4_title_link"));
		private IWebElement bikeLight => _driver.FindElement(By.Id("item_0_title_link"));
		private IWebElement boltShirt => _driver.FindElement(By.Id("item_1_title_link"));
		private IWebElement fleece => _driver.FindElement(By.Id("item_5_title_link"));
		private IWebElement onesie => _driver.FindElement(By.Id("item_2_title_link"));
        private IWebElement redShirt => _driver.FindElement(By.Id("item_3_title_link"));

        public void AddAllProductsToCart()
		{
            foreach (IWebElement item in inventoryItemsAddToCart.ToArray())
            {
				item.Click();
            }
		}

		public void GoToInventory() => _driver.Navigate().GoToUrl(_inventoryPageURL);
		public void GoToCheckout() => cart.Click();
		public void RemoveItemFromCart(int num) => inventoryItemRemoveButtons.ToArray()[num].Click();
		public void RemoveRedShirtFromCart() => redShirtRemoveButton.Click();
		public bool CheckIfItemIsRemovedFromCart(string itemName)
        {
			_driver.Navigate().Refresh();
			switch (itemName)
            {
				case "backpack":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
				case "bikeLight":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
				case "boltShirt":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
				case "fleece":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
				case "onesie":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
				case "redShirt":
					if (_driver.FindElements(By.ClassName("cart_button")).ToArray().Length == 5) return true;
					break;
            }
			return false;
		}

        public int GetCartCount() => Convert.ToInt32(cartItemCount.Text.ToString());

		internal void ClickItemNameCartLink(string itemName)
		{
			switch (itemName)
			{
				case "backpack":
					backpack.Click();
					break;
				case "bikeLight":
					bikeLight.Click();
					break;
				case "boltShirt":
					boltShirt.Click();
					break;
				case "fleece":
					fleece.Click();
					break;
				case "onesie":
					onesie.Click();
					break;
				case "redShirt":
					redShirt.Click();
					break;
			}
		}
	}
}
