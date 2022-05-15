<script lang="ts">
	import type { RegionalCandidate, RegionalData } from '../data/regional';

	export let title: string;
	export let href: string;
	export let candidates: RegionalCandidate[];

	/* Formats candidates percentage depending on weather
        it's an array of percentages [12, 15] or a number 12.
    */
	const formatPercentages = (percentage: number | [number, number]) => {
		if (Array.isArray(percentage)) return `${percentage[0]} - ${percentage[1]}`;

		return percentage.toString();
	};
</script>

<svelte:options tag="regional-card" />


<div class="card">
	<header>
		{title}
	</header>

	<div class="card__body">
		{#each candidates as candidate}
			{@const percentage = formatPercentages(candidate.percentages)}

			<div class="candidate">
				<img
					class="candidate__thumbnail"
					src={candidate.imageSrc}
					alt="Fontana headshot"
					style:border-color="var(--color-{candidate.borderColor})"
				/>

				<div class="candidate__data">
					<h2 class="candidate__percentage">{percentage}%</h2>
					<h4>{candidate.firstName} {candidate.lastName}</h4>
					<h6>{candidate.coalition}</h6>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		border-radius: 5px;
		box-shadow: var(--shadow-card);

		header {
			display: flex;
			border-top-right-radius: inherit;
			border-top-left-radius: inherit;
			justify-content: center;
			font-weight: var(--fw-semibold);
			background-color: #efefef;
			padding: var(--space-2xs) var(--space-xs);
			border-bottom: 3px solid rgb(221, 221, 221);
		}

		&__body {
			justify-content: space-between;
			align-items: center;
			text-align: center;
			background-color: #f9f9f9;
			display: flex;
			gap: var(--space-xs);
			padding: var(--space-2xs);
			border-bottom-left-radius: inherit;
			border-bottom-right-radius: inherit;
		}
	}

	.candidate {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--space-xs);

		&__thumbnail {
			width: 70px;
			height: 70px;
			border-radius: 50%;
			border: 3px solid;
		}

		&__percentage {
			font-size: calc(var(--text-h2) - 3px);
			letter-spacing: -2.5px;
		}

		&__data {
			display: flex;
			flex-direction: column;
			gap: var(--space-2xs);
		}

		&__data h6 {
			color: var(--color-gray-200);
		}
	}
</style>
