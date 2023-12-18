<script lang="ts">
	import { onMount } from 'svelte';
    let remoteAppTarget:any, fnelment;
    let initFederation,loadRemoteModule;
    let suma = 0; 
    onMount(()=>{
        (async()=>{
            loadRemoteModule = await import ('@softarc/native-federation').then((m) => m.loadRemoteModule);
            initFederation = await import ('@softarc/native-federation').then((m) => m.initFederation);
            await initFederation({"remote": "http://localhost:4173/remoteEntry.json" });
            const app = await loadRemoteModule({
                remoteName: "remote",
                exposedModule: "./header",
            });
            new app.default({ 
                target: remoteAppTarget,
                props: { answer: 'Hola aqui estoy' }
            }); 
            // initFederation.then(async(fn) => {
            //     fn({"remote": "http://localhost:4173/remoteEntry.json" }).then(async(e) => {
            //         Object.values(e.imports).forEach(async(element) => {
            //             //@ts-ignore
            //             await importShim(element);
            //             /* importShim(element).then((m) => {
            //                 new m.default({ target: remoteAppTarget, props: { answer: 'Juan', count:suma } });
                            
            //             }); */
            //         });
            //     });
            // });

            /* loadRemoteModule.then(async(fn) => {
                await fn({
                    remoteName: "remote",
                    exposedModule: "./header",
                }).then(async(componet) => {
                    await new componet.default({ target: remoteAppTarget, props: { answer: 'Jlozano' } });
                });
            }); */
        })()
    });

    //import {__federation_method_setRemote, __federation_method_getRemote, __federation_method_unwrapDefault} from 'virtual:__federation__'
</script> 
 <div bind:this={remoteAppTarget} /> 
<button on:click={print}>imprimir</button>
<h1>Welcome to HOST</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    