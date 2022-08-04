<template>
	<div class="home">
		<div class="hero">
			<img
				src="@/assets/images/lapinenfant.webp"
				alt="Une petite fille avec un lapin"
			/>
			<div class="overlay">
				<div class="container">
					<img src="@/assets/images/logohome.webp" alt="Logo d'Effet Animal" />
					<h1>Offrez un moment de partage unique entre l'homme et l'animal</h1>
				</div>
			</div>
		</div>
		<div class="intro">
			<div class="container">
				<Badges />

				<p>
					Passionnée depuis toute jeune par l’Humain et l’Animal, j’ai décidé de
					me spécialiser en tant qu’intervenante en médiation animale auprès de
					l’institut Agatea afin d’apporter des services de qualité à toute
					personne que j’accompagne.
				</p>
				<p>
					Je me déplace avec mes compagnons à poils et à plumes dans
					<strong>vos structures</strong> ou à
					<strong>votre domicile</strong> dans le département des Alpes
					Maritimes et du Var.
				</p>
				<p>
					<strong>Effet animal</strong>, s’inscrit dans l’univers du soin, avec
					une offre de thérapie douce assistée par l’animal.
				</p>
				<p>
					Je vous propose des séances individuelles ou en groupe dans le cadre
					thérapeutique ou sous forme d’animations afin de maintenir ou
					d’améliorer la santé et le moral des personnes souffrant de divers
					troubles, aussi bien physiques que cognitifs mais aussi psychologiques
					et sociaux assistés par un ou plusieurs animaux consciencieusement
					choisis et entraînés.
				</p>
				<p>
					Une bulle de tendresse et d’amour construit dans le respect de l’autre
					pour tous publics et pour tous les âges avec ou sans difficulté, ou
					avec ou sans un handicap.
					<strong>Des animaux médiateurs</strong> auprès de ceux qui souffrent.
				</p>
				<p>
					<strong>Un climat favorable</strong>, sécurisant afin de développer de
					nouveaux liens pour travailler de façon détournée les objectifs
					thérapeutiques des personnes fragilisées au travers d’ateliers
					ludiques.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Badges from '../components/Badges.vue'
export default {
	name: 'Home',
	components: {
		Badges,
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
.home {
	.hero {
		width: 100%;
		height: calc(100vh - 80px);
		position: relative;
		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.overlay {
		background-color: rgba($color: $color-001, $alpha: 0.2);
		position: absolute;
		inset: 0 0 0 0;

		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		img {
			max-width: 100%;
			width: 600px;
			margin-bottom: 50px;
		}
		h1 {
			color: $color-002;
			text-decoration: none;
			margin: 0;
			text-align: center;
		}
	}
	.intro {
		.container {
			padding-top: 50px;
		}
	}
}
</style>
