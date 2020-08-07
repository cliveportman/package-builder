<script>

  import { cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  export let id;
	export let title;
	export let imageUrl;
  export let code;
  export let isDiscountApplied = false;

  function applyDiscount() {
    //cartService.addItem({ product: { id: id, title: title }, purchasable: selectedPurchasable });
  }

  function removeDiscount() {
    //cartService.removeItem(id);
  }

</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 0.5rem;
    width: calc(50% - 1rem);  
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
  }

  article.applied {
    background: green;
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

<article class="{isDiscountApplied ? 'applied' : ''}">

	<div class="image">
		<img src="{imageUrl}" alt="{title}">
	</div>

	<div class="content">

    <div class="text">
      <h1>{title}</h1>
  		<p>{code}</p>
    </div>

  	<footer>

      <div class="actions">
        <Button
          type="button"
          text="{isDiscountApplied ? 'Remove discount' : 'Apply discount'}"
          on:click="{isDiscountApplied ? removeDiscount : applyDiscount}"
        />
      </div>
  	</footer>


  </div>
</article>