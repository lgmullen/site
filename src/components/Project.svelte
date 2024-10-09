<script lang="ts">
	export let title: string | undefined;
	export let lineOne: string | undefined;
	export let lineTwo: string | undefined;
	export let tech: string[] | undefined;
	export let projectUrl: string | null | undefined = null;
	export let imageSrc: string | undefined = undefined;
</script>

<div class="grid-item contactStyle">
	<a href={projectUrl} target="_blank" class="block-content">
		<div class="block-title-wrapper">
			<div class="block-item year"><p>2023</p></div>
			<div class="block-item title"><p>{title}</p></div>
			<div class="block-item type"><p>Project</p></div>
			<div class="block-item tech"><p>React</p></div>
		</div>
		<div class="arrow-icon">
			<svg viewBox="0 0 25 25">
				<path
					d="M0 13.486h21.178l-9.602 9.591 1.413 1.412L23.591 13.9l.001.001L25 12.496l-.002-.002H25l-1.413-1.412h-.002L12.989.5l-1.407 1.406 9.596 9.584H0v1.996z"
					fill="currentColor"
					fill-rule="evenodd"
				/>
			</svg>
		</div>
	</a>

	<div class="window image-pic" style=" width: 200px; height:300px">
		<div class="title-bar">
			<div class="title-bar-text">My First VB4 Program</div>
		</div>
		<div class="window-body">
			<p>{lineOne}</p>
			<div class="image-container" style="background-image: url({imageSrc});">
				<div class="img-fill" />
			</div>
		</div>
	</div>
</div>

<style lang="scss" src="./contactStyle.css">
	.grid-item {
		background-color: rgb(0, 0, 0);
		border: 2px solid rgb(182, 255, 245);
		box-sizing: border-box;
		color: rgb(182, 255, 245);
		cursor: none;
		display: block;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		height: 60px;
		line-height: 25.6px;
		margin-top: -2px;
		text-rendering: geometricPrecision;
		text-size-adjust: 100%;
		unicode-bidi: isolate;
		width: 973.273px;

		&:hover .arrow-icon {
			color: black;
		}
		&:hover .block-content {
			color: black;
			background-color: rgb(182, 255, 245);
		}

		&:hover .image-pic {
			visibility: visible;
			z-index: 2;
		}
	}

	.block-content {
		align-items: center;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		height: 56px;
		justify-content: space-between;
		line-height: 25.6px;
		max-width: 100%;
		padding: 16px 0;
		text-size-adjust: 100%;
		width: 969.273px;
		background-color: black;
		color: rgb(182, 255, 245);
	}
	.block-title-wrapper {
		display: flex;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		flex: 1 1 0%;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		height: 24px;
		justify-content: flex-start;
		line-height: 25.6px;
		padding: 0 18px;
	}

	.block-item {
		display: flex;
		box-sizing: border-box;
		cursor: pointer;
		display: block;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		height: 24px;
		line-height: 25.6px;
		padding-right: 18px;
		text-rendering: geometricPrecision;
		text-size-adjust: 100%;
		unicode-bidi: isolate;
		-webkit-font-smoothing: antialiased;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	.year {
		flex: 1;
	}
	.title {
		flex: 2;
	}
	.type {
		flex: 1;
	}

	.tech {
		flex: 1;
	}
	.arrow-icon {
		box-sizing: border-box;
		color: rgb(182, 255, 245);
		cursor: pointer;
		display: block;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		height: 24px;
		line-height: 25.6px;
		text-rendering: geometricPrecision;
		text-size-adjust: 100%;
		unicode-bidi: isolate;
		width: 24px;
		margin-right: 18px;
	}

	.image-pic {
		visibility: hidden;
		min-height: 100px;
		min-width: 100px;
		position: absolute;
		top: 30%;
		right: 0;
		margin-right: 12px;
		color: navy;
	}

	.image-container {
		z-index: 1;
		background-size: 100%;
		width: 100%;
		height: 200px;
		padding: 32px;
		background-size: calc(auto 100% - 32px);
		background-repeat: no-repeat;
		background-position: center center;
	}
</style>
