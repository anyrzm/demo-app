<template>
	<view class="detail">
		<view v-show="isShow">
			<image  class="goods-image" :src="detail.pic" mode="aspectFill"></image>
			<view class="detail-info">
				<view class="top">
					<view class="goods-title">{{ detail.name }}</view>
					<view class="goods-detail">{{ detail.content | replaceText}}</view>
					<view class="goods-text">
						<text>适合: {{ detail.cookingtime }}</text>
						<text>时间: {{ detail.peoplenum }}</text>
					</view>
				</view>
				<view class="material">
					<view class="material-title">用料</view>
					<view class="material-list">
						<view class="material-item" v-for="(v,i) in detail.material" :key='i' @click="goSearch(v.mname)">
							<text>{{ v.mname}}</text>
							<text>{{ v.amount}}</text>
							<text class="iconfont icon-next"></text>
						</view>
					</view>
				</view>
				<view class="method">
					<view class="method-title">做法</view>
					<view class="method-list">
						<view class="method-item" v-for="(v,i) in detail.process" :key='i'>
							<image :src="v.pic" mode="aspectFit"></image>
							<view class="method-text">
								{{i+1}} : {{ v.pcontent | replaceText }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<shareView></shareView>
			<view class="correlation" v-if="lists.length>0">
				<view class="groom-info">
					<view class="groom-title">相关推荐</view>
					<navigator open-type="switchTab" url="../classify/classify" class="groom-more">
						查看更多
					</navigator>
				</view>
				<goodsItemView v-for="item in lists" :key='item.classid' :items='item'></goodsItemView>
			</view>
			<!-- #ifdef MP-ALIPAY -->
				<view class="footer-text">
					- 做美食 , 用美食秘籍 -
				</view>
			<!-- #endif -->
			<!-- #ifdef H5 || MP-WEIXIN || APP-PLUS || MP-TOUTIAO || MP-QQ-->
				<view class="footer-text">
					- 做美食 , 用印记 -
				</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import goodsItemView from '@/components/goods/item';
	import shareView from '@/components/share/share';
	export default {
		data() {
			return {
				detail: '',
				lists: [],
				isShow: 0
			}
		},
		components:{goodsItemView,shareView},
		onLoad(e) {
			this.getData(e.id);
		},
		filters: {
		    replaceText: function(val){
				return val.replace(/<[^>]*>/g,'')
			},
		},
		methods: {
			getData (id) {
				var t = this;
				uni.showLoading({
					title: "加载中"
				});
				uni.request({
					url: t.$serverUrl + '/detail',
					data: { 
						appkey: t.$appkey,
						id: id
					},
					success: (ret) => {
						const data = ret.data.result;
						t.detail = data;
						uni.hideLoading();
						t.isShow = !t.isShow;
						t.getCorrelation();
					}
				});
				
			},
			getCorrelation (e) {
				var t = this;
				uni.request({
					url: t.$serverUrl + '/search',
					data: { 
						appkey: t.$appkey,
						keyword: t.detail.name.substr(-2),
						num: 6
					},
					success: (ret) => {
						const data = ret.data.result.list;
						t.lists = data;
					}
				});
				
			},
			goSearch (name) {
				uni.navigateTo({
					url: '../search/search?value=' + name
				})
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				return {
					title: this.detail.name,
					desc: this.detail.content,
					imageUrl: this.detail.pic,
					success: res => {},
					fail: err => {}
				}
			}
			return {
				title: this.detail.name,
				desc: this.detail.content,
				imageUrl: this.detail.pic,
				success: res => {},
				fail: err => {}
			}
		}
	}
</script>

<style scoped lang="less">
	.detail {
		padding-bottom: 24rpx;
		.goods-image {
			width: 100%;
			height: 660rpx;
		}
		.correlation {
			padding-top: 36rpx;
			border-top: 16rpx solid rgba(0,0,0,.08);
			.groom-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0 24rpx 24rpx;
				font-size: 34rpx;
				color: #333333;
				.groom-more {
					color: #999999;
					font-size: 28rpx;
				}
			}
		}
		.footer-text {
			padding: 24rpx 0;
			font-size: 28rpx;
			color: #999999;
			text-align: center;
		}
		.detail-info {
			.top {
				padding: 24rpx 24rpx 36rpx;
				box-sizing: border-box;
				.goods-title {
					font-size: 36rpx;
					color: #333333;
					padding: 24rpx 0;
				}
				.goods-text {
					font-size: 28rpx;
					color: #999999;
					margin-top: 24rpx;
					text {
						margin-right: 24rpx;
					}
				}
				.goods-detail {
					font-size: 32rpx;
					color: #666666;
					line-height: 48rpx;
				}
			}
			.material {
				padding: 12rpx 24rpx 36rpx;
				box-sizing: border-box;
				.material-title {
					font-size: 36rpx;
					color: #333333;
					padding-top: 24rpx;
				}
				.material-list {
					padding-top: 24rpx;
					.material-item {
						padding: 18rpx 0;
						font-size: 32rpx;
						color: #666666;
						border-top: 2rpx solid rgba(0,0,0,0.08);
						display: flex;
						justify-content: space-between;
						&:last-child {
							border-bottom: 2rpx solid rgba(0,0,0,0.08);
						}
						text {
							&:first-child {
								flex-basis: 50%;
							}
							&:nth-child(2){
								flex-basis: 20%;
							}
							&:last-child {
								color: #CCCCCC;
							}
						}
					}
				}
			}
			.method {
				padding: 12rpx 24rpx;
				box-sizing: border-box;
				.method-title {
					font-size: 36rpx;
					color: #333333;
					padding-top: 24rpx;
				}
				.method-list {
					.method-item {
						padding: 24rpx 0;
					}
					image {
						width: 100%;
						height: 564rpx;
					}
					.method-text {
						margin-top: 12rpx;
						font-size: 32rpx;
						color: #666666;
						line-height: 48rpx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
