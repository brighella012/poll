<svelte:options tag="stacked-bar" />

<script lang="ts">
  import type { PartyType, StackedBarData } from '../data/seats';
  import { stackedCharts } from '../store/stackedStore';
  import type {
    ChartEvent,
    ChartOptions,
    LegendElement,
    LegendItem,
    PluginOptionsByType,
    ScaleOptionsByType,
  } from 'chart.js';
  import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
  import type { DeepPartial } from 'chart.js/types/utils';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { onMount } from 'svelte';

  /* Register chart components */
  Chart.register(LinearScale, BarController, CategoryScale, BarElement, Tooltip, Legend, ChartDataLabels);

  export let title: string;
  export let totalSeats: number;
  export let data: StackedBarData[];
  export let hasMasterLegend: boolean = false;

  let chartElement: HTMLCanvasElement;

  let partyMap = new Map<PartyType, number>();
  const legendGroups = new Map<number, PartyType[]>();
  legendGroups.set(0, ['Liberi e Uguali', 'Movimento 5', 'Partito Democratico', 'Centro Sinistra']);
  legendGroups.set(1, ['Movimento 5', 'Lega']);
  legendGroups.set(2, ['Movimento 5', 'Centro Destra', 'Forza Italia', 'Lega']);

  // prettier-ignore
  function handleLegendClick(this: LegendElement<'bar'>, e: ChartEvent, legendItem: LegendItem, legend: LegendElement<'bar'>): void {
		const index = legendItem.datasetIndex;
		const ci = legend.chart;
		if (ci.isDatasetVisible(index)) {
			$stackedCharts.forEach((chart) => chart.hide(index));
			legendItem.hidden = true;
		} else {
			$stackedCharts.forEach((chart) => chart.show(index));
			// ci.show(index);
			legendItem.hidden = false;
		}
	}

  /* CHART PLUGINS */
  const CHART_PLUGINS: DeepPartial<PluginOptionsByType<'bar'>> = {
    tooltip: {
      enabled: true,
      displayColors: false,
    },
    datalabels: {
      display: true,
      color: 'white',
      font: { weight: 'bold' },
      textShadowBlur: 6,
      textShadowColor: 'black',
    },
    legend: {
      display: hasMasterLegend,
      position: 'bottom',
      onClick: handleLegendClick,
    },
  };

  /* CHART SCALES */
  const CHART_SCALES: DeepPartial<{ [key: string]: ScaleOptionsByType<'category'> }> = {
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      max: totalSeats,
    },
  };

  /* ALL CHART OPTIONS, (SCALES, PLUGINS) */
  const CHART_OPTIONS: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: CHART_PLUGINS,
    scales: CHART_SCALES,
  };

  /* 
    I've abstracted (simplfied) the method for passing data into the bar chart.
    This function transforms the abstracted data into something chart.js can understand. 
     */
  const transformChartData = (data: StackedBarData[]) => {
    /* This will get all the seats that are filled */
    const filledSeats = data.reduce((acc, { amount }) => (acc += amount), 0);
    const remainingSeats = totalSeats - filledSeats;

    const DEFAULTS = {
      borderColor: 'white',
      borderWidth: 3,
    };

    const transformedData = data.map(({ amount, color, label }) => ({
      ...DEFAULTS,
      label,
      data: [amount],
      backgroundColor: [color],
    }));

    /* This will add none assigned seats to the bar chart so it isn't empty. */
    if (remainingSeats >= 1)
      transformedData.push({
        ...DEFAULTS,
        label: 'Non assegnati',
        backgroundColor: ['#EFEFEF'],
        data: [remainingSeats],
      });

    return transformedData;
  };

  /* Initilaize chart.js library */
  const initChart = () => {
    const chart = new Chart(chartElement, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: transformChartData(data),
      },
      options: CHART_OPTIONS,
    });

    chart.getSortedVisibleDatasetMetas().forEach(dataset => {
      partyMap.set(dataset.label as PartyType, dataset.index);
    });

    return chart;
  };

  onMount(() => {
    let chart = initChart();
    $stackedCharts = [...$stackedCharts, chart];

    return () => {
      /* Reset chart store on destory */
      if ($stackedCharts.length >= 2) $stackedCharts = [];
      chart.destroy();
    };
  });
</script>

<div class="card">
  <h4>{title}</h4>
  <div class="chart">
    <div class="majorty">
      <div class="majorty__tooltip">
        Maggioranza: {Math.round(totalSeats / 2)} seggi su {totalSeats}
      </div>
    </div>
    <canvas bind:this={chartElement} id="myChart" width="100%" height="100%" />
  </div>
</div>

<style lang="scss">
  .card {
    width: 100%;
    display: flex;
    height: 230px;
    flex-direction: column;
    gap: var(--space-xs);
  }
  .chart {
    position: relative;
    height: 100%;
    border-radius: 7px;
    padding: var(--space-2xs) 0;
  }
  .majorty {
    position: absolute;
    height: 70%;
    width: 2px;
    border-radius: 4px;
    background-color: var(--color-gray-300);
    border: 2px solid white;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);

    &__tooltip {
      position: absolute;
      left: 50%;
      top: 0;
      border: 1px solid var(--color-gray-200);
      padding: var(--space-3xs);
      font-size: var(--text-h5);
      border-radius: 7px;
      transform: translateX(-50%);
      background-color: var(--color-white);
      width: max-content;
    }
  }
</style>
