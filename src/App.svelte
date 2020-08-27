<script>

// SIMPLE HEADER UNIT 
import Header from "./UI/Header.svelte";
import LoadingSpinner from "./UI/LoadingSpinner.svelte";

// ADDS THE PRODUCT STORE AND THE ELEMENTS ASSOCIATED WITH THE PRODUCTS
import { deals, products, productsService } from './Products/products-store.js';
import ProductsGrid from "./Products/ProductsGrid.svelte";
import DealsGrid from "./Products/DealsGrid.svelte";

let isLoading = true;

fetch('https://www.britbound.com/json/products.json')
  .then(
    function(response) {

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {

        setTimeout( () => {
          isLoading = false;
          productsService.setProducts(data);
        }, 1000);
      });

    }
  )
  .catch(function(err) {
    isLoading = false;
    console.log('Fetch Error :-S', err);
  });

fetch('https://www.britbound.com/json/offers.json')
  .then(
    function(response) {

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {

        setTimeout( () => {
          isLoading = false;
          productsService.setDeals(data);
        }, 1000);
      });

    }
  )
  .catch(function(err) {
    isLoading = false;
    console.log('Fetch Error :-S', err);
  });


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
  { label: "Current deals", value: 'deals' },
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
	    	grid-template-columns: auto 30rem;
	  	}
	}

  .left {
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

    {#if isLoading}
      <LoadingSpinner/>
    {:else}

      <Tabs bind:activeTabValue={currentTab} items={tabItems} />

      {#if currentTab === 'deals'}
        <DealsGrid deals="{$deals}" />
      {/if}

      {#if currentTab === 'visa'}
        <ProductsGrid products="{$products.visas}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
      {/if}

      {#if currentTab === 'work'}
        <ProductsGrid products="{$products.works}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
      {/if}

      {#if currentTab === 'social'}
        <ProductsGrid products="{$products.socials}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
      {/if} 

      {#if currentTab === 'relocation'}
        <ProductsGrid products="{$products.relocations}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
      {/if} 

      {#if currentTab === 'tours'}
        <ProductsGrid products="{$products.tours}" on:showProductInfo="{showProductInfo}" on:showRequiredProducts="{showRequiredProducts}" />
      {/if}    

      {#if productInfoModal}
        <ProductInfo id="{modalData.id}" on:close="{showProductInfo}" />
      {/if}   

      {#if productRequirementsModal}
        <ProductRequirements id="{modalData.id}" on:close="{showRequiredProducts}" />
      {/if}

    {/if}

  </div>

	<div class="right">
		<Cart />
	</div>

</div>