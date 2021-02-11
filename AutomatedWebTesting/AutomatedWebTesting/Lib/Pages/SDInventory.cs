using System.Collections.Generic;
using System.Linq;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace AutomatedWebTesting
{
	public class SDInventory
	{
		private readonly string _inventoryPageURL = "https://www.saucedemo.com/inventory.html";
		private readonly IWebDriver _driver;

		public SDInventory(IWebDriver driver) => _driver = driver;

		private IReadOnlyCollection<IWebElement> InventoryItems => _driver.FindElements(By.ClassName("inventory_item"));

		private IReadOnlyCollection<IWebElement> InventoryItemsName => _driver.FindElements(By.ClassName("inventory_item_name"));

		private IReadOnlyCollection<IWebElement> InventoryItemsPrice => _driver.FindElements(By.ClassName("inventory_item_price"));

		private IReadOnlyCollection<IWebElement> InventoryItemsImage => _driver.FindElements(By.ClassName("inventory_item_img"));

		private IReadOnlyCollection<IWebElement> InventoryItemsAddToCart => _driver.FindElements(By.ClassName("btn_inventory"));

		private IWebElement Cart => _driver.FindElement(By.Id("shopping_cart_container"));

		private IWebElement CartItemCount => _driver.FindElement(By.ClassName("shopping_cart_badge"));

		private IWebElement SortElement => _driver.FindElement(By.ClassName("product_sort_container"));

		private SelectElement SortDropDown => new SelectElement(SortElement);

		public void GoToInventory() => _driver.Navigate().GoToUrl(_inventoryPageURL);

		public void GoToCheckout() => Cart.Click();

		public int GetCartCount() => int.Parse(CartItemCount.Text);

		public IWebElement[] GetAllProducts() => InventoryItems.ToArray();

		public decimal[] GetAllProductPrices()
		{
			List<decimal> prices = new List<decimal>();
			foreach(IWebElement item in InventoryItemsPrice)
			{
				string text = item.Text.Replace("$", "");
				prices.Add(decimal.Parse(text));
			}
			return prices.ToArray();
		}

		public string[] GetAllProductNames()
		{
			List<string> names = new List<string>();
			foreach(IWebElement item in InventoryItemsName)
			{
				names.Add(item.Text);
			}
			return names.ToArray();
		}

		public decimal GetProductPrice(int num) => decimal.Parse(InventoryItemsPrice.ToArray()[num].Text);

		public void AddProductToCart(int num) => InventoryItemsAddToCart.ToArray()[num].Click();

		public string GetButtonState(int num) => InventoryItemsAddToCart.ToArray()[num].Text;

		public void SetProductSortDropdown(string value) => SortDropDown.SelectByValue(value);

		public void GoToProductPageThroughName(int num) => InventoryItemsName.ToArray()[num].Click();

		public void GoToProductPageThroughImage(int num) => InventoryItemsImage.ToArray()[num].Click();
	}
}
