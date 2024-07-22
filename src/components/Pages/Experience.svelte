<script>
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
	import Year from '../Year.svelte';

	const beach = 'rgb(245, 234, 204)';
	const grey = '#94978fde';
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
	<marquee behavior="alternate" style="font-size: 24px">
		<p>@@@ welcome to my (っ◔◡◔)っ ♥ about page ♥ !! @@@</p>
	</marquee>
	<table
		align="center"
		border="1"
		cellpadding="0"
		cellspacing="5"
		style="height:100px;width:95%"
		class="center"
	>
		<td style="background-color:{beach}; text-align: center">
			<p id="metal">★·.·´¯`·.·★ 🎀 𝓁𝒶𝓌𝓇𝑒𝓃𝒸𝑒 𝓂𝓊𝓁𝓁𝑒𝓃 🎀 ★·.·`¯´·.·★</p>
			<table align="center" border="1" cellpadding="1" cellspacing="1" width="90%">
				<tbody style="text-align: center;">
					<tr>
						<td> ★○★○★○★ </td>
						<td> (っ◔◡◔)っ ♥ about page ♥ </td>
						<td> ★○★○★○★</td>
					</tr>
					<!-- 2024 accomplishments -->
					<tr style="border: 1px dashed grey">
						<Year
							bg_color="rgb(31,242,24)"
							text="2024"
							color0="#F9FAF9"
							color1="#b5a8a5"
							color2="#ffd2c6"
							color3="#efefef"
						/>

						<td style="display: flex; flex-direction: column; align-items: center">
							<p style="align-items: center">Created freelance websites</p>
							<p>
								Operating guest services at the
								<a href="https://breakfaststudio.com/" target="blank">Knockdown Center</a>
							</p>
							<p>Got my ham radio technicians operators license</p>
							<p>
								Got a nice highlight for <a
									href="https://www.ukrainiansportsclubny.com/"
									target="blank">New York Ukrainians</a
								>
							</p>
							<br />
							<p>Appearences:</p>
							<ul style=" columns: 2; -webkit-columns: 2; -moz-columns: 2;">
								<li>Only Murders in the Building</li>
								<li>You</li>
								<li>Sex & The City</li>
								<li>{`Bob Dylan movie (upcoming)`}</li>
								<li>Power Book III</li>
								<li>Goosebumps</li>
								<li>{`Spike Lee (upcoming)`}</li>
							</ul>
						</td>
						<td />
					</tr>
					<!-- 2023 accomplishments -->
					<tr style="background-color:{grey};">
						<Year
							bg_color="rgb(19, 4, 158)"
							text="2023"
							color0="#F9FAF9"
							color1="#b5a8a5"
							color2="#ffd2c6"
							color3="#efefef"
						/>

						<td style="text-align: center">
							<p style="align-items: center">
								<img
									src="gifs/sculpture.gif"
									height="65px"
									alt="sculpture"
									style="display: inline; border-width: 0px;"
								/>
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
								<img
									src="gifs/ham-radio.gif"
									width="25px"
									alt="radio"
									style="display: inline; border-width: 0px;"
								/>
							</p>
							<p>
								Helped the <a href="https://www.ukrainiansportsclubny.com/" target="blank"
									>NYC Ukrainian soccer team</a
								> get promoted to division 1 of the Cosmopolitan Soccer League
							</p>
							<p>Created browzwear python plugins for northface designers.</p>
						</td>
						<td />
					</tr>
					<!-- 2022 accomplishments -->
					<tr>
						<td style="text-align: center; background-color:rgb(9, 149, 50);">
							<p>
								<span style="font-size:16px;"><span style="color: rgb(100, 57, 200);">2</span></span
								>
							</p>

							<p>
								<span style="font-size:16px;"><span style="color:rgb(100, 57, 58);">0</span></span>
							</p>

							<p>
								<span style="font-size:16px;"><span style="color:rgb(100, 57, 200);">2</span></span>
							</p>
							<p>
								<span style="font-size:16px;"><span style="color:rgb(100, 57, 58);">2</span></span>
							</p>
						</td>
						<td style="text-align: center">
							<p style="align-items: center">
								Created the Kohl's 2022 <a
									href="https://corporate.kohls.com/news/archive-/2023/november/kohl-s-introduces-new-interactive-experiences-for-customers-this"
									target="blank">holiday animation</a
								>in p5.js
							</p>
							<p>
								Started Billy Blanks <a
									href="https://www.youtube.com/watch?v=s1t4xIlsmH0"
									target="_blank">Tae Bo</a
								>journey
							</p>
							<p class="Mind" />
							<p>
								Check out my article on <a
									href="https://blog.theodo.com/2023/03/saving-canvas-animations/"
									target="_blank">saving canvas animations!</a
								>
							</p>
						</td>
						<td />
					</tr>
					<!-- 2021  -->
					<Year
						bg_color="coral"
						text="2021"
						color0="#F9FAF9"
						color1="#b5a8a5"
						color2="#ffd2c6"
						color3="#efefef"
					/>
					<td style="text-align: center; background-color:{grey};">
						<p>
							Started job at <a href="https://www.theodo.com/" target="_blank"> Theodo NYC</a>
						</p>

						<p>
							worked on <a
								href="https://variety.com/2021/tv/reviews/bmf-review-starz-50-cent-black-mafia-family-1235075541/"
								target="blank">Black Mafia Family</a
							>
							tv show as a film PA!
						</p>
					</td>
					<td style="background-color:{grey}" />
				</tbody>
			</table>
		</td>
	</table>
</div>

<style>
	#experience {
		background-image: url(/images/backgrounds/water-bg.gif);
		image-rendering: pixelated;
		background-repeat: repeat;
		scroll-behavior: smooth;
		scroll-margin-top: 100px;
		margin-top: 100px;
		padding: 1rem;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	a {
		color: purple;
		text-decoration: underline;
	}
	li {
		list-style-type: disc;

		padding: 4px;
		text-align: start;
	}
</style>
