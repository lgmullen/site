<script>
	import Icon from '../Icon.svelte';
</script>

<div class="about-page" id="about">
	<div class="image-container">
		<p class="section-header">
			NYC based full stack software engineer with 4 years of professional experience seeking
			full-time employment. Exceptionally motivated to learn and master new technologies while
			working in a fast moving team-based environment. Experience in:
		</p>
		<img class="about-image" src="/images/backgrounds/bg3.webp" alt="skills-marquee" />
	</div>
	<div id="container">
		<div id="container1">
			<div class="marquee">
				<div class="marquee-content">
					<h2>TYPESCRIPT / REACT / SVELTE / PYTHON / JAVASCRIPT /&nbsp;</h2>
				</div>
				<div class="marquee-content">
					<h2>TYPESCRIPT / REACT / SVELTE / PYTHON / JAVASCRIPT /&nbsp;</h2>
				</div>
			</div>
		</div>
		<div id="container2">
			<p id="project-text">view projects...</p>
			<a href="#work">
				<Icon name="downButton" width="64px" height="64px" fill="green" class="ml-4 mt-4" />
			</a>
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Hyperblaster Regular';
		font-style: normal;
		font-weight: normal;
		src: local('Hyperblaster Regular'), url('/fonts/HYPERBLA.woff') format('woff');
	}
	#container1 {
		display: flex;
		flex: 1;
	}
	#container2 {
		display: flex;

		flex: 1;
		flex-direction: ' row';
		justify-content: center;
	}

	.about-image {
		top: 0;
		right: 0;
		width: 600px;
		border-left: 1px solid white;
		margin-left: auto;
	}
	.section-header {
		font-family: Hyperblaster Regular;
		font-size: 2rem;
		color: rgb(39, 182, 0);
		padding: 2rem;
	}
	.image-container {
		display: flex;
		box-sizing: border-box;
		height: 400px;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
		margin-left: -2px;
	}
	#container {
		display: flex;
		flex-direction: column;
	}

	#about {
		scroll-behavior: smooth;
		height: calc(100vh);
		background-color: #121212;
		/* background-image: url(/images/backgrounds/bg3.webp); */
		/* background-size: 100% 100%;
		background-size: 'fit';
		background-repeat: no-repeat; */
		position: relative;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid white;
	}

	#project-text {
		color: white;
		font-size: 3rem;
	}

	.marquee {
		height: 100px;
		overflow: hidden;
		position: relative;
		background: #20be00;
		color: #333;
		display: flex;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.marquee-content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: var(--gap);
		min-width: 100%;
		animation: scroll 20s linear infinite;
		font-size: 4rem;
	}
	.marquee:hover .marquee-content {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	@media only screen and (max-width: 768px) {
		.about-image {
			border-top: 1px solid white;
		}
		.image-container {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			border-top: 1px solid white;
			border-bottom: 1px solid white;
			margin-left: -2px;
			height: auto;
		}
		.section-header {
			font-family: Hyperblaster Regular;
			font-size: 1.5rem;
			color: rgb(39, 182, 0);
		}
		.marquee-content {
			gap: var(--gap);
			min-width: 100%;
			animation: scroll 20s linear infinite;
			font-size: 4rem;
		}
		#container {
			display: flex;
			flex: 1;
			flex-direction: column;
		}

		#about {
			width: 100%;
			scroll-behavior: smooth;
			height: calc(100vh);
			background-color: #121212;
			position: relative;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid white;
		}
		#container2 {
			display: none;
		}
	}
</style>
