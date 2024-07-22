<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import HeaderButton from './HeaderButton.svelte';

	export let displayInvertedCursor: boolean;

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
		<div class="flex flex-row align-center ml-auto items-center mr-3">
			<label class="text-white" for="cheese">toggle mouse</label>
			<input
				type="checkbox"
				class="toggle mr-2"
				on:click={() => (displayInvertedCursor = !displayInvertedCursor)}
			/>
			<label class="btn btn-circle swap swap-rotate ml-auto" aria-label="open menu">
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
	</div>
	{#if visible}
		<div class="flex flex-row justify-center border-orange-500 border-2 w-full h-[22rem]">
			<div class="flex flex-col justify-center align-middle">
				<a
					href="https://drive.google.com/file/d/18fW0hFdJ_dZy89hixKhNqxn4Wzh5lsGu/view?usp=sharing"
					target="_blank"
					id="resume-button">Download Resume</a
				>
			</div>
		</div>
	{/if}
</div>

<style>
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
	#resume-button {
		color: rgb(232, 132, 2);
		font-size: 2rem;
		text-decoration: underline;
		transition: font-size 300ms ease-in;
		&:hover {
			font-size: 2.1rem;
		}
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
