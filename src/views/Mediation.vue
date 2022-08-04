<template>
	<div class="mediation">
		<div class="container">
			<h1>Qu'est-ce que la médiation animale ?</h1>
			<div class="definition">
				<div class="left-column">
					<h2>Définition de la médiation animale</h2>
					<p>
						<q
							>« Le terme de médiation animale désigne la recherche des
							interactions positives issues de la mise en relation
							intentionnelle homme-animal dans les domaines éducatifs,
							thérapeutiques ou sociaux, pratiques telles qu’elles sont
							conduites dans les institutions éducatives et médico-sociales
							entre autres. »</q
						>
						Définition d’Adrienne et Pierre Sommer.
					</p>
					<p>
						Depuis très longtemps, les hommes ont un lien d’interdépendance avec
						les animaux. La première collaboration thérapeutique unissant
						l’homme et l’animal remonte au 17 siècle.
					</p>
					<p>
						Cette méthode favorise les liens naturels et bienfaisants existants
						entre les humains et les animaux à des fins préventives et
						thérapeutiques.
					</p>
					<p>
						Cette interaction entre les humains et les animaux favorise
						l’établissement de liens émotionnels et bien souvent des liens
						d’attachement qui sont nécessaires au développement harmonieux de
						l’homme.
					</p>
					<p>
						L’animal ne juge pas et nous témoigne toujours la même sympathie.
					</p>
					<p>
						La médiation animale est une technique qui permet de créer des liens
						dans une <strong>relation triadique</strong>. (Intervenant,
						participant, animal).
					</p>
					<p>
						Nous parlons de médiation, car l’animal devient un agent
						transitionnel entre la personne et les professionnels.
					</p>
					<p>
						L’animal est un fabuleux médiateur parce qu’il est spontané, il
						accueillera la personne avec joie, sans se préoccuper de son
						apparence, de la façon dont elle est habillée.
					</p>
					<p>L’animal deviendra alors un <strong>confident</strong>.</p>
					<p>
						Il est capable de <strong>réciprocité</strong> et
						d’<strong>affection</strong>, la personne entre en lien avec
						l’animal par le contact, le regard mutuel.
					</p>
					<p>
						Quand un humain vous regarde, cela peut être source d’inquiétude car
						il s’attend à quelque chose. Mais quand un animal vous regarde, il
						offre son regard avec l’innocence, la bonté, de la bienveillance.
					</p>
					<p>
						L'animal provoque des sentiments forts d’amour et d’attachement.
					</p>
					<p>
						L’attachement à l’animal va <strong>valoriser</strong> le
						participant
						<strong>dans ses points forts et non dans ses faiblesses</strong>.
					</p>
				</div>
				<div class="right-column">
					<img
						src="@/assets/images/lapin.png"
						alt="Lapin mangeant une carotte"
					/>
				</div>
			</div>
			<div class="little-girl">
				<div class="left-column">
					<img
						src="@/assets/images/enfantchon.png"
						alt="Une petite fille et un cochon d'inde"
					/>
				</div>
				<div class="right-column">
					<p>
						<q
							>« L'animal par l'absence de langage verbal nous laisse tout
							l'espace psychique dont nous avons besoin. Son silence autant que
							l'absence de jugement de sa part, en fait un être attachant auprès
							de qui on peut aller chercher réconfort, amour, joie, et
							acceptation inconditionnelle. »</q
						>
						Georges-Henri Arenstein et Genevieve Gilbert dans la zoothérapie,
						une thérapie hors du commun, Editions Ressources, 2008.
					</p>
					<p>
						La médiation animale est reconnue dans la cadre des thérapies non
						médicamenteuses par la haute autorité de santé (HAS) en France et
						par le ministère de la santé en Italie.
					</p>
				</div>
			</div>
			<div class="bienfaits">
				<p>
					La médiation animale offre de nombreux bienfaits, aujourd’hui
					démontrés par la recherche. Il est notamment prouvé qu’être en
					présence d’animaux aide à :
				</p>
				<ul>
					<li>
						<strong>baisser la pression sanguine</strong> (Baun et al. 1984,
						Friedmann 1983, Grossberg et al. 1988)
					</li>
					<li>
						<strong>diminuer le rythme cardiaque</strong> (DeShriver & Riddick
						1990, Wilson 1987),
					</li>
					<li><strong>réduire l’anxiété</strong> (Wilson 1991),</li>
					<li>
						<strong>améliorer l’environnement social</strong> (Brickel & Brickel
						1980/1981, Mugford & M’Comisky 1975),
					</li>
					<li><strong>atténuer la dépression</strong> (Bolin 1987).</li>
				</ul>
				<p>
					La médiation animale répond donc à la définition globale de la santé
					par l’OMS en agissant aussi bien sur notre
					<strong>bien-être physique, mental & social</strong>.
				</p>
				<img
					src="@/assets/images/chien.png"
					alt="Une femme faisant un bisou à un chien"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Mediation',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';
.mediation {
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.definition {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		.right-column {
			margin-top: 50px;
			@include min($lg) {
				margin-top: 0;
			}
			img {
				width: 100%;
			}
		}
		.left-column {
			width: 100%;
			@include min($lg) {
				width: 60%;
			}
		}
	}
	.little-girl {
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		.left-column {
			order: 1;
			margin-top: 50px;
			@include min($lg) {
				order: 0;
				margin-top: 0;
			}
			img {
				width: 100%;
			}
		}
		.right-column {
			width: 100%;
			@include min($lg) {
				width: 50%;
			}
		}
	}
	.bienfaits {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		ul {
			list-style: disc;
			color: $color-003;
			margin-bottom: 10px;
			li {
				margin-bottom: 10px;
				font-size: $font-md;
			}
		}
		img {
			margin-top: 50px;
			width: 100%;
			max-width: 800px;
		}
	}
}
</style>
