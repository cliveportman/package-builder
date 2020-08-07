<script>

// SIMPLE HEADER UNIT 
import Header from "./UI/Header.svelte";

// ADDS THE PRODUCT STORE AND THE ELEMENTS ASSOCIATED WITH THE PRODUCTS
import { deals, products } from './Products/products-store.js';
import ProductsGrid from "./Products/ProductsGrid.svelte";
import DealsGrid from "./Products/DealsGrid.svelte";

// DATA USED FOR MODALS
let modalData = {};

// HANDLES THE PRODUCT INFO MODAL
import ProductInfo from "./Products/ProductInfo.svelte";
let productInfoModal = false;
function showProductInfo(event) {
  modalData.id = event.detail;
  productInfoModal = !productInfoModal;
}

// HANDLES THE PRODUCT REQUIREMENTS MODAL
import ProductRequirements from "./Products/ProductRequirements.svelte";
let productRequirementsModal = false;
function showRequiredProducts(event) {
  modalData.id = event.detail;
  productRequirementsModal = !productRequirementsModal;
}

// DISPLAYS THE CART
import Cart from "./Cart/Cart.svelte";

// SETUP THE TABS
import Tabs from './UI/Tabs.svelte';
let tabItems = [
  //{ label: "Current deals", value: 'deals' },
  { label: "Visa", value: 'visa' },
  { label: "Work", value: 'work' },
  { label: "Social", value: 'social' },
  { label: "Relocation", value: 'relocation' },
  { label: "Tours", value: 'tours' }
];
let currentTab;

</script>






<style>
	.page {
	  	width: 100%;
	  	display: grid;
	  	grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
	  	.page {
	    	grid-template-columns: auto 20rem;
	  	}
	}

	.right {
	}

	main {
		position: relative;
	}
</style>






<div class="page">

	<div class="left">

    <Header />

    <Tabs bind:activeTabValue={currentTab} items={tabItems} />

    <!--{#if currentTab === 'deals'}
      <h1>Available Deals</h1>
      <DealsGrid deals="{$deals}" />
    {/if}-->

    {#if currentTab === 'visa'}
      <h1>Available Visa products</h1>
      <ProductsGrid products="{$products.visas}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
    {/if}

    {#if currentTab === 'work'}
      <h1>Available Work products</h1>
      <ProductsGrid products="{$products.works}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
    {/if}

    {#if currentTab === 'social'}
      <h1>Available Social products</h1>
      <ProductsGrid products="{$products.socials}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
    {/if} 

    {#if currentTab === 'relocation'}
      <h1>Available Relocation products</h1>
      <ProductsGrid products="{$products.relocations}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
    {/if} 

    {#if currentTab === 'tours'}
      <h1>Available Tours products</h1>
      <ProductsGrid products="{$products.tours}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
    {/if}    

    {#if productInfoModal}
      <ProductInfo id="{modalData.id}" on:close="{showProductInfo}" />
    {/if}   

    {#if productRequirementsModal}
      <ProductRequirements id="{modalData.id}" on:close="{showRequiredProducts}" />
    {/if}

  </div>

	<div class="right">
		<Cart />
	</div>

</div>