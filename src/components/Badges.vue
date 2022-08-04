<template>
	<div class="badges">
		<img
			src="@/assets/images/langueauchat.png"
			alt="Ne plus donner sa langue au chat"
		/>
		<img
			src="@/assets/images/poildelabete.png"
			alt="Reprendre du poil de la bête"
		/>
		<img
			src="@/assets/images/stress.png"
			alt="Évacuer le stress avec un coach sur pattes"
		/>
	</div>
</template>

<script>
export default {
	name: 'Badges',
}
</script>

<style lang="scss" scoped>
.badges {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	img {
		width: 450px;
		max-width: 100%;
	}
}
</style>
