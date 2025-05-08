<template>
	<div id="cards">
		<div
			v-for="(eachAnimal, index) in animalData"
			v-bind:key="eachAnimal.animalId"
			class="card"
		>
			<i
				v-if="$store.getters.isAuthenticated && !$store.getters.isAdmin"
				v-bind:class="
					selectedHearts[index] ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
				"
				v-on:click="toggleHeart(index)"
				id="heart"
			>
			</i>
			<div id="image">
				<img
					v-on:click="handleClick(eachAnimal.animalId)"
					v-bind:src="eachAnimal.imageUrl"
					alt="beautiful animal"
				/>
			</div>
			<div id="name">
				<h1>{{ eachAnimal.animalName }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['animalData'],
		data() {
			return {
				selectedFilter: '',
				selectedHearts: Array(this.animalData.length).fill(false),
			};
		},
		methods: {
			toggleFilter(filter) {
				this.selectedFilter = this.selectedFilter === filter ? '' : filter;
			},
			toggleHeart(index) {
				this.selectedHearts[index] = !this.selectedHearts[index];
			},
			handleClick(animalId) {
				this.$router.push({ name: 'details', params: { animalId: animalId } });
			},
		},
	};
</script>

<style scoped>
	#heart {
		font-size: 32px;
		margin-left: 92%;
		cursor: pointer;
	}

	#cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		background-color: #b6abc1;
		margin: 0 auto;
		padding: 20px;
		max-width: 1200px;
		transition: 0.5s;
		box-sizing: border-box;
	}

	.card {
		width: 100%;
		max-width: 100%;
		background-color: #c0c5ce;
		border: 1px solid black;
		border-radius: 10px;
		padding: 5%;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s;
	}

	.card:hover {
		cursor: pointer;
		transform: translateY(-10px);
	}

	.card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 10px;
		margin-top: 8px;
	}

	img {
		object-fit: fill;
	}

	@media (max-width: 425px) {
		#cards {
			grid-template-columns: 1fr;
		}
		.card {
			padding: 10px;
		}
	}
</style>
