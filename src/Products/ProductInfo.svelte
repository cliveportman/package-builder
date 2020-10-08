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

  function removeFromCart() {
    cartService.removeItem(productToShow.id);
  }

  let openConcertinaItemIndex = 0;
  function openConcertinaItem(index) {
    console.log(index);
  }

  export let disabled = true; 



  // Products with a single variant need the selectedPurchasable to be populated.
  let selectedPurchasable = null;
  if (productToShow.purchasables.length === 1) {
    selectedPurchasable = productToShow.purchasables[0];
  }

  function addToCart() {
    // For multi-variant products, we disable the Add To Cart button until a purchasable has been selected.
    if (selectedPurchasable) {
      cartService.addItem({ product: { id: productToShow.id, title: productToShow.title }, purchasable: selectedPurchasable });
    }
  }

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
  width: 80%; display: block;
  margin: 0; padding: 3px;
  max-height: 80vh;
  background: white;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: auto;
}


@media (min-width: 768px) {
  .modal {
    width: 80rem;
    left: calc(50% - 40rem);
  }
}


section {
}

.image {
  width: 100%;
  height: 25rem;
  margin-bottom: 2rem;
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
  text-align: left;
  padding: 0 2rem;
  margin: auto;
}

  h1 {
    padding: 1rem 0 1rem;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em; text-align: left;
    color: #000066; text-transform: uppercase; letter-spacing: 0;
  }

  p {
    padding-bottom: 1rem;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
  }

h2 {
      font-family: "Lato", sans-serif; font-weight: 700;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
  margin: 0; padding: 1rem 0 1rem; text-transform: none;
}

h2:before {
  display: block; float: left;
  content: "";
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px; margin-right: 0.5rem; margin-top: 0.45rem;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.concertina-item.closed h2:before {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

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
    font-size: 16px;
  }


.concertina {}
.concertina-item {
  border-top: 1px solid #000;
}
.concertina-item.closed .concertina-item__body {
  display: none;
}

  footer p {
    display: block;
    height: 2.5rem; width: 100%;
    padding: 0.5rem; margin-bottom: 1rem;
    font-size: 1.25rem;

    border-radius: 5px;
  }
  footer {  
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  footer select {
    display: block; min-width: 30rem;
    height: 4rem; line-height: 4rem; width: 100%;
    padding: 0.5rem;
    font-size: 1.25rem;

      font-family: "Lato", sans-serif;
      font-size: 1.6rem; text-transform: none;
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
    <p class="oneliner">{productToShow.oneLiner}</p>
    {#if productToShow.hasMemberPrice}<p class="memberprice">Discount available when purchased with social membership.</p>{/if}

    {#if productToShow.sale}
      <p class="sale"><span class="strike">{productToShow.sale}</span><br><span class="note">* sale prices shown</span></p>
    {/if}

    <div class="concertina">
      {#each productToShow.description as concertinaItem, index}
        <div class="concertina-item {index != openConcertinaItemIndex ? 'closed' : ''}">
          <h2 on:click="{() => openConcertinaItemIndex = index}">{concertinaItem.heading}</h2>
          <div class="concertina-item__body">{@html concertinaItem.body}</div>
        </div>
      {/each}
    </div>

  </div>

  <footer>

    <Button
      type="button"
      text="Close"
      style="outline"
      on:click="{ () => dispatch('close') }"
    />
<!--
      {#if productToShow.purchasables.length > 1}
        <select disabled="{disabled}" bind:value="{selectedPurchasable}">
          <option>Select...</option>
          {#each productToShow.purchasables as purchasable}
            <option value="{purchasable}" disabled="{purchasable.disabled}">{purchasable.title} £{purchasable.price.toFixed(2)}</option>
          {/each}
        </select>
      {:else}
        <p class="price">£{productToShow.purchasables[0].price.toFixed(2)}</p>
      {/if}


    {#if productToShow.wholeProductDisabled}
      <Button
        type="button"
        text="Unavailable"
        disabled=true
        on:click="{ () => dispatch('showRequiredProducts', id) }"
      />
    {:else if !selectedPurchasable}
      <Button
        type="button"
        text="Add to cart"
        disabled=true
        on:click="{addToCart}"
      />
    {:else}
      <Button
        type="button"
        style="{productToShow.isInCart ? '' : 'success'}"
        text="{productToShow.isInCart ? 'Remove' : 'Add to cart'}"
        on:click="{productToShow.isInCart ? removeFromCart : addToCart}"
      />
    {/if}
-->

  </footer>
</section>

</div>