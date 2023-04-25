<script lang="ts">
	import { onMount } from 'svelte';
	import { catImages } from '$lib/catImages';
	import { capyImages } from '$lib/capyImages';
	import { puluImages } from '$lib/puluImages';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import barkmp3 from "$lib/assets/bark.mp3"
	import meowmp3 from "$lib/assets/meow.mp3"
	import pullupmp3 from "$lib/assets/pullup.mp3"
	import { fly } from 'svelte/transition';

	class Animal {
		constructor(
			public species: string,
			public name: string,
			public age: number,
			public image: string
		) {}
	}

	class Cat extends Animal {
		constructor(
			public name: string,
			public age: number,
			public color: string,
			public image: string
		) {
			super('Cat', name, age, image);
		}

		meow() {
			console.log('Meow!');
			toastStore.trigger(meow);
			const audio = new Audio(meowmp3);
			audio.volume = 0.2;
  			audio.play();
		}
	}

	class Dog extends Animal {
		constructor(
			public name: string,
			public age: number,
			public breed: string,
			public image: string
		) {
			super('Dog', name, age, image);
		}

		bark() {
			console.log('Woof!');
			toastStore.trigger(bark);
			  const audio = new Audio(barkmp3);
			  audio.volume = 0.2;
  			  audio.play();
		}
	}

	class Capybara extends Animal {
		constructor(
			public name: string,
			public age: number,
			public size: string,
			public image: string
		) {
			super('Capybara', name, age, image);
		}

		pullup() {
			console.log('ok i pull up');
			toastStore.trigger(pullup);
			const audio = new Audio(pullupmp3);
			audio.volume = 0.1;
  			audio.play();
		}
	}
	class Birdy extends Animal {
		constructor(
			public name: string,
			public age: number,
			public image: string
		) {
			super("Pulu",name,age,image)
		}
		//50/50 to get hit by bird poop
		shitOnYou(){
			const random : number = Math.random();
			const alert = Math.round(random) ? "Dodged 💩" : "got hit by 💩"
			const poop: ToastSettings = {
			message: alert}
			toastStore.trigger(poop);
		}
	}

	//säiliöluokka eläimille
	class Animals {
		private animals: Animal[] = [];

		addAnimal(animal: Animal) {
			this.animals.push(animal);
		}

		removeAnimal(name: string) {
			this.animals = this.animals.filter((animal) => animal.name !== name);
		}

		getAnimal(name: string): Animal | undefined {
			return this.animals.find((animal) => animal.name === name);
		}

		getAllAnimals(): Animal[] {
			return this.animals;
		}
	}

	// Käyttöesimerkki
	// Luo Animals-kokoelma ja lisää uusia eläimiä
	const animals = new Animals();
	const cat = new Cat('Miu', 3, 'orange', 'https://cdn2.thecatapi.com/images/ac0.jpg');
	const dog = new Dog(
		'Buddy',
		5,
		'Poodle',
		'https://images.dog.ceo/breeds/poodle-miniature/n02113712_2379.jpg'
	);
	const capybara = new Capybara(
		'Capi',
		2,
		'medium',
		'https://cdn.pixabay.com/photo/2016/10/11/16/14/capybara-1732020__480.jpg'
	);
	const pulu = new Birdy(
		'Viola',
		5,
		'https://www.kaijuli.fi/images/artikkelit/neitokakadu-ruokinta.jpg'
	);
	animals.addAnimal(cat);
	animals.addAnimal(dog);
	animals.addAnimal(capybara);
	animals.addAnimal(pulu)

	let name: string = '';
	//image api was not working for cat/capy :(
	 function addCat() {
		const colors = ['orange', 'black', 'white', 'spotted'];
		const age = Math.floor(Math.random() * 20);
		const color = colors[Math.floor(Math.random() * 3)];
		const img = catImages[Math.floor(Math.random() * catImages.length)];
		let catName = ""
		if(name.length <= 2 ){
			catName = "catto"+catCounter
			catCounter++
		} else {
			catName = name
		}
		const newCat = new Cat(catName, age, color, img);
		animals.addAnimal(newCat);
		printAnimals();
		name = '';
	}
	function addPulu(){
		const age = Math.floor(Math.random() * 20);
		const img = puluImages[Math.floor(Math.random() * puluImages.length)];
		let puluName = ""
		if(name.length <= 2 ){
			puluName = "Birdy"+puluCounter
			puluCounter++
		} else {
			puluName = name
		}
		const newPulu = new Birdy(puluName, age, img);
		animals.addAnimal(newPulu);
		printAnimals();
		name = '';
	}
	function addCaby() {
		const sizes = ['smoll', 'medium', 'big', 'chonky'];
		const age = Math.floor(Math.random() * 20);
		const size = sizes[Math.floor(Math.random() * 3)];
		const img = capyImages[Math.floor(Math.random() * capyImages.length)];
		let cabyName = ""
		if(name.length <= 2 ){
			cabyName = "cabby"+cabyCounter
			cabyCounter++
		} else {
			cabyName = name
		}
		const newCaby = new Capybara(cabyName, age, size, img);
		animals.addAnimal(newCaby);
		printAnimals();
		name = '';
	}

	async function addDog() {
		loading = true
		const breeds = ['Dingo', 'Eskimo', 'Samoyed', 'Akita'];
		const age = Math.floor(Math.random() * 20);
		const breed = breeds[Math.floor(Math.random() * 3)];
		const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
		const obj = await response.json();
		const img = obj.message;
		let dogName = ""
		if(name.length <= 2 ){
			dogName = "doggo"+dogCounter
			dogCounter++
		} else {
			dogName = name
		}
		const newDog = new Dog(dogName, age, breed, img);
		animals.addAnimal(newDog);
		printAnimals();
		name = '';
		loading = false;
		
	}

	let animalToShow : any;
	let currentIndex : any;
	// Hae eläin nimen perusteella ja tulosta tiedot
	function showAnimal(animalName : string,index : number){
	animalToShow = animals.getAnimal(animalName)
	//toggle jos painaa samaa kuvaa 2 kertaa
	if(currentIndex === index){
		animalToShow = false;
		currentIndex = null;
	} else currentIndex = index
}
	// Poista eläin
	//animals.removeAnimal("Buddy");
	function deleteAnimal(name : string){
		animals.removeAnimal(name)
		printAnimals()
		animalToShow = false;
	}

	// Tulosta kaikki eläimet
	let allAnimals: any;
	function printAnimals() {
		allAnimals = animals.getAllAnimals();
	}
	//sivun käynnistuksessä päivittää allAnimals ja hakee ekan eläimen
	onMount(async () => {
		allAnimals = animals.getAllAnimals();
		const namesArr : string[] = ["Miu","Buddy","Capi","Viola"]
		const firstSelect = namesArr[Math.floor(Math.random()* namesArr.length) ]
		animalToShow = animals.getAnimal(firstSelect)
	});
	let dogCounter = 1;
	let catCounter = 1;
	let cabyCounter = 1;
	let puluCounter = 1;


	// alert messages
	const meow: ToastSettings = {
	message: 'Meow!!!',
	};
	const bark: ToastSettings = {
		message: "WUF!!!"
	};
	const pullup: ToastSettings = {
		message: "OK I pull up!"
	}
