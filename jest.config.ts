import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	coverageReporters: ['text', 'cobertura'],
	collectCoverage: true,
	coverageDirectory: 'var/coverage/jest',
}

export default config
