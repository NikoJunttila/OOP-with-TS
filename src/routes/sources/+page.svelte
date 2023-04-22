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
        "Whitestar UML chart",
        "Use chart"
    ]
 let selected : any;



    </script>

<section class="flex flex-col justify-center items-center gap-5 pb-5">
    <a href="/"><h1 class="text-center py-3">Back</h1></a>
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
    <p>Here we have cat class which takes params: name,age,color,image</p>
    <p>it also has function "Meow" which gives alert and meow sound</p>
    <Cat />
    {/if}
    {#if selected === 1}
    <p>Here we have dog class which takes params: name,age,breed,image</p>
    <p>it also has function "Bark" which gives alert and WUF sound</p>
    <Dog />
    {/if}
    {#if selected === 2}
    <p>Capy has pullup function that makes capy pull up</p>
    <Capy />
    {/if}
    {#if selected === 3}
    <Pulu />
    {/if}
    {#if selected === 4}
    <ContainerClass />
    {/if}
    {#if selected === 5}
    <img src="https://cdn.discordapp.com/attachments/402846336799473669/1099410121811038278/mlm.png" alt="uml">
    {/if}
    {#if selected === 6}
    <img src="https://i.imgur.com/9sfTgh9.png" alt="usechart" >
    {/if}



    
</section>