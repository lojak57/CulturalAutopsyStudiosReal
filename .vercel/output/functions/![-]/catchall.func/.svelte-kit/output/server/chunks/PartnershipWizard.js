import { C as push, R as fallback, U as copy_payload, V as assign_payload, S as bind_props, E as pop, K as escape_html } from "./index.js";
import "clsx";
import { L as LuxuryInput, v as validateForm, a as validators, W as WizardContainer } from "./formHelpers.js";
/* empty css                                         */
function FounderInfoStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="space-y-6"><div class="text-center mb-8"><h2 class="text-2xl font-bold text-skyline-blue-600 mb-2">Tell Us About Yourself</h2> <p class="text-granite-gray-600">Let's start with the basics about you as a founder</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
    LuxuryInput($$payload2, {
      type: "text",
      placeholder: "First Name",
      error: errors.firstName,
      required: true,
      get value() {
        return formData.firstName;
      },
      set value($$value) {
        formData.firstName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      type: "text",
      placeholder: "Last Name",
      error: errors.lastName,
      required: true,
      get value() {
        return formData.lastName;
      },
      set value($$value) {
        formData.lastName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    LuxuryInput($$payload2, {
      type: "email",
      placeholder: "Email Address",
      error: errors.email,
      required: true,
      get value() {
        return formData.email;
      },
      set value($$value) {
        formData.email = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    LuxuryInput($$payload2, {
      type: "tel",
      placeholder: "Phone Number",
      error: errors.phone,
      required: true,
      get value() {
        return formData.phone;
      },
      set value($$value) {
        formData.phone = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { formData, errors });
  pop();
}
function PartnershipWizard($$payload, $$props) {
  push();
  let currentStepValid, canGoNext, isLastStep, currentConfig;
  let currentStep = 0;
  const totalSteps = 5;
  let loading = false;
  let formData = {
    // Step 1: Founder Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Step 2: Business Basics
    companyName: "",
    companyWebsite: "",
    industry: "",
    foundedYear: "",
    // Step 3: Business Details
    currentRevenue: "",
    revenueProjection: "",
    teamSize: "",
    fundingStatus: "",
    // Step 4: Partnership Preferences
    partnershipType: "",
    marketingBudget: "",
    timeframe: "",
    // Step 5: Vision & Details
    businessDescription: "",
    uniqueValue: "",
    goals: "",
    whyPartnership: ""
  };
  let errors = {};
  const stepValidation = [
    // Step 0: Founder Info
    {
      firstName: [validators.required],
      lastName: [validators.required],
      email: [validators.required, validators.email],
      phone: [validators.required]
    },
    // Step 1: Business Basics
    {
      companyName: [validators.required],
      industry: [validators.required],
      foundedYear: [validators.required]
    },
    // Step 2: Business Details
    {
      currentRevenue: [validators.required],
      teamSize: [validators.required],
      fundingStatus: [validators.required]
    },
    // Step 3: Partnership Preferences
    {
      partnershipType: [validators.required],
      marketingBudget: [validators.required],
      timeframe: [validators.required]
    },
    // Step 4: Vision & Details
    {
      businessDescription: [validators.required],
      uniqueValue: [validators.required],
      goals: [validators.required],
      whyPartnership: [validators.required]
    }
  ];
  const stepConfigs = [
    {
      title: "Founder Information",
      subtitle: "Let's start with the basics about you"
    },
    {
      title: "Business Overview",
      subtitle: "Tell us about your company"
    },
    {
      title: "Business Performance",
      subtitle: "Share your current traction and growth"
    },
    {
      title: "Partnership Preferences",
      subtitle: "How would you like to work together?"
    },
    {
      title: "Vision & Goals",
      subtitle: "Help us understand your bigger picture"
    }
  ];
  currentStepValid = (() => {
    const tempErrors = validateForm(formData, stepValidation[currentStep]);
    return Object.keys(tempErrors).length === 0;
  })();
  canGoNext = currentStepValid;
  isLastStep = currentStep === totalSteps - 1;
  currentConfig = stepConfigs[currentStep];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    WizardContainer($$payload2, {
      currentStep,
      totalSteps,
      title: currentConfig.title,
      subtitle: currentConfig.subtitle,
      canGoBack: currentStep > 0,
      canGoNext,
      isLastStep,
      loading,
      children: ($$payload3) => {
        {
          $$payload3.out += "<!--[-->";
          FounderInfoStep($$payload3, {
            errors,
            get formData() {
              return formData;
            },
            set formData($$value) {
              formData = $$value;
              $$settled = false;
            }
          });
        }
        $$payload3.out += `<!--]--> `;
        if (errors.submit) {
          $$payload3.out += "<!--[-->";
          $$payload3.out += `<div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"><p class="text-red-600 text-sm">${escape_html(errors.submit)}</p></div>`;
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
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
  PartnershipWizard as default
};
