import { c as create_ssr_component, a as subscribe, f as createEventDispatcher, e as escape, v as validate_component, b as each, d as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { s as storeHighlightJs } from "../../../chunks/stores.js";
const cBase = "overflow-hidden shadow";
const cHeader = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";
function languageFormatter(lang) {
  if (lang === "js")
    return "javascript";
  if (lang === "ts")
    return "typescript";
  return lang;
}
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $storeHighlightJs, $$unsubscribe_storeHighlightJs;
  $$unsubscribe_storeHighlightJs = subscribe(storeHighlightJs, (value) => $storeHighlightJs = value);
  createEventDispatcher();
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { background = "bg-neutral-900/90" } = $$props;
  let { blur = "" } = $$props;
  let { text = "text-sm" } = $$props;
  let { color = "text-white" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow" } = $$props;
  let { button = "btn btn-sm variant-soft !text-white" } = $$props;
  let { buttonLabel = "Copy" } = $$props;
  let { buttonCopied = "👍" } = $$props;
  let formatted = false;
  let displayCode = code;
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.buttonCopied === void 0 && $$bindings.buttonCopied && buttonCopied !== void 0)
    $$bindings.buttonCopied(buttonCopied);
  {
    if ($storeHighlightJs !== void 0) {
      displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
      formatted = true;
    }
  }
  classesBase = `${cBase} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${$$props.class ?? ""}`;
  $$unsubscribe_storeHighlightJs();
  return `
${language && code ? `<div class="${"code-block " + escape(classesBase, true)}" data-testid="code-block">
	<header class="${"code-block-header " + escape(cHeader, true)}">
		<span class="code-block-language">${escape(languageFormatter(language))}</span>
		
		<button class="${"code-block-btn " + escape(button, true)}">${escape(buttonLabel)}</button></header>
	
	<pre class="${"code-block-pre " + escape(cPre, true)}"><code class="${"code-block-code language-" + escape(language, true)}">${formatted ? `<!-- HTML_TAG_START -->${displayCode}<!-- HTML_TAG_END -->` : `${escape(code.trim())}`}</code></pre></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes = ["Cat", "Dog", "Capy", "Pulu", "ContainerClass"];
  return `<section class="flex flex-col justify-center items-center gap-5"><a href="/"><h1 class="text-center py-5">Back</h1></a>
    <p>or find complete source code in my <a href="https://github.com/NikoJunttila/OOP-with-TS">github</a></p>
    ${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "ts",
      code: `class Animal {
		constructor(
			public species: string,
			public name: string,
			public age: number,
			public image: string
		) {}
	}`
    },
    {},
    {}
  )}
	<select class="text-black">${each(classes, (luokka, index) => {
    return `<option${add_attribute("value", index, 0)}>${escape(luokka)}
			</option>`;
  })}</select>
    ${``}
    ${``}
    ${``}
    ${``}
    ${``}</section>`;
});
export {
  Page as default
};
