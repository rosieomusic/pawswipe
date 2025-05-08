<template>
	<header id="app-header">
		<img
			id="logo"
			src="/img/FrankiePainted.png"
			alt="Frankie"
		/>
		<div>
			<h1>Paw Swipe</h1>
		</div>

		<div id="container">
			<img
				id="paw"
				src="/img/paw.png"
			/>
			<button
				class="menu-button"
				v-on:click="toggleModal"
			>
				☰
			</button>
		</div>
	</header>
	<AppModal
		:isVisible="isModalVisible"
		v-on:close="toggleModal"
	/>
</template>

<script>
	import AppModal from '../components/AppModal.vue';
	export default {
		components: {
			AppModal,
		},
		data() {
			return {
				isModalVisible: false,
			};
		},
		methods: {
			toggleModal() {
				this.isModalVisible = !this.isModalVisible;
			},
		},
	};
</script>

<style scoped>
	#app-header {
		background-color: var(--header_bg);
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 250px;
	}

	#logo {
		border-radius: 600px;
		height: 185px;
		width: 188px;
		margin-right: 0;
		object-fit: cover;
	}
	#paw {
		height: 185px;
	}
	h1 {
		font-size: 85px;
		font-weight: 800;
		margin-right: 10%;
		white-space: nowrap;
	}
	.menu-button {
		display: none;
	}

	@media only screen and (max-width: 425px) {
		.menu-button {
			display: inline-block;
			color: black;
			font-weight: 900;
			font-size: 16px;
			border: none;
			padding: 10px 20px;
			cursor: pointer;
			margin-right: 6%;
		}
		nav ul {
			list-style: none;
		}
		nav ul:hover {
			color: #fff;
		}

		nav ul li a {
			text-decoration: none;
		}
		nav ul li a:hover {
			color: #fff;
		}
		#container {
			display: flex;
			flex-direction: column;
		}

		#app-header {
			display: flex;
			height: 100%;
			justify-content: space-between;
		}
		h1 {
			font-size: 1.5em;
			text-align: center;
			white-space: nowrap;
		}
		#logo {
			height: 100px;
			width: 100px;
			margin-left: 15px;
			padding: 0.5em;
		}
		#paw {
			height: 60px;
			width: 69px;
			padding-top: 0.7em;
			padding-left: 1em;
			margin-left: 1em;
		}
		button {
			background-color: var(--header_bg);
			border: none;
			margin-left: 35px;
		}
	}
</style>
