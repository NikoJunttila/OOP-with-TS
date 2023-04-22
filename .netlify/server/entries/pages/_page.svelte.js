import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function handleAutoHide(toast) {
  if (toast.autohide === true) {
    return setTimeout(() => {
      toastStore.close(toast.id);
    }, toast.timeout);
  }
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    /** Add a new toast to the queue. */
    trigger: (toast) => update((tStore) => {
      const id = randomUUID();
      if (toast && toast.callback)
        toast.callback({ id, status: "queued" });
      const tMerged = { ...toastDefaults, ...toast, id };
      tMerged.timeoutId = handleAutoHide(tMerged);
      tStore.push(tMerged);
      return tStore;
    }),
    /** Remove first toast in queue */
    close: (id) => update((tStore) => {
      if (tStore.length > 0) {
        const index = tStore.findIndex((t) => t.id === id);
        const selectedToast = tStore[index];
        if (selectedToast) {
          if (selectedToast.callback)
            selectedToast.callback({ id, status: "closed" });
          if (selectedToast.timeoutId)
            clearTimeout(selectedToast.timeoutId);
          tStore.splice(index, 1);
        }
      }
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
const toastStore = toastService();
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
const cSnackbar = "flex flex-col space-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const cToastActions = "flex items-center space-x-2";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesToast;
  let filteredToasts;
  let $toastStore, $$unsubscribe_toastStore;
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { duration = 150 } = $$props;
  let { background = "variant-filled-secondary" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { zIndex = "z-[888]" } = $$props;
  let { buttonAction = "btn variant-filled" } = $$props;
  let { buttonDismiss = "btn-icon btn-icon-sm variant-filled" } = $$props;
  let { buttonDismissLabel = "✕" } = $$props;
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0)
    $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0)
    $$bindings.buttonDismiss(buttonDismiss);
  if ($$props.buttonDismissLabel === void 0 && $$bindings.buttonDismissLabel && buttonDismissLabel !== void 0)
    $$bindings.buttonDismissLabel(buttonDismissLabel);
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from($toastStore).slice(0, max);
  $$unsubscribe_toastStore();
  return `${$toastStore.length ? `
	<div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="snackbar-wrapper">
		<div class="${"snackbar " + escape(classesSnackbar, true)}">${each(filteredToasts, (t, i) => {
    return `<div>
					<div class="${"toast " + escape(classesToast, true) + " " + escape(t.background ?? background, true) + " " + escape(t.classes, true)}" role="alert" aria-live="polite" data-testid="toast"><div class="text-base"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div>
						<div class="${"toast-actions " + escape(cToastActions, true)}">${t.action ? `<button${add_attribute("class", buttonAction, 0)}><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``}
							<button${add_attribute("class", buttonDismiss, 0)}>${escape(buttonDismissLabel)}</button>
						</div></div>
				</div>`;
  })}</div></div>` : ``}`;
});
const barkmp3 = "/_app/immutable/assets/bark.513dd513.mp3";
const meowmp3 = "/_app/immutable/assets/meow.ec4fe753.mp3";
const pullupmp3 = "/_app/immutable/assets/pullup.0a524156.mp3";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-14m7nrs.svelte-14m7nrs{padding:0.5rem;display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:0.2rem}.grid-container.svelte-14m7nrs>div.svelte-14m7nrs{transition:transform 0.5s ease-in-out;width:100%;object-fit:cover;height:25vh;border:1px solid rgba(0, 0, 0, 0.8);padding:0.5rem;font-size:30px;text-align:center;border-radius:10px;overflow:hidden}button.svelte-14m7nrs.svelte-14m7nrs{color:black;padding:5px;border-radius:50px;border:0;background-color:white;box-shadow:rgb(0 0 0 / 5%) 0 0 8px;letter-spacing:1.5px;text-transform:uppercase;font-size:15px;transition:all .5s ease}button.svelte-14m7nrs.svelte-14m7nrs:hover{letter-spacing:3px;background-color:hsl(261deg 80% 48%);color:hsl(0, 0%, 100%);box-shadow:rgb(93 24 220) 0px 7px 29px 0px}button.svelte-14m7nrs.svelte-14m7nrs:focus{transition:transform 0.5s ease-in-out;scale:1.1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  class Animal {
    constructor(species, name2, age, image) {
      this.species = species;
      this.name = name2;
      this.age = age;
      this.image = image;
    }
  }
  class Cat extends Animal {
    constructor(name2, age, color, image) {
      super("Cat", name2, age, image);
      this.name = name2;
      this.age = age;
      this.color = color;
      this.image = image;
    }
    meow() {
      console.log("Meow!");
      toastStore.trigger(meow);
      const audio = new Audio(meowmp3);
      audio.play();
    }
  }
  class Dog extends Animal {
    constructor(name2, age, breed, image) {
      super("Dog", name2, age, image);
      this.name = name2;
      this.age = age;
      this.breed = breed;
      this.image = image;
    }
    bark() {
      console.log("Woof!");
      toastStore.trigger(bark);
      const audio = new Audio(barkmp3);
      audio.play();
    }
  }
  class Capybara extends Animal {
    constructor(name2, age, size, image) {
      super("Capybara", name2, age, image);
      this.name = name2;
      this.age = age;
      this.size = size;
      this.image = image;
    }
    pullup() {
      console.log("ok i pull up");
      toastStore.trigger(pullup);
      const audio = new Audio(pullupmp3);
      audio.play();
    }
  }
  class Birdy extends Animal {
    constructor(name2, age, image) {
      super("Pulu", name2, age, image);
      this.name = name2;
      this.age = age;
      this.image = image;
    }
    //50/50 to get hit by bird poop
    shitOnYou() {
      const random = Math.random();
      const alert = Math.round(random) ? "Dodged 💩" : "got hit by 💩";
      const poop = { message: alert };
      toastStore.trigger(poop);
    }
  }
  class Animals {
    animals = [];
    addAnimal(animal) {
      this.animals.push(animal);
    }
    removeAnimal(name2) {
      this.animals = this.animals.filter((animal) => animal.name !== name2);
    }
    getAnimal(name2) {
      return this.animals.find((animal) => animal.name === name2);
    }
    getAllAnimals() {
      return this.animals;
    }
  }
  const animals = new Animals();
  const cat = new Cat("Miu", 3, "orange", "https://cdn2.thecatapi.com/images/ac0.jpg");
  const dog = new Dog("Buddy", 5, "Poodle", "https://images.dog.ceo/breeds/poodle-miniature/n02113712_2379.jpg");
  const capybara = new Capybara("Capi", 2, "medium", "https://cdn.pixabay.com/photo/2016/10/11/16/14/capybara-1732020__480.jpg");
  const pulu = new Birdy("Viola", 5, "https://cdn.discordapp.com/attachments/402846336799473669/1099344431934603346/IMG-20230406-WA0001.jpg");
  animals.addAnimal(cat);
  animals.addAnimal(dog);
  animals.addAnimal(capybara);
  animals.addAnimal(pulu);
  let name = "";
  const meow = { message: "Meow!!!" };
  const bark = { message: "WUF!!!" };
  const pullup = { message: "OK I pull up!" };
  $$result.css.add(css);
  return `<header class="flex gap-4 justify-center align-middle py-10"><div>name for new animal:<input class="text-black mx-2 rounded-lg" type="text" placeholder="Derp"${add_attribute("value", name, 0)}></div>
	<span>Add: </span>
	<button class="svelte-14m7nrs">Caby</button>
	<button class="svelte-14m7nrs">Cat</button>
	<button class="svelte-14m7nrs">Dog</button>
	<button class="svelte-14m7nrs">Pulu</button></header>
<div class="text-center"><a href="sources"><h2>Go to source codes page</h2></a>
	<p class="pb-3">click animals to show info</p></div>

<section class="grid-container svelte-14m7nrs">${``}</section>
${``}
${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
