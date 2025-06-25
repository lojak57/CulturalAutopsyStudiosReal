import { F as store_get, G as ensure_array_like, I as attr, J as attr_class, K as escape_html, M as stringify, N as unsubscribe_stores, E as pop, C as push, O as slot } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPath;
  const navItems = [
    { label: "Index", href: "/" },
    { label: "Archive", href: "/episodes" },
    { label: "Tape", href: "/blog" },
    {
      label: "Exit",
      href: "/manifesto",
      special: true
    }
  ];
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<nav class="bg-tape-gray-900/95 backdrop-blur-sm border-b-2 border-vcr-blue-600/30 sticky top-0 z-50 svelte-1y1o6be"><div class="max-w-7xl mx-auto px-4 sm:px-6"><div class="flex justify-between items-center h-14 sm:h-16"><div class="flex items-center"><a href="/" class="flex items-center group"><div class="w-10 h-10 lg:w-12 lg:h-12 bg-vcr-blue-600/20 border border-vcr-blue-400 flex items-center justify-center font-mono text-vcr-blue-400 mr-3 group-hover:bg-vcr-blue-600/30 transition-colors">CAS</div> <span class="hidden sm:block font-mono text-paper-white text-sm lg:text-base">CULTURAL_AUTOPSY_STUDIOS</span></a></div> <div class="hidden md:flex items-center space-x-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a${attr("href", item.href)}${attr_class(`font-mono text-sm lg:text-base transition-all duration-200 ${stringify(currentPath === item.href ? "text-postit-yellow-500" : item.special ? "text-trauma-red-400 hover:text-trauma-red-300" : "text-tape-gray-400 hover:text-paper-white")}`)}>[${escape_html(item.label)}]</a>`;
  }
  $$payload.out += `<!--]--></div> <div class="hidden md:flex items-center"><a href="/contact" class="bg-transparent border-2 border-postit-yellow-500 text-postit-yellow-500 px-4 py-2 lg:px-6 lg:py-2 font-mono text-sm lg:text-base hover:bg-postit-yellow-500 hover:text-tape-gray-900 transition-all duration-200">[Join_Autopsy]</a></div> <button class="md:hidden p-1.5 sm:p-2" aria-label="Toggle menu"><div class="space-y-1"><div${attr_class(`w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 ${stringify("")}`)}></div> <div${attr_class(`w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 ${stringify("")}`)}></div> <div${attr_class(`w-5 h-0.5 bg-vcr-blue-400 transition-all duration-200 ${stringify("")}`)}></div></div></button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vcr-blue-400/50 to-transparent animate-pulse"></div></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<div class="min-h-screen bg-paper-white flex flex-col cursor-retro">`;
  Navigation($$payload);
  $$payload.out += `<!----> <main class="flex-grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <div id="footer-trigger" class="h-1"></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _layout as default
};
