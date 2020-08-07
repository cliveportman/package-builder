import { writable, derived } from 'svelte/store';

import { deals, products, productsService } from '../Products/products-store.js';

export const cartItems = writable([]);

export const cartService = {

  subscribe: cartItems.subscribe,

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
      productsService.toggleIsInCart(id);
      productsService.toggleIsDisabled(id, false);
      return items.filter(i => i.product.id !== id);
    });
  },

  emptyCart: () => {
    cartItems.update(items => {
      for (var item in items) {
        productsService.toggleIsInCart(items[item].product.id);
        productsService.toggleIsDisabled(items[item].product.id, false);
      }
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