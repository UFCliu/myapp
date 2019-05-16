/*******************************
 * @name Layer跨浏览器兼容插件 v1.0
 *******************************/
;(function($){
    $.fn.backLayer = function(){
        var isIE = (document.all) ? true : false;
        var isIE6 = isIE && !window.XMLHttpRequest;
        var position = !isIE6 ? "fixed" : "absolute";
        var containerBox = jQuery(this);
            containerBox.css({"z-index":"9999","display":"block","position":position ,"top":"50%","left":"50%","margin-top": -(containerBox.height()/2)+ "px","margin-left": -(containerBox.width()/2) + "px"});
        var layer=jQuery("<div></div>");
            layer.css({"width":"100%","height":"100%","position":position,"top":"0px","left":"0px","background-color":"#000","z-index":"9998","opacity":"0.6"});
        jQuery("body").append(layer);
        function layer_iestyle(){
            var maxWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
            var maxHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
            layer.css({"width" : maxWidth , "height" : maxHeight });
        }
        function containerBox_iestyle(){
            var marginTop = jQuery(document).scrollTop - containerBox.height()/ 2 + "px";
            var marginLeft = jQuery(document).scrollLeft - containerBox.width()/ 2 + "px";
            containerBox.css({"margin-top" : marginTop , "margin-left" : marginLeft });
        }
        if(isIE){
            layer.css("filter","alpha(opacity=60)");
        }
        if(isIE6){
            layer_iestyle();
            containerBox_iestyle();
        }
        jQuery("window").resize(function(){
            layer_iestyle();
        });
        layer.click(function(){
            containerBox.hide();
            jQuery(this).remove();
        });
    };
})(jQuery);