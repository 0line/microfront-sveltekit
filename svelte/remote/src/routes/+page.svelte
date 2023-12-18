<script>
  import { onMount } from "svelte";

  import Header from '$lib/components/Header.svelte';

      let header;
     onMount(async () => {
            (async () => {
            const initFederation = await import ('@softarc/native-federation').then((m) => m.initFederation);
            initFederation();  
        })();
      });
      
     
      
</script>
<Header answer={"local"}/>
<h1>Welcome to SvelteKit con llamada</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
