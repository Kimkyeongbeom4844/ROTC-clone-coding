$(".mainmenu>li").mouseover(function(){
    $(this).find(".submenu").stop().show();
});
$(".mainmenu>li").mouseout(function(){
    $(this).find(".submenu").stop().hide();
});