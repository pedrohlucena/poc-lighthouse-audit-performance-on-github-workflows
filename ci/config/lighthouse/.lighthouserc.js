module.exports = {
    ci: {
        collect: {
            numberOfRuns: 1,
            settings: {
                onlyCategories: [
                    "performance"
                ]
            },
            puppeteerScript: "../scripts/lighthouse/audited-application-auth-middleware.cjs"
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