import { defineConfig } from 'vitest/config'

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		globals: true,
		environment: 'node',
		setupFiles: ['./tests/setup.ts'],
		include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'json-summary', 'html'],
			include: [
				'src/lib/utils.ts',
				'src/lib/data.ts',
				'src/lib/articles.ts',
				'src/utils/utils.ts',
				'src/components/UI/Button.tsx',
				'src/components/UI/Chip.tsx',
				'src/components/UI/Spinner.tsx',
				'src/components/UI/Skeleton.tsx',
				'src/components/UI/Label.tsx',
				'src/components/UI/Input.tsx',
				'src/components/UI/Checkbox.tsx',
				'src/components/UI/ProgressBar.tsx',
				'src/components/UI/Tooltip.tsx',
				'src/components/UI/Accordion.tsx',
				'src/components/UI/Select.tsx',
				'src/components/UI/Tabs.tsx',
				'src/components/UI/Dialog.tsx',
			],
			thresholds: {
				lines: 70,
				functions: 70,
				branches: 70,
				statements: 70,
			},
		},
	},
})
