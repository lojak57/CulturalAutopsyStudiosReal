import { G as ensure_array_like, P as head, Y as maybe_selected, I as attr, K as escape_html, E as pop, C as push } from "../../../chunks/index.js";
import { S as SITE_CONFIG } from "../../../chunks/site.config.js";
function _page($$payload, $$props) {
  push();
  let filteredEpisodes;
  let selectedShow = "all";
  let selectedEmotion = "all";
  const episodes = [
    {
      id: 1,
      title: "The Weight of Empty Inboxes",
      show: "Cultural Autopsy: The Mainline Feed",
      narrator: "Holden",
      emotion: "nostalgia",
      duration: "47:32",
      date: "2024-01-15",
      description: "An exploration of how we mourn digital ghosts.",
      playerEmbed: "spotify:episode:fake123"
    },
    {
      id: 2,
      title: "Corporate Trauma Response Unit",
      show: "The Boardroom",
      narrator: "Lilly",
      emotion: "rage",
      duration: "38:21",
      date: "2024-01-08",
      description: "When your company's values statement reads like a suicide note.",
      playerEmbed: "spotify:episode:fake456"
    },
    {
      id: 3,
      title: "Glitch in the Memory Bank",
      show: "Memory Glitch Series",
      narrator: "The Archivist",
      emotion: "confusion",
      duration: "52:14",
      date: "2024-01-01",
      description: "What happens when nostalgia.exe stops responding?",
      playerEmbed: "spotify:episode:fake789"
    },
    {
      id: 4,
      title: "Red Pill, Blue Screen",
      show: "Matrix Deep Dive",
      narrator: "Reese",
      emotion: "awakening",
      duration: "63:45",
      date: "2023-12-25",
      description: "The Matrix was a documentary about working from home.",
      playerEmbed: "spotify:episode:fake012"
    }
  ];
  const emotions = [
    "all",
    "nostalgia",
    "rage",
    "confusion",
    "awakening",
    "grief",
    "hope"
  ];
  filteredEpisodes = episodes.filter((ep) => {
    const emotionMatch = selectedEmotion === "all";
    return emotionMatch;
  });
  const each_array = ensure_array_like(SITE_CONFIG.shows);
  const each_array_1 = ensure_array_like(emotions);
  const each_array_2 = ensure_array_like(filteredEpisodes);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Episode Archive | ${escape_html(SITE_CONFIG.name)}</title>`;
    $$payload2.out += `<meta name="description" content="Every tape we've kept running. Searchable, filterable, unforgettable."/>`;
  });
  $$payload.out += `<section class="min-h-screen bg-tape-gray-900 text-paper-white py-12"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-12"><h1 class="text-5xl md:text-7xl font-mono mb-4"><span class="text-vcr-blue-400">[</span> <span class="text-postit-yellow-500">ARCHIVE</span> <span class="text-vcr-blue-400">]</span></h1> <p class="text-xl font-serif italic text-tape-gray-300">Every tape we've kept running</p></div> <div class="bg-tape-gray-800 border-2 border-vcr-blue-600 p-6 mb-8"><div class="grid md:grid-cols-3 gap-6"><div><label class="block text-vcr-blue-400 font-mono text-sm mb-2">FILTER_BY_SHOW:</label> <select class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 font-mono focus:border-postit-yellow-500 focus:outline-none">`;
  $$payload.select_value = selectedShow;
  $$payload.out += `<option value="all"${maybe_selected($$payload, "all")}>ALL_SHOWS</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let show = each_array[$$index];
    $$payload.out += `<option${attr("value", show)}${maybe_selected($$payload, show)}>${escape_html(show)}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div><label class="block text-vcr-blue-400 font-mono text-sm mb-2">FILTER_BY_EMOTION:</label> <select class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 font-mono focus:border-postit-yellow-500 focus:outline-none">`;
  $$payload.select_value = selectedEmotion;
  $$payload.out += `<!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let emotion = each_array_1[$$index_1];
    $$payload.out += `<option${attr("value", emotion)}${maybe_selected($$payload, emotion)}>${escape_html(emotion.toUpperCase())}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div><label class="block text-vcr-blue-400 font-mono text-sm mb-2">SEARCH_MEMORY:</label> <input type="text" placeholder="keyword.search..." class="w-full bg-tape-gray-900 border border-vcr-blue-600 text-paper-white px-4 py-2 font-mono placeholder-tape-gray-500 focus:border-postit-yellow-500 focus:outline-none"/></div></div></div> <div class="grid gap-6"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let episode = each_array_2[$$index_2];
    $$payload.out += `<article class="bg-tape-gray-800 border-2 border-vcr-blue-600/50 hover:border-vcr-blue-400 transition-all duration-300 p-6 group"><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"><div class="flex-1"><div class="flex items-start gap-4 mb-3"><div class="w-16 h-16 bg-vcr-blue-600/20 border border-vcr-blue-400 flex items-center justify-center font-mono text-vcr-blue-400 shrink-0">${escape_html(episode.narrator.charAt(0))}</div> <div class="flex-1"><h2 class="text-xl font-display text-postit-yellow-500 mb-1 group-hover:animate-pulse">${escape_html(episode.title)}</h2> <div class="flex flex-wrap gap-4 text-sm font-mono text-tape-gray-400"><span class="text-vcr-blue-400">${escape_html(episode.show)}</span> <span>•</span> <span>${escape_html(episode.narrator)}</span> <span>•</span> <span class="text-trauma-red-400">[${escape_html(episode.emotion)}]</span> <span>•</span> <span>${escape_html(episode.duration)}</span></div></div></div> <p class="text-tape-gray-300 font-serif italic ml-20">${escape_html(episode.description)}</p></div> <div class="flex items-center gap-4"><span class="text-xs font-mono text-tape-gray-500">${escape_html(episode.date)}</span> <button class="bg-vcr-blue-600 hover:bg-vcr-blue-700 text-paper-white px-6 py-3 font-mono border-2 border-vcr-blue-400 transition-all duration-200 hover:shadow-vhs hover:-translate-y-0.5">[PLAY]</button></div></div></article>`;
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-12"><button class="text-vcr-blue-400 font-mono hover:text-postit-yellow-500 transition-colors">[LOAD_MORE_MEMORIES]</button></div> <div class="text-center mt-16 text-tape-gray-500 font-mono text-sm"><p>// showing ${escape_html(filteredEpisodes.length)} of ∞ episodes</p> <p class="text-xs mt-2">// memory_status: streaming</p></div></div></section>`;
  pop();
}
export {
  _page as default
};
