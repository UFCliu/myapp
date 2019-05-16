<div class="navbar navbar-default" id="navbar">
    <script type="text/javascript">
        try{ace.settings.check('navbar' , 'fixed')}catch(e){}
    </script>

    <div class="navbar-container" id="navbar-container">
        <div class="navbar-header pull-left">
            <a href="javascript:void(0);" class="navbar-brand clear_pad  text-left">
                <img  src="${resCtx}/resources/images/logo.png"/>
                <span  style="font-size:20px; vertical-align:sub;">医药电商后台管理系统</span>
            </a><!-- /.brand -->
        </div><!-- /.navbar-header -->

        <div class="navbar-header pull-right" role="navigation">
            <ul class="nav_menu">
            	<!--
                <li>
                    <a href="#"><i class="icons icons_task"></i> 任务</a>
                </li>
                <li>
                    <a href="#"><i class="icons icons_notice"></i> 通知</a>
                </li>
                <li>
                    <a href="#"><i class="icons icons_message"></i> 消息</a>
                </li>-->
                <li>
                    <a href="#" style="text-decoration:none;cursor:default;"><i class="icon-user"></i> ${user.name}</a>
                </li>
                <li>
                    <a href="${ctx}/logout.jhtml"><i class="icon-off"></i> 退出</a>
                </li>
            </ul><!-- /.ace-nav -->
        </div><!-- /.navbar-header -->
    </div><!-- /.container -->
</div>