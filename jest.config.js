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
    '/.github/',
    '/.nyc_output/',
    '/coverage/',
    '<rootDir>/coverage/',
    '<rootDir>/src/index',
    '<rootDir>/src/store/actions/index',
    '<rootDir>/src/static',
    '<rootDir>/public',
    '<rootDir>/src/App'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/src/index',
    '<rootDir>/src/store/actions/index',
    '<rootDir>/src/store/reducers/index',
    '<rootDir>/src/store/storeConfig',
    '<rootDir>/test/',
    '<rootDir>/public',
    '<rootDir>/src/App'
  ],
  unmockedModulePathPatterns: [
    './node_modules/react'
  ],
  testEnvironment: 'jsdom',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  moduleFileExtensions: [
    'js', 'jsx'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$': '<rootDir>/tests/mocks/fileMock.js',
    '\\.(css)$': '<rootDir>/tests/mocks/styleMock.js'
  }
};

