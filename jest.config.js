module.exports = {

    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    testMatch: [
      "**/__tests__/**/*.spec.js"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ]
};
