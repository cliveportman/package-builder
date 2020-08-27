<script>
  export let type = 'button';
  export let text;
  export let href = null;
  export let style = null;
  export let disabled = false;

</script>

<style>
  button,
a {
  margin: 0 0.5rem;
  font: inherit;
  border: 1px solid #000066;
  background: #000066;
  padding: 1rem 1rem;
  color: white;
  border-radius: 2px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-decoration: none;
  

      font-family: "din-2014", sans-serif; font-weight: 700;
      font-size: 1.6rem; line-height: 1.2em; text-transform: uppercase;
}

button:focus {
  outline: none;
}

button:hover,
button:active,
a:hover,
a:active {
  background: #000066;
}

button.disabled,
button.disabled:hover,
button.disabled:active {
  opacity: 0.1;
  box-shadow: none;
}

.close {
  width: 10rem;
}

.success {
  background: #01a129;
  border-color: #01a129;
}

.success:hover,
.success:active {
  background: #1ac745;
  border-color: #1ac745;
}

.outline {
  background: #fc0;
  border-color: #fc0;
  color: #fff;
  box-shadow: none;
}

.outline:hover,
.outline:active {
  background: #ffc7de;
  box-shadow: none;
}

.outline:disabled,
.outline:disabled:hover,
.outline:disabled:active {
  background: transparent;
  color: #ccc;
}

.outline.success {
  border-color: #01a129;
  color: #01a129;
}

.outline.success:hover,
.outline.success:active {
  background: #c2ffd1;
}

</style>


{#if type === 'link'}
  <a href="{href}" class="{style}">{text}</a>
{:else}
  <button type="{type}" class="{style} {disabled ? 'disabled' : ''} {text == 'Close' ? 'close' : ''}"  on:click>{text}</button>
{/if}