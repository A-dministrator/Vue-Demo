<template>
	<div id="login">
		<div class="loginBox">
			<div class="loginContent">
				<div class="loginTop">
					<div class="headPortraitBox">
						<div class="headPortrait">
							<img src="/images/Portrait.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="loginCenter">
					<div class="loginForm">
						<div class="formMenu">
							<input type="text" placeholder="用户名">
							<input type="password" placeholder="密码">
						</div>
						<div class="commitBtn">
							<span>登录</span> 
						</div>
						<div class="registerBtn">
							<router-link to="/register" tag="span">
								注册
							</router-link>
						</div>
					</div>
				</div>
				<div class="loginBotton"></div>
			</div>
			<transition name="move"> 
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
export default {
	name:'login',
	data(){
			return {
					
			}
	},
	methods:{},
	created() {

	}
}
</script>
<style lang="stylus" scope>
	#login
		width 100%
		height 100%
		box-shadow 0px 0px 80px #fff
		overflow hidden
		.loginBox
			box-sizing border-box
			width 100%
			height 100%
			background-image url(/images/L_top.jpg) 
			background-repeat no-repeat
			background-size 100% 100%
			z-index -1
			.loginContent 
				height  100%
				position relative
				.loginTop
					height 40%
					position relative
					.headPortraitBox
						width 1.1rem
						height 1.1rem
						border-radius 50%
						background rgba(255,255,255,0.5)
						position absolute
						top 40%
						left 50%
						margin-top -0.55rem
						margin-left -0.55rem
						box-shadow 0px 1px 50px #fff
						overflow hidden
						.headPortrait
							width 1rem
							height 1rem
							border-radius 50%
							background rgba(255,255,255,0.7)
							position absolute
							top 50%
							left 50%
							margin-top -0.5rem
							margin-left -0.5rem
							overflow hidden
							img 
								width 100%
				.loginCenter
					height 55%
					.loginForm
						box-sizing border-box
						height 100%
						padding 0  15%
						.formMenu
							width 100%
							height auto 
							input 
								display block
								box-sizing border-box
								outline none 
								border none 
								border-bottom 1px solid white
								width 100%
								height 0.4rem
								padding 0 5%
								margin-bottom 5%
								background transparent
								font-size 0.14rem
							input::-webkit-input-placeholder 
								color #fff	
						.commitBtn
							margin 10% 0
							width 100%
							height 0.5rem
							background white
							border-radius 50px
							text-align center
							line-height 0.5rem
							span
								font-size 0.2rem
								color #008bbd
						.registerBtn
							margin 10% 0
							width 100%
							height 0.5rem
							background #1cb4ea
							border-radius 50px
							text-align center
							line-height 0.5rem		
							span 
								font-size 0.2rem
								color #fff
				.loginBotton
					height 5%			
</style>
