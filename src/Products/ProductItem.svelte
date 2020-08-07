<script>

  import { createEventDispatcher } from 'svelte';

  import { cartItems, cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  export let id;
	export let title;
	export let description;
	export let imageUrl;
	export let purchasables = [];
  export let width;
  export let hasMemberPrice = false;
  export let isInCart = false;
  export let wholeProductDisabled;




  let selectedPurchasable;

  function addToCart() {
    cartService.addItem({ product: { id: id, title: title }, purchasable: selectedPurchasable });
  }

  function removeFromCart() {
    cartService.removeItem(id);
  }

  const dispatch = createEventDispatcher();

</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 0.5rem;
    width: calc(33.3333% - 1rem);  
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
  }

  article.large {
    width: calc(100% - 1rem);  
    flex-direction: row;
  }

  article.incart {
    background: orange;
  }

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  article.large .image {
    width: 37.5%;
    height: auto;
  }

  article.large .content {
    width: 62.5%;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  p {
    font-size: 1.25rem;
    margin: 0 0 2rem;
  }

  footer {
  }

  footer p {
    display: block;
    height: 2.5rem; width: 100%;
    padding: 0.5rem; margin-bottom: 1rem;
    font-size: 1.25rem;

    border-radius: 5px;
  }

  footer select {
    display: block;
    height: 2.5rem; width: 100%;
    padding: 0.5rem; margin-bottom: 1rem;
    font-size: 1.25rem;

    border-radius: 5px;
  }
  footer .actions {    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  article.large .content footer {
    max-width: 20rem;
  }

</style>

<article class="{width} {isInCart ? 'incart' : ''}">

	<div class="image">
		<img src="{imageUrl}" alt="{title}" on:click="{ () => dispatch('showProductInfo', id) }">
	</div>

	<div class="content">

    <div class="text">
      <h1>{title}</h1>
  		<p>{description}</p>
      {#if hasMemberPrice}<p class="memberprice">Discount available when purchased with social membership (above).</p>{/if}
    </div>

  	<footer>
      <select disabled="{wholeProductDisabled}" bind:value="{selectedPurchasable}">
        {#each purchasables as purchasable}
          <option value="{purchasable}" disabled="{purchasable.disabled}">{purchasable.title} £{purchasable.price.toFixed(2)}</option>
        {/each}
      </select>

      <div class="actions">
        <Button
          type="button"
          style="outline"
          text="More info"
          on:click="{ () => dispatch('showProductInfo', id) }"
        />
        <Button
          type="button"
          text="{isInCart ? 'Remove from cart' : 'Add to cart'}"
          disabled="{wholeProductDisabled}"
          on:click="{isInCart ? removeFromCart : addToCart}"
        />
      </div>
  	</footer>


  </div>
</article>