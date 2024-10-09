<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import '../styles.css';
	import HeaderButton from './HeaderButton.svelte';

	export let displayInvertedCursor: boolean;

	let visible: boolean = false;
	function handleWindowKeyDown(event: { key: string }) {
		if (event.key === 'Escape') {
			visible = false;
		}
	}
	const showMenu = tweened(-400, {
		duration: 700,
		easing: quintOut
	});
	$: visible ? ($showMenu = 0) : ($showMenu = -400);
</script>

<div id="header" on:keydown={handleWindowKeyDown} role="presentation" style="left: {$showMenu}px">
	<div class="menu-bar">
		<label class="btn btn-circle swap swap-rotate" aria-label="open menu">
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
		<h1 id="title-text">Lawrence mullen</h1>

		<button> click me!</button>
	</div>
	<div class="menu-drawer">
		<div id="nav-options">
			{#each ['Experience', 'About', 'Work', 'Contact'] as section, index}
				<HeaderButton {section} {index} bind:visible />
			{/each}
		</div>
	</div>
</div>

<style>
	#header {
		display: flex;
		flex-direction: row;
		background-color: black;
		font-family: 'brandon-grotesque', sans-serif;
		color: #ffffffd2;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 100%;
		position: fixed;
		z-index: 4;
		top: 0;
		left: -334;
		border-right: 2px solid white;
		height: 100vh;
		width: 400px;
	}
	#title-text {
		writing-mode: vertical-lr;
		font-size: 4rem;
		font-family: Arial, sans-serif;
	}

	.menu-bar {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		font-family: 'brandon-grotesque', sans-serif;
		color: #ffffff;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		position: absolute;
		width: 88px;
		z-index: 1;
		left: 100%;
		margin-left: 1px;
		background-color: black;
		height: 100vh;
		border-right: 2px solid #ffffffd2;
	}
	.menu-drawer {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	@media only screen and (max-width: 768px) {
		#nav-options {
			display: none;
		}
		#mouse-toggle {
			display: none;
		}
		.header-item {
			display: none;
		}
		#header {
			width: 100dvw;
			overflow: hidden;
		}
	}
</style>
