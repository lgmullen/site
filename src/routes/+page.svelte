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

<!-- .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .-----------------. .----------------.  .----------------.   
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |  
| |   _____      | || |      __      | || | _____  _____ | || |  _______     | || |  _________   | || | ____  _____  | || |     ______   | || |  _________   | |  
| |  |_   _|     | || |     /  \     | || ||_   _||_   _|| || | |_   __ \    | || | |_   ___  |  | || ||_   \|_   _| | || |   .' ___  |  | || | |_   ___  |  | |  
| |    | |       | || |    / /\ \    | || |  | | /\ | |  | || |   | |__) |   | || |   | |_  \_|  | || |  |   \ | |   | || |  / .'   \_|  | || |   | |_  \_|  | |  
| |    | |   _   | || |   / ____ \   | || |  | |/  \| |  | || |   |  __ /    | || |   |  _|  _   | || |  | |\ \| |   | || |  | |         | || |   |  _|  _   | |  
| |   _| |__/ |  | || | _/ /    \ \_ | || |  |   /\   |  | || |  _| |  \ \_  | || |  _| |___/ |  | || | _| |_\   |_  | || |  \ `.___.'\  | || |  _| |___/ |  | |  
| |  |________|  | || ||____|  |____|| || |  |__/  \__|  | || | |____| |___| | || | |_________|  | || ||_____|\____| | || |   `._____.'  | || | |_________|  | |  
| |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |  
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |  
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'   
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .-----------------.                                          
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |                                          
| | ____    ____ | || | _____  _____ | || |   _____      | || |   _____      | || |  _________   | || | ____  _____  | |                                          
| ||_   \  /   _|| || ||_   _||_   _|| || |  |_   _|     | || |  |_   _|     | || | |_   ___  |  | || ||_   \|_   _| | |                                          
| |  |   \/   |  | || |  | |    | |  | || |    | |       | || |    | |       | || |   | |_  \_|  | || |  |   \ | |   | |                                          
| |  | |\  /| |  | || |  | '    ' |  | || |    | |   _   | || |    | |   _   | || |   |  _|  _   | || |  | |\ \| |   | |                                          
| | _| |_\/_| |_ | || |   \ `--' /   | || |   _| |__/ |  | || |   _| |__/ |  | || |  _| |___/ |  | || | _| |_\   |_  | |                                          
| ||_____||_____|| || |    `.__.'    | || |  |________|  | || |  |________|  | || | |_________|  | || ||_____|\____| | |                                          
| |              | || |              | || |              | || |              | || |              | || |              | |                                          
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |                                          
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'                                            -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:window on:mousemove={handleMousemove} on:scroll={handleScroll} />
<div id="articles">
	<div style="--mouseX:{mouseX}; --posY:{posY}" id="invertedcursor" />

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<Header />
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
</style>
