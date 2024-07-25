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
<div id="articles">
	{#if displayInvertedCursor == true}
		<div style="--mouseX:{mouseX}; --posY:{posY}" id="invertedcursor" />
	{/if}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<Header bind:displayInvertedCursor />
	<Experience />
	<About />
	<Work />
	<Contact />
</div>

<style>
	#articles {
		width: 100dvw;
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
		display: flex;
		flex-direction: column;
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
		z-index: 3;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		transition: transform 0.9s;
	}
	@media only screen and (max-width: 768px) {
		#invertedcursor {
			display: none;
		}
	}
</style>
