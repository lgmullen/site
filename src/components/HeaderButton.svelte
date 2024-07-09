<script lang="ts">
	export let section: string;
	export let index: number;
	export let visible: boolean;
</script>

<div>
	<a href={`#${section.toLowerCase()}`} class="header-item" on:click={() => (visible = false)}>
		<p class="inline">0{index + 1}.</p>
		<p>{section}</p>
	</a>
</div>

<style>
	.header-item {
		font-size: 1.5rem;
		color: white;
		display: flex;
		align-items: center;
		margin: 1rem;
		padding: 0;

		text-decoration: underline 0.15em rgba(255, 255, 255, 0);
		transition: text-decoration-color 300ms, color 300ms ease, font-size 150ms ease-in-out;
		& p {
			margin: 0;
			padding: 0;
		}
	}

	.header-item:hover {
		text-decoration-color: #6700ab;
		& p {
			color: #6700ab;
		}
		font-size: 1.75em;
	}
	p {
		color: rgb(245, 234, 204);
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
		font-size: 2em;
	}
</style>
