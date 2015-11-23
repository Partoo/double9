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
							<li>在上方输入框中输入关键字,按"搜索图标"查找公交线路
							<li>支持的查找方式:
								<ol>
									<li>线路数字编号,如查找1路,只需要输入数字"1"</li>
									<li>站点名称,如 "市政府"</li>
									<li>支持模糊查询,如"庄"会搜索出"李哥庄" "苑哥庄"等</li>
								</ol>
							</li>
						</ul>            
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script >
	module.exports = {
		
	}
</script>