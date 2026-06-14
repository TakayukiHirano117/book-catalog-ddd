/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  watchman: false,
  verbose: true,
  maxWorkers: 1,
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: ["/node_modules"],
};