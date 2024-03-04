<script lang="ts">
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';

	let showModal: boolean = false;
	function handleWindowKeyDown(event: { key: string }) {
		if (event.key === 'Escape') {
			showModal = false;
		}
	}
</script>

<div id="header" on:keydown={handleWindowKeyDown} role="presentation">
	<spacer class="flex-grow" />
	{#each ['Experience', 'About', 'Work', 'Contact'] as section, index}
		<a href={`#${section.toLowerCase()}`} class="header-item">
			<p class="inline">0{index + 1}.</p>
			<p>{section}</p>
		</a>
	{/each}

	<spacer />
	<div id="hamburger">
		<button id="hamburger-button" aria-label="open menu" on:click={() => (showModal = true)}>
			<Icon
				on:click={() => (showModal = true)}
				name="delete"
				width="48px"
				height="48px"
				stroke="green"
			/>
		</button>
	</div>
	<Modal bind:showModal />
</div>

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
		padding: 12px;
	}
	p {
		color: rgb(245, 234, 204);
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
		font-size: 2em;
	}
	#header {
		background-color: #000;
		display: flex;
		position: fixed;
		align-items: center;
		height: 100px;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
	}
	a {
		margin-left: 16px;
		padding: 4;
		display: flex;
	}
	button {
		display: hidden;
	}

	@media only screen and (max-width: 768px) {
		.header-item {
			display: none;
		}
		#header {
			width: 100dvw;
		}
	}
</style>
