<template>
	<view class="item" @click="goDetail(items.id)">
		<image :src="items.pic" mode="aspectFill"></image>
		<view class="item-info" >
			<view class="item-title">{{ items.name }}</view>
			<view class="item-detail">{{ items.tag }}</view>
			<view class="item-text">
				<text>适合: {{ items.peoplenum }}</text><text>时间: {{ items.cookingtime }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props:['items'],
		onLoad(e) {},
		methods: {
			goDetail (item) {
				uni.navigateTo({
					url: '../detail/detail?id=' + item
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.item {
		display: flex;
		align-items: center;
		margin: 0 24rpx;
		padding: 24rpx 0;
		border-bottom: 2rpx solid rgba(0,0,0,.06);
		image {
			width: 198rpx;
			height: 172rpx;
			margin-right: 24rpx;
			border-radius: 12rpx;
			flex-shrink: 0;
		}
		.item-info {
			width: 100%;
			font-size: 26rpx;
			.item-title {
				font-size: 30rpx;
				color: #333333;
			}
			.item-detail {
				margin: 12rpx 0;
				font-size: 28rpx;
				color: #666666;
				line-height: 38rpx;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.item-text text {
				margin-right: 24rpx;
				color: #999999;
			}
		}
	}
</style>
