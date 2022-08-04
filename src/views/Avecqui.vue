<template>
	<div class="avecqui">
		<div class="container">
			<h1>Avec qui ?</h1>
			<Slider />
			<p>
				<strong
					>Chat, chiens, lapins, cochons d’inde, rats, chinchillas, cailles et
					même un cochon</strong
				>, sont mes précieux collaborateurs, spécifiquement sélectionnés et
				éduqués.
			</p>
			<p>
				Je les choisis pour leur tempérament hors pair pour établir un contact
				qui sera une puissante source de motivation pour les bénéficiaires.
			</p>
			<p>
				Ils ont un <strong>suivi vétérinaire strict</strong> effectué par le
				Docteur Déborah Ducheix Kallifat.
			</p>
			<p>
				Parce que ce sont des animaux particuliers qui donnent beaucoup de leur
				personne, je suis très attentive à leur bien être mental et physique.
			</p>
			<p>
				Ils bénéficient des mains expertes de leur ostéopathe animalière Maud
				MAGNIN.
			</p>
			<figure>
				<img src="@/assets/images/chons.png" alt="Cochons d'Inde" />
				<figcaption>
					Photos d’une séance d’ostéopathie à mon domicile
				</figcaption>
			</figure>
			<p>
				Ils ont tous une personnalité différente, du plus timide au plus,
				audacieux.
			</p>
			<p>
				Leurs regards, leurs expressions, leurs comportements, les rendent tous
				très attendrissants.
			</p>
			<p>
				De nouveaux petits « loulous » nous rejoignent régulièrement, au fil des
				naissances…
			</p>
			<p>
				EFFET ANIMAL est très soucieux de <strong>l’éthique animale</strong>,
				les animaux sont des êtres vivants sensibles et émotionnels, nous avons
				donc des responsabilités et des devoirs à leur égards. Les séances de
				médiations animales s’effectuent dans le respect et le
				<strong>bien-être animal</strong>, il ne s’agit pas d’instrumentaliser
				mes partenaires mais de les laisser interagir en suivant leur instinct.
				C’est pour toutes ces raisons qu’Effet Animal fait attention à ce qu’ils
				ne fassent pas trop d’interventions, ou qu’ils subissent trop de
				pression ou trop d’attente. Les lieux de vie de nos animaux sont conçus
				pour apporter confort et bien être pour chaque espèce.
			</p>
			<p>
				La nourriture est minutieusement choisie pour leur apporter les
				vitamines et nutriments nécessaires à leurs besoins.
			</p>
			<p>
				Tout ceci demande une <strong>connaissance spécifique</strong> des
				besoins de mes animaux et une <strong>compréhension</strong> parfaite de
				leur langage.
			</p>
		</div>
	</div>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
	name: 'Avecqui',
	components: {
		Slider,
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
.avecqui {
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 50px 0;
		img {
			max-width: 100%;
		}
		figcaption {
			color: $color-003;
		}
	}
}
</style>
