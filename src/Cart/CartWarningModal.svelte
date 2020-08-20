<script>

  import { onDestroy, createEventDispatcher } from 'svelte';

  import { cartItems, cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  // We're provided the items, with the last one being the selected item
  export let items;
  let selectedItem = items[(items.length - 1)];

  // Remove the selectedItem so we're left with the related items only.
  items.pop();
  let relatedItems = items;

  function removeFromCart() {
    // We can remove multiple items by providing a list of ids.
    let ids = [selectedItem.product.id];
    relatedItems.forEach(item => ids.push(item.product.id));
    cartService.removeMultipleItems(ids);
    cartService.clearRequiredItems();
  }

  function cancelWarningModal() {
    cartService.clearRequiredItems();
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
    width: 30rem;
    left: calc(50% - 15rem);
  }
}


section {
}


.content {
  text-align: center;
  width: 80%;
  margin: auto;
}

p {
  font-size: 1rem; text-align: left;
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

</style>

<div class="modal-bg" on:click="{cancelWarningModal}"></div>

<div class="modal">

<section>

  <div class="content">    
    <p>You've opted to remove the <strong>{selectedItem.product.title}</strong> but the following items require it:</p>
    <p>
      {#each relatedItems as item}
        - {item.product.title}<br>
      {/each}
    </p>
    <p>You can either remove all of these items from the cart or cancel.</p>
  </div>

  <footer>

    <Button
      type="button"
      text="Cancel"
      style="outline"
      on:click="{cancelWarningModal}"
    />

    <Button
      type="button"
      text="Remove items from cart"
      on:click="{removeFromCart}"
    />

  </footer>
</section>

</div>