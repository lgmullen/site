<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import HeaderButton from './HeaderButton.svelte';

	let visible: boolean = false;
	function handleWindowKeyDown(event: { key: string }) {
		if (event.key === 'Escape') {
			visible = false;
		}
	}
	const containerHeight = tweened(100, {
		duration: 700,
		easing: quintOut
	});
	$: visible ? ($containerHeight = 600) : ($containerHeight = 100);
</script>

<div
	style="height: {$containerHeight}px"
	id="header"
	on:keydown={handleWindowKeyDown}
	role="presentation"
>
	<div class="flex flex-row fixed top-0 left-0 w-full">
		<spacer />
		{#each ['Experience', 'About', 'Work', 'Contact'] as section, index}
			<HeaderButton {section} {index} bind:visible />
		{/each}
		<spacer />
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label class="btn btn-circle swap swap-rotate ml-auto mt-6 mr-4" aria-label="open menu">
			<input class="fill-black-700" type="checkbox" on:click={() => (visible = !visible)} />

			<svg
				class="swap-off fill-purple-700"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
			>

			<svg
				class="swap-on fill-purple-700"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
				><polygon
					points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
				/></svg
			>
		</label>
	</div>
	{#if visible}
		<p class="text-white font-bold px-4 cursor-default whitespace-nowrap">whathwhtea</p>
	{/if}
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
