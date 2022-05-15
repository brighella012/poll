<svelte:options tag="party-legend" />

<script lang="ts">
  import { CHAMBER_SEATS, SENATE_SEATS, type StackedBarData } from '../data/seats';
  import { onMount } from 'svelte';

  const createPartyLegend = (seats: StackedBarData[]) => {};

  onMount(() => {
    createPartyLegend(CHAMBER_SEATS);
  });
</script>

<section>
  {#each CHAMBER_SEATS as seat}
    <div class="legend-item">
      <div class="color" style:background-color={seat.color} />
      <span>{seat.label}</span>
    </div>
  {/each}
</section>

<style lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: var(--color-white);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: var(--space-2xs);
    font-size: var(--text-h5);
    padding: 8px 16px;

    .color {
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }
</style>
