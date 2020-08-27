<script>

	import DealItem from "./DealItem.svelte";

	export let deals;

</script>

<style>
	section {
	  margin: 2rem -0.5rem 0;
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
			description="{deal.description}"
			imageUrl="{deal.imageUrl}"
  			isApplied="{deal.isApplied}"
		/>
	{/each}
</section>