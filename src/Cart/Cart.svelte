<script>

	import { cartOffer, cartItems, cartService, cartTotals, requiredItemsToWarnAbout } from './cart-store.js';

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

  let loading = false
  let baseUrl = "https://www.britbound.com/"

  function processCart() {

    if ($cartItems) {
      loading = true
      processCartItems()
    }

  }

  function processCartItems() {

    const purchasableIdsArray = []
    $cartItems.forEach(item => {
      purchasableIdsArray.push(item.purchasable.id)
    });
    const purchasableIdsString = purchasableIdsArray.toString()

    const addUrl = baseUrl + 'pb/cart/add/' + purchasableIdsString
    let data = "";
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
      if(this.readyState == 4 && this.status ==200){
        var response = JSON.parse(this.responseText);
        console.log(response);
        if (response.success) {
        	processDiscount()
        } else {
            loading = false
            window.location = baseUrl + 'cart'

        }
      }
            
    }      
    ajax.open('POST', addUrl, true);
    ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
    ajax.send(data);     

  }

  function processDiscount() {
    if ($cartOffer) {
      const discountUrl = baseUrl + 'pb/cart/discount/' + $cartOffer.code
      let data = "";
      let ajax = new XMLHttpRequest();

      ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var response = JSON.parse(this.responseText);
        console.log(response);
          if (response.success) {
            loading = false
            window.location = baseUrl + 'cart'
          }
        }
      }      
      ajax.open('POST', discountUrl, true);
      ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
      ajax.send(data);
    } else {
      loading = false
      window.location = baseUrl + 'cart'
    }

  }

</script>

<style>
	.cart {
		box-shadow: 0 2px 6px rgba(0,0,0, 0.26);
		padding: 1rem; margin-bottom: 2rem;
		overflow-y: auto;
	}

  @media (min-width: 768px) {
    .cart {
    position:fixed; width: 30rem; height: 100vh; margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    }
  }

  footer {
    border-top: 1px solid #ccc;
    padding-top: 1rem;
  }
	footer h1 {
	}

		footer .actions {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}

	span {
		margin: 0;
	}




  h1 {
    padding: 0; margin-bottom: 2rem;
    font-family: "Lato", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em; text-align: center;
    color: #000066; text-transform: uppercase;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
  }


  h2 {
    padding: 0; margin-bottom: 2rem; margin-top: 2rem;
    font-family: "Lato", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em; text-align: right;
    color: #000066; text-transform: uppercase;
  }
  h3 {
    padding: 0; margin-top: 1rem;
    font-family: "Lato", sans-serif;
    font-weight: 700; font-size: 1.6rem; line-height: 1.2em; text-align: right;
    color: #000066; text-transform: uppercase;
  }

  h2 span, h3 span {
  	color: #f36; font-weight: 700;
  }

  p {
    padding-top: 0.5rem; margin-bottom: 2rem; text-align: center;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000066;
  }

  p.price {
    font-size: 16px; font-weight: 700; color: #f36;
  }

</style>

{#if warningModalItems.length}
  <CartWarningModal items="{warningModalItems}" on:close="" />
{/if}


<div class="cart" id="carttop">

  <h1>Your cart</h1>

  {#if $cartItems.length}
	<div class="cartitems">
		{#each $cartItems as item}
			<CartItem
				id="{item.id}"
				product="{item.product}"
				purchasable="{item.purchasable}"
			/>
		{/each}
	</div>
  {:else}
    <p>Your cart is empty</p>
  {/if}

	<footer>
	    <h3>Package price: <span>£{$cartTotals.subtotal.toFixed(2)}</span></h3>
		{#if $cartOffer}
							
				<h3>Package deal:<br> {$cartOffer.title}<br><span>£{$cartTotals.adjustment.toFixed(2)}</span></h3>
			
		{/if}
	    <h2>Total: <span>£{($cartTotals.subtotal + $cartTotals.adjustment).toFixed(2)}</span></h2>
		<div class="actions">
		    <Button
		      type="button"
		      style="outline"
		      text="Empty cart"
		      on:click="{emptyCart}"
		    />
		    <Button
		      type="button"
          style="success"
		      text="Checkout"
		      on:click="{processCart}"
		    />
		</div>
	</footer>

</div>