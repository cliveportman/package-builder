<script>

	import ProductItem from "./ProductItem.svelte";

	export let products;

</script>

<style>
	section {
	  padding: 0.5rem;
	}

	@media (min-width: 768px) {
	  section {
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    justify-content: flex-start;
	  }
	}
</style>

<section>
	{#each products as product}
		<ProductItem
			id="{product.id}"
			title="{product.title}"
			description="{product.description}"
			imageUrl="{product.imageUrl}"
			purchasables="{product.purchasables}"
	      	width="{product.width}"
	      	sale="{product.sale}"
	      	hasMemberPrice="{product.hasMemberPrice}"
	      	isInCart="{product.isInCart}"
	      	wholeProductDisabled="{product.wholeProductDisabled}"
  			on:showProductInfo
  			on:showRequiredProducts
		/>
	{/each}
</section>