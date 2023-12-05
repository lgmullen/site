<script lang="ts">
	import Icon from './Icon.svelte';

	export let showModal: Boolean;
</script>

{#if showModal}
	<div id="modal">
		<div id="header-bar">
			<div id="hamburger">
				<button id="hamburger-button" aria-label="open menu" on:click={() => (showModal = false)}>
					<Icon name="cross" width="64px" height="64px" stroke="yellow" />
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	#hamburger {
		& button {
			all: unset;
		}
		& button:hover {
			cursor: pointer;
		}
		display: flex;
		margin-left: auto;
		padding: 4px;
	}
	#modal {
		height: 100vh;
		width: 100vw;
		background-color: #000;
		position: fixed;
		top: 0;
	}
	#header-bar {
		background-color: #000;
		display: flex;
		position: fixed;
		align-items: center;
		height: 100px;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>
