<script>
	import Project from '../Project.svelte';
</script>

<div id="work">
	<div>
		<div class="grid-container">
			<Project
				imageSrc="images/project-pictures/fairchain.png"
				projectUrl="https://www.nytimes.com/2022/03/23/arts/design/fairchain-artists-resale-royalties.html"
				title="Fairchain New York"
				lineOne="▪ Developed a native-web MVP into a production-level quality application with ~$50,000 worth of transactions."
				lineTwo="▪ Focused on native development in react native and Expo Go to create an app that helps
			artists get royalties for resale."
				tech="▪ Tech: Expo, Firebase, Tailwind, Jest, GraphQL, React, Typescript"
			/>
			<Project
				imageSrc="images/project-pictures/kohls-holiday.png"
				title="Kohls Holiday Web Experience"
				lineOne="▪ Collaborated with Kohl's design team to develop and code dynamic animations for the 2022 Kohl's digital holiday marketing campaign, generating engagement from 100,000+ users."
				lineTwo="▪ Designed and implemented native sharing in React, enabling users to easily share their gift list animations with friends and family."
				tech="▪ Tech: Expo, Firebase, Tailwind, Jest, GraphQL, React, Typescript"
			/>
			<Project
				imageSrc="images/project-pictures/tide-pools.png"
				projectUrl="https://lgmullen.github.io/tide-pool/"
				title="Tide Pool Table"
				lineOne="▪ Simple react app to display ocean survey data."
				lineTwo="▪ Uses Mapbox GL to help user visualize ocean exploration information."
				tech="▪ Tech: React, Mui, React Query"
			/>
			<Project
				projectUrl="https://lgmullen.github.io/tide-pool/"
				title="Tide Pool Table"
				lineOne="▪ Simple react app to display ocean survey data."
				lineTwo="▪ Uses Mapbox GL to help user visualize ocean exploration information."
				tech="▪ Tech: React, Mui, React Query"
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
