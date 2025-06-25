import { C as push, R as fallback, U as copy_payload, V as assign_payload, S as bind_props, E as pop } from "./index.js";
import { L as LuxuryInput, v as validateForm, W as WizardContainer, a as validators } from "./formHelpers.js";
/* empty css                                        */
/* empty css                                         */
function BasicInfoStep($$payload, $$props) {
  push();
  let formData = $$props["formData"];
  let errors = fallback($$props["errors"], () => ({}), true);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="step-content svelte-173dvg4"><div class="step-header svelte-173dvg4"><h3 class="step-title svelte-173dvg4">Let's get to know you</h3> <p class="step-description svelte-173dvg4">Start with your basic contact information</p></div> <div class="form-grid svelte-173dvg4"><div class="form-row svelte-173dvg4">`;
    LuxuryInput($$payload2, {
      label: "First Name",
      error: errors.firstName,
      placeholder: "Your first name",
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
      label: "Last Name",
      error: errors.lastName,
      placeholder: "Your last name",
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
      label: "Email Address",
      error: errors.email,
      placeholder: "your@email.com",
      required: true,
      get value() {
        return formData.email;
      },
      set value($$value) {
        formData.email = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div>`;
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
function LeadCaptureWizard($$payload, $$props) {
  push();
  let currentStepValid;
  let serviceInterest = fallback($$props["serviceInterest"], "");
  let formName = fallback($$props["formName"], "Lead Capture");
  let currentStep = 0;
  const totalSteps = 4;
  let loading = false;
  let formData = {
    // Step 1: Basic Info
    firstName: "",
    lastName: "",
    email: "",
    // Step 2: Business Info
    companyName: "",
    phone: "",
    companyWebsite: "",
    // Step 3: Project Details
    serviceInterest,
    monthlyBudget: "",
    timeframe: "",
    // Step 4: Goals & Context
    currentMarketing: "",
    painPoints: "",
    goals: "",
    decisionMaker: false
  };
  let errors = {};
  const stepValidation = [
    // Step 0: Basic Info
    {
      firstName: [validators.required],
      lastName: [validators.required],
      email: [validators.required, validators.email]
    },
    // Step 1: Business Info
    {
      companyName: [validators.required],
      phone: [validators.phone]
    },
    // Step 2: Project Details
    {
      monthlyBudget: [validators.required],
      timeframe: [validators.required]
    },
    // Step 3: Goals
    { goals: [validators.required] }
  ];
  currentStepValid = (() => {
    const tempErrors = validateForm(formData, stepValidation[currentStep]);
    return Object.keys(tempErrors).length === 0;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    WizardContainer($$payload2, {
      currentStep,
      totalSteps,
      title: "Start Your Climb",
      subtitle: formName,
      canGoBack: currentStep > 0,
      canGoNext: currentStepValid,
      isLastStep: currentStep === totalSteps - 1,
      loading,
      children: ($$payload3) => {
        {
          $$payload3.out += "<!--[-->";
          BasicInfoStep($$payload3, {
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
  bind_props($$props, { serviceInterest, formName });
  pop();
}
export {
  LeadCaptureWizard as default
};
