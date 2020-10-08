<script>
  import { createEventDispatcher } from 'svelte';

  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

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
  display: block; width: 80%;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: auto;
}


@media (min-width: 768px) {
  .modal {
    width: 60rem;
    left: calc(50% - 30rem);
  }
}


section {
}


.content {
  text-align: center;
  margin: auto;
}

  h1 {
    padding: 1rem 0 1rem;
    font-family: "Roboto Slab", sans-serif;
    font-weight: 700; font-size: 2rem; line-height: 1.2em;
    color: #000066; text-transform: uppercase; letter-spacing: 0;text-align: left;
  }

  p {
    padding-bottom: 1rem;
      font-family: "Lato", sans-serif; font-weight: 400;
      font-size: 1.6rem; line-height: 1.2em; color: #000;
  }


footer {  
  padding: 1rem 0;
}

</style>

<div class="modal-bg" on:click="{ () => dispatch('close') }"></div>

<div class="modal">

<section>

  <div class="content">
    <h1>COVID-19 UPDATE</h1>
    <p>Text...</p>
  </div>

  <footer>

    <Button
      type="button"
      text="Close"
      style="outline"
      on:click="{ () => dispatch('close') }"
    />

  </footer>
</section>

</div>