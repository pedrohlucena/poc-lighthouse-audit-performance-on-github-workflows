const puppeteer = require("puppeteer");

module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            settings: {
                onlyCategories: [
                    "performance"
                ]
            },
            puppeteerScript: "ci/scripts/lighthouse/audited-application-auth-middleware.cjs",
            chromePath: puppeteer.executablePath(),
            puppeteerLaunchOptions: {
                args: [
                    "--no-sandbox"
                ]
            }
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