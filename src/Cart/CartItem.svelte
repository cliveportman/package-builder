<script>

  import { cartItems, cartService } from "./cart-store.js";

  import Button from "../UI/Button.svelte";

  export let id;
  export let product;
  export let purchasable;

  function removeFromCart() {
    cartService.removeItem(product.id);
  }

</script>

<style>

  .cartitem {
    padding: 1rem; margin-bottom: 0.5rem;
  }



  h2 {
    padding: 0;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700; font-size: 1.6rem; line-height: 1.2em;
    color: #000066; text-transform: uppercase; letter-spacing: 0;
  }

  h3 {
    padding: 0;
    font-family: "Lato", sans-serif;
    font-weight: 700; font-size: 1.6rem; line-height: 1.2em;
    color: #000066; text-transform: none;
  }

  p {
    padding-top: 0.5rem; margin-bottom: 0;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000066;
  }

  p.price {
    font-size: 16px; font-weight: 700; color: #f36;
  }

  a {
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.4rem; line-height: 1.2em; color: #000066;
  }



  footer {
  }

</style>

<div class="cartitem">

	<h2>{product.title}</h2>
  {#if purchasable.title != product.title}<h3>{purchasable.title}</h3>{/if}

  <p class="price">{#if purchasable.price > 0}£{purchasable.price.toFixed(2)}{:else}FREE{/if}&nbsp;&nbsp;&nbsp;<a class="remove" on:click="{removeFromCart}">Remove</a></p>

</div>