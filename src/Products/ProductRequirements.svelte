<script>

  import { onDestroy, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import { products, productsService } from './products-store.js';
  import { cartItems, cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  // Used to identify the product we want to display
  export let id;
  let productToShow;
  let requiredProductIds = [];
  let requiredProductTitles = [];

  const subscription = products.subscribe(productsList => {

    // Loop through the product list to get the product in question
    for (var productType in productsList) {
      const items = productsList[productType];
      productToShow = items.find(item => item.id === id);


      // WE HAVE THE PRODUCT
      // NOW WE GET THE REQUIRED PRODUCTS
      if (productToShow) {
        productToShow.purchasables.forEach( (purchasable) => {

          // BUILD AN ARRAY OF REQUIRED PRODUCTS
          for (var key in purchasable.requires) {
            var requiredProduct = purchasable.requires[key];
            if (!requiredProductIds.includes(requiredProduct)) {
              requiredProductIds.push(requiredProduct);
            }
          }

          // THEN LOOP THROUGH THE PRODUCT LIST AGAIN TO GET THE TITLES
          for (var productType2 in productsList) {
            const items2 = productsList[productType2];
            for (var key in requiredProductIds) {
              var requiredProductId = purchasable.requires[key];
              var requiredItem = items2.find(item2 => item2.id === requiredProductId);
              if (requiredItem) {
                if (!requiredProductTitles.includes(requiredItem.title)) {
                  requiredProductTitles.push(requiredItem.title);
                }
              }

            }
          }
          
        });

        return productToShow;
      }
    }





  });

  onDestroy( () => {
    subscription();
  });
  




</script>

<style>


.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  position: fixed; top: 10vh; left: 10%;
  display: block; width: 80%;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: auto;
}


@media (min-width: 768px) {
  .modal {
    width: 60rem;
    left: calc(50% - 30rem);
  }
}


section {
}


.content {
  text-align: center;
  margin: auto;
}

  p {
    padding-bottom: 1rem;
      font-family: "din-2014", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
  }


  footer {  
    padding: 1rem 0;
  }

</style>

<div class="modal-bg" on:click="{ () => dispatch('close') }"></div>

<div class="modal">

<section>

  <div class="content">
    <p>The <strong>{productToShow.title}</strong> can only be purchased along with one of the following:</p>
    <p>
      {#each requiredProductTitles as title}
        - {title}<br>
      {/each}
    </p>
    <p>

      To purchase this item, please add one of the above to your cart first.

    </p>
  </div>

  <footer>

    <Button
      type="button"
      text="Close"
      style="outline"
      on:click="{ () => dispatch('close') }"
    />

  </footer>
</section>

</div>