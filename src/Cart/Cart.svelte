<script>

	import { cartItems, cartService, totalPrice, requiredItemsToWarnAbout } from './cart-store.js';

	import CartItem from './CartItem.svelte';
	import CartWarningModal from './CartWarningModal.svelte';
  	import Button from "../UI/Button.svelte";

	function emptyCart() {
		cartService.emptyCart();
	}

  	let warningModalItems = false;
	const unsubscribe = requiredItemsToWarnAbout.subscribe(items => {
		warningModalItems = items;
	});




</script>

<style>
	.cart {
		position:fixed; width: 20rem; height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 2px 6px rgba(0,0,0, 0.26);
		padding: 1rem;
		overflow-y: auto;
	}

	footer h1 {
		text-align: right;
	}

		footer .actions {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

	span {
		margin: 0;
	}

</style>

{#if warningModalItems.length}
  <CartWarningModal items="{warningModalItems}" on:close="" />
{/if}


<div class="cart">

	<div class="cartitems">
		{#each $cartItems as item}
			<CartItem
				id="{item.id}"
				product="{item.product}"
				purchasable="{item.purchasable}"
			/>
		{/each}
	</div>

	<footer>
	    <h1>Total: £{$totalPrice}</h1>
		<div class="actions">
		    <Button
		      type="button"
		      text="Empty cart"
		      on:click="{emptyCart}"
		    />
		    <Button
		      type="button"
		      text="Checkout"
		    />
		</div>
	</footer>

</div>