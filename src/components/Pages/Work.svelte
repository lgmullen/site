<script>
	import Project from '../Project.svelte';
</script>

<div id="work">
	<div>
		<div class="grid-container">
			<Project
				title="Fairchain New York"
				lineOne="▪ Developed a native-web MVP into a production-level quality application with ~$50,000 worth of transactions."
				lineTwo="▪ Focused on native development in react native and Expo Go to create an app that helps
			artists get royalties for resale."
				tech="▪ Tech: Expo, Firebase, Tailwind, Jest, GraphQL, React, Typescript"
			/>
			<Project
				title="Kohls Holiday Web Experience"
				lineOne="▪ Collaborated with Kohl's design team to develop and code dynamic animations for the 2022 Kohl's digital holiday marketing campaign, generating engagement from 100,000+ users."
				lineTwo="▪ Designed and implemented native sharing in React, enabling users to easily share their gift list animations with friends and family."
				tech="▪ Tech: Expo, Firebase, Tailwind, Jest, GraphQL, React, Typescript"
			/>
		</div>
	</div>
</div>

<style>
	#work {
		height: calc(100vh - 100px);
		background-color: #e2bfe3;
		scroll-behavior: smooth;
		scroll-margin-top: 100px;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: flex-start;
	}
</style>
