<template>

<div class="jumbotron hidden-xs hidden-sm">
		<div class="mask"></div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-xs-6 col-md-3" v-for="item in menu">
				<div class="metro">
					<div class="cell valign-middle" v-link="item.url" v-bind:style="{backgroundColor:$site.colors[$index]}">
						<i class="fa fa-{{item.icon}} bg-icon"></i>
						<span class="text-xlg"><strong>{{item.name}}</strong></span><br>
						<span class="text-md">{{item.desc}}</span>					
					</div>
				</div> 
			</div>	

		</div>
	</div>
</template>

<script >
	module.exports = {
		data:function(){
			return {
				menu:[
				{'name':'公交出行','desc':'查询公交线路及换乘线路','url':'/bus','icon':'bus'},
				{'name':'长途客运','desc':'查询长途车相关信息','url':'/transport','icon':'map-o'},
				{'name':'道路管养','desc':'了解道路管理养护信息','url':'/maintain','icon':'road'},
				{'name':'办事指南','desc':'相关证件的办理流程','url':'/guide/','icon':'compass'},
				{'name':'在线投诉','desc':'您可以将投诉信息在线提交','url':'/online/complain','icon':'warning'},
				{'name':'意见建议','desc':'欢迎您提宝贵的意见建议','url':'/online/advice','icon':'edit'},
				{'name':'互动活动','desc':'介绍我们开展的活动情况','url':'/online/active','icon':'comments-o'},
				{'name':'了解更多','desc':'更多关于本平台的介绍','url':'/traffic/transport','icon':'info-circle'}
				]
			}
		}
	}
</script>