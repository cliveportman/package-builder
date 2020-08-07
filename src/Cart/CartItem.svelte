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
    padding: 1rem;
  }

  footer {
  }

</style>

<div class="cartitem">

	<h2>{product.title}</h2>
  <h3>{purchasable.title}</h3>

  <p class="price">£{purchasable.price.toFixed(2)}</p>

  <Button
    type="button"
    text="Remove item"
    on:click="{removeFromCart}"
  />

</div>