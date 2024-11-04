<script>
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div id="background">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="bg-container">
		<div>
			<h1 style="color:white">Roles</h1>
		</div>
		<div>
			<div id="image-wrapper" style="position: relative; width: 600px; height: 600px;">
				<img
					alt="tv mask"
					id="tv-mask"
					src="/images/tv-stock.png"
					style="position: relative; z-index: 10;"
				/>

				<img
					src="/images/gifs/bg-gif-test.gif"
					alt=".."
					width=".."
					height=".."
					style="position: absolute;left:0px; top: 0px;z-index: 1; height:300px; width:600px"
				/>
			</div>
		</div>
	</div>
	<div class="noise" />
</div>

<style>
	#image-wrapper {
		position: relative;
		width: 300px;
		height: 600px;
	}
	#tv-mask {
		position: relative;
	}
	#tv-program {
		position: fixed;
	}
	#background {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid green;
		background-color: yellow;
	}
	#bg-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border: 2px solid white;
		width: 100%;
	}
	.noise {
		background-image: url('https://cdn.prod.website-files.com/6633d206a0410971e6ab2fe4/6633d206a0410971e6ab2fee_ezgif.com-gif-maker.gif');
		background-position: 0 0;
		background-size: auto;
		width: 100vw;
		height: 100vh;
		position: fixed;
		inset: 0%;
		overflow: hidden;
		opacity: 0.04;
		pointer-events: none;
	}
</style>
