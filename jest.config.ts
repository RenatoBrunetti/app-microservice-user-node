export default {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/main/config/env.ts'
	],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': ['ts-jest', { useESM: true }]
	}
};
