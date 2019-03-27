<template>
	<div id="login">
		<div class="loginBox">
			<div class="logincontent">
				<div class="loginTop">
					<div class="headPortraitBox">
						<div class="headPortrait">
							<img src="/images/Portrait.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="loginCenter"></div>
				<div class="loginBotton"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
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
	@media screen and (min-width: 500px) 
		#login
			transform scale(0.9)
			position absolute
			top 50%
			left 50%
			margin-left -250px
			margin-top -400px
			box-shadow 0px 0px 100px rgba(255,255,255,0.5)

	#login
		width 100%
		height 100%
		max-width 500px
		max-height 800px
		.loginBox
			box-sizing border-box
			width 100%
			height 100%
			.logincontent 
				height  100%
				.loginTop
					height 50%
					background-image url(/images/L_top.jpg) 
					background-repeat no-repeat
					background-size 100% 102%;
					overflow hidden
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
					height 45%
					background pink 
				.loginBotton
					height 5%
					background green	

</style>
