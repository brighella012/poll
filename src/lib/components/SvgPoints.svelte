<svelte:options tag="svg-points" />

<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import type { StackedBarData } from '../data/seats';

  interface TransformedCords {
    x: number;
    y: number;
    color: string;
    label?: string;
    amount?: string;
    image?: string;
  }

  let transformedArray: TransformedCords[];

  export let svgPointsArray: { x: number; y: number }[];
  export let seatsArray: StackedBarData[];
  export let svgRadius: number;
  export let title: string;

  const transformSVGArray = (): TransformedCords[] => {
    let currentSeatIndex = 0;
    let tempSeatsArray: StackedBarData[] = JSON.parse(JSON.stringify(seatsArray));
    let tempPointsArray = [...svgPointsArray];

    let transformedArray = tempPointsArray.map(cords => {
      let indexExsits = tempSeatsArray[currentSeatIndex];

      if (indexExsits) {
        if (tempSeatsArray[currentSeatIndex].amount == 0) currentSeatIndex++;
      }
      if (tempSeatsArray[currentSeatIndex]) tempSeatsArray[currentSeatIndex].amount -= 1;

      return {
        ...cords,
        color: tempSeatsArray[currentSeatIndex]?.color || 'lightgray',
        label: tempSeatsArray[currentSeatIndex]?.label,
        amount: String(seatsArray[currentSeatIndex]?.amount),
        image: seatsArray[currentSeatIndex]?.image,
      };
    });

    return transformedArray;
  };

  transformedArray = transformSVGArray();

  const handleCircleMouseEnter = (event: MouseEvent) => {
    const target = <HTMLElement>event.target;

    let label: string = target.dataset.label;
    let amount: string = target.dataset.amount;
    let image: string = target.dataset.image;

    tooltip = { label, amount, image };
  };

  const handleWrapperMouseLeave = (event: MouseEvent) => {
    tooltip = null;
  };

  let tooltip: { label?: string; amount?: string; image?: string };

  onMount(() => {
    const circles = document.querySelectorAll<SVGElement>('circle');
    gsap.to(circles, {
      // fill: 'lightgray',
      opacity: 1,
      delay: 0.3,
      stagger: 0.003,
      duration: 1,
    });
  });
</script>

<div class="wrapper" on:mouseleave={handleWrapperMouseLeave}>
  {#if tooltip?.label}
    <div class="tooltip">
      {#if tooltip?.image}
        <img src={tooltip.image} class="tooltip__image" />
      {/if}
      <h4>{tooltip.label}</h4>
      <h5>{tooltip.amount} seggi</h5>
    </div>
  {/if}
  <h4>{title}</h4>
  <svg viewBox="0 0 360 185" class="svg-seats" fill="black">
    <g stroke-width="8">
      {#each transformedArray as coord, i (i)}
        <circle
          data-label={coord?.label}
          data-amount={coord.amount}
          data-image={coord?.image || null}
          on:mouseenter={handleCircleMouseEnter}
          cx={coord.x}
          cy={coord.y}
          fill={coord.color}
          r={svgRadius}
        />
      {/each}
    </g>
  </svg>
</div>

<style lang="scss">
  .tooltip {
    position: absolute;
    left: 50%;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateX(-50%);

    &__image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid red;
    }

    h4 {
      font-size: 14px;
      font-weight: var(--fw-semibold);
    }
  }
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
    margin: var(--space-md) 0;
    width: 100%;
  }
  svg circle {
    // opacity: 0;
    // transition: all 0.25s linear;
    opacity: 0.3;
  }
</style>
