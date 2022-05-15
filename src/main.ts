import App from './App.svelte';
export * from './lib/components/CandidateScale.svelte';
export * from './lib/components/CoalitionsCard.svelte';
export * from './lib/components/Header.svelte';
export * from './lib/components/HeaderPercentage.svelte';
export * from './lib/components/PartyLegend.svelte';
export * from './lib/components/PollDataCard.svelte';
export * from './lib/components/RegionalCard.svelte';
export * from './lib/components/StackedBarChart.svelte';
export * from './lib/components/SvgPoints.svelte';
export * from './lib/components/Tags.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
