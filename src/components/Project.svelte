<script lang="ts">
	export let title: String | undefined;
	export let lineOne: String | undefined;
	export let lineTwo: String | undefined;
	export let tech: String | undefined;
</script>

<div class="grid-item">
	<div class="image-container">
		<div class="img-fill" />
	</div>
	<p>{title}</p>
	<div style="text-align: start; margin-top: 12px;">
		<p style="font-size: 12px">
			{lineOne}
		</p>
		<p style="font-size: 12px">
			{lineTwo}
		</p>
		<p style="font-size: 12px">
			{tech}
		</p>
	</div>
</div>

<style>
	.grid-item {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border: 2px solid purple;
		font-size: 30px;
		margin: 1rem;
		min-height: 300px;
		padding: 0px 12px 0px 12px;
		position: relative;
		text-align: center;
	}
	.image-container {
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		position: absolute;
	}
	.img-fill {
		opacity: 0.2;
		background-color: blueviolet;
		height: 100%;
		width: 100%;
	}
</style>
