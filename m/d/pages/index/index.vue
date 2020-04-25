<template>
	<view class="index">
		<view v-show="isShow">
			<searchView></searchView>
			<swiperView></swiperView>
			<groomView></groomView>
			<goodsView :lists='lists'></goodsView>
			<shareView></shareView>
		</view>
	</view>
</template>

<script>
	import searchView from '@/components/search/search';
	import swiperView from '@/components/swiper/swiper';
	import groomView from '@/components/groom/groom';
	import goodsView from '@/components/goods/goods';
	import shareView from '@/components/share/share';
	
	const searcharr = [377,302,303,317,310,317,313,315,224,2];
	export default {
		data() {
			return {
				lists: '',
				isShow: 0
			}
		},
		components:{searchView,swiperView,groomView,goodsView,shareView},
		onLoad(e) {
			this.getData();
		},
		methods: {
			getData(e) {
				var t = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: t.$serverUrl + '/byclass',
					data: { 
						appkey: t.$appkey,
						classid: searcharr[this.random(1,10)],
						start: 38,
						num: 20
					},
					success: (ret) => {
						const data = ret.data.result.list;
						t.lists = data;
						uni.hideLoading();
						t.isShow = !t.isShow;
					}
				});
			},
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

<style lang="less">
	
	
</style>
