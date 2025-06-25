import { K as escape_html, E as pop, C as push, G as ensure_array_like, P as head, I as attr, M as stringify } from "../../chunks/index.js";
import "clsx";
import { S as SITE_CONFIG } from "../../chunks/site.config.js";
/* empty css                                                    */
/* empty css                                              */
function HeroSection($$payload, $$props) {
  push();
  $$payload.out += `<section class="relative min-h-screen bg-tape-gray-900 text-paper-white overflow-hidden svelte-1m48vbj"><div class="absolute inset-0 bg-gradient-to-br from-vcr-blue-950/20 to-transparent animate-vhs-flicker svelte-1m48vbj"></div> <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 svelte-1m48vbj"><div class="w-full max-w-4xl mb-8 svelte-1m48vbj"><button class="w-full aspect-video bg-tape-gray-800 border-2 border-vcr-blue-600 shadow-vhs relative overflow-hidden hover:border-vcr-blue-400 transition-all duration-300 group svelte-1m48vbj"><div class="absolute inset-0 flex items-center justify-center svelte-1m48vbj"><div class="text-center svelte-1m48vbj"><div class="text-6xl mb-4 group-hover:scale-110 transition-transform svelte-1m48vbj">▶</div> <p class="text-vcr-blue-300 font-mono text-sm svelte-1m48vbj">TRAILER_FINAL_v3.mp4</p> <p class="text-tape-gray-400 text-xs mt-2 svelte-1m48vbj">Click to expand • Autoplay: OFF</p></div></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-vcr-blue-600/5 to-transparent bg-[length:100%_4px] animate-pulse pointer-events-none svelte-1m48vbj"></div></button></div> <div class="text-center space-y-6 svelte-1m48vbj"><h1 class="text-6xl md:text-8xl font-mono font-bold tracking-tight animate-glitch svelte-1m48vbj"><span class="text-vcr-blue-400 svelte-1m48vbj">Cultural</span> <br class="svelte-1m48vbj"/> <span class="text-postit-yellow-500 svelte-1m48vbj">Autopsy</span> <br class="svelte-1m48vbj"/> <span class="text-trauma-red-500 svelte-1m48vbj">Studios</span></h1> <p class="text-2xl md:text-3xl font-serif italic text-tape-gray-300 animate-typewriter overflow-hidden whitespace-nowrap mx-auto svelte-1m48vbj">${escape_html(SITE_CONFIG.tagline)}</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12 svelte-1m48vbj"><a href="#avatars" class="px-8 py-4 bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white font-mono text-lg border-2 border-vcr-blue-400 shadow-glitch transition-all duration-200 hover:animate-glitch inline-block text-center svelte-1m48vbj">[Explore the Network]</a> <button class="px-8 py-4 bg-transparent hover:bg-trauma-red-600/20 text-trauma-red-400 font-mono text-lg border-2 border-trauma-red-600 transition-all duration-200 hover:shadow-vhs svelte-1m48vbj">[Watch The Proof]</button></div></div> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 svelte-1m48vbj"><div class="animate-bounce text-tape-gray-400 svelte-1m48vbj"><p class="font-mono text-sm mb-2 svelte-1m48vbj">scroll_down.exe</p> <div class="w-px h-12 bg-vcr-blue-600 mx-auto svelte-1m48vbj"></div></div></div></div> <div class="absolute inset-0 opacity-10 svelte-1m48vbj"><div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.vcr-blue.600)_1px,transparent_1px)] bg-[length:20px_20px] svelte-1m48vbj"></div></div></section>`;
  pop();
}
function AvatarsSection($$payload, $$props) {
  push();
  let hoveredAvatar = null;
  const each_array = ensure_array_like(SITE_CONFIG.avatars);
  $$payload.out += `<section id="avatars" class="py-20 bg-tape-gray-800 text-paper-white"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-16"><h2 class="text-4xl md:text-6xl font-mono text-vcr-blue-400 mb-4">[Our Avatars]</h2> <p class="text-tape-gray-300 font-serif text-lg italic">The voices in the void</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let avatar = each_array[$$index];
    $$payload.out += `<button class="relative group cursor-pointer text-left"><div class="bg-tape-gray-900 border-2 border-vcr-blue-600/30 hover:border-vcr-blue-400 transition-all duration-300 p-6 h-80 flex flex-col justify-between hover:shadow-vhs hover:-translate-y-1"><div class="flex-1 flex items-center justify-center mb-6"><div class="w-24 h-24 bg-vcr-blue-600/20 border border-vcr-blue-400 flex items-center justify-center font-mono text-2xl text-vcr-blue-400">${escape_html(avatar.name.charAt(0))}</div></div> <div class="text-center space-y-3"><h3 class="text-xl font-mono text-postit-yellow-500">${escape_html(avatar.name)}</h3> <p class="text-tape-gray-400 text-sm font-serif italic">${escape_html(avatar.role)}</p> <div class="min-h-[3rem] flex items-center justify-center">`;
    if (hoveredAvatar === avatar.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="text-trauma-red-400 text-sm font-mono transition-opacity duration-300">"${escape_html(avatar.quote)}"</p>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<p class="text-tape-gray-500 text-xs font-mono">[${escape_html(avatar.setting)}]</p>`;
    }
    $$payload.out += `<!--]--></div></div> `;
    if (hoveredAvatar === avatar.name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="absolute inset-0 bg-gradient-to-r from-trauma-red-600/10 to-vcr-blue-600/10 animate-pulse pointer-events-none"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="absolute -right-4 top-1/2 w-8 h-px bg-vcr-blue-600/20 hidden lg:block group-hover:bg-vcr-blue-400/40 transition-colors duration-300"></div></button>`;
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-16"><p class="text-tape-gray-400 font-mono text-sm">> Each avatar carries their own frequency_</p> <p class="text-tape-gray-500 font-mono text-xs mt-2">mouse_hover.enabled = true</p></div></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let loadedSections = {};
  let visibleSections = /* @__PURE__ */ new Set();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(SITE_CONFIG.name)} | ${escape_html(SITE_CONFIG.tagline)}</title>`;
    $$payload2.out += `<meta name="description" content="We make podcasts that feel like diaries, essays that feel like therapy, and memes that feel like memory."/> <meta property="og:title"${attr("content", `${stringify(SITE_CONFIG.name)} | ${stringify(SITE_CONFIG.tagline)}`)}/> <meta property="og:description" content="We make podcasts that feel like diaries, essays that feel like therapy, and memes that feel like memory."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://culturalautopsystudios.com"/> <meta name="twitter:card" content="summary_large_image"/>`;
  });
  HeroSection($$payload);
  $$payload.out += `<!----> `;
  AvatarsSection($$payload);
  $$payload.out += `<!----> <section class="py-20 bg-tape-gray-900 text-paper-white relative overflow-hidden"><div class="absolute inset-0 opacity-10"><div class="absolute inset-0 bg-[linear-gradient(45deg,theme(colors.vcr-blue.600)_25%,transparent_25%,transparent_75%,theme(colors.vcr-blue.600)_75%,theme(colors.vcr-blue.600)),linear-gradient(45deg,theme(colors.vcr-blue.600)_25%,transparent_25%,transparent_75%,theme(colors.vcr-blue.600)_75%,theme(colors.vcr-blue.600))] bg-[length:30px_30px] bg-[position:0_0,15px_15px]"></div></div> <div class="relative z-10 max-w-4xl mx-auto px-6 text-center"><h2 class="text-4xl md:text-6xl font-mono text-postit-yellow-500 mb-8 animate-glitch">[What We Do]</h2> <div class="text-2xl md:text-3xl font-serif italic text-tape-gray-300 space-y-2"><p class="animate-typewriter-1 svelte-10ho4l3">We make podcasts that feel like diaries,</p> <p class="animate-typewriter-2 svelte-10ho4l3">essays that feel like therapy,</p> <p class="animate-typewriter-3 svelte-10ho4l3">and memes that feel like memory.</p></div> <div class="mt-12 text-vcr-blue-400 font-mono text-sm"><p>// distributed through every frequency</p> <p>// archived in perpetuity</p> <p>// remembered forever</p></div></div></section> <div data-section="shows" class="min-h-[50px]">`;
  if (visibleSections.has("shows") && loadedSections.shows) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-10ho4l3"><!---->`;
    loadedSections.shows?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="blog" class="min-h-[50px]">`;
  if (visibleSections.has("blog") && loadedSections.blog) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-10ho4l3"><!---->`;
    loadedSections.blog?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="finalCTA" class="min-h-[50px]">`;
  if (visibleSections.has("finalCTA") && loadedSections.finalCTA) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-10ho4l3"><!---->`;
    loadedSections.finalCTA?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
