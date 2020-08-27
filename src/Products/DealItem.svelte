<script>

  import { cartService } from "../Cart/cart-store.js";

  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let description;
	export let imageUrl;
  export let isApplied = false;

  function toggleOffer() {
    cartService.toggleOfferApplied(id);
  }

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
      width: calc(50% - 1rem);
    } 

  }

  @media (min-width: 1024px) {
    article {
      width: calc(33.3333% - 1rem);
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
    padding: 1rem 0 1rem;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em;
    color: #000066; text-transform: uppercase;
  }

  p {
    padding-bottom: 1rem;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
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
    font-size: 1.25rem; font-family: "Lato", sans-serif;

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

<article class="{isApplied ? 'incart' : ''}">



	<div class="image">
		<img src="{imageUrl}" alt="{title}">
	</div>

	<div class="content">

    <div class="text">
      <h1>{title}</h1>
  		<p>{description ? description : 'Description to go here...'}</p>
    </div>

  	<footer>

      <div class="actions">
        <Button
          type="button"
          style="{isApplied ? '' : 'success'}"
          text="{isApplied ? 'Remove' : 'Use this deal'}"
          on:click="{toggleOffer}"
        />
      </div>
  	</footer>


  </div>
</article>