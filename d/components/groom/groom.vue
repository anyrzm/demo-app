<template>
	<view class="groom">
		<view class="groom-info">
			<view class="groom-title">每日推荐</view>
			<navigator url=""></navigator>
			<navigator open-type="switchTab" url="../../pages/classify/classify" class="groom-more">
				查看更多
			</navigator>
		</view>
		<view class="groom-group">
			<view class="groom-group-item" @click="goSearch(302)">
				<image  :src="require('../../static/jiachang.png')"  mode="aspectFill"></image>
				<view>家常菜</view>
			</view>
			<view class="groom-group-item" @click="goSearch(503)">
				<image :src="require('../../static/xiafan.png')" mode="aspectFill"></image>
				<view>下饭菜</view>
			</view>
			<view class="groom-group-item" @click="goSearch(338)">
				<image :src="require('../../static/hongbei.png')" mode="aspectFill"></image>
				<view>烘焙</view>
			</view>
			<view class="groom-group-item" @click="goSearch(307)">
				<image :src="require('../../static/qingdan.png')" mode="aspectFill"></image>
				<view>清淡</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad(e) {},
		methods: {
			goSearch(item) {
				uni.navigateTo({
					url: '../../pages/search/search?classid=' + item
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.groom-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 24rpx 24rpx;
		font-size: 32rpx;
		color: #333333;
		.groom-more {
			color: #999999;
			font-size: 28rpx;
		}
	}
	.groom {
		padding: 24rpx 0;
		.groom-group {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 24rpx;
			.groom-group-item {
				width: 22%;
				height: 146rpx;
				position: relative;
				image {
					width: 100%;
					height: 100%;
					border-radius: 12rpx;
					object-fit: cover;
				}
				view {
					position: absolute;
					bottom: 12rpx;
					width: 100%;
					text-align: center;	
					color: #FFFFFF;
					font-size: 26rpx;
				}
			}
		}
	}
</style>
