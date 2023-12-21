<script lang="ts">
	import Icon from './Icon.svelte';
	import { resumeUrl } from '../helper.js';

	export let showModal: Boolean;
</script>

{#if showModal}
	<div id="modal" tabindex="-1">
		<div id="header-bar" style="border: 2px solid green">
			<div
				id="hamburger"
				style="display: flex; flex-direction: column; align-items: center; justify-content:center;"
			>
				<button id="hamburger-button" aria-label="open menu" on:click={() => (showModal = false)}>
					<Icon name="cross" width="64px" height="64px" stroke="yellow" />
				</button>
				<p style=" text-align: center; margin:0; padding:0; font-size: 20px">( esc )</p>
			</div>
		</div>
		<div id="items">
			<a href={resumeUrl} target="_blank"> Download Resume </a>
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
		color: white;
	}
	#header-bar {
		display: flex;
		position: fixed;
		align-items: center;
		height: 100px;
		top: 0;
		left: 0;
		width: 100%;
	}
	#items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}
</style>
