<script>
	import Project from '../Project.svelte';
	import MediaQuery from '../..//MediaQuery.svelte';
</script>

<div id="work">
	<MediaQuery query="" let:matches>
		{#if matches}
			<div class="grid-container">
				<div class="cube-top">
					<div class="cube-top-svg w-embed">
						<svg viewBox="0 0 1400 218"
							><path d="M140 0h1120l140 218H0z" fill="none" stroke="currentColor" /></svg
						>
					</div>
				</div>
				<Project
					projectUrl="https://chipper-boba-e51703.netlify.app/"
					title="Tic Tac Toe React Native App"
					lineOne="▪ Tic Tac Toe App built in React Native. Features CPU with heuristic algorithm."
					lineTwo="▪ Click here to play!."
					tech={['Expo', 'React Native', 'HTML', 'CSS', 'Typescript']}
					year="2025"
				/>
				<Project
					projectUrl="https://github.com/lgmullen/eliza-bot"
					title="Eliza AI Chatbot"
					lineOne="▪ Built an emulation of the 1960s MIT natural language processing computer program with openAI."
					lineTwo=""
					tech={['React', 'Next.Js', 'OpenAi', 'API', 'Typescript']}
					year="2025"
				/>
				<Project
					projectUrl="https://www.nytimes.com/2022/03/23/arts/design/fairchain-artists-resale-royalties.html"
					title="Personal Website"
					lineOne="▪ Built this personal website as an experiment with the Svelte Framework."
					lineTwo="▪ Focused on native development in react native and Expo Go to create an app that helps
			artists get royalties for resale."
					tech={['Expo', 'Firebase', 'Tailwind', 'Jest', 'GraphQL', 'React', 'Typescript']}
					year="2024"
				/>
				<Project
					imageSrc="images/project-pictures/fairchain.png"
					projectUrl="https://www.nytimes.com/2022/03/23/arts/design/fairchain-artists-resale-royalties.html"
					title="Fairchain New York"
					lineOne="▪ Developed a native-web MVP into a production-level quality application with ~$50,000 worth of transactions."
					lineTwo="▪ Focused on native development in react native and Expo Go to create an app that helps
			artists get royalties for resale."
					tech={['Expo', 'Firebase', 'Tailwind', 'Jest', 'GraphQL', 'React', 'Typescript']}
					year="2022"
				/>
				<Project
					imageSrc="images/project-pictures/kohls-holiday.png"
					title="Kohls Holiday Web Experience"
					lineOne="▪ Collaborated with Kohl's design team to develop and code dynamic animations for the 2022 Kohl's digital holiday marketing campaign, generating engagement from 100,000+ users."
					lineTwo="▪ Designed and implemented native sharing in React, enabling users to easily share their gift list animations with friends and family."
					tech={['Expo', 'Firebase', 'Tailwind', 'Jest', 'GraphQL', 'React', 'Typescript']}
					year="2022"
				/>
				<Project
					imageSrc="images/project-pictures/tide-pools.png"
					projectUrl="https://lgmullen.github.io/tide-pool/"
					title="Tide Pool Table"
					lineOne="▪ Simple react app to display ocean survey data."
					lineTwo="▪ Uses Mapbox GL to help user visualize ocean exploration information."
					tech={['React', 'Mui', 'React Query']}
					year="2023"
				/>
			</div>
		{/if}
		{#if !matches}
			<p>Constructing mobile version</p>
		{/if}
	</MediaQuery>
</div>

<style>
	.cube-top {
		box-sizing: border-box;
		color: rgb(182, 255, 245);
		cursor: none;
		display: block;
		font-size: 16px;
		left: -2px;
		line-height: 25.6px;
		top: 7px;
	}

	.cube-top-svg {
		backface-visibility: hidden;
		box-sizing: border-box;
		color: rgb(182, 255, 245);
		cursor: none;
		display: block;
		stroke-width: 2px;
		width: 100%;
	}
	#work {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color: rgb(10, 10, 10);
		scroll-behavior: smooth;
		position: relative;
	}
	.grid-container {
		display: flex;
		flex-direction: column;
	}
	@media only screen and (max-width: 768px) {
		.cube-top-svg {
			backface-visibility: hidden;
			box-sizing: border-box;
			color: rgb(182, 255, 245);
			cursor: none;
			display: block;
			width: 100%;
			height: auto;
			margin: 0;
		}
		.grid-container {
			flex-direction: column;
			width: 100%;
		}
		#work {
			padding: 4px;
		}
	}
</style>
