<script>

  import { onDestroy, createEventDispatcher } from 'svelte';

  import { products } from './products-store.js';
  import { cartItems, cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  // Used to identify the product we want to display
  export let id;
  let productToShow;

  const subscription = products.subscribe(productsList => {
    for (var productType in productsList) {
        const items = productsList[productType];
        productToShow = items.find(item => item.id === id);
        if (productToShow) {
          return productToShow;
        }
      }
  });

  onDestroy( () => {
    subscription();
  });

  // Used to pass the close button call to parents
  const dispatch = createEventDispatcher();

  // Used the purchasable select field
  let selectedPurchasable;

  function addToCart() {
    cartService.addItem({ product: { id: productToShow.id, title: productToShow.title }, purchasable: selectedPurchasable });
  }

  function removeFromCart() {
    cartService.removeItem(productToShow.id);
  }

  export let disabled = true;  

  productToShow.purchasables.forEach((purchasable) => {
    if (!purchasable.disabled) { disabled = false; }
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
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: auto;
}


@media (min-width: 768px) {
  .modal {
    width: 40rem;
    left: calc(50% - 20rem);
  }
}


section {
}

.image {
  width: 100%;
  height: 25rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image {
  background: #e7e7e7;
}

.content {
  text-align: center;
  width: 80%;
  margin: auto;
}

h1 {
  font-size: 2rem;
  font-family: 'Roboto Slab', sans-serif;
  margin: 0.5rem 0;
}

h2 {
  font-size: 1.25rem;
  color: #6b6b6b;
}

p {
  font-size: 1.5rem;
}



  footer p {
    display: block;
    height: 2.5rem; width: 100%;
    padding: 0.5rem; margin-bottom: 1rem;
    font-size: 1.25rem;

    border-radius: 5px;
  }
  footer {  
    max-width: 40rem;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  footer select {
    display: block;
    flex: 1;
    margin: 0 1rem;
    height: 2.5rem;
    padding: 0.5rem; 
    font-size: 1.25rem;

    border-radius: 5px;
  }

</style>

<div class="modal-bg" on:click="{ () => dispatch('close') }"></div>

<div class="modal">

<section class="{productToShow.isInCart ? 'incart' : ''}">

  <div class="image">
    <img src="{productToShow.imageUrl}" alt="{productToShow.title}">
  </div>

  <div class="content">
    <h1>{productToShow.title}</h1>
    <p>{productToShow.description}</p>
    {#if productToShow.hasMemberPrice}<p class="memberprice">Discount available when purchased with social membership.</p>{/if}
  </div>

  <footer>

    <Button
      type="button"
      text="Close"
      style="outline"
      on:click="{ () => dispatch('close') }"
    />

    <select disabled="{disabled}" bind:value="{selectedPurchasable}">
      {#each productToShow.purchasables as purchasable}
        <option value="{purchasable}" disabled="{purchasable.disabled}">{purchasable.title} £{purchasable.price.toFixed(2)}</option>
      {/each}
    </select>

    <Button
      type="button"
      text="{productToShow.isInCart ? 'Remove from cart' : 'Add to cart'}"
      disabled="{disabled}"
      on:click="{productToShow.isInCart ? removeFromCart : addToCart}"
    />

  </footer>
</section>

</div>