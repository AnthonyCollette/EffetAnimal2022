<template>
	<Nav />
	<router-view />
	<Footer />
</template>
<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'

export default {
	components: {
		Home,
		Nav,
		Footer,
	},
}
</script>
<style lang="scss">
@import './assets/scss/utils/_variables.scss';
@import './assets/scss/utils/_mixins.scss';

* {
	margin: 0;
	box-sizing: border-box;
	font-family: $font-001;
}

body {
	background-color: $color-004;
}

a {
	text-decoration: none;
	&:visited {
		color: $color-003;
	}
}

ul {
	list-style: none;
	padding: 0;
}

.container {
	max-width: 90%;
	margin: 0 auto;
	padding: 100px 0;
	@include min($sm) {
		max-width: 80%;
	}
	@include min($lg) {
		max-width: 900px;
	}
	@include min($xl) {
		max-width: 1100px;
	}
	@include min($xxl) {
		max-width: 1400px;
	}
}

p {
	color: $color-003;
	font-size: $font-md;
	line-height: 1.4;
	margin-bottom: 20px;
}

strong {
	color: $color-002;
	background-color: $color-003;
}

q {
	font-style: italic;
	&::before,
	&::after {
		content: '';
	}
}

h1 {
	font-size: $font-xl;
	color: $color-003;
	font-style: italic;
	font-weight: bold;
	text-decoration: underline;
	width: fit-content;
	width: -moz-fit-content;
	margin: 0 auto 100px;
	text-align: center;
}

h2 {
	font-size: $font-lg;
	color: $color-003;
	font-weight: 500;
	margin-bottom: 20px;
}

h3 {
	color: $color-003;
	font-size: $font-md;
	text-decoration: underline;
}
</style>
