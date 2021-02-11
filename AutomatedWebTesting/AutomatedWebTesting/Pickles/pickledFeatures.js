jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "SDCart.feature",
      "Feature": {
        "Name": "SDCart",
        "Description": "As a user of the Swap Labs website\r\nI want to be able to access the cart\r\nIn order to edit and checkout my orders",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "itemNum",
                    "itemName"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "backpack",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      "bikeLight",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      "boltShirt",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      "fleece",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "4",
                      "onesie",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Removing items from the cart",
            "Slug": "removing-items-from-the-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the remove button for item number <itemNum>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the item <itemName> should be removed from my cart",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@remove"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "itemName"
                  ],
                  "DataRows": [
                    [
                      "redShirt",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Removing red shirt item from the cart",
            "Slug": "removing-red-shirt-item-from-the-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the remove button for the red shirt",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the item <itemName> should be removed from my cart",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@remove",
              "@redShirt"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "itemNum"
                  ],
                  "DataRows": [
                    [
                      "0",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "4",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Removing item from the cart decreases the cart count",
            "Slug": "removing-item-from-the-cart-decreases-the-cart-count",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the remove button for item number <itemNum>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the cart count should decrease by 1",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@remove"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Removing red shirt item from the cart decreases cart count",
            "Slug": "removing-red-shirt-item-from-the-cart-decreases-cart-count",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the remove button for the red shirt",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the cart count should decrease by 1",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@remove",
              "@redShirt"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "itemId",
                    "itemName"
                  ],
                  "DataRows": [
                    [
                      "4",
                      "backpack",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "0",
                      "bikeLight",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      "boltShirt",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "fleece",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      "onesie",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      "redShirt",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Clicking on the item name link",
            "Slug": "clicking-on-the-item-name-link",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on the name link for the item <itemName>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be taken to the item page with id <itemId>",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "# can go back"
                  },
                  {
                    "Text": "# can checkout"
                  }
                ]
              }
            ],
            "Tags": [
              "@product"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I am on the inventory page to add items",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "And",
              "NativeKeyword": "And ",
              "Name": "I add all available items to the cart",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "And",
              "NativeKeyword": "And ",
              "Name": "I click onto the cart page",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "SDInventory.feature",
      "Feature": {
        "Name": "SDInventory",
        "Description": "",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index",
                    "url"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "https://www.saucedemo.com/inventory-item.html?id=4",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      "https://www.saucedemo.com/inventory-item.html?id=0",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      "https://www.saucedemo.com/inventory-item.html?id=1",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      "https://www.saucedemo.com/inventory-item.html?id=5",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "4",
                      "https://www.saucedemo.com/inventory-item.html?id=2",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "https://www.saucedemo.com/inventory-item.html?id=3",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Clicking on product name takes user to product page",
            "Slug": "clicking-on-product-name-takes-user-to-product-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product name at index <index>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the page url will be <url>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventoryToProduct"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Add item to cart",
            "Slug": "add-item-to-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product at index 0 add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the cart label is equal to 1",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventoryAddToCart"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Add multiple items to cart",
            "Slug": "add-multiple-items-to-cart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product at index 0 add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product at index 1 add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the cart label is equal to 2",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventoryAddToCart"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index"
                  ],
                  "DataRows": [
                    [
                      "0",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "1",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "2",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "3",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "4",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Add item to cart changes button to remove",
            "Slug": "add-item-to-cart-changes-button-to-remove",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product at index <index> add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index <index> add to cart button is \"REMOVE\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventoryAddToCart"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Pressing add to cart twice sets button state to AddToCart",
            "Slug": "pressing-add-to-cart-twice-sets-button-state-to-addtocart",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the product at index 0 add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click the product at index 0 add to cart button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index 0 add to cart button is \"ADD TO CART\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventoryAddToCart"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index",
                    "prodName"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "Sauce Labs Backpack",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "Test.allTheThings() T-Shirt (Red)",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Products sorted correctly when sort A-Z",
            "Slug": "products-sorted-correctly-when-sort-a-z",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "products are sorted by value \"az\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index <index> name will be <prodName>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventorySorting"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index",
                    "prodName"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "Test.allTheThings() T-Shirt (Red)",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "Sauce Labs Backpack",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Products sorted correctly when sort Z-A",
            "Slug": "products-sorted-correctly-when-sort-z-a",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "products are sorted by value \"za\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index <index> name will be <prodName>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventorySorting"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index",
                    "price"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "7.99",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "49.99",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Products sorted correctly when sort low to high",
            "Slug": "products-sorted-correctly-when-sort-low-to-high",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "products are sorted by value \"lohi\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index <index> price will be <price>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventorySorting"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "index",
                    "price"
                  ],
                  "DataRows": [
                    [
                      "0",
                      "49.99",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "5",
                      "7.99",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Products sorted correctly when when sort high to low",
            "Slug": "products-sorted-correctly-when-when-sort-high-to-low",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "products are sorted by value \"hilo\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the product at index <index> price will be <price>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@InventorySorting"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "SDLogin.feature",
      "Feature": {
        "Name": "SDLogin",
        "Description": "This is to test the login and logout functionality of https://www.saucedemo.com/",
        "FeatureElements": [
          {
            "Name": "1.1 No Username or Password - Login failed",
            "Slug": "11-no-username-or-password---login-failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should receive an error containing \"Username is required\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "1.2 No Password - Login failed",
            "Slug": "12-no-password---login-failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a registered username standard_user",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should receive an error containing \"Password is required\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "1.3 No username - Login failed",
            "Slug": "13-no-username---login-failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a valid password secret_sauce",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should receive an error containing \"Username is required\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "1.4 User doesn't exist - Login failed",
            "Slug": "14-user-doesnt-exist---login-failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have not registered a user account",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should receive an error containing \"Username and password do not match any user in this service\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "locked_out_user",
                      "secret_sauce",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "1.5 Locked out user - Login failed",
            "Slug": "15-locked-out-user---login-failed",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a registered username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have a valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should receive an error containing \"this user has been locked out.\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "username",
                    "password"
                  ],
                  "DataRows": [
                    [
                      "standard_user",
                      "secret_sauce",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "problem_user",
                      "secret_sauce",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "performance_glitch_user",
                      "secret_sauce",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "1.6 Standard user - Login success",
            "Slug": "16-standard-user---login-success",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have a registered username <username>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I have a valid password <password>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be redirected to the inventory page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "2.1 Standard user - Logout success",
            "Slug": "21-standard-user---logout-success",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am logged in as a user",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click logout",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be redirected to the login page",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "The users journey should start from the home page",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I am on the home page",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@remove",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@redShirt",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@product",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@InventoryToProduct",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@InventoryAddToCart",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Tag": "@InventorySorting",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "Folders": [
      {
        "Folder": "SDCart.feature",
        "Total": 5,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 5
      },
      {
        "Folder": "SDInventory.feature",
        "Total": 9,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 9
      },
      {
        "Folder": "SDLogin.feature",
        "Total": 7,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 7
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "SDCart.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SDInventory.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SDLogin.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 21,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 21
    },
    "Features": {
      "Total": 3,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 3
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "SDCart.feature",
        "Total": 5,
        "Automated": 5,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "SDInventory.feature",
        "Total": 9,
        "Automated": 9,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "SDLogin.feature",
        "Total": 7,
        "Automated": 7,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "GeneratedOn": "11 February 2021 17:42:26"
  }
});