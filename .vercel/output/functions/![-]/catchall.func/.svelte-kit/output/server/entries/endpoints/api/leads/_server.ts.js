import { j as json } from "../../../../chunks/index2.js";
import { S as SITE_CONFIG } from "../../../../chunks/site.config.js";
class RateLimitStore {
  store = /* @__PURE__ */ new Map();
  cleanupInterval;
  constructor() {
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 5 * 60 * 1e3);
  }
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (entry.resetTime < now) {
        this.store.delete(key);
      }
    }
  }
  get(key) {
    const entry = this.store.get(key);
    if (entry && entry.resetTime < Date.now()) {
      this.store.delete(key);
      return void 0;
    }
    return entry;
  }
  set(key, entry) {
    this.store.set(key, entry);
  }
  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.store.clear();
  }
}
const rateLimitStore = new RateLimitStore();
function rateLimit(options) {
  const {
    maxRequests,
    windowMs,
    skipSuccessfulRequests = false,
    skipFailedRequests = false
  } = options;
  const rateLimiter = {
    check: (identifier) => {
      const now = Date.now();
      const resetTime = now + windowMs;
      const existing = rateLimitStore.get(identifier);
      if (!existing) {
        rateLimitStore.set(identifier, { count: 1, resetTime });
        return { allowed: true, remaining: maxRequests - 1, resetTime };
      }
      if (existing.count >= maxRequests) {
        return { allowed: false, remaining: 0, resetTime: existing.resetTime };
      }
      existing.count++;
      rateLimitStore.set(identifier, existing);
      return {
        allowed: true,
        remaining: maxRequests - existing.count,
        resetTime: existing.resetTime
      };
    },
    // For use in server-side handlers
    middleware: (request, response) => {
      const identifier = getClientIdentifier(request);
      const result = rateLimiter.check(identifier);
      if (response) {
        response.headers.set("X-RateLimit-Limit", maxRequests.toString());
        response.headers.set(
          "X-RateLimit-Remaining",
          result.remaining.toString()
        );
        response.headers.set(
          "X-RateLimit-Reset",
          new Date(result.resetTime).toISOString()
        );
      }
      return result;
    }
  };
  return rateLimiter;
}
function getClientIdentifier(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || cfConnectingIp || "unknown";
  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    const userId = btoa(authHeader).slice(0, 16);
    return `user:${userId}`;
  }
  return `ip:${ip}`;
}
const rateLimiters = {
  // Public API endpoints - more restrictive
  public: rateLimit({
    maxRequests: 100,
    windowMs: 15 * 60 * 1e3
    // 15 minutes
  }),
  // Authentication endpoints - very restrictive
  auth: rateLimit({
    maxRequests: 5,
    windowMs: 15 * 60 * 1e3
    // 15 minutes
  }),
  // Admin endpoints - moderate restrictions
  admin: rateLimit({
    maxRequests: 200,
    windowMs: 15 * 60 * 1e3
    // 15 minutes
  }),
  // Form submissions - restrictive
  forms: rateLimit({
    maxRequests: 10,
    windowMs: 60 * 60 * 1e3
    // 1 hour
  }),
  // File uploads - very restrictive
  uploads: rateLimit({
    maxRequests: 5,
    windowMs: 60 * 60 * 1e3
    // 1 hour
  })
};
function createRateLimitResponse(resetTime) {
  return new Response(
    JSON.stringify({
      error: "Rate limit exceeded",
      message: "Too many requests. Please try again later.",
      resetTime: new Date(resetTime).toISOString()
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": Math.ceil((resetTime - Date.now()) / 1e3).toString(),
        "X-RateLimit-Reset": new Date(resetTime).toISOString()
      }
    }
  );
}
if (typeof process !== "undefined") {
  process.on("exit", () => {
    rateLimitStore.destroy();
  });
}
const ENV = {
  TRUEFORM_API_URL: "https://api.trueform.app",
  TRUEFORM_API_KEY: ""
};
function getWhiteLabelConfig() {
  return {
    brandName: "weKnowCO",
    domain: "weknowco.com",
    primaryColor: "#1e40af",
    secondaryColor: "#dc2626"
  };
}
const TRUEFORM_API_URL = ENV.TRUEFORM_API_URL;
const TRUEFORM_API_KEY = ENV.TRUEFORM_API_KEY;
function validateLeadData(data) {
  const errors = [];
  if (!data.firstName?.trim()) errors.push("First name is required");
  if (!data.lastName?.trim()) errors.push("Last name is required");
  if (!data.email?.trim()) errors.push("Email is required");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Invalid email format");
  }
  return {
    success: errors.length === 0,
    errors: errors.length > 0 ? errors : void 0
  };
}
async function submitToTrueForm(leadData) {
  try {
    const response = await fetch(`${TRUEFORM_API_URL}/api/${SITE_CONFIG.api.whiteLabelId}-leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TRUEFORM_API_KEY}`
      },
      body: JSON.stringify(leadData)
    });
    if (!response.ok) {
      throw new Error(`TrueForm API error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error("TrueForm submission error:", err);
    throw err;
  }
}
function extractUrlParams(url) {
  const urlObj = new URL(url);
  return {
    utmSource: urlObj.searchParams.get("utm_source") || void 0,
    utmMedium: urlObj.searchParams.get("utm_medium") || void 0,
    utmCampaign: urlObj.searchParams.get("utm_campaign") || void 0,
    adGroup: urlObj.searchParams.get("utm_term") || void 0,
    keyword: urlObj.searchParams.get("utm_content") || void 0
  };
}
function determineLeadTags(leadData) {
  const tags = [];
  tags.push(`site:${SITE_CONFIG.api.whiteLabelId}`);
  if (leadData.formType === "partnership") {
    tags.push("form:solo-biz-helper");
    tags.push("interest:partnership");
  } else if (leadData.formName?.toLowerCase().includes("lead capture")) {
    tags.push("form:lead-capture");
    tags.push("interest:marketing-services");
  }
  if (leadData.serviceInterest) {
    tags.push(`service:${leadData.serviceInterest.toLowerCase().replace(/\s+/g, "-")}`);
  }
  if (leadData.monthlyBudget) {
    const budget = leadData.monthlyBudget.toLowerCase();
    if (budget.includes("10,000") || budget.includes("10000")) {
      tags.push("budget:enterprise");
    } else if (budget.includes("5,000") || budget.includes("5000")) {
      tags.push("budget:premium");
    } else if (budget.includes("2,500") || budget.includes("2500")) {
      tags.push("budget:growth");
    } else {
      tags.push("budget:starter");
    }
  }
  if (leadData.utmSource) {
    tags.push(`source:${leadData.utmSource}`);
  }
  if (leadData.utmMedium) {
    tags.push(`medium:${leadData.utmMedium}`);
  }
  if (leadData.utmCampaign) {
    tags.push(`campaign:${leadData.utmCampaign}`);
  }
  if (leadData.timeframe) {
    const timeframe = leadData.timeframe.toLowerCase();
    if (timeframe.includes("immediate") || timeframe.includes("asap")) {
      tags.push("urgency:high");
    } else if (timeframe.includes("1-3 months")) {
      tags.push("urgency:medium");
    } else {
      tags.push("urgency:low");
    }
  }
  return tags;
}
const POST = async ({ request, getClientAddress }) => {
  if (ENV.ENABLE_RATE_LIMITING) {
    const clientIp = getClientAddress();
    const rateLimitResult = rateLimiters.forms.check(clientIp);
    if (!rateLimitResult.allowed) {
      return createRateLimitResponse(rateLimitResult.resetTime);
    }
  }
  try {
    const leadData = await request.json();
    const validation = validateLeadData(leadData);
    if (!validation.success) {
      return json(
        {
          success: false,
          error: "Validation failed",
          details: validation.errors
        },
        { status: 400 }
      );
    }
    const urlParams = leadData.pageUrl ? extractUrlParams(leadData.pageUrl) : {};
    const whiteLabelConfig = getWhiteLabelConfig();
    const leadTags = determineLeadTags(leadData);
    const trueFormPayload = {
      ...leadData,
      leadSource: whiteLabelConfig.leadSource,
      whiteLabelId: whiteLabelConfig.siteId,
      siteName: whiteLabelConfig.siteName,
      campaign: leadData.utmCampaign || urlParams.utmCampaign || "organic",
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      tags: leadTags,
      // Merge URL params
      utmSource: leadData.utmSource || urlParams.utmSource || "direct",
      utmMedium: leadData.utmMedium || urlParams.utmMedium || "website",
      utmCampaign: leadData.utmCampaign || urlParams.utmCampaign || "organic",
      adGroup: leadData.adGroup || urlParams.adGroup,
      keyword: leadData.keyword || urlParams.keyword
    };
    const trueFormResponse = await submitToTrueForm(trueFormPayload);
    if (false) ;
    return json({
      success: true,
      leadId: trueFormResponse.project?.id,
      message: "Lead submitted successfully"
    });
  } catch (err) {
    return json(
      {
        success: false,
        error: "Failed to submit lead",
        message: "We encountered an issue processing your request. Please try again or contact us directly."
      },
      { status: 500 }
    );
  }
};
const GET = async () => {
  return json({
    message: "weKnowCO Lead Capture API",
    endpoints: {
      POST: "/api/leads - Submit a new lead"
    },
    required_fields: ["firstName", "lastName", "email"],
    optional_fields: [
      "companyName",
      "phone",
      "serviceInterest",
      "monthlyBudget",
      "timeframe",
      "currentMarketing",
      "painPoints",
      "goals"
    ]
  });
};
export {
  GET,
  POST
};
