<script>
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	const number_visted = Number(browser ? window.localStorage.getItem('visited') ?? 0 : 0);

	const visited = writable(number_visted);
	visited.update((n) => n + 1);

	visited.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('visited', value.toString());
		}
	});
</script>

<div class="about-page" id="experience">
	<div>Website visit count: {number_visted ?? 0}</div>

	<!-- svelte-ignore a11y-distracting-elements -->
	<marquee behavior="alternate"> @@@ welcome to my page !! @@@ </marquee>
	<table
		align="center"
		border="1"
		cellpadding="0"
		cellspacing="5"
		style="height:100px;width:80%"
		class="center"
	>
		<td style="background-color:rgb(130, 147, 196); text-align: center">
			<div>
				<p id="metal">Welcome to my site</p>
				<table align="center" border="1" cellpadding="1" cellspacing="1" width="750">
					<tbody style="text-align: center;">
						<tr>
							<td>
								<p>ayy lmao</p>
							</td>
							<td> yoo momma </td>

							<td> im zooted</td>
						</tr>
						<!-- 2023 accomplishments -->
						<tr style="background-color:#94978fde;">
							<td style="text-align: center; background-color:rgb(19, 4, 158);">
								<p>
									<span style="font-size:16px;"
										><span style="color: rgb(149, 249, 250);">2</span></span
									>
								</p>

								<p><span style="font-size:16px;"><span style="color:#b5a8a5;">0</span></span></p>

								<p><span style="font-size:16px;"><span style="color:#ffd2c6;">2</span></span></p>
								<p><span style="font-size:16px;"><span style="color:#efefef;">3</span></span></p>
							</td>

							<td style="text-align: center">
								<p>
									Production technician at
									<a href="https://breakfaststudio.com/" target="blank">BREAKFAST studios</a>
									a kinetic sculpture studio in nyc
								</p>
								<p>
									Operating guest services at the
									<a href="https://breakfaststudio.com/" target="blank">Knockdown Center</a>
								</p>

								<p class="Mind">
									Got my ham radio technicians operators license
									<img src="gifs/ham-radio.gif" width="50px" />
								</p>
							</td>

							<td />
						</tr>
						<!-- 2022 accomplishments -->
						<tr>
							<td style="text-align: center; background-color:rgb(9, 149, 50);">
								<p>
									<span style="font-size:16px;"
										><span style="color: rgb(100, 57, 200);">2</span></span
									>
								</p>

								<p>
									<span style="font-size:16px;"><span style="color:rgb(100, 57, 58);">0</span></span
									>
								</p>

								<p>
									<span style="font-size:16px;"
										><span style="color:rgb(100, 57, 200);">2</span></span
									>
								</p>
								<p>
									<span style="font-size:16px;"><span style="color:rgb(100, 57, 58);">2</span></span
									>
								</p>
							</td>

							<td />
						</tr>
					</tbody>
				</table>
			</div>
		</td>
	</table>
</div>

<style>
	#experience {
		height: 100vh;
		background-image: url(/images/backgrounds/water-bg.gif);
		image-rendering: pixelated;
		background-repeat: repeat;
		scroll-behavior: smooth;
		scroll-margin-top: 100px;
		padding: 1rem;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	a {
		color: purple;
		text-decoration: underline;
	}
</style>
