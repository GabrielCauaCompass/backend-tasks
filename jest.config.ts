import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

export default config;
