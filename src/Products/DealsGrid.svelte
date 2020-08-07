<script>

	import DealItem from "./DealItem.svelte";

	export let deals;

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
	{#each deals as deal}
		<DealItem
			id="{deal.id}"
			title="{deal.title}"
			imageUrl="{deal.imageUrl}"
			code="{deal.code}"
  			isDiscountApplied="{deal.isDiscountApplied}"
		/>
	{/each}
</section>