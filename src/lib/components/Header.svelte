<script lang="ts">
	import HeaderPercentage from './HeaderPercentage.svelte';

	export let title: string;
	export let subtitle: string;
	export let caption: string;
</script>

<svelte:options tag="header-tag" />

<section class="header-wrap">
	<header>
		<h2>{title}</h2>
		<h4>{subtitle}</h4>
		<h6 class="caption">{caption}</h6>
	</header>

	<div class="votes">
		<HeaderPercentage percent={22} voteType="SÌ" votesAmount={2.222} />
		<HeaderPercentage percent={44} voteType="NO" votesAmount={21.11} />
	</div>
</section>

<section class="details">
	<div class="details__item">
		<h5>AFFLUENZA:</h5>
		<span class="details__stat">44%</span>
	</div>

	<div class="divider" />

	<div class="details__item">
		<h5>SEZIONI:</h5>
		<span class="details__stat">22</span>
		<h5>SU:</h5>
		<span class="details__stat">333</span>
	</div>
</section>

<style lang="scss">
	.header-wrap {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		border: 1px solid var(--color-white);
		padding: var(--space-xs);
	}

	.details {
		border: 1px solid var(--color-white);
		border-top: none;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-2xs);

		h2 {
			color: var(--color-gray-200);
		}
		h4 {
			color: var(--color-gray-200);
			font-weight: var(--fw-light);
		}

		.caption {
			font-style: italic;
		}
	}

	.votes {
		display: flex;
		justify-content: space-between;
		gap: var(--space-xl);
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	.details {
		display: flex;
		margin-left: 40px;
		justify-content: center;
		gap: var(--space-xs);
		align-items: center;

		font-size: var(--text-h5);
		text-transform: uppercase;
		padding: var(--space-2xs);

		&__stat {
			font-weight: var(--fw-semibold);
			color: var(--color-burgundy);
		}

		&__item {
			display: flex;
			gap: var(--space-3xs);
		}

		.divider {
			min-height: 15px;
			background-color: black;
			width: 1px;
		}
	}
</style>
