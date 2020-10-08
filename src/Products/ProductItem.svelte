<script>

  import { createEventDispatcher } from 'svelte';

  import { cartItems, cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  export let id;
	export let title;
  export let oneLiner;
	export let description = [];
	export let imageUrl;
	export let purchasables = [];
  export let width;
  export let sale;
  export let hasMemberPrice = false;
  export let isInCart = false;
  export let wholeProductDisabled;



  // Products with a single variant need the selectedPurchasable to be populated.
  let selectedPurchasable = null;
  if (purchasables.length === 1) {
    selectedPurchasable = purchasables[0];
  }

  function addToCart() {
    // For multi-variant products, we disable the Add To Cart button until a purchasable has been selected.
    if (selectedPurchasable) {
      cartService.addItem({ product: { id: id, title: title }, purchasable: selectedPurchasable });
    }
  }

  function removeFromCart() {
    cartService.removeItem(id);
  }

  const dispatch = createEventDispatcher();

</script>

<style>

  /* BASIC CARD */
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    background: white;
    margin: 0 0.5rem  1rem;  
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    border: 3px solid white;
  }

  @media (min-width: 768px) {
    article {
      width: calc(33.3333% - 1rem);
    } 

  }

  @media (min-width: 1024px) {
    article {
      width: calc(25% - 1rem);
    }
  }




  /* SELECTED ITEM */
  article.incart {
    box-shadow: 0 2px 8px rgba(255, 51, 102, 0.9);
    border: 3px solid #f36;
    background: #ddd;
  }

  article.incart img {
    opacity: 0.75;
  }




@media (min-width: 1024px) {
  article.large {
    width: calc(100% - 1rem);  
    flex-direction: row;
  }
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
  }
@media (min-width: 1024px) {
  article.large .image {
    width: calc(25% - 1rem);
    height: auto;
  }

  article.large .content {
    width: 62.5%;
  }
}

  .image img {
    width: 100%;
    height: 100%;
  }

  h1 {
    padding: 1rem 0 1rem;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em;
    color: #000066; text-transform: uppercase; text-align: left; letter-spacing: 0;
  }

  p {
    padding-bottom: 1rem;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
  }

  p.sale {
    font-size: 16px; 
    color: red;
  }
  p.sale .strike {    
  }
  p.sale .note {
    font-size: 12px;    
  }

  p.price {
    font-size: 16px; font-weight: 700; color: #f36;
  }

  p.memberprice {
    color: #cf0056; font-size: 12px;
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
    height: 4rem; line-height: 4rem; width: 100%;
    padding: 0.5rem; margin-bottom: 1rem;
    font-size: 1.25rem;

      font-family: "Lato", sans-serif;
      font-size: 1.6rem; text-transform: none;
  }
  footer .actions {    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 -0.5rem;
  }
@media (min-width: 1024px) {
  article.large .content footer {
    width: 50%;
    max-width: 40rem;
  }
}

</style>

<article class="{width} {isInCart ? 'incart' : ''}">

	<div class="image">
		<img src="{imageUrl}" alt="{title}" on:click="{ () => dispatch('showProductInfo', id) }">
	</div>

	<div class="content">

    <div class="text">
      <h1>{title}</h1>
  		<p class="oneliner">{oneLiner}</p>
      {#if hasMemberPrice}<p class="memberprice">Discount available when purchased with social membership (above).</p>{/if}
    </div>

  	<footer>

      {#if sale}
        <p class="sale"><span class="strike">{sale}</span><br><span class="note">* sale prices shown</span></p>
      {/if}

      {#if purchasables.length > 1}
        <select disabled="{wholeProductDisabled}" bind:value="{selectedPurchasable}">
          <option>Select...</option>
          {#each purchasables as purchasable}
            <option value="{purchasable}" disabled="{purchasable.disabled}">{purchasable.title} £{purchasable.price.toFixed(2)}</option>
          {/each}
        </select>
      {:else}
        <p class="price">{#if purchasables[0].price > 0}£{purchasables[0].price.toFixed(2)}{:else}FREE{/if}</p>
      {/if}

      <div class="actions">
        <Button
          type="button"
          style="outline"
          text="More info"
          on:click="{ () => dispatch('showProductInfo', id) }"
        />
        {#if wholeProductDisabled}
          <Button
            type="button"
            text="Unavailable"
            disabled=true
            on:click="{ () => dispatch('showRequiredProducts', id) }"
          />
        {:else if !selectedPurchasable}
          <Button
            type="button"
            text="Add"
            disabled=true
            on:click="{addToCart}"
          />
        {:else}
          <Button
            type="button"
            style="{isInCart ? '' : 'success'}"
            text="{isInCart ? 'Remove' : 'Add'}"
            on:click="{isInCart ? removeFromCart : addToCart}"
          />
        {/if}
      </div>
  	</footer>


  </div>
</article>