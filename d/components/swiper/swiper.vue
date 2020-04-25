<template>
	<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item class="swiper-item">
			<image :src="require('../../static/banner.png')" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad(e) {},
		methods: {}
	}
</script>

<style scoped lang="less">
	.swiper {
		width: 100%;
		height: 410rpx;
		/* #ifdef MP-ALIPAY */
			height: 192px!important;
		/* #endif */
		.swiper-item {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
