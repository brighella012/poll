<script lang="ts">
	import type { PollData } from '../data/pollData';
	import type { ChartOptions, PluginOptionsByType, ScaleOptionsByType } from 'chart.js';
	import { CategoryScale, Chart, LinearScale, Tooltip, BarElement, BarController } from 'chart.js';
	import type { DeepPartial } from 'chart.js/types/utils';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { onMount } from 'svelte';

	Chart.register(LinearScale, CategoryScale, Tooltip, ChartDataLabels, BarElement, BarController);

	export let title: string;
	export let pollData: PollData[];

	let chartElement: HTMLCanvasElement;

	/* CHART PLUGINS */
	const CHART_PLUGINS: DeepPartial<PluginOptionsByType<'bar'>> = {
		tooltip: {
			enabled: true,
			displayColors: false
		},
		datalabels: {
			clip: false,
			anchor: 'end',
			align: 'right',
			color: 'black',
			font: {
				weight: 'bold'
			},
			formatter: (value) => `${value}%`
		},
		legend: {
			display: false
		}
	};
	``;

	/* CHART SCALES */
	const CHART_SCALES: DeepPartial<{ [key: string]: ScaleOptionsByType<'category'> }> = {
		y: {
			ticks: {
				crossAlign: 'far',
				font: {
					size: 11
				}
			},
			grid: {
				display: true
			}
		},
		x: {
			grid: {
				display: false
			}
		}
	};

	/* ALL CHART OPTIONS, (SCALES, PLUGINS) */
	const CHART_OPTIONS: ChartOptions<'bar'> = {
		indexAxis: 'y',
		responsive: true,
		maintainAspectRatio: false,
		plugins: CHART_PLUGINS,
		scales: CHART_SCALES,
		layout: {
			padding: {
				right: 25
			}
		}
	};

	const datasetColor = () => pollData.map((data) => data.color);
	const databaseLabels = () => pollData.map((data) => data.label);
	const databaseValues = () => pollData.map((data) => data.value);

	/* Initilaize chart.js library */
	const initChart = () => {
		const chart = new Chart(chartElement, {
			type: 'bar',
			data: {
				labels: databaseLabels(),
				datasets: [
					{
						label: 'Votes %',
						data: databaseValues(),
						backgroundColor: datasetColor()
					}
				]
			},
			options: CHART_OPTIONS
		});

		return chart;
	};

	onMount(() => {
		const chart = initChart();

		return () => {
			chart.destroy();
		};
	});
</script>

<svelte:options tag="poll-card" />

<div class="card">
	<h4>{title}</h4>
	<div class="chart">
		<canvas bind:this={chartElement} id="myChart" width="100%" height="100%" />
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		display: flex;
		height: 100%;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.chart {
		background-color: --color-;
		height: 100%;
		background-color: #f9f9f9;
		border-radius: 7px;
		padding: var(--space-2xs);
		box-shadow: var(--shadow-card);
	}
</style>
