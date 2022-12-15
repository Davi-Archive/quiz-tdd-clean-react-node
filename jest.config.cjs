module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: "@shelf/jest-mongodb",
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}