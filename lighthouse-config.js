"use strict";

module.exports = {
  extends: "lighthouse:default",
  settings: {
    // The settings property controls various aspects of running Lighthouse such as CPU/network throttling and audit whitelisting/blacklisting.
    scores: {
      performance: 95,
      accessibility: 95,
      "best-practices": 95,
      seo: 95,
      pwa: 95
    },
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    passes: [
      /* 
        This is where we can simulate slow connections or devices, passes property controls how to load the requested URL.
        NOTE: Each entry in the passes array represents one load of the page (e.g. 4 entries in passes will load the page 4 times).
      */
      {
        passName: "fastPass",
        gatherers: ["fast-gatherer"]
      },
      {
        passName: "slowPass",
        recordTrace: true,
        useThrottling: true,
        networkQuietThresholdMs: 5000,
        gatherers: ["slow-gatherer"]
      },
      {
        passName: "redirectPass",
        // Speed up the redirect pass by blocking stylesheets, fonts, and images
        blockedUrlPatterns: [
          "*.css",
          "*.jpg",
          "*.jpeg",
          "*.png",
          "*.gif",
          "*.svg",
          "*.ttf",
          "*.woff",
          "*.woff2"
        ],
        gatherers: ["http-redirect", "html-without-javascript"]
      }
    ],
    audits: [
      // The audits property controls which audits to run and include with your Lighthouse report
      "performance-budget",
      "first-meaningful-paint",
      "speed-index-metric",
      "estimated-input-latency",
      "first-interactive",
      "consistently-interactive",
      "byte-efficiency/unused-javascript"
    ],
    skipAudits: [
      "byte-efficiency/uses-responsive-images",
      "byte-efficiency/uses-webp-images",
      "seo/meta-description"
    ],
    categories: {
      performance: {
        auditRefs: [
          { id: "unused-javascript", weight: 0, group: "load-opportunities" }
        ]
      }
    }
  }
};
