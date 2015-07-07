$().ready(function(){
    $(".type-card").click(function(){ 
        var position = $(this).offset();
        cardSelected($(this), position); 
    });
    $(".type-selected-container i").click(function(){
        closeType(); 
    });
});

function cardSelected(selected, position){
    var type = selected.find("span").html();
    var icon_container = $(".type-selected-container").find(".icon-type");
    $(".type-card-container > div").stop(true,true).animate({width:0,height:0},1000,function(){$(this).hide();});
    $(".type-selected-container").show();
    $(".type-selected-container").stop(true,true).animate({width:"20%",height:"7rem"},1000,function(){
        $(this).find("h4").html(type);
        $(".type-selected-container").stop(true,true).animate({width:"100%",height:"10rem"},1000);
    });
    var icon = "fa-car";
    switch(type){
        case "Sedan":
            var file = "autos";
            icon = "fa-car";
            break;
        case "Coupe":
            var file = "autos";
            icon = "fa-car";
            break;
    }
    
    icon_container.addClass(icon);
    
    loadJson(file,type);
}

function closeType(){
    $(".type-selected-container").hide();
    $(".type-card-container > div").stop(true,true).animate({width:auto,height:auto},1000,function(){$(this).show();});
}

function loadJson(file,type){
    $.getJSON( "../data/" + file + ".json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });   
}