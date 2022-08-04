<template>
	<triple-state-slider :slides="sliderImages" class="slider" />
</template>

<script>
export default {
	name: 'Slider',
	data() {
		return {
			sliderImages: [
				{
					order: 1,
					image: './assets/images/slider/chat.jpg',
					title: 'Un chat',
				},
				{
					order: 2,
					image: './assets/images/slider/chiens.jpg',
					title: 'Des chiens',
				},
				{
					order: 3,
					image: './assets/images/slider/chon.jpg',
					title: "Un cochon d'inde",
				},
				{
					order: 4,
					image: './assets/images/slider/lapin1.jpg',
					title: 'Un lapin',
				},
				{
					order: 5,
					image: './assets/images/slider/lapin2.jpg',
					title: 'Un lapin',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.slider {
	margin-bottom: 100px;
}
</style>
