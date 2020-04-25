<template>
	<view class="classify">
		<view v-show="isShow">
			<searchView searchType='text'></searchView>
			<view v-if="lists.length>0">
				<shareView></shareView>
				<view class="content" :style="'height:' + (screenHeight-44) + 'px'">
					<scroll-view scroll-y="true" class="scroll-lefy">
						<view class="scroll-lefy-item"
								:class="{select:index == i}"
								v-for="(item,i) in lists" 
								:key='item.classid'
								@click="getItem(item,i)">
								{{ item.name }}
						</view>
					</scroll-view>
					<scroll-view scroll-y="true" class="scroll-right">
						<view class="scroll-right-item" 
							v-for="(item,i) in items"
							:key='item.classid'
							@click="goSearch(item)">
							{{ item.name }}
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="cue-text" v-if="lists.length==0">
				- - 暂无相关数据 - -
			</view>
		</view>
	</view>
</template>

<script>
	import searchView from '@/components/search/search';
	import shareView from '@/components/share/share';
	export default {
		data() {
			return {
				screenHeight: 0,
				lists: [],
				items: [],
				index: 0,
				isShow: 0
			}
		},
		components:{searchView,shareView},
		onLoad(e) {
			uni.getSystemInfo({
				success: (o) => {
					this.screenHeight = o.windowHeight;
				}
			});
			this.getData();
		},
		methods: {
			getData (e) {
				var t = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: t.$serverUrl + '/class',
					data: { 
						appkey: t.$appkey,
					},
					success: (ret) => {
						const data = ret.data.result;
						// #ifdef MP-TOUTIAO 
						t.lists = data.filter(function(item){
							return item.classid !== 144 && item.classid !== 1 && item.classid !== 113 && item.classid !== 213;
						});
						t.items = t.lists[t.index].list;
						// #endif
						
						// #ifdef H5 || MP-WEIXIN || APP-PLUS || MP-ALIPAY || MP-QQ
						t.lists = data;
						t.items = t.lists[t.index].list;
						// #endif
						uni.hideLoading();
						t.isShow = !t.isShow;
					}
				});
			},
			getItem (item,i) {
				this.index = i;
				this.items = item.list;
			},
			goSearch (item) {
				uni.navigateTo({
					url: '../search/search?value=' + item.name + '&classid=' + item.classid
				})
			}
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				return {
					title: '美食秘籍',
					desc: "美食推荐 · 精选美食做法",
					success: res => {},
					fail: err => {}
				}
			}
			
			return {
				title: '美食秘籍',
				desc: "美食推荐 · 精选美食做法",
				success: res => {},
				fail: err => {}
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		display: flex;
		font-size: 24rpx;
		.scroll-lefy {
			width: 22%;
			background-color: rgba(0,0,0,0.04);
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			.scroll-lefy-item {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				font-size: 28rpx;
				color: #666666;
				&.select {
					color: #f05b72;
					border-left: 4rpx solid #f05b72;
					background-color: #ffffff;
				}
			}
		}
		.scroll-right {
			margin: 0 12rpx;
			padding-bottom: 24rpx;
			.scroll-right-item {
				display: inline-block;
				width: 158rpx;
				height: 56rpx;
				margin: 24rpx 12rpx 12rpx;
				line-height: 56rpx;
				text-align: center;
				color: #999999;
				border: 1rpx solid #cccccc;
				border-radius: 30rpx;
			}
		}
	}
</style>
