<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import Cat from '$lib/classes/Cat.svelte';
    import Dog from '$lib/classes/Dog.svelte';
    import Capy from '$lib/classes/Capy.svelte';
    import Pulu from '$lib/classes/Pulu.svelte';
    import ContainerClass from '$lib/classes/containerClass.svelte';

    let classes : any = [
        "Cat",
        "Dog",
        "Capy",
        "Pulu",
        "ContainerClass",
    ]
 let selected : any;



    </script>

<section class="flex flex-col justify-center items-center gap-5">
    <a href="/"><h1 class="text-center py-5">Back</h1></a>
    <p>or find complete source code in my <a href="https://github.com/NikoJunttila/OOP-with-TS">github</a></p>
    <CodeBlock language="ts" code={`class Animal {
		constructor(
			public species: string,
			public name: string,
			public age: number,
			public image: string
		) {}
	}`}></CodeBlock>
	<select class="text-black" bind:value={selected}>
		{#each classes as luokka,index}
			<option value={index}>
				{luokka}
			</option>
		{/each}
	</select>
    {#if selected === 0}
    <Cat />
    {/if}
    {#if selected === 1}
    <Dog />
    {/if}
    {#if selected === 2}
    <Capy />
    {/if}
    {#if selected === 3}
    <Pulu />
    {/if}
    {#if selected === 4}
    <ContainerClass />
    {/if}



    
</section>