module.exports = {
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', './src'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://127.0.0.1:8000/',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle image imports
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/mocks/fileMock.ts',

    // Handle CSS imports (without CSS modules)
    '\\.(css|less)$': '<rootDir>/src/tests/mocks/fileMock.css',

    // Handle react-leaflet imports
    'react-leaflet': '<rootDir>/src/tests/mocks/fileMock.ts',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { isolatedModules: true }],
  },
};
