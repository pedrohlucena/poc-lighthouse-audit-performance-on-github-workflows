export default {
    ci: {
        collect: {
            numberOfRuns: 3,
            settings: {
                onlyCategories: [
                    "performance"
                ],
                chromeFlags: "--headless --no-sandbox --disable-gpu --disable-dev-shm-usage"
            },
            puppeteerScript: "lighthouse-audited-application-auth-middleware.js"
        },
        assert: {
            assertions: {
                "categories:performance": [
                    "error",
                    {
                        minScore: 0.95
                    }
                ],
                "uses-http2": "warn",
                "uses-long-cache-ttl": "warn"
            }
        }
    }
};