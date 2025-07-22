module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            settings: {
                onlyCategories: [
                    "performance"
                ]
            },
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