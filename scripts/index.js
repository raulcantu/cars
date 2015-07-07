$().ready(function(){
    $(".type-card").click(function(){ 
        var position = $(this).offset();
        cardSelected($(this), position); 
    });
});

function cardSelected(selected, position){
    var type = selected.find("span").html();
    $(".type-card-container > div").stop(true,true).animate({width:0,height:0},1000,function(){$(this).hide();});
    $(".type-selected-container").stop(true,true).animate({width:"20%",height:"7rem"},1000,function(){
        $(this).find("h4").html(type);
        $(".type-selected-container").stop(true,true).animate({width:"100%",height:"10rem"},1000);
    });
}