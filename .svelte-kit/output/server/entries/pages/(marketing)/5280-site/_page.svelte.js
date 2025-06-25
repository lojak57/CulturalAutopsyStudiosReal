import { R as fallback, J as attr_class, I as attr, K as escape_html, O as slot, S as bind_props, G as ensure_array_like, T as spread_props, M as stringify, C as push, E as pop, U as copy_payload, V as assign_payload, P as head } from "../../../../chunks/index.js";
/* empty css                                                          */
function lazyImport(importFn) {
  return importFn().then((module) => module.default);
}
function FeatureCard($$payload, $$props) {
  let icon = fallback($$props["icon"], "");
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let highlight = fallback($$props["highlight"], false);
  $$payload.out += `<div${attr_class("feature-card svelte-r7as59", void 0, { "highlight": highlight })}>`;
  if (icon) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="icon-wrapper svelte-r7as59"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${attr("d", icon)}></path></svg></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h3 class="feature-title svelte-r7as59">${escape_html(title)}</h3> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="feature-description svelte-r7as59">${escape_html(description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { icon, title, description, highlight });
}
function ValueProp($$payload, $$props) {
  let number = fallback($$props["number"], "");
  let label = fallback($$props["label"], "");
  let description = fallback($$props["description"], "");
  $$payload.out += `<div class="value-prop svelte-2n0f30"><div class="value-number svelte-2n0f30">${escape_html(number)}</div> <div class="value-content svelte-2n0f30"><div class="value-label svelte-2n0f30">${escape_html(label)}</div> `;
  if (description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="value-description svelte-2n0f30">${escape_html(description)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { number, label, description });
}
function SiteHeroSection($$payload) {
  const valueProps = [
    {
      number: "30",
      label: "Days to Launch",
      description: "From kickoff to go-live"
    },
    {
      number: "7",
      label: "Page Maximum",
      description: "Strategic, focused content"
    },
    {
      number: "1",
      label: "Fair Price",
      description: "No surprises, no add-ons"
    },
    {
      number: "∞",
      label: "Peace of Mind",
      description: "Professional quality guaranteed"
    }
  ];
  const each_array = ensure_array_like(valueProps);
  $$payload.out += `<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-600 via-skyline-blue-700 to-granite-gray-800 text-white min-h-screen flex items-center svelte-rq42n3"><div class="absolute inset-0 z-0 svelte-rq42n3"><img src="/images/5280-hero-bg.png" alt="Colorado Mountain Silhouette" class="w-full h-full object-cover opacity-80 svelte-rq42n3"/> <div class="absolute inset-0 bg-gradient-to-br from-skyline-blue-600/70 via-skyline-blue-700/60 to-granite-gray-800/80 svelte-rq42n3"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 svelte-rq42n3"></div></div> <div class="absolute inset-0 z-10 overflow-hidden pointer-events-none svelte-rq42n3"><div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse svelte-rq42n3"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000 svelte-rq42n3"></div> <div class="absolute top-10 right-20 w-64 h-64 rounded-full bg-red-rocks-rust/10 blur-2xl animate-float svelte-rq42n3"></div></div> <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center svelte-rq42n3"><div class="inline-flex items-center bg-aspen-gold-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 fade-in svelte-rq42n3"><img src="/favicon.svg" alt="" class="w-6 h-6 mr-2 svelte-rq42n3"/> <span class="text-aspen-gold-400 font-mono text-sm font-semibold tracking-wider svelte-rq42n3">COLORADO SPECIAL</span></div> <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in drop-shadow-2xl relative svelte-rq42n3"><span class="relative svelte-rq42n3">$5,280 Website <img src="/images/logo/weknowco-icon.svg" alt="" class="absolute -top-8 -right-12 w-16 h-16 opacity-60 animate-float hidden lg:block svelte-rq42n3"/></span></h1> <p class="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-white/95 slide-up drop-shadow-lg font-medium svelte-rq42n3">A complete, professional website for your Colorado business. <br class="hidden md:block svelte-rq42n3"/> 30 days. Up to 7 pages. One fair price.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 slide-up svelte-rq42n3"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let prop = each_array[i];
    $$payload.out += `<div${attr_class(`stagger-${stringify(i)}`, "svelte-rq42n3")}>`;
    ValueProp($$payload, spread_props([prop]));
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center slide-up px-4 svelte-rq42n3"><a href="#get-started" class="group bg-aspen-gold-400 text-granite-gray-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center w-full sm:w-auto justify-center svelte-rq42n3">Start Your $5,280 Site <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform svelte-rq42n3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-rq42n3"></path></svg></a> <a href="#timeline" class="group border-2 sm:border-3 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-700 transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center w-full sm:w-auto justify-center svelte-rq42n3">See 30-Day Timeline <svg class="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform svelte-rq42n3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" class="svelte-rq42n3"></path></svg></a></div> <div class="mt-16 inline-flex items-center text-white/80 text-sm font-mono animate-float backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 svelte-rq42n3"><span class="w-3 h-3 bg-aspen-gold-400 rounded-full mr-3 animate-pulse shadow-lg shadow-aspen-gold-400/50 svelte-rq42n3"></span> Elevation: 5,280ft</div></div></section>`;
}
function CoreFeaturesSection($$payload) {
  const coreFeatures = [
    {
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
      title: "Complete Website Package",
      description: "Up to 7 pages of professionally designed, mobile-responsive content"
    },
    {
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: "Professional Copywriting",
      description: "Compelling content that speaks to Colorado audiences"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "SEO Foundation",
      description: "Local SEO optimization to help customers find you"
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Mobile-First Design",
      description: "Looks perfect on every device, guaranteed"
    }
  ];
  const each_array = ensure_array_like(coreFeatures);
  $$payload.out += `<section class="py-20 bg-snowfield-white"><div class="max-w-7xl mx-auto px-6"><div class="text-center mb-12 fade-in"><h2 class="font-display text-3xl md:text-4xl font-bold text-skyline-blue-600 mb-4">Everything You Need to Succeed Online</h2> <p class="text-xl text-granite-gray-600 max-w-2xl mx-auto">A complete website package designed for Colorado small businesses</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let feature = each_array[i];
    $$payload.out += `<div${attr_class(`fade-in-up stagger-${stringify(i)}`)}>`;
    FeatureCard($$payload, spread_props([feature]));
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function LazyWizard($$payload, $$props) {
  push();
  let wizardType = fallback($$props["wizardType"], "lead-capture");
  let isOpen = fallback($$props["isOpen"], false);
  let onClose = fallback($$props["onClose"], void 0);
  let WizardComponent = null;
  let isLoading = false;
  const wizardLoaders = {
    "lead-capture": () => lazyImport(() => import("../../../../chunks/LeadCaptureWizard.js")),
    "partnership": () => lazyImport(() => import("../../../../chunks/PartnershipWizard.js"))
  };
  async function loadWizard() {
    if (WizardComponent || isLoading) return;
    isLoading = true;
    try {
      WizardComponent = await wizardLoaders[wizardType]();
    } finally {
      isLoading = false;
    }
  }
  function handleClose() {
    isOpen = false;
    if (onClose) onClose();
  }
  if (isOpen && !WizardComponent) {
    loadWizard();
  }
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in svelte-9bxyf5">`;
    if (isLoading) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="bg-white rounded-lg p-8 animate-pulse"><div class="flex items-center justify-center space-x-2"><div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce"></div> <div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div> <div class="w-4 h-4 bg-skyline-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div></div> <p class="mt-4 text-granite-gray-600 text-center">Loading...</p></div>`;
    } else if (WizardComponent) {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<div class="animate-slide-up svelte-9bxyf5"><!---->`;
      WizardComponent?.($$payload, { isOpen, onClose: handleClose });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { wizardType, isOpen, onClose });
  pop();
}
function _page($$payload, $$props) {
  push();
  let loadedSections = {};
  let visibleSections = /* @__PURE__ */ new Set();
  let showWizard = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>$5,280 Complete Website Package | weKnowCO</title>`;
      $$payload3.out += `<meta name="description" content="Get a complete, professional website for your Colorado business in 30 days. $5,280 flat rate, no surprises. Mobile-responsive, SEO-optimized, and built for results."/>`;
    });
    SiteHeroSection($$payload2);
    $$payload2.out += `<!----> `;
    CoreFeaturesSection($$payload2);
    $$payload2.out += `<!----> <div data-section="included" class="min-h-[50px]">`;
    if (visibleSections.has("included") && loadedSections.included) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
      loadedSections.included?.($$payload2, {});
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div data-section="timeline" class="min-h-[50px]">`;
    if (visibleSections.has("timeline") && loadedSections.timeline) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
      loadedSections.timeline?.($$payload2, {});
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div data-section="process" class="min-h-[50px]">`;
    if (visibleSections.has("process") && loadedSections.process) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
      loadedSections.process?.($$payload2, {});
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div data-section="faqs" class="min-h-[50px]">`;
    if (visibleSections.has("faqs") && loadedSections.faqs) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
      loadedSections.faqs?.($$payload2, {});
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <section id="get-started" class="py-20 bg-gradient-to-br from-skyline-blue-600 to-red-rocks-rust text-white"><div class="max-w-4xl mx-auto px-6"><div class="text-center mb-12"><h2 class="font-display text-3xl md:text-4xl font-bold mb-4">Ready for Your $5,280 Website?</h2> <p class="text-xl text-white/90">Let's build something amazing for your Colorado business</p></div> <div class="text-center"><button class="bg-white text-skyline-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-snowfield-white transition-colors duration-300 shadow-lg">Get Started Now</button></div> <div class="text-center mt-8"><p class="text-white/80 mb-4">Have questions? Want to see examples?</p> <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"><a href="/case-stories" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto">View Case Studies <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a> <a href="mailto:hello@weknowco.com?subject=$5,280 Website Inquiry" class="inline-flex items-center justify-center px-5 sm:px-6 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto">Email Us Directly <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a></div></div></div></section> `;
    LazyWizard($$payload2, {
      wizardType: "lead-capture",
      onClose: () => showWizard = false,
      get isOpen() {
        return showWizard;
      },
      set isOpen($$value) {
        showWizard = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
