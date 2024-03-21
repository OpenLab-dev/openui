import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  declaration: true,
  peerDependencies: ['tailwindcss'],
  clean: true,
  rollup: {
    inlineDependencies: true,
  },
})
