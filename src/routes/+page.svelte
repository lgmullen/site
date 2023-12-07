<script>
	import Header from '../components/Header.svelte';
	import About from '../components/Pages/About.svelte';
	import Experience from '../components/Pages/Experience.svelte';
	import Work from '../components/Pages/Work.svelte';
	import Contact from '../components/Pages/Contact.svelte';

	export const prerender = true;
</script>

<Header />
<div id="articles">
	<About />
	<Experience />
	<Work />
	<Contact />
</div>

<style>
	#articles {
		font-family: Serial, Impact, 'Arial Narrow', Arial, sans-serif;
		& h1 {
			font-size: 5rem;
		}
	}
</style>
