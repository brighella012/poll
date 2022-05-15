import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        './src/lib/components/CandidateScale.svelte',
        './src/lib/components/CoalitionsCard.svelte',
        './src/lib/components/Header.svelte',
        './src/lib/components/HeaderPercentage.svelte',
        './src/lib/components/PartyLegend.svelte',
        './src/lib/components/PollDataCard.svelte',
        './src/lib/components/RegionalCard.svelte',
        './src/lib/components/StackedBarChart.svelte',
        './src/lib/components/SvgPoints.svelte',
        './src/lib/components/Tags.svelte',
      ],
    },
  },
  plugins: [
    svelte({
      // comment this to see DEV
      // exclude: ['./src/App.svelte'],
      // compilerOptions: {
      //   customElement: true,
      // },
    }),
  ],
});
