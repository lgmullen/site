<script>
	import { resumeUrl } from '../../helper.js';
</script>

<div class="about-page contactStyle" id="contact">
	<div id="third"><p id="contact-text">CONTACT</p></div>
	<div class="image-container">
		<div class="contact-table-container">
			<div class="test">
				<div class="sunken-panel contact-table">
					<table class="interactive" style="width: 100%; height: 100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Version</th>
								<th>Company</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>MySQL ODBC 3.51 Driver</td>
								<td>3.51.11.00</td>
								<td>Microsoft Corporation</td>
							</tr>
							<tr>
								<td>EMAIL</td>
								<td>lgmullen97@gmail.com</td>
								<td>---</td>
							</tr>
							<tr>
								<td>linkedin</td>
								<td><a href="https://www.w3schools.com">Click Me!</a> </td>
								<td>---</td>
							</tr>
							<tr>
								<td>instagram</td>
								<td>@a2_lolo</td>
								<td>Meta Corp</td>
							</tr>
							<tr>
								<td>Resume</td>
								<td>
									<a href={resumeUrl}>Click Me!</a>
								</td>
								<td>Lawrence Mullen</td>
							</tr>
							<tr>
								<td>CASTING NETWORKS</td>
								<td>
									<a href="https://app.castingnetworks.com/talent/profile/250947301">
										Profile here!</a
									>
								</td>
								<td>acting</td>
							</tr>
							<tr>
								<td>github</td>
								<td><a href="https://github.com/lgmullen"> github here!</a></td>
								<td>lgmullen</td>
							</tr>
							<tr>
								<td />
								<td />
								<td />
							</tr>
							<tr>
								<td>SQL Server</td>
								<td>3.70.06.23</td>
								<td>Microsoft Corporation</td>
							</tr>
							<tr>
								<td>SQL Server</td>
								<td>3.70.06.23</td>
								<td>Microsoft Corporation</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- <img class="contact-image" src="/images/backgrounds/bg4.jpg" alt="contact-pic" /> -->
	</div>
	<div id="third">third</div>
</div>

<style lang="scss" src="./contactStyle.css">
	@import './contactStyle.css';
	#contact-text {
		font-size: 9rem;
		color: white;
		top: 0;
		position: absolute;
		text-align: center;
		display: inline-block;
	}
	#third {
		display: 'flex';
		flex: 1;
	}
	#title-container {
		border-bottom: 1px solid white;
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	.item-container {
		display: flex;
		flex: 1;
		width: 100%;
		border: 3px solid;
	}
	.image-container {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		height: 400px;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
		background-color: black;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.contact-image {
		top: 0;
		right: 0;
		border-left: 1px solid white;
		flex: 1;
	}

	.contact-table-container {
		display: flex;
		background: black;
		padding: 8px;
		width: 50%;
		height: 100%;
	}
	.test {
		display: flex;
		flex: 1;
		padding: 16px;
		background: hsla(253, 4%, 50%, 0.527);
		backdrop-filter: opacity(20%);
		width: '100%';
	}
	.contact-table {
		background: black;
		padding: 8px;
		width: 100%;
	}
	#contact {
		min-height: 100vh;
		background-color: #000000;
		border-top: 1px solid white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}

	.social {
		font-size: 3rem;
	}
	#linkedin:hover {
		color: teal;
	}
	#spotify:hover {
		color: green;
	}
	#email {
		padding: 2rem;
	}
	.retro-btn {
		height: 2rem;
	}
	#email:hover {
		background-color: orangered;
	}
	@media only screen and (max-width: 768px) {
		#contact-text {
			font-size: 1rem;
			color: white;
			top: 0;
			position: absolute;
			text-align: center;
			display: inline-block;
		}
		.contact-table-container {
			display: flex;
			background: black;
			width: 100%;
			height: 100%;
			border: 2px solid green;
			flex: 5;
		}
		.contact-table {
			background: black;

			width: calc(100% - 32px);
		}
	}
</style>
