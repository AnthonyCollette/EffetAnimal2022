<template>
	<div class="nav">
		<div class="container">
			<div class="brand">
				<router-link to="/">
					<img src="@/assets/images/logo.png" alt="Logo d'Effet Animal" />
				</router-link>
			</div>
			<ul :class="mobileMenuDisplay ? 'display' : ''">
				<li v-for="(page, index) in pages" :key="index">
					<router-link :to="{ path: page.route }">{{ page.name }}</router-link>
				</li>
				<li>
					<a href="https://effetanimalmediation.blogspot.com/" target="_blank"
						>Actu <i class="fa-solid fa-arrow-up-right-from-square"></i
					></a>
				</li>
			</ul>
			<button class="burger-menu" @click="displayMobileMenu">
				<div
					:class="['line', 'line-1', mobileMenuDisplay ? 'line-1-close' : '']"
				></div>
				<div
					:class="['line', 'line-2', mobileMenuDisplay ? 'line-2-close' : '']"
				></div>
				<div
					:class="['line', 'line-3', mobileMenuDisplay ? 'line-3-close' : '']"
				></div>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {
			pages: [
				{
					name: 'Accueil',
					route: '/',
				},
				{
					name: 'Médiation animale',
					route: '/mediation',
				},
				{
					name: 'Séances',
					route: '/seances',
				},
				{
					name: 'Avec qui',
					route: '/avec-qui',
				},
				{
					name: 'Pour qui',
					route: '/pour-qui',
				},
				{
					name: 'Prévention morsures',
					route: '/prevention-morsures',
				},
				{
					name: 'Contact',
					route: '/contact',
				},
				{
					name: "Livre d'or",
					route: '/',
				},
			],
			mobileMenuDisplay: false,
		}
	},
	methods: {
		displayMobileMenu() {
			this.mobileMenuDisplay = !this.mobileMenuDisplay
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';

.nav {
	background-color: $color-003;
	padding: 10px 0;
	.brand {
		img {
			width: 200px;
			@include min($md) {
				width: 350px;
			}
		}
	}
	ul {
		display: none;
		flex-direction: column;
		position: absolute;
		top: 100%;
		right: 0;
		z-index: 999;
		background-color: $color-003;
		@include min($xxl) {
			display: flex;
			flex-direction: row;
			position: relative;
		}
		li {
			padding: 10px;
			transition: 0.3s ease-in-out;

			&:hover {
				background-color: $color-002;
				a {
					color: $color-003;
				}
			}
		}
		a {
			color: $color-002;
			font-size: $font-sm;
			transition: 0.3s ease-in-out;
		}
		.fa-arrow-up-right-from-square {
			font-size: 0.8rem;
			margin-left: 5px;
		}
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		position: relative;
	}
	.burger-menu {
		background-color: transparent;
		border: none;
		cursor: pointer;
		@include min($xxl) {
			display: none;
		}
		.line {
			height: 2px;
			width: 25px;
			background-color: $color-002;
			margin: 5px;
			transition: 0.4s ease-in-out;
		}
		.line-1-close {
			transform: translateY(10px) rotate(45deg);
		}
		.line-2-close {
			opacity: 0;
		}
		.line-3-close {
			transform: translateY(-4px) rotate(-45deg);
		}
	}
	.display {
		display: flex;
	}
}
</style>
