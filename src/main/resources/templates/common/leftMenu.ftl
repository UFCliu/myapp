<a class="menu-toggler" id="menu-toggler" href="javascript:void(0);">
	<span class="menu-text font_color"></span>
</a>

<div class="sidebar" id="sidebar">
	<script type="text/javascript">
		try {
			ace.settings.check('sidebar', 'fixed');
			//
		} catch (e) {
		}
	</script>


	<!-- #sidebar-shortcuts -->

	<ul class="nav nav-list" style="height:500px;overflow:auto;">
		<#if pers??>
			<#list pers as resource>
			<li>
			<!-- 一级菜单  -->
				<a id="first_${resource_index}" href="javascript:void(0);" class="dropdown-toggle" onclick="breadNav(this)">
					<i class="icons gray icons_member"></i>
					<span class="menu-text  font_color">${resource.cnName}</span>
					<b class="arrow icon-angle-down"></b>
				</a>
				<#if resource.childs??>
				<ul class="submenu">
					<#list resource.childs as childs>
						<#if childs.childs?? && childs.childs?size gt 0>
							<li>
							<!-- 二级菜单  -->
								<a id="second_${resource_index}_${childs_index}" href="javascript:void(0);" class="dropdown-toggle" onclick="breadNav(this)">
									<i class="icons gray icons_member"></i>
									<span class="menu-text  font_color">${childs.cnName}</span>
									<b class="arrow icon-angle-down"></b>
								</a>
								<ul class="submenu">
								<#list childs.childs as child>
									<#if child.childs?? && child.childs?size gt 0>
										<!-- 三级菜单  -->
										<li>
											<a id="third_${resource_index}_${childs_index}_${child_index}" href="javascript:void(0);" class="dropdown-toggle" onclick="breadNav(this)">
												<i class="icons gray icons_member"></i>
												<span class="menu-text  font_color">${child.cnName}</span>
												<b class="arrow icon-angle-down"></b>
											</a>
											<ul class="submenu">
											<#list child.childs as children>
												<!-- 四级菜单  -->
												<li>
													<a id="forth_${resource_index}_${childs_index}_${child_index}_${children_index}" href="${(ctx)!}${children.link}" onclick="breadNav(this);changeLocation(this);return false;">
														<i class="icon-double-angle-right"></i>
														<span>${children.cnName}</span>
													</a>
												</li>	
											
										</#list>
										</ul>
										</li>
										
									<#else>
										<li>
											<a id="third_${resource_index}_${childs_index}_${child_index}" href="${(ctx)!}${child.link}" onclick="breadNav(this);changeLocation(this);return false;">
												<i class="icon-double-angle-right"></i>
												<span>${child.cnName}</span>
											</a>
										</li>	
									</#if>
							</#list>
							</ul>
							</li>
						<#else>
							<li>
								<a id="second_${resource_index}_${childs_index}" onclick="breadNav(this);changeLocation(this);return false;" href="${(ctx)!}${childs.link}">
									<i class="icon-double-angle-right"></i>
									<span>${childs.cnName}</span>
								</a>
							</li>	
						</#if>
					</#list>
					</ul>
				</#if>
			</li>
			</#list>
		</#if>
	</ul>
	<!-- /.nav-list -->
	<script type="text/javascript">
		function changeLocation(obj) {
			$("#iframe")[0].contentWindow.document.location.href = $(obj).attr("href");
		}
		try {
		ace.settings.check('sidebar', 'collapsed')
		} catch (e) {
		}
	</script>
</div>
