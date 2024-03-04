<script>
	import { resumeUrl } from '../../helper.js';
</script>

<div class="about-page" id="contact">
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
		<button id="email">
			<img src="/images/email_me.gif" alt="email_me" />
		</button>
		<a href={resumeUrl} target="_blank"> Download Resume </a>
	</div>
</div>

<style>
	.item-container {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	#contact {
		height: 100vh;
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
	#email:hover {
		background-color: orangered;
	}
	@media only screen and (max-width: 768px) {
		.item-container {
			flex-direction: column;
		}
	}
</style>
