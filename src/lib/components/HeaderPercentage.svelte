<script lang="ts">
	/* SÌ or NO */
	export let voteType: string;
	export let votesAmount: number;
	export let percent: number;
</script>

<svelte:options tag="header-percentage" />


<div class="wrapper">
	<span class="type">{voteType}</span>

	<div class="votes">
		<h5 class="votes__percentage">{percent}%</h5>
		<h5 class="votes__votes">
			<span>VOTIE</span>
			{votesAmount}
		</h5>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}
	.type {
		font-size: 66px;
		color: var(--color-gray-100);
	}
	.votes {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);

		&__percentage {
			font-size: 40px;
			color: var(--color-burgundy);
			font-weight: var(--fw-bold);
		}

		span {
			color: black;
		}

		h5 {
			color: var(--color-burgundy);
		}
	}
</style>
