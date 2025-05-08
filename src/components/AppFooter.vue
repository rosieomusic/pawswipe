<template>
	<footer id="app-footer">
		<div id="icons">
			<a href="http://www.instagram.com/pugdashians">
				<i
					id="insta"
					class="fa-brands fa-square-instagram fa-4x"
				></i>
			</a>
			<a href="https://www.facebook.com/PhilaAnimalWelfareSociety/">
				<i
					id="fb"
					class="fa-brands fa-facebook-f fa-4x"
				></i>
			</a>
			<a href="https://www.youtube.com/watch?v=CdX4VYd5VXk">
				<i
					id="yt"
					class="fa-brands fa-youtube fa-4x"
				></i>
			</a>
			<router-link v-bind:to="{ name: 'home' }">
				<i
					id="paw"
					class="fa-solid fa-paw fa-4x"
				></i>
			</router-link>
		</div>
		<h1 id="copy">
			&copy; Rose O'Malley 2024 <br />
			All rights reserved
		</h1>
	</footer>
</template>

<script>
	export default {};
</script>

<style scoped>
	#app-footer {
		background-color: var(--footer_bg);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		width: 100%;
		padding: 10%;
	}
	#icons {
		font-size: 0.7em;
		margin-left: 2%;
	}
	#copy {
		margin-right: 2%;
		font-size: 16px;
	}
	#insta,
	#fb,
	#yt {
		margin-right: 13px;
	}

	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: var(--header_bg);
	}

	@media only screen and (max-width: 425px) {
		#app-footer {
			display: flex;
			flex-direction: column;
			height: 5em;
			margin-right: 10%;
			padding-top: 10px;
		}
		#icons {
			font-size: 0.5em;
			margin-left: 0%;
		}

		#insta,
		#fb,
		#yt {
			margin-right: 50px;
		}
		#copy {
			font-size: 0.7em;
			font-weight: 400;
			text-align: center;
		}
	}
</style>
