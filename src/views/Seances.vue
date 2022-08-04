<template>
	<div class="seances">
		<div class="container">
			<h1>Nos séances</h1>
			<p>
				Il existe deux types de séances :<br />
				Les séances d’animation AAA-A et les séances à visées thérapeutiques
				AAA-T.
			</p>
			<p>
				Chaque séance est différente selon les personnes participantes. Les
				objectifs et les sous objectifs sont définis au préalable avec
				<strong>l’équipe soignante</strong>.
			</p>
			<p>
				La <strong>collaboration</strong> avec l’équipe permet de réévaluer les
				objectifs car il est important de ne pas mettre les patients en échec.
			</p>
			<h3>Séances à visées ludiques ou animation AAA-A</h3>
			<p>
				Ce sont des moments de détente, de partage pendant lesquels les
				participants doivent prendre du <strong>plaisir</strong>. C’est un
				moment de <strong>complicité</strong>.
			</p>
			<h3>Séances à visées thérapeutiques AAA – T</h3>
			<p>
				Elles consistent à travailler un ou plusieurs objectifs individuels par
				le biais de l’animal médiateur. Celles–ci peuvent être à visées
				thérapeutiques, social et éducatives.
			</p>
			<p>
				Avant de commencer un programme d’activités, il est important et même
				crucial de <strong>préparer le projet en amont</strong> avec l’équipe
				pluridisciplinaire, un professionnel du soin, la famille ou le
				bénéficiaire.
			</p>
			<p>Cette rencontre permet d’échanger :</p>
			<ul>
				<li>Sur le type de séances</li>
				<li>Sur le référant volontaire</li>
				<li>Sur la personnalisation du projet</li>
				<li>Sur le choix des animaux</li>
				<li>Sur le nombre de participants</li>
				<li>Sur le nombre de séances</li>
				<li>Sur le devis</li>
				<li>Sur la rédaction d’une convention.</li>
			</ul>
			<img
				src="@/assets/images/chienchat.png"
				alt="Un chien et un chat ensemble"
				class="cat-image"
			/>
			<h2>Les bienfaits des séances pour les bénéficiaires</h2>
			<Badges />
			<div class="list">
				<div class="left-column">
					<ul>
						<li>
							Améliorer leur niveau d’<strong>autonomie</strong> (mémoire,
							motricité, communication, sphère affective)
						</li>
						<li>
							Lutter contre leur isolement (perte des repères familiaux et
							manque d’interactions sociales)
						</li>
						<li><strong>Les revaloriser</strong> dans leurs capacités</li>
						<li>Leur Apporter du <strong>réconfort</strong> au quotidien</li>
						<li>
							Bienfaits Sensoriel, toucher écouter, sentir, caresser, observer.
						</li>
					</ul>
					<p>
						Les effets bénéfiques s’étendent généralement aux équipes de soin
						encadrantes :
					</p>
					<ul>
						<li>
							<strong>Apaisement</strong> du personnel en présence des animaux
						</li>
						<li>
							Tissage de <strong>nouveaux liens</strong> entre soignants et
							soignés
						</li>
						<li>
							Soulagement et <strong>fluidité</strong> dans le travail quotidien
							car les patients se sentent mieux.
						</li>
					</ul>
				</div>
				<div class="right-column">
					<img src="@/assets/images/chinchilla.png" alt="Chinchilla" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Badges from '../components/Badges.vue'
export default {
	components: { Badges },
	name: 'Seances',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';
.seances {
	ul {
		color: $color-003;
		margin-bottom: 50px;
		font-size: $font-md;
	}
	.cat-image {
		width: 800px;
		max-width: 80%;
		display: block;
		margin: 0 auto;
	}
	h2 {
		width: fit-content;
		width: -moz-fit-content;
		margin: 50px auto 20px;
		font-size: $font-xl;
		color: $color-003;
		font-style: italic;
		font-weight: bold;
		text-decoration: underline;
	}
	.list {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
		@include min($lg) {
			flex-direction: row;
		}
		ul {
			list-style: disc;
			max-width: 90%;
			margin-left: 20px;
			li {
				margin-bottom: 10px;
			}
		}
	}
}
</style>
