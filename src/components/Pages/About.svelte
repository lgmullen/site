<div class="about-page" id="about">
	<h1 class="section-header">About Me</h1>
	<div class="text-md about-info">
		<p>
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

<style>
	#about {
		background-color: #dc582a;
		scroll-behavior: smooth;
		scroll-margin-top: 100px;
		padding: 1rem;
		height: 100vh;
	}
	.about-info {
		padding: 200px;
		display: flex;
		flex-direction: column;
		width: '100%';
	}

	.list-items {
		column-count: 3;
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
