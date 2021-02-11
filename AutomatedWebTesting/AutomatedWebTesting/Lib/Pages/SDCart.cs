using System;
using System.Collections.Generic;
using System.Linq;
using OpenQA.Selenium;

namespace AutomatedWebTesting
{
    public class SDCart
    {
		private readonly string _inventoryPageURL = "https://www.saucedemo.com/inventory.html";
		private readonly IWebDriver _driver;

		public SDCart(IWebDriver driver) => _driver = driver;

		private IReadOnlyCollection<IWebElement> InventoryItemsAddToCart => _driver.FindElements(By.ClassName("btn_inventory"));

		private IReadOnlyCollection<IWebElement> InventoryItemRemoveButtons => _driver.FindElements(By.ClassName("cart_button"));

		private IWebElement Cart => _driver.FindElement(By.Id("shopping_cart_container"));

		private IWebElement RedShirtRemoveButton => _driver.FindElement(By.ClassName("cart_button"));

		private IWebElement CartItemCount => _driver.FindElement(By.ClassName("shopping_cart_badge"));

		private IWebElement Backpack => _driver.FindElement(By.Id("item_4_title_link"));

		private IWebElement BikeLight => _driver.FindElement(By.Id("item_0_title_link"));

		private IWebElement BoltShirt => _driver.FindElement(By.Id("item_1_title_link"));

		private IWebElement Fleece => _driver.FindElement(By.Id("item_5_title_link"));

		private IWebElement Onesie => _driver.FindElement(By.Id("item_2_title_link"));

        private IWebElement RedShirt => _driver.FindElement(By.Id("item_3_title_link"));

        public void AddAllProductsToCart()
		{
            foreach (IWebElement item in InventoryItemsAddToCart.ToArray())
            {
				item.Click();
            }
		}

		public void GoToInventory() => _driver.Navigate().GoToUrl(_inventoryPageURL);

		public void GoToCheckout() => Cart.Click();

		public void RemoveItemFromCart(int num) => InventoryItemRemoveButtons.ToArray()[num].Click();

		public void RemoveRedShirtFromCart() => RedShirtRemoveButton.Click();

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

        public int GetCartCount() => Convert.ToInt32(CartItemCount.Text.ToString());

		internal void ClickItemNameCartLink(string itemName)
		{
			switch (itemName)
			{
				case "backpack":
					Backpack.Click();
					break;
				case "bikeLight":
					BikeLight.Click();
					break;
				case "boltShirt":
					BoltShirt.Click();
					break;
				case "fleece":
					Fleece.Click();
					break;
				case "onesie":
					Onesie.Click();
					break;
				case "redShirt":
					RedShirt.Click();
					break;
			}
		}
	}
}
