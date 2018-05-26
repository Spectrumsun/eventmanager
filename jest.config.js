module.exports = {
  verbose: true,
  rootDir: 'client',
  roots: [
    '<rootDir>'
  ],
  setupFiles: [
    '<rootDir>/test/testConfig.js',
    '<rootDir>/test/mocks/localStorage.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/template/',
    '/sever/',
    '/build/',
    '/.github/',
    '/.nyc_output/',
    '/covrage/',
    '<rootDir>/coverage/',
    '<rootDir>/src/index',
    '<rootDir>/src/store/actions/index',
    '<rootDir>/src/static',
    '<rootDir>/src/public'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/src/index',
    '<rootDir>/src/store/actions/index',
    '<rootDir>/test/',
    '<rootDir>/public'
  ],
  unmockedModulePathPatterns: [
    './node_modules/react'
  ],
  testEnvironment: 'jsdom',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  moduleFileExtensions: [
    'js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css)$': '<rootDir>/tests/mocks/styleMock.js'
  }
};

