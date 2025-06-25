import { G as ensure_array_like, P as head, I as attr, K as escape_html, E as pop, C as push } from "../../../chunks/index.js";
import { S as SITE_CONFIG } from "../../../chunks/site.config.js";
function _page($$payload, $$props) {
  push();
  const posts = [
    {
      id: 1,
      title: "Why Your Childhood Best Friend's AIM Screen Name Still Makes You Cry",
      author: "Eva",
      date: "2024-01-20",
      excerpt: "An investigation into digital archaeology and the screenshots we wish we'd taken.",
      readTime: "7 min",
      tags: ["nostalgia", "digital grief", "aim"]
    },
    {
      id: 2,
      title: "The Corporate Emails That Read Like Suicide Notes",
      author: "Lilly",
      date: "2024-01-18",
      excerpt: "A close reading of the passive-aggressive poetry hidden in your company's all-hands meetings.",
      readTime: "5 min",
      tags: ["corporate", "trauma", "poetry"]
    },
    {
      id: 3,
      title: "Millennial Pink Was a Cry for Help",
      author: "Reese",
      date: "2024-01-15",
      excerpt: "How an entire generation painted their depression the color of Pepto-Bismol.",
      readTime: "9 min",
      tags: ["culture", "aesthetics", "therapy"]
    }
  ];
  const each_array = ensure_array_like(posts);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tape | ${escape_html(SITE_CONFIG.name)}</title>`;
    $$payload2.out += `<meta name="description" content="Essays that feel like therapy sessions you didn't sign up for."/>`;
  });
  $$payload.out += `<section class="min-h-screen bg-tape-gray-900 text-paper-white py-12"><div class="max-w-4xl mx-auto px-6"><div class="text-center mb-16"><h1 class="text-5xl md:text-7xl font-mono mb-4"><span class="text-trauma-red-500">[</span> <span class="text-postit-yellow-500">TAPE</span> <span class="text-trauma-red-500">]</span></h1> <p class="text-xl font-serif italic text-tape-gray-300">Free therapy disguised as essays</p></div> <div class="bg-vcr-blue-600/20 border-2 border-vcr-blue-400 p-6 mb-12 text-center"><p class="font-mono text-vcr-blue-400 mb-4">// WANT_THE_FULL_TAPES?</p> <p class="text-lg font-serif italic text-tape-gray-300 mb-6">Subscribe for deep dives, bonus content, and memories we couldn't broadcast.</p> <a${attr("href", SITE_CONFIG.social.substack)} class="inline-block bg-postit-yellow-500 text-tape-gray-900 px-8 py-3 font-mono hover:bg-postit-yellow-400 transition-colors border-2 border-postit-yellow-600">[JOIN_SUBSTACK]</a></div> <div class="space-y-12"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let post = each_array[$$index_1];
    const each_array_1 = ensure_array_like(post.tags);
    $$payload.out += `<article class="group cursor-pointer"><div class="border-l-4 border-vcr-blue-600 pl-6 hover:border-postit-yellow-500 transition-colors"><div class="mb-4"><h2 class="text-2xl font-display text-postit-yellow-500 mb-2 group-hover:animate-pulse">${escape_html(post.title)}</h2> <div class="flex items-center gap-4 text-sm font-mono text-tape-gray-400"><span class="text-vcr-blue-400">by_${escape_html(post.author)}</span> <span>•</span> <span>${escape_html(post.date)}</span> <span>•</span> <span>${escape_html(post.readTime)}</span></div></div> <p class="text-lg font-serif italic text-tape-gray-300 mb-4">${escape_html(post.excerpt)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$payload.out += `<span class="text-xs font-mono text-trauma-red-400 border border-trauma-red-600 px-2 py-1">#${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div> <div class="mt-4"><button class="font-mono text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors">[READ_MORE] →</button></div></div></article>`;
  }
  $$payload.out += `<!--]--></div> <div class="text-center mt-16 pt-8 border-t border-vcr-blue-600/30"><p class="font-mono text-tape-gray-400 mb-4">// Looking for something specific?</p> <a href="/blog/archive" class="font-mono text-vcr-blue-400 hover:text-postit-yellow-500 transition-colors">[BROWSE_FULL_ARCHIVE]</a></div> <div class="mt-20 text-center"><p class="font-mono text-xs text-tape-gray-600 opacity-20 hover:opacity-100 transition-opacity">// sometimes the real content was the trauma we processed along the way</p></div></div></section>`;
  pop();
}
export {
  _page as default
};
