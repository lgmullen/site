<script lang="ts">
	export let title: string | undefined;
	export let lineOne: string | undefined;
	export let lineTwo: string | undefined;
	export let tech: string | undefined;
	export let projectUrl: string | null | undefined = null;
	export let imageSrc: string | undefined = undefined;
</script>

<a href={projectUrl} target="_blank" class="grid-item">
	<div class="image-container" style="background-image: url({imageSrc});">
		<div class="img-fill" />
	</div>
	<div style="height: 40%; margin: 0; text-align: center">
		<p class="title">{title}</p>
	</div>
	<div style="text-align: start; height: 60%;">
		<p style="font-size: 12px">
			{lineOne}
		</p>
		<p style="font-size: 12px">
			{lineTwo}
		</p>
		<p style="font-size: 12px;">
			{tech}
		</p>
	</div>
</a>

<style>
	.grid-item {
		z-index: 0;
		display: flex;
		flex-direction: column;
		border: 2px solid purple;
		border-radius: 8px;
		font-size: 30px;
		margin: 1rem;
		min-height: 300px;
		padding: 0px 12px 0px 12px;
		position: relative;
		text-align: center;
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 10px blue;
		}
	}
	.image-container {
		border-radius: 6px;
		z-index: -1;
		background-size: 100%;
		top: 0;
		left: 0;
		width: 100%;
		height: 40%;
		position: absolute;

		background-size: auto 100%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	.img-fill {
		opacity: 0.2;
		background-color: blueviolet;
		height: 100%;
		width: 100%;
	}

	.grid-item:hover .title {
		color: mediumorchid;
	}
</style>
