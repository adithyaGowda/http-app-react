import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://01dab79dd2cf4b4d94c330a174c6f119@o609688.ingest.sentry.io/5753131",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
