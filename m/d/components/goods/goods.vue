<template>
	<view class="goods">
		<view class="title">
			<text class="iconfont icon-huatifuhao"></text>
			精品推荐
			<text class="iconfont icon-huatifuhao"></text>
		</view>
		<view class="goods-list">
			<view class="goods-item" v-for="item in newlists" :key='item.id' @click="goDetail(item.id)">
				<view class="goods-image" :style="{backgroundImage:'url('+item.pic+ ')'}">
					
				</view>
				<!-- <image :src="item.pic" mode=""></image> -->
				<view class="goods-info">
					<view class="goods-title">
						{{ item.name }}
					</view>
					<text class="iconfont icon-remen"></text>
				</view>
				<view class="goods-detail">
					{{ item.tag }}
				</view>
			</view>
		</view>
		<view class="cue-text" v-if="newlists.length==0">
			- - 暂无相关数据 - -
		</view>
		<navigator v-if="newlists.length>0" open-type="switchTab" url="../../pages/classify/classify" class="more">查看更多</navigator>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				newlists: []
			}
		},
		props:{
			lists: {
				type: Array,
				value: []
			}
		},
		watch:{
	　　　　lists(){
	　　　　　　this.newlists = this.lists
	　　　　}
	　　},
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
	.goods {
		.title {
			font-size: 32rpx;
			color: #333333;
			text-align: center;
			padding-top: 24rpx;
			border-top: 16rpx solid rgba(0,0,0,0.06);
		}
		.goods-list{
			display: flex;
			flex-flow: row wrap;
			margin: 0 12rpx;
			padding: 12rpx 0;
			.goods-item {
				width: 50%;
				margin: 0 auto;
				padding: 12rpx 12rpx;
				box-sizing: border-box;
				.goods-image {
					width: 100%;
					height: 338rpx;
					margin-bottom: 24rpx;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center;
					overflow: hidden;
				}
				.goods-info {
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					font-size: 26rpx;
					.goods-title {
						font-size: 32rpx;
						color: #333333;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					text {
						color: red;
					}
				}
				.goods-detail {
					font-size: 26rpx;
					color: #999999;
					margin-top: 12rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text {
						margin-right: 24rpx;
					}
				}
			}
		}
		
		.more {
			text-align: center;
			padding: 12px 0;
			color: #999999;
			font-size: 14px;
			background: rgba(0,0,0,.04);
		}
	}
</style>
