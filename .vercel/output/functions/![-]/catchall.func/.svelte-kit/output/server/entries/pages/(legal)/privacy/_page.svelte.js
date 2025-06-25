import { P as head } from "../../../../chunks/index.js";
/* empty css                                                          */
import { B as BaseCard } from "../../../../chunks/BaseCard.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Privacy Policy | weKnowCO</title>`;
    $$payload2.out += `<meta name="description" content="weKnowCO's privacy policy outlines how we collect, use, and protect your personal information."/>`;
  });
  $$payload.out += `<div class="min-h-screen bg-snowfield-white py-16"><div class="max-w-4xl mx-auto px-6">`;
  BaseCard($$payload, {
    class: "p-8 lg:p-12",
    children: ($$payload2) => {
      $$payload2.out += `<h1 class="font-display text-3xl lg:text-4xl font-bold text-skyline-blue-700 mb-8">Privacy Policy</h1> <div class="prose prose-lg max-w-none"><p class="text-granite-gray-600 mb-6"><strong>Effective Date:</strong> June 25, 2025</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Information We Collect</h2> <p class="text-granite-gray-700 mb-4">We collect information you provide directly to us, such as when you create an account, fill out a contact form, or communicate with us. This may include your name, email address, phone number, company information, and project details.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">How We Use Your Information</h2> <ul class="text-granite-gray-700 mb-4 list-disc pl-6"><li>To provide, maintain, and improve our services</li> <li>To process transactions and send related information</li> <li>To send you technical notices, updates, and support messages</li> <li>To respond to your comments, questions, and customer service requests</li> <li>To communicate with you about products, services, and events</li></ul> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Information Sharing</h2> <p class="text-granite-gray-700 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Data Security</h2> <p class="text-granite-gray-700 mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p> <h2 class="font-display text-2xl font-semibold text-skyline-blue-600 mt-8 mb-4">Contact Us</h2> <p class="text-granite-gray-700 mb-4">If you have any questions about this Privacy Policy, please contact us at:</p> <div class="bg-skyline-blue-50 p-4 rounded-lg"><p class="text-granite-gray-700"><strong>weKnowCO</strong><br/> Email: hello@weknowco.com<br/> Denver, Colorado</p></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
