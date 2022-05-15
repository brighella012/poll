<script lang="ts">
	export let name: string;
	export let color: string;
	export let amount: number;
</script>

<svelte:options tag="tags-element" />


<div class="tag" style="--color: {color}">
	<div class="tag__color" />
	<h4>{name} ({amount})</h4>
</div>

<style lang="scss">
	.tag {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);

		h4 {
			font-size: 18px;
			font-weight: var(--fw-regular);
            text-decoration: underline;
		}

		&__color {
			background-color: var(--color);
			width: 20px;
			height: 20px;
			border-radius: 50%;
		}
	}
</style>
