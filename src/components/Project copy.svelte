<script lang="ts">
	export let title: string | undefined;
	export let lineOne: string | undefined;
	export let lineTwo: string | undefined;
	export let tech: string[] | undefined;
	export let projectUrl: string | null | undefined = null;
	export let imageSrc: string | undefined = undefined;
</script>

<a href={projectUrl} target="_blank" class="grid-item">
	<div class="wid-title">
		<span class="text">Project</span>
		<span class="icon" />
	</div>
	<div class="title-container">
		<div class="image-container" style="background-image: url({imageSrc});">
			<div class="img-fill" />
		</div>
		<div style="margin: 0; text-align: center; position: relative;">
			<p class="title">{title}</p>
		</div>
	</div>
	<hr class="solid" />

	<div class="info">
		<p style="font-size: 12px">
			{lineOne}
		</p>
		<p style="font-size: 12px">
			{lineTwo}
		</p>
		<div class="tech-container">
			{#if tech}
				{#each tech as item}
					<p class="tech">{item}</p>
				{/each}
			{/if}
		</div>
	</div>
</a>

<style>
	.grid-item {
		z-index: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 4px solid black;
		border-radius: 8px;
		font-size: 30px;
		margin: 1rem;
		min-height: 600px;
		position: relative;
		text-align: center;
		cursor: pointer;
		background-color: rgb(238, 227, 210);
		&:hover {
			box-shadow: 0 0 10px blue;
		}
	}
	.grid-item::after {
		content: '';
		position: absolute;
		top: 0;
		left: -4px;
		right: -4px;
		bottom: -8px;
		z-index: -1;
		border-radius: 0 0 8px 8px;
		border-bottom: 10px solid #000;
	}

	.title-container {
		padding-left: 24px;
		padding-right: 24px;
		display: flex;
		flex-direction: column;
		flex: 1;
		position: relative;
	}

	.image-container {
		border-radius: 6px;
		z-index: 1;
		background-size: 100%;
		width: 100%;
		height: 200px;
		padding: 32px;
		margin-top: 16px;
		background-size: calc(auto 100% - 32px);
		background-repeat: no-repeat;
		background-position: center center;
		border: 4px solid black;
	}

	.grid-item:hover .title {
		color: mediumorchid;
	}
	.wid-title {
		position: relative;
		margin-top: 0px;
		background-color: #000;
		height: 60px;
		border-radius: 0 0 5px 5px;
		text-align: center;
		color: #fff;
		margin-left: 40px;
		margin-right: 40px;
		margin-bottom: 30px;
		padding: 0 10px;
	}
	.solid {
		border-top: 4px solid black;
	}
	.info {
		text-align: start;
		height: 60%;
		padding: 24px;
		display: flex;
		flex-direction: column;
	}

	.tech {
		font-size: 12px;
		border: 2px solid rgb(30, 17, 73);
		text-align: center;
		border-radius: 14px;
		width: max-content;
		padding: 4px;
		margin: 4px;
		background-color: whitesmoke;
	}
	.tech-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: auto;
	}
</style>
