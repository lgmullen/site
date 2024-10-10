<script>
	import Header from '../components/Header.svelte';
	import About from '../components/Pages/About.svelte';
	import Experience from '../components/Pages/Experience.svelte';
	import Work from '../components/Pages/Work.svelte';
	import Contact from '../components/Pages/Contact.svelte';
	import '../app.css';

	let mouseX = 40;
	let mouseY = 40;
	let scrollY = 0;
	let posY = 0;

	let displayInvertedCursor = true;

	/**
	 * @param {{ clientX: number; clientY: number; }} event
	 */

	// @ts-ignore
	function handleMousemove(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		posY = mouseY + scrollY;
	}
	function handleScroll() {
		scrollY = window.scrollY;
		posY = scrollY + mouseY;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:window on:mousemove={handleMousemove} on:scroll={handleScroll} />
<Header bind:displayInvertedCursor />

<div id="articles">
	{#if displayInvertedCursor == true}
		<div style="--mouseX:{mouseX}; --posY:{posY}" id="invertedcursor" />
	{/if}

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<About />
	<Work />
	<Experience />
	<Contact />
	<div class="noise" />
</div>

<style>
	.noise {
		background-image: url('https://cdn.prod.website-files.com/6633d206a0410971e6ab2fe4/6633d206a0410971e6ab2fee_ezgif.com-gif-maker.gif');
		background-position: 0 0;
		background-size: auto;
		width: 100vw;
		height: 100vh;
		position: fixed;
		inset: 0%;
		overflow: hidden;
		opacity: 0.04;
		pointer-events: none;
	}
	#articles {
		width: 100dvw;
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
		display: flex;
		flex-direction: column;
		position: relative;
		padding-left: 88px;
	}
	#invertedcursor {
		pointer-events: none;
		position: absolute;
		width: 120px;
		height: 120px;
		top: calc(var(--posY, 0) * 1px);
		left: calc(var(--mouseX, 0) * 1px);
		background: #fff;
		border-radius: 50%;
		z-index: 10000;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		transition: transform 0.9s;
	}
	@media only screen and (max-width: 768px) {
		#invertedcursor {
			display: none;
		}
		#articles {
			padding-left: 0px;
		}
	}
</style>
