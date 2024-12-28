const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
	preset: "ts-jest",
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg|eot|otf|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
  ],
	coveragePathIgnorePatterns: [
		'pages/**/*.{js,jsx,ts,tsx}',
		'store/**/*.{js,jsx,ts,tsx}',
		'services/**/*.{js,jsx,ts,tsx}',
		'assets/**/*.{js,jsx,ts,tsx}',
		'utils/**/*.{js,jsx,ts,tsx}',
		'config/**/*.{js,jsx,ts,tsx}',
	]
};

module.exports = createJestConfig(customJestConfig);
