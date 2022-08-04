<template>
	<div class="prevention">
		<div class="container">
			<h1>Prévention morsures PECCRAM</h1>
			<div class="right-img">
				<div class="left">
					<p>
						UN PROGRAMME NOVATEUR POUR POSER LES BASES D’UNE MEILLEURE
						COMMUNICATION Homme - chien
					</p>
					<p>
						Il y a 8 millions de chiens en France, les enfants les croisent tous
						les jours à la sortie des classes sans avoir jamais appris à les
						connaitre.
					</p>
					<p>
						Le <strong>défaut d’éducation au langage canin</strong> chez
						l’enfant est un facteur de risque.
					</p>
					<p>
						Notre mission est d’expliquer que le chien est un être
						<strong>sensible</strong> dont il faut
						<strong>comprendre le langage</strong> pour vivre en bonne
						<strong>harmonie</strong> avec lui.
					</p>
				</div>
				<div class="right">
					<img src="@/assets/images/chien1.png" alt="Chien" />
				</div>
			</div>
			<div class="left-img">
				<div class="left">
					<img
						src="@/assets/images/girl.png"
						alt="Une petite fille faisant un câlin à un chien"
					/>
				</div>
				<div class="right">
					<h3>
						Peccram: les 7 jalons de la prévention et de la sensibilisation.
					</h3>
					<p>
						Il est destiné aux enfants de 4 à 11 ans afin de les sensibiliser à
						la connaissance du chien et à apprendre les bons gestes en présences
						de canidés.
					</p>
					<p>Ce programme s’articule autour de 3 axes :</p>
					<ul>
						<li><strong>Apprendre</strong></li>
						<li><strong>Comprendre</strong></li>
						<li><strong>Traduire le langage canin.</strong></li>
					</ul>
					<p>Il a pour but de <strong>prévenir les accidents</strong>.</p>
					<p>Quelques chiffres :</p>
					<ul>
						<li>8 millions de chiens en France</li>
						<li>22 000 cas de morsures recensés chaque année</li>
						<li>
							50 à 60% des enfants ne font pas la différence entre un chien
							stressé et un chien heureux alors que la population âgée de moins
							de 10 ans est la plus vulnérable.
						</li>
					</ul>
					<p>
						Ce programme de prévention crée par Chantal HAZARD est déjà
						<strong
							>reconnu par le ministère de l’Agriculture, de la santé et de la
							communauté scientifique vétérinaire</strong
						>.
					</p>
				</div>
			</div>
			<p>
				J’interviens dans les
				<strong>écoles, centres de loisirs, crèches et à votre domicile</strong
				>.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Prevention',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';

.prevention {
	.right-img {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		.left {
			width: 100%;
			@include min($lg) {
				width: 65%;
			}
		}
		.right {
			margin: 20px 0 50px;
			@include min($lg) {
				margin: 0;
			}
			img {
				width: 100%;
			}
		}
	}
	.left-img {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 50px;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		.right {
			width: 100%;
			@include min($lg) {
				width: 45%;
			}
			@include min($xxl) {
				width: 65%;
			}

			ul {
				color: $color-003;
				font-size: $font-md;
				list-style: disc;
				li {
					margin: 0 auto 10px 25px;
				}
			}
		}
		.left {
			order: 1;
			margin: 20px 0 50px;
			@include min($lg) {
				margin: 0;
				order: 0;
			}
			img {
				width: 100%;
			}
		}
	}
}
</style>
