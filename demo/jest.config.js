module.exports = {
  verbose: false,
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  globals: {
    "ts-jest": {
      isolatedModules: true,
      diagnostics: false
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  modulePaths: ["<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
};
