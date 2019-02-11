process.env.FUSEBOX_DIST_ROOT = __dirname;
module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfig: "tests/tsconfig.test.json",
    },
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  testRegex: "tests/.*\\.test\\.ts$",
  testPathIgnorePatterns: [
    "/lib/",
    "/node_modules/",
    "_playground/",
    "src/",
    "dist/",
    ".dev/",
    "_current_test",
    "website",
  ],
  maxConcurrency: 1,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "json"],
  //collectCoverage: true,
};