import { G as ensure_array_like, K as escape_html, P as head, E as pop, C as push } from "../../../../chunks/index.js";
/* empty css                                                          */
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
/* empty css                                                    */
/* empty css                                                               */
/* empty css                                                         */
function PlansHeroSection($$payload) {
  const growthAreas = [
    {
      focus: "More",
      label: "Lead Generation",
      description: "Content and systems that bring qualified prospects"
    },
    {
      focus: "Better",
      label: "Conversion Rate",
      description: "Optimize every step from visitor to customer"
    },
    {
      focus: "Faster",
      label: "Time Savings",
      description: "Automation handles routine marketing tasks"
    },
    {
      focus: "Stronger",
      label: "Client Relationships",
      description: "Build partnerships that grow year after year"
    }
  ];
  const each_array = ensure_array_like(growthAreas);
  $$payload.out += `<section class="relative overflow-hidden bg-gradient-to-br from-skyline-blue-700 via-skyline-blue-800 to-granite-gray-900 text-white min-h-screen flex items-center"><div class="absolute inset-0 z-10 overflow-hidden pointer-events-none"><div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aspen-gold-400/10 blur-3xl animate-pulse"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-skyline-blue-300/10 blur-3xl animate-pulse delay-1000"></div></div> <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24"><div class="grid lg:grid-cols-2 gap-12 items-center"><div class="backdrop-blur-sm bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl"><div class="inline-flex items-center bg-aspen-gold-400/40 backdrop-blur-sm px-6 py-3 rounded-full mb-6 fade-in border border-aspen-gold-400/60 svelte-1dbt5in"><span class="text-aspen-gold-200 font-mono text-sm font-bold tracking-wider">GROWTH JOURNEY</span></div> <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 fade-in drop-shadow-2xl leading-tight svelte-1dbt5in">From Invisible to <span class="text-aspen-gold-300">Inevitable</span></h1> <p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white slide-up drop-shadow-lg font-medium leading-relaxed svelte-1dbt5in">How our plans transform Colorado businesses from struggling for attention to leading their markets.</p> <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 slide-up svelte-1dbt5in"><a href="#journey" class="group bg-aspen-gold-400 text-granite-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-aspen-gold-300 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-aspen-gold-400/50 flex items-center justify-center border-2 border-aspen-gold-300 w-full sm:w-auto">See Your Journey <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></a> <a href="#choose-plans" class="group border-3 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-skyline-blue-800 transition-all duration-300 backdrop-blur-sm bg-white/20 flex items-center justify-center shadow-xl w-full sm:w-auto">View Plans <svg class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div> <div class="mt-6 text-center slide-up delay-500 svelte-1dbt5in"><a href="/about" class="group inline-flex items-center text-white/90 hover:text-white text-sm font-medium underline decoration-aspen-gold-400 decoration-2 underline-offset-4 hover:decoration-white transition-all duration-300">Why us? Read our story here <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 lg:mt-0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let area = each_array[$$index];
    BaseCard($$payload, {
      class: "p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm bg-white/20 border-2 border-white/30 hover:bg-white/25 transition-all duration-300 shadow-xl",
      children: ($$payload2) => {
        $$payload2.out += `<div class="text-2xl sm:text-3xl md:text-4xl font-bold text-aspen-gold-300 mb-2">${escape_html(area.focus)}</div> <div class="text-white font-bold mb-1 text-sm sm:text-base">${escape_html(area.label)}</div> <div class="text-xs sm:text-sm text-white font-medium">${escape_html(area.description)}</div>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></div></div></section>`;
}
function JourneyStagesSection($$payload) {
  const journeyStages = [
    {
      stage: "1",
      title: "Foundation",
      subtitle: "Month 1-3",
      description: "Your digital presence takes shape",
      outcomes: [
        "Professional website attracting qualified leads",
        "Local search visibility grows consistently",
        "Brand recognition in your Colorado market",
        "Clear messaging that converts visitors"
      ],
      tools: [
        "Website Development",
        "Local SEO",
        "Brand Positioning",
        "Content Strategy"
      ],
      chartData: { type: "build", progress: 30 }
    },
    {
      stage: "2",
      title: "Growth",
      subtitle: "Month 4-9",
      description: "Your audience grows and engages",
      outcomes: [
        "Consistent lead flow from multiple channels",
        "Email list grows with qualified contacts monthly",
        "Social media following that drives business",
        "Customer retention through strategic content"
      ],
      tools: [
        "Paid Advertising",
        "Email Marketing",
        "Video Content",
        "Social Strategy"
      ],
      chartData: { type: "expand", progress: 65 }
    },
    {
      stage: "3",
      title: "Scale",
      subtitle: "Month 10+",
      description: "Your business operates at peak efficiency",
      outcomes: [
        "Predictable revenue from digital channels",
        "Market leadership in your Colorado niche",
        "Automated systems handling routine growth",
        "Premium pricing supported by brand strength"
      ],
      tools: [
        "Automation Systems",
        "Advanced Analytics",
        "A/B Testing",
        "Conversion Optimization"
      ],
      chartData: { type: "optimize", progress: 90 }
    }
  ];
  const each_array = ensure_array_like(journeyStages);
  $$payload.out += `<section id="journey" class="py-16 md:py-20 bg-gradient-to-br from-snowfield-white via-skyline-blue-25 to-aspen-gold-25 relative overflow-hidden border-t-4 border-skyline-blue-300"><div class="absolute inset-0 overflow-hidden"><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-granite-gray-100/30 to-transparent"></div> <div class="absolute top-20 right-20 w-64 h-64 bg-skyline-blue-100/30 rounded-full blur-3xl animate-pulse"></div> <div class="absolute bottom-20 left-20 w-48 h-48 bg-aspen-gold-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div> <div class="absolute top-1/4 left-1/6 animate-float"><svg class="w-8 h-8 text-skyline-blue-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></div> <div class="absolute top-1/2 right-1/6 animate-float delay-1000"><svg class="w-6 h-6 text-aspen-gold-200" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div> <div class="absolute bottom-1/4 left-1/3 animate-float delay-2000"><svg class="w-10 h-10 text-green-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"><div class="text-center mb-8 sm:mb-12 md:mb-16"><div class="inline-flex items-center bg-skyline-blue-100 px-4 py-2 rounded-full mb-6"><svg class="w-5 h-5 mr-2 text-skyline-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="text-skyline-blue-700 font-semibold text-sm uppercase tracking-wider">Journey</span></div> <h2 class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-skyline-blue-700 mb-4 sm:mb-6">Your Growth Journey</h2> <p class="text-base sm:text-lg md:text-xl text-granite-gray-700 max-w-3xl mx-auto font-medium">Every successful Colorado business follows the same path. Here's how we guide you through each stage.</p></div> <div class="space-y-8 sm:space-y-12 md:space-y-16"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let stage = each_array[index];
    BaseCard($$payload, {
      class: "p-6 sm:p-8 md:p-12 bg-white shadow-2xl border-2 border-skyline-blue-200 hover:shadow-3xl transition-all duration-500",
      children: ($$payload2) => {
        const each_array_1 = ensure_array_like(stage.tools);
        const each_array_2 = ensure_array_like(stage.outcomes);
        $$payload2.out += `<div class="flex items-center mb-6 sm:mb-8"><div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-skyline-blue-700 to-aspen-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mr-4 sm:mr-6 shadow-lg border-4 border-white">${escape_html(stage.stage)}</div> <div><h3 class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-skyline-blue-700">${escape_html(stage.title)}</h3> <p class="text-granite-gray-600 font-bold text-base sm:text-lg">${escape_html(stage.subtitle)}</p></div></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start"><div class="bg-skyline-blue-50 p-4 sm:p-6 rounded-xl border-2 border-skyline-blue-300 shadow-lg"><p class="text-base sm:text-lg text-granite-gray-800 mb-4 sm:mb-6 font-medium">${escape_html(stage.description)}</p> <h4 class="font-bold text-skyline-blue-700 mb-3 sm:mb-4 text-base sm:text-lg">What We Focus On:</h4> <div class="grid grid-cols-1 gap-3"><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let tool = each_array_1[$$index];
          $$payload2.out += `<div class="bg-white px-4 py-3 rounded-lg text-sm font-bold text-skyline-blue-800 border border-skyline-blue-300 shadow-sm">${escape_html(tool)}</div>`;
        }
        $$payload2.out += `<!--]--></div></div> <div class="bg-aspen-gold-50 p-4 sm:p-6 rounded-xl border-2 border-aspen-gold-400 shadow-lg"><h4 class="font-bold text-skyline-blue-700 mb-4 sm:mb-6 flex items-center text-base sm:text-lg"><svg class="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> What You'll Achieve</h4> <ul class="space-y-4"><!--[-->`;
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let outcome = each_array_2[$$index_1];
          $$payload2.out += `<li class="flex items-start"><svg class="w-6 h-6 mr-3 text-aspen-gold-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-granite-gray-800 font-medium">${escape_html(outcome)}</span></li>`;
        }
        $$payload2.out += `<!--]--></ul></div></div>`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    if (index < journeyStages.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex justify-center my-12"><div class="w-px h-16 bg-gradient-to-b from-skyline-blue-300 to-aspen-gold-300 animate-pulse"></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
}
function _page($$payload, $$props) {
  push();
  let loadedSections = {};
  let visibleSections = /* @__PURE__ */ new Set();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Plans &amp; Growth | Your Business Journey | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="See how weKnowCO's marketing plans transform Colorado businesses from invisible to market leaders. Real outcomes, proven journey, sustainable growth."/>`;
  });
  PlansHeroSection($$payload);
  $$payload.out += `<!----> `;
  JourneyStagesSection($$payload);
  $$payload.out += `<!----> <div data-section="success" class="min-h-[50px]">`;
  if (visibleSections.has("success") && loadedSections.success) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
    loadedSections.success?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="benefits" class="min-h-[50px]">`;
  if (visibleSections.has("benefits") && loadedSections.benefits) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
    loadedSections.benefits?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="plans" class="min-h-[50px]">`;
  if (visibleSections.has("plans") && loadedSections.plans) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
    loadedSections.plans?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="dashboard" class="min-h-[50px]">`;
  if (visibleSections.has("dashboard") && loadedSections.dashboard) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
    loadedSections.dashboard?.($$payload, {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div data-section="cta" class="min-h-[50px]">`;
  if (visibleSections.has("cta") && loadedSections.cta) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="animate-fade-in svelte-1ndcety"><!---->`;
    loadedSections.cta?.($$payload, {});
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
