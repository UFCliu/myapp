function haldleAddDelInput(delEle)
{
    $('.input_view').each(function(){
        $(this).first("li").find("span").click(function(){
            $(this).closest("ul").append(delEle);
        });
    });

    $('.input_view').on("click", "#delInp", function(){
        $(this).closest("li").remove();        
    });
}