let loading : boolean = false


</script>

<header class="flex justify-center gap-1 align-middle py-10">
	<div><p class="ml-5">name for new animal:</p><input class="text-black mx-2 rounded-lg" bind:value={name} type="text" placeholder="Derp" /></div>
	<div class="flex flex-col justify-center align-middle">
		<p class="smalltext">press buttons to add new animal</p>
<div class="flex gap-2 justify-center align-middle">
	<button on:click={addCaby}>Caby</button>
	<button on:click={addCat}>Cat</button>
	<button on:click={addDog}>Dog</button>
	<button on:click={addPulu}>Pulu</button>
</div>
	</div>
</header>

<div class="text-center">
	<a href="sources"><h2>Go to source codes page</h2></a>
	<p>click animals to show info</p>
	<p class="scale-50 pb-3">You can break website by trying to enter 2 same name animals but i cba fixing it*</p>
</div>

<section class="grid-container">
	{#if allAnimals}
		{#each allAnimals as animal, index (animal.name)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div in:fly="{{x:200, duration: 2000}}" out:fly="{{y:200, duration: 2000}}" on:click={() => showAnimal(animal.name,index)} class="hover:scale-110 cursor-pointer">
				{animal.name}
				<img src={animal.image} alt="animal" />
			</div>
		{/each}
	{/if}
	{#if loading}
	<div>
		loading dog img. coming from API so might be slow 😕
	</div>
	{/if}
</section>


{#if animalToShow}
<div class="flex justify-center gap-2 items-center flex-col">
	<p>Name: {animalToShow.name}</p>
	<p>Species: {animalToShow.species}</p>
	<p>Age: {animalToShow.age}</p>
	{#if animalToShow.species === "Cat"}
	<p>color: {animalToShow.color}</p>
	<button on:click={() =>animalToShow.meow()}>meow</button>
	{/if}
	{#if animalToShow.species === "Dog"}
	<p>breed: {animalToShow.breed}</p>
	<button on:click={() =>animalToShow.bark()}>bark</button>
	{/if}
	{#if animalToShow.species === "Capybara"}
	<p>size: {animalToShow.size}</p>
	<button on:click={() =>animalToShow.pullup()}>pull up</button>
	{/if}
	{#if animalToShow.species === "Pulu"}
	<button on:click={() =>animalToShow.shitOnYou()}>💩</button>
	{/if}
	<button on:click={() => deleteAnimal(animalToShow.name)}>release ಠ_ಠ</button>
	<img class="rounded" src={animalToShow.image} alt="big">
</div>
{/if}



<Toast />
<svelte:head>
	<title>Animals OOP</title>
</svelte:head>
<style>
	.grid-container {
		padding: 0.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 0.2rem;
	}

	.grid-container > div {
		transition: transform 1s ;
		width: 100%;
		object-fit: cover;
		height: 25vh;
		border: 1px solid rgba(0, 0, 0, 0.8);
		padding: 0.5rem;
		font-size: 30px;
		text-align: center;
		border-radius: 10px;
		overflow: hidden;
	}
	.smalltext{
		font-size: 0.7rem;
	}
	button {
color:black;
 padding: 5px;
 border-radius: 50px;
 border: 0;
 background-color: white;
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;
}

button:hover {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
}
button:focus{
	transition: transform 0.5s ease-in-out;
	scale: 1.1;
}

@media(max-width: 500px){
	button{
		padding : 2 4px;
		font-size: 0.75rem;
	}
}

</style>
