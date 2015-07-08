$().ready(function(){
    $(".type-card").click(function(){ 
        var position = $(this).offset();
        cardSelected($(this), position); 
    });
    $(".type-selected-container i").click(function(){
        closeType(); 
    });
    getCurrentLocation();
    mapHover();
    btnEvents();
});

function cardSelected(selected, position){
    var type = selected.find("span").html();
    var icon_container = $(".type-selected-container").find(".icon-type");
    $(".type-card-container > div").stop(true,true).animate({width:0,height:0},500,function(){$(this).hide();});
    $(".type-selected-container").show();
    $(".type-selected-container").stop(true,true).animate({width:"20%",height:"7rem"},500,function(){
        $(this).find("h4").html(type);
        $(".type-selected-container").stop(true,true).animate({width:"100%",height:"10rem"},500);
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
    $("#filter").fadeIn("slow");
    loadJson(file,type);
}

function closeType(){
    $(".type-selected-container").hide();
    $(".type-card-container > div").attr("style","");
    $("#filter").fadeOut("slow");
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
function getCurrentLocation(){
    $.get("http://ipinfo.io", function(response) {
        loadCurrentLocation(response.country, response.region);
    }, "jsonp");   
}
function loadCurrentLocation(country, region){
    $.getJSON( "data/Maps/" + country + ".json", function( data ) {
        var info = getObjects(data, "name", region)[0];
        $("#filter-card-location h4").html(info["name-real"]);
        verifySVGMap(info["short-name"]);
    });
}
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
function verifySVGMap(region){
    var svgDoc = document.getElementById('filter-map-small').getSVGDocument();
    if(svgDoc == null)
    {
        document.getElementById('filter-map-small').addEventListener('load',function(){
            fillRegion(region);
        });
    }
    else
    {
        fillRegion(region);
    }
}
function fillRegion(region){
    var svg = document.getElementById('filter-map-small').contentDocument;
    svg.getElementById('svg3919').setAttribute("viewBox" ,"120 0 850 850");
    var paths = svg.getElementsByTagName('path');
    for (var i = 0; i < paths.length; i++) {
        if(paths[i].getAttribute("id") == region){
            paths[i].setAttribute("selected","true");
            paths[i].style.fill = "aquamarine";
        }
    }
}
function mapHover(){
    document.getElementById('filter-map').addEventListener('load',function(){
        var svg = document.getElementById('filter-map').contentDocument;
        var paths = svg.getElementsByTagName('path');
        for (var i = 0; i < paths.length; i++) {
            if (window.addEventListener) { //Firefox, Chrome, Safari, IE 10
                paths[i].addEventListener('mouseover', highlightPath, false);
                paths[i].addEventListener('mouseout', unhighlightPath, false);
                paths[i].addEventListener('mousedown', selectPath, false);
            } else if (window.attachEvent) { //IE < 9
                paths[i].attachEvent('onmouseover', highlightPath);
                paths[i].attachEvent('onmouseout', unhighlightPath);
                paths[i].attachEvent('mousedown', selectPath);
            }
        }
    });
}
function highlightPath() {
    if($(this).attr("selected") != "true")
        this.style.fill = "green";
}
function unhighlightPath() {
    if($(this).attr("selected") != "true")
        this.style.fill = "#333333";
}
function selectPath(e) {
    this.setAttribute("selected","true");
    this.style.fill = "aquamarine";
}
function btnEvents(){
    $(".filter-card .btn-edit").click(function(){
        var filter = $("#" + $(this).attr("vid"));
        filter.stop(true,true).animate({"z-index":3},200,function(){
           //filter.find(".filter-card-small").hide();  
            //filter.stop(true,true).animate({height:"100%",width:"100%"},200,function(){
                filter.find(".filter-card-big").fadeIn();
            //});
        });
       
        
    });
}
