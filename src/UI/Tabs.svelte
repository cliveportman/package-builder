<script>
    import { onMount } from "svelte";

    import Button from "../UI/Button.svelte";
  
    export let items = [];
    export let activeTabValue;
  
    onMount(() => {
      // SET THE DEFAULT TAB AS THE FIRST ONE
      if (Array.isArray(items) && items.length && items[0].value) {
        activeTabValue = items[0].value;
      }
    });
  
    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>
 
  
<style>
    ul {
      padding-left: 0;
      margin-bottom: 20px;
      list-style: none;
    }

    li {
      margin-bottom: 0;
    }

      @media (min-width: 768px) {
        ul {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 2px solid #f36;
        } 

      }

      @media (max-width: 767px) {
        li {
          width: 100%;
          border-bottom: 1px solid #fff;
        } 

      }
  
    span {
      border: 2px solid #000066; border-bottom: none;
      display: block;
      padding: 1rem 2rem;
      cursor: pointer;

      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; text-transform: uppercase;

      background: #000066; color: #fff;
    }
  
    span:hover {
      background-color: #f36;
      border-color: #f36;
    }
  
    li.active > span {
      color: #fff;
      background-color: #f36;
      border-color: #f36;
    }


a {
  display: block;
  margin: 0 0;
  font: inherit;
  border: 1px solid #01a129; text-align: center;
  background: #01a129;
  padding: 1rem 1rem;
  color: white;
  border-radius: 2px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-decoration: none;
  

      font-family: "Lato", sans-serif; font-weight: 700; letter-spacing: 0.5px;
      font-size: 1.6rem; line-height: 1.2em; text-transform: uppercase;
}
@media (min-width: 1024px) { 
  a {
    display: none;
  }
  }
  </style>
  
  <ul>
    {#if Array.isArray(items)}
      {#each items as item}
        <li class={activeTabValue === item.value ? 'active' : ''}>
          <span on:click={handleClick(item.value)}>{item.label}</span>
        </li>
      {/each}
    {/if}
  </ul>

  <div>
        <a href="#carttop">View cart</a>
      </div>
  