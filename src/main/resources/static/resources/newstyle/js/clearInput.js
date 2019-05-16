function tog(v){
  	return v?'addClass':'removeClass';
}
 
$(document).on('input', '.clearable', function(){
    $(this)[tog(this.value)]('x');
  }).on('mousemove', '.x', function( e ){
    $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');   
  }).on('click', '.onX', function(){
    $(this).removeClass('x onX').val('').change();
});

// 点击reset按钮时同时清除input框中的x
$(document).on('click', 'input[type=reset]', function(){
    $('.clearable').removeClass('x');
});