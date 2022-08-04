<template>
	<div class="pourqui">
		<div class="container">
			<h1>Pour qui ?</h1>
			<h2>Enfance et jeunesse</h2>
			<div class="pourqui--columns">
				<div class="pourqui--columns__left">
					<p>
						Influence des animaux sur les enfants :<br />
						Au contact des animaux, les enfants apprennent la joie de vivre,
						l'humour et l'optimisme. Les animaux sont une
						<strong>invitation</strong> au rire et au jeu.<br />
						Ils stimulent ainsi la sécrétion d'endorphines dans le cerveau, ce
						qui rend plus heureux, atténue la sensation de douleur et réduit le
						stress." (Dr. McCulloch)
					</p>
					<p>
						L’enfant se sent à l’aise, il peut tout lui confier. <br />Les
						caresses et les câlins permettent de développer le toucher, la
						<strong>confiance en soi</strong> et les relations avec les autres.
						La présence d’un animal contribue à la
						<strong>stabilité émotionnelle</strong>. <br />L'animal valorise les
						points forts de l'enfant et non ses faiblesses :<br />
						L'animal provoque des sentiments forts d’amour, d'attachement
						(animaux familiers...) mais aussi éventuellement de dégoûts : la
						communication se fait par le langage des émotions qui est le langage
						de l’enfant.
					</p>
					<p>
						L'animal n'a <strong>aucun jugement social</strong>, il n'est pas
						normatif : <br />la relation entre l’enfant et l’animal est dénuée
						de toute norme ou valeur sociale. L’animal ne juge pas, il
						accueillera l’enfant ou l’adolescent avec joie sans se préoccuper de
						son apparence, de la façon dont il est habillé, des notes qu’il aura
						eu à l’école…<br />
						L’enfant va s’entrainer à la <strong>relation avec l’autre</strong>.
						L’animal sera le confident de l’enfant.<br />
						L’animal permet aussi à l’enfant d’appréhender la naissance, le sens
						de la vie, la maladie, la vieillesse et la mort.<br />
						Une véritable bouffée d’oxygène et l’occasion de découvrir les
						animaux.
					</p>
				</div>
				<div class="pourqui--columns__right">
					<img src="@/assets/images/chat.png" alt="Chat" />
				</div>
			</div>
			<p class="quote">
				<q>
					Une approche individualisée et personnalisé pour soutenir le
					développement de l’enfant. Un jeu de miroir pour apprendre… </q
				><br />
				CE LIEN ENTRE L’ENFANT ET L’ANIMAL SOURCE DE TANT DE POSSIBLES (Daniel
				Marcelli).
			</p>
			<h2>HANDICAP</h2>
			<p>L’animal AGIT COMME UN FACILITATEUR RELATIONNEL.</p>
			<p>L’animal favorise les interactions, la confiance en soi.</p>
			<p>
				Sa présence encourage le rire et réconforte. Il permet à la personne de
				se concentrer sur une tâche.
			</p>
			<p>
				La médiation animale peut alors
				<strong>renforcer les apprentissages</strong> et la rééducation des
				gestes du quotidien.
			</p>
			<img src="@/assets/images/chienhumain.png" alt="Une femme et un chien" />
			<h2>AUTISME ET TROUBLES ENVAHISSANTS DU COMPORTEMENT</h2>
			<p>
				La présence de l’animal offre un
				<strong>environnement multi sensoriel</strong>.
			</p>
			<p>Il encourage la communication et les apprentissages.</p>
			<p>
				L’animal médiateur incite l’enfant à faire, à développer une relation
				avec l’autre, à développer une certaine <strong>autonomie</strong>, il
				facilite aussi l’apprentissage du langage, et aide à structurer son
				environnement.
			</p>
			<h2>Personnes âgées</h2>
			<div class="columns">
				<div class="left">
					<img src="@/assets/images/cochon.png" alt="Cochon nain" />
				</div>
				<div class="right">
					<p>
						<strong>Mémoire et affectivité</strong> ressurgissent grâce à ce
						contact simple et chaleureux qui soulage, apaise et réconforte...
						Les personnes âgées redécouvrent grâce à l’animal des gestes
						spontanés (toilettage, caresse, lancer une balle).
					</p>
					<p class="italic">
						Un des résultats est un moment de douceur favorisant un
						<strong>sentiment d’utilité</strong> et d’estime d’eux-mêmes.
						<strong>L’animal brise la solitude</strong> et il aide à reprendre
						contact avec ses émotions. Quand un humain vous regarde, cela peut
						être source d’inquiétude car il s’attend à quelque chose. Mais quand
						un animal vous regarde, il offre son regard avec innocence, bonté,
						et <strong>bienveillance</strong>.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Pourqui',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';
.pourqui {
	h2 {
		font-size: $font-lg;
		text-transform: uppercase;
		font-weight: 800;
		width: fit-content;
		width: -moz-fit-content;
		margin: 50px auto;
	}
	&--columns {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		&__left {
			width: 100%;
			@include min($lg) {
				width: 65%;
			}
		}
		&__right {
			margin: 20px 0 50px;
			@include min($lg) {
				margin: 0;
			}
			img {
				width: 100%;
			}
		}
	}
	.quote {
		text-align: center;
	}
	.container {
		> img {
			display: block;
			width: fit-content;
			width: -moz-fit-content;
			margin: 50px auto;
			max-width: 100%;
		}
		.italic {
			font-style: italic;
		}
	}
	.columns {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		.left {
			order: 1;
			@include min($lg) {
				order: 0;
			}
		}
		.right {
			width: 100%;
			@include min($lg) {
				width: 70%;
			}
		}
	}
}
</style>
