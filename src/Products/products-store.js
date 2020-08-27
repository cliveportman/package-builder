import { writable } from 'svelte/store';

export const deals = writable([]);

export const products = writable({

	'visas': [],
	'works': [],
	'locations': [],
	'tours': []

});

export const productsService = {

	subscribe: products.subscribe,

	setDeals: (data) => {
		deals.update(dealsList => {
			return data;
		}, 5000);
	},

	setProducts: (data) => {
		products.update(productsList => {
			return data;
		}, 5000);
	},

	toggleIsInCart: (id) => {

		products.update(productsList => {

			// Our products list is not a simple list.
			// It's several objects containing lists of specific product types.
			for (var productType in productsList) {
				const items = productsList[productType];
				const itemToToggle = items.find(product => product.id === id);
				if (itemToToggle) {
					itemToToggle.isInCart = !itemToToggle.isInCart;
					const itemIndex = items.findIndex(product=> product.id === id);
					items[itemIndex] = itemToToggle;
					productsList[productType] = items;
				}
				productsList[productType] = items;
			}
			return productsList;

		})
	},

	toggleIsDisabled: (id, requiredItemInCart) => {

		console.log(id);

		products.update(productsList => {

			// Loop through the product types.
			for (var productType in productsList) {
        
        		// Loop through each product in the product type's list of products.
				const items = productsList[productType];
				items.forEach( (item) => {

					// Disable each item by default.
          			item.wholeProductDisabled = true;

					const productIndex = items.findIndex(product=> product.id === item.id);

					for (var key in item.purchasables) {

					  	var purchasable = item.purchasables[key];
						var requiredProducts = purchasable.requires;

						// If th purchasable contains a required product and one of the 
						// required products matches the id, we enable the product.
						if (requiredProducts.length && requiredProducts.indexOf(id) !== -1) {
							purchasable.disabled = !requiredItemInCart;
							item.purchasables[key] = purchasable;
            			}
            			if (!purchasable.disabled)  item.wholeProductDisabled = false;			    
          			}
          
					items[productIndex] = item;

				});

        	productsList[productType] = items;
        
			}
			return productsList;

		});

	},

}