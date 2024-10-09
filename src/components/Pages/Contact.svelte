<script>
	import { resumeUrl } from '../../helper.js';
</script>

<div class="about-page contactStyle" id="contact">
	<h1>Contact</h1>
	<div class="item-container">
		<a
			href="https://www.linkedin.com/in/lawrence-mullen/"
			class="social"
			id="linkedin"
			target="_blank"
		>
			<p />
			LinkedIn</a
		>
		<p class="social" id="spotify">Spotify</p>
		<a id="email" href="mailto:lgmullen97@gmail.com">
			<img src="/images/email_me.gif" alt="email_me" />
		</a>
		<a href={resumeUrl} target="_blank" class="retro-btn"> Download Resume </a>
	</div>
</div>

<style lang="scss" src="./contactStyle.css">
	@import './contactStyle.css';
	.item-container {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	#contact {
		min-height: 100vh;
		background-color: #f5eacc;
		scroll-margin-top: 100px;
		padding: 1rem;
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
		.item-container {
			border: 2px solid red;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
