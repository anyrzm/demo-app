<template>
	<view class="search-box">
		<view class="search-input" v-if="searchType == 'input'">
			<view class="input-box">
				<text class="iconfont icon-sousuo "></text>
				<input type="text" v-model="modelValue" placeholder="搜索菜谱,食材" placeholder-style="color:#cccccc"/>
			</view>
			<text class="search-btn" @click="getData(modelValue)">搜索</text>
		</view>
		<navigator url="../search/search" class="search" v-else>
			<text class="iconfont icon-sousuo "></text>
			<text>搜索菜谱,食材</text>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modelValue: this.inputValue,
			}
		},
		props: {
			searchType: { // 可选字段，有默认值
			    default: 'text'
			},
			inputValue: { // 可选字段，有默认值
			    default: ''
			},
		},
		onLoad(e) {},
		methods: {
			getData (e) {
				var t = this;
				if (t.modelValue == '') {
					uni.showToast({
						title: '关键字不能为空',
						icon: 'none'
					})
				} else {
					uni.request({
						url: t.$serverUrl + '/search',
						data: { 
							appkey: t.$appkey,
							keyword: e,
							num: 60
						},
						success: (ret) => {
							if (ret.statusCode !== 200) {
								t.isShow = !0
								console.log('请求失败', ret)
								return;
							};
							const data = ret.data.result.list;
							this.$parent.$data.lists = data;
							this.$parent.$data.isShow = 0;
							this.$parent.$data.classid = '';
						}
					});
				}
			},
		}
	}
</script>

<style scoped lang="less">
	.search-box {
		width: 100%;
		height: 112rpx;
		padding: 24rpx 0;
		box-sizing: border-box;
		background-color: #333333;
		font-size: 28rpx;
		color: #CCCCCC;
		.search-input {
			width: 94%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.input-box {
				width: 88%;
				height: 100%;
				flex-shrink: 0;
				background-color: #FFFFFF;
				border-radius: 12rpx;
				overflow: hidden;
				position: relative;
				text {
					position: absolute;
					left: 24rpx;
					top: 50%;
					transform: translate3d(0,-50%,0);
				}
				input {
					display: inline-block;
					width: 100%;
					height: 100%;
					padding-left: 68rpx;
					box-sizing: border-box;
					color: #666666;
				}
			}
			.search-btn {
				width: 100%;
				height: 100%;
				line-height: 64rpx;
				text-align: right;
				font-size: 30rpx;
			}
		}
		.search {
			width: 94%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 12rpx;
			background-color: #FFFFFF;
		}
	}
</style>
