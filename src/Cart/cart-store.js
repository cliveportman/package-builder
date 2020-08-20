import { writable, derived } from 'svelte/store';

import { deals, products, productsService } from '../Products/products-store.js';

export const cartItems = writable([]);

export const requiredItemsToWarnAbout = writable([]);

export const cartService = {

  subscribe: cartItems.subscribe,
  subscribe: requiredItemsToWarnAbout,

  subscribe: deals.subscribe,

  addItem: newItem => {
    cartItems.update(items => {

      // If already in the cart, do nothing.
      if (items.find(i => i.product.id === newItem.product.id)) {
        return [...items];
      }

      // If it requires a product that's not in the cart, do nothing.
      let requiredProducts = newItem.purchasable.requires;
      if (requiredProducts.length && !items.find(i => requiredProducts.indexOf(i.product.id) !== -1)) {
          return [...items];
      }

      // We're good. Let's add the item to the cart.
      productsService.toggleIsInCart(newItem.product.id);
      productsService.toggleIsDisabled(newItem.product.id, true);
      return [...items, newItem];
      
    });
  },

  removeItem: id => {
    cartItems.update(items => {

      
      // Filter the cart items so the array only contains the item in question,
      // so we can get the item.
      var arrayWithSelectedItemOnly = items.filter(i => i.product.id === id);
      var selectedItem = arrayWithSelectedItemOnly[0];

      var matchedItems = [];

      // Now we have the select item, loop through the other items in the cart..
      var arrayWithoutSelectedItem = items.filter(i => i.product.id !== id);
      for (var key in arrayWithoutSelectedItem) {

        // Loop through the purchasable's required items.
        for (var key2 in arrayWithoutSelectedItem[key].purchasable.requires) {
          // And see if there is a match.
          if (arrayWithoutSelectedItem[key].purchasable.requires[key2] == id) {
            // If there is a match, add the matched item to the matchedItems array.
            if (!matchedItems.includes(arrayWithoutSelectedItem[key])) {
              matchedItems.push(arrayWithoutSelectedItem[key]);
            }
          }
        }
      }
      if (matchedItems.length) {

        // We have an item in the cart that requires the one being removed.
        // Return the concerned items so we can show a warning
        requiredItemsToWarnAbout.update(items => {
          let linkedItems = matchedItems;
          linkedItems.push(selectedItem);
          return linkedItems;
        });

        // We aren't going to make any changes yet, because we're going to ask them to confirm.
        // So return the items as they were.
        return items;

      } else {

        // Just remnove the selected item from the cart.
        productsService.toggleIsInCart(id);
        productsService.toggleIsDisabled(id, false);
        return items.filter(i => i.product.id !== id);

      }

    });
  },

  removeMultipleItems: ids => {
    cartItems.update(items => {

      ids.forEach(function(id) {
        productsService.toggleIsInCart(id);
        productsService.toggleIsDisabled(id, false);
        items = items.filter(i => i.product.id !== id);
      });

      return items;
    });
  },

  emptyCart: () => {
    cartItems.update(items => {
      for (var key in items) {
        productsService.toggleIsInCart(items[key].product.id);
        productsService.toggleIsDisabled(items[key].product.id, false);
      }
      return items = [];
    });
  },

  clearRequiredItems: () => {
    requiredItemsToWarnAbout.update(items => {
      return items = [];
    });
  },

  toggleIsDiscountApplied: (id) => {

    deals.update(dealsList => {

      const itemToToggle = dealsList.find(deal => deal.id === id);
      itemToToggle.isApplied = !itemToToggle.isApplied;
      const itemIndex = dealsList.findIndex(deal=> deal.id === id);
      items[itemIndex] = itemToToggle;
      return productsList;

    });

  },

  applyDiscount: id => {

  }

}; 

export const totalPrice = derived(
  cartItems,
  ($cartItems) => {
    let price = 0;
    $cartItems.forEach(i => {
      price = price + i.purchasable.price;
    });
    return price.toFixed(2);
  }
);