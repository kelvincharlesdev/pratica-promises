module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['./dist'],
  testPathIgnorePatterns: ['./dist'],
  testTimeout: 20000,
};
