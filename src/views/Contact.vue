<template>
	<div class="contact">
		<div class="container">
			<p>
				Pour toute demande d'informations, vous pouvez me contacter par
				téléphone ou par email.
			</p>
			<p><strong>Tarifs uniquement sur demande. </strong></p>
			<p>Jennifer POLI</p>
			<p><i class="fa-solid fa-phone"></i> 06.19.45.65.95</p>
			<a href="mailto:jennifer@effetanimal.com"
				><i class="fa-solid fa-envelope"></i> jennifer@effetanimal.com</a
			>
			<img
				src="@/assets/images/chonfete.png"
				alt="Cochon d'Inde qui fait la fête"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';
@import '../assets/scss/utils/_mixins.scss';

a {
	color: $color-003;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		width: fit-content;
		width: -moz-fit-content;
	}
	img {
		margin-top: 50px;
		width: 600px;
		max-width: 100%;
	}
	.fa-envelope {
		margin-right: 5px;
	}
}
</style>
