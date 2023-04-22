import { c as create_ssr_component } from "../../chunks/index2.js";
import hljs from "highlight.js";
import { s as storeHighlightJs } from "../../chunks/stores.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const themeCrimson = "";
const all = "";
const app = "";
const githubDark = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storeHighlightJs.set(hljs);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
