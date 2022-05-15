<script lang="ts">
  import CoalitionsCard from './lib/components/CoalitionsCard.svelte';
  import { COALITIONS } from './lib/data/coalitions';
  import './lib/styles/reset.css';
  import './lib/styles/root.css';
  import './lib/styles/global.css';
  import Header from './lib/components/Header.svelte';
  import RegionalCard from './lib/components/RegionalCard.svelte';
  import { REGIONAL_DATA } from './lib/data/regional';
  import PollDataCard from './lib/components/PollDataCard.svelte';
  import { CHAMBERS_POLL_DATA, SENANTE_POLL_DATA } from './lib/data/pollData';
  import StackedBarChart from './lib/components/StackedBarChart.svelte';
  import { CHAMBER_SEATS, SENATE_SEATS } from './lib/data/seats';
  import PartyLegend from './lib/components/PartyLegend.svelte';
  import CandidateScale from './lib/components/CandidateScale.svelte';
  import { chamberSvgCoords, senateSvgCoords } from './lib/data/svgPoints';
  import SvgPoints from './lib/components/SvgPoints.svelte';
</script>

<Header title="REFERENDUM" subtitle="TAGLIO DEI PARLAMENTARI" caption="Fonte: Ministero dell'Interno" />

<section class="cards coalitions">
  {#each COALITIONS as coalition}
    <CoalitionsCard {...coalition} />
  {/each}
</section>
<a class="link" href="">
  Fonte: Ministero del Delirio
</a>

<hr style="margin: 1rem 0;" />

<section class="cards regional-cards">
  {#each REGIONAL_DATA as regional}
    <RegionalCard {...regional} />
  {/each}
</section>
<a class="link" href="">
  Fonte: Ministero del Delirio
</a>

<hr />

<section class="poll-cards">
  <PollDataCard title="Exit Poll Camera" pollData={CHAMBERS_POLL_DATA} />
  <PollDataCard title="Exit Poll Senato" pollData={SENANTE_POLL_DATA} />
</section>
<a class="link" href="">
  Fonte: Nando Pagnoncelli
</a>

<hr />

<section class="cards stacked-bars">
  <StackedBarChart
    data={CHAMBER_SEATS}
    title="Elezioni Politiche 2018 - Seggi Assegnati alla Camera"
    totalSeats={630}
  />
  <StackedBarChart data={SENATE_SEATS} title="Seggi Assegnati al Senato" totalSeats={315} hasMasterLegend />
</section>
<a class="link" href="">
  Fonte: Nando Pagnoncelli
</a>

<section class="party-legend">
  <PartyLegend />
</section>

<CandidateScale
  candidates={[
    { name: 'Joe Biden', party: 'democratico', votes: 232, color: 'var(--color-blue)' },
    { name: 'Donald Trump', party: 'repubblicano', votes: 125, color: 'var(--color-red)' },
  ]}
  winningVotes={270}
/>

<div class="svg-points">
  <SvgPoints title="Camera dei Deputati" seatsArray={SENATE_SEATS} svgPointsArray={senateSvgCoords} svgRadius={4} />
  <SvgPoints
    title="Senato della Repubblica"
    seatsArray={CHAMBER_SEATS}
    svgPointsArray={chamberSvgCoords}
    svgRadius={3.5}
  />
</div>
<a class="link" href="">
  Fonte: Vladimir Putin
</a>

<style>
  .cards {
    display: flex;
    padding: var(--space-xs) 0;
    gap: var(--space-xs);
  }
  .link {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-transform: capitalize;
    color: var(--color-gray-200);
    padding-bottom: 20px;
    font-size: 14px;
  }
  .party-legend {
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-200);
    margin: var(--space-md) 0;
    padding: var(--space-2xs);
    border-radius: 6px;
  }
  .svg-points {
    display: flex;
    gap: var(--space-sm);
    margin: var(--space-xs) 0;
  }
  .poll-cards {
    display: flex;
    gap: 1rem;
    height: 400px;
    margin: var(--space-md) 0;
  }
  .stacked-bars {
    flex-direction: column;
    gap: var(--space-md);
  }
</style>
