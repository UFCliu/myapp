(function($, window){
    $(document).ready(function(){
        // 改变所有readonly并且不是日期控件的元素背景色
        $(':input[readonly]').filter(function(index){
            return !$(this).hasClass('laydate-icon');
        }).addClass('lark-readonly');

        // 改变所有input样式的label背景色
        $('label, div').each(function(){
            if($(this).hasClass('input')) {
                $(this).addClass('lark-readonly');
            }
        });
    });
})(jQuery, window);