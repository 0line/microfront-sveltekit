<script lang="ts">
  import { createEventDispatcher } from "svelte";

    export let count = 0;
    const dispatch = createEventDispatcher();
    const addToCart = () => dispatch('click');
    export let answer = 'hola';
    
  </script>
  <style>
    header {
      background: lightblue;
      padding: 1em;
      font-size: xx-large;
      display: grid;
      grid-template-columns: 90% 10%;
    }
  </style>
  <header>
    <div>Soy un header {answer} remoto</div>
    <div>{count}</div>
    <button on:click={addToCart}>Add to cart</button>
  </header>