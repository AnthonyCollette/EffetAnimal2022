<template>
	<footer>
		<p>© Textes & images de Jennifer Poli</p>
		<p>
			© Site par
			<a href="https://anthonycollette.fr" target="_blank">Anthony Collette</a>
		</p>
		<router-link to="/mentions-legales">Mentions légales</router-link>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px 0;
	background-color: $color-005;
	align-items: center;
	p,
	a {
		color: $color-002;
		font-size: $font-sm;
		line-height: 1.4;
		margin: 0;
	}
}
</style>
