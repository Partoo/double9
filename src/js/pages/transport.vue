<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="input-group input-group-lg">
					<input type="text" id="input1-group2" name="input1-group2" class="form-control" placeholder="请输入关键字">

					<span class="input-group-btn">
						<button type="button" class="btn btn-primary"><i class="fa fa-search"></i></button>
					</span>
				</div>

				<div class="panel panel-default" style="margin-top: 20px">
					<div class="panel-heading" data-original-title="">
					<h2><i class="fa fa-list"></i><span class="break"></span>操作提示</h2>
					</div>
					<div class="panel-body">
						<ul>
							<li>在上方输入框中输入您要检索的地点,按"搜索图标"后进行检索
						</ul>            
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
				
			}
		}	
	}
</script>