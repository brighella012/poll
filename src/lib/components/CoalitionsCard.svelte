<script lang="ts">
	import type { BorderColor } from '../types/global';

	export let title: string;
	export let roomPercentages: [number, number];
	export let senatePercentages: [number, number];
	export let borderColor: BorderColor;
	export let imagesSrc: string[] = [];
</script>

<!-- <svelte:options tag="coalitions-card" /> -->

<div class="card">
	<header style:border-color="var(--color-{borderColor}">
		{title}
	</header>

	<div class="card__body">
		<div class="percentage">
			<h6>Senate</h6>
			<div class="percentage__amounts">
				{senatePercentages[0]}-{senatePercentages[1]}%
			</div>
		</div>

		<div class="divider" />

		<div class="percentage">
			<h6>Camera</h6>
			<div class="percentage__amounts">
				{roomPercentages[0]}-{roomPercentages[1]}%
			</div>
		</div>
	</div>

	<div class="card__images">
		{#each imagesSrc as image}
			<img src={image} alt="" class="card__image" />
		{/each}
	</div>
</div>

<style lang="scss">
	.card {
		background-color: #f9f9f9;
		width: 100%;
		border-radius: 5px;
		box-shadow: var(--shadow-card);

		&__body {
			justify-content: center;
			align-items: center;
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: var(--space-xs);
			padding: var(--space-2xs);
			border-bottom-left-radius: inherit;
			border-bottom-right-radius: inherit;
		}

		&__images {
			display: flex;
			justify-content: center;
			gap: var(--space-2xs);
			padding: var(--space-2xs);
		}

		&__image {
			width: 30px;
			height: 30px;
		}

		header {
			display: flex;
			border-top-right-radius: inherit;
			border-top-left-radius: inherit;
			justify-content: center;
			font-weight: var(--fw-semibold);
			background-color: #efefef;
			padding: var(--space-2xs) var(--space-xs);
			border-bottom: 3px solid var(--color-red);
		}
	}

	.percentage {
		&__amounts {
			font-weight: var(--fw-semibold);
			font-size: var(--text-h3);
			letter-spacing: -1px;
		}
		:nth-child(1) {
			margin-bottom: var(--space-3xs);
		}
	}

	.divider {
		height: 35px;
		margin: -6px 0;
		background-color: var(--color-gray-200);
		opacity: 0.3;
		width: 2px;
	}
</style>
