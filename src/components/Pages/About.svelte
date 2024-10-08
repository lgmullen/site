<div class="about-page" id="about">
	<p class="section-header">
		Hi, I'm <span style="color: rgb(161, 43, 170)"> Lawrence Mullen</span>
	</p>

	<div class="text-container">
		<div class="text-md about-info">
			<p id="text-info">
				NYC based full stack software engineer with 2.5 years of professional experience seeking
				full-time employment. Exceptionally motivated to learn and master new technologies while
				working in a fast moving team-based environment. Experience in:
			</p>
			<ul class="font-mono text-xs xs:text-sm list-items">
				<li>Typescript with Node and React</li>
				<li>Mobile First Web Development</li>
				<li>Agile & Lean methodology</li>
				<li>Scrum Framework</li>
			</ul>
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

	.section-header {
		font-family: Hyperblaster Regular;
		font-size: 6rem;
		color: rgb(39, 182, 0);
	}
	#about {
		scroll-behavior: smooth;
		scroll-margin-top: 100px;
		height: calc(100vh - 100px);
		background-image: url(/images/backgrounds/bg4.jpeg);
		background-size: 100% 100%;
		background-size: 'fit';
		background-repeat: no-repeat;
		position: relative;
		padding: 1rem;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100%;
		justify-content: center;
		font-family: 'Hyperblaster Regular';
	}
	.about-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		border: 1px solid rgb(14, 255, 2);
		background-color: rgb(39, 182, 0);
		border-radius: 12px;
		padding: 12px;
		backdrop-filter: blur(10px);
	}

	.list-items {
		column-count: 3;
	}

	#text-info {
		font-size: large;
	}

	@media only screen and (max-width: 768px) {
		.about-info {
			padding: 4px;
		}
		.list-items {
			column-count: 1;
		}
		li {
			margin: 1rem;
		}
	}
</style>
