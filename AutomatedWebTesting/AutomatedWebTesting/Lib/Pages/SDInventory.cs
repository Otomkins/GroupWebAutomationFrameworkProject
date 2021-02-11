﻿using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System.Collections.Generic;
using System.Linq;

namespace AutomatedWebTesting
{
	public class SDInventory
	{
		private IWebDriver _driver;
		private string _inventoryPageURL = "https://www.saucedemo.com/inventory.html";

		public SDInventory(IWebDriver driver)
		{
			_driver = driver;
		}

		private IWebElement cart => _driver.FindElement(By.Id("shopping_cart_container"));
		private IWebElement cartItemCount => _driver.FindElement(By.ClassName("shopping_cart_badge"));
		private IWebElement sortElement => _driver.FindElement(By.ClassName("product_sort_container"));
		private SelectElement sortDropDown => new SelectElement(sortElement);
		private IReadOnlyCollection<IWebElement> inventoryItems => _driver.FindElements(By.ClassName("inventory_item"));
		private IReadOnlyCollection<IWebElement> inventoryItemsName => _driver.FindElements(By.ClassName("inventory_item_name"));
		private IReadOnlyCollection<IWebElement> inventoryItemsPrice => _driver.FindElements(By.ClassName("inventory_item_price"));
		private IReadOnlyCollection<IWebElement> inventoryItemsAddToCart => _driver.FindElements(By.ClassName("btn_inventory"));

		public void GoToInventory() => _driver.Navigate().GoToUrl(_inventoryPageURL);
		public void GoToCheckout() => cart.Click();
		public int GetCartCount() => int.Parse(cartItemCount.Text);
		public IWebElement[] GetAllProducts() => inventoryItems.ToArray();
		public decimal[] GetAllProductPrices()
		{
			List<decimal> prices = new List<decimal>();
			foreach(IWebElement item in inventoryItemsPrice)
			{
				string text = item.Text.Replace("$", "");
				prices.Add(decimal.Parse(text));
			}
			return prices.ToArray();
		}
		public string[] GetAllProductNames()
		{
			List<string> names = new List<string>();
			foreach(IWebElement item in inventoryItemsName)
			{
				names.Add(item.Text);
			}
			return names.ToArray();
		}
		public decimal GetProductPrice(int num) => decimal.Parse(inventoryItemsPrice.ToArray()[num].Text);
		public void AddProductToCart(int num) => inventoryItemsAddToCart.ToArray()[num].Click();
		public string GetButtonState(int num) => inventoryItemsAddToCart.ToArray()[num].Text;
		public void SetProductSortDropdown(string value) => sortDropDown.SelectByValue(value);
	}
}
