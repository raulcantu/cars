namespace("Cars.Home");

Cars.Home.Index = (function ($, undefined) {

    var app = angular.module("home", []);

    app.controller('objectTypes', function ($scope) {
        $scope.objects = [
            {
                name: 'Sedán',
                class: 'sedan',
                icon: 'car'
            },
            {
                name: 'Coupe',
                class: 'coupe',
                icon: 'car'
            },
            {
                name: 'Pick-Up',
                class: 'pick-up',
                icon: 'truck'
            },
            {
                name: 'Moto',
                class: 'bike',
                icon: 'motorcycle'
            },
            {
                name: 'Camión',
                class: 'truck',
                icon: 'truck'
            },
            {
                name: 'Acuático',
                class: 'acuatic',
                icon: 'ship'
            }
        ];
    });

    //home.directive('filterType', function () {
    //    return {
    //        restrict: 'E',
    //        template: '<div class="text-center col-xs-12 col-sm-6 col-md-4 col-lg-3">' +
    //                        '<div class="type-card" id="type-card-{{type.name}}">' +
    //                            '<span>{{type.name}}</span>' +
    //                            '<i class="fa fa-car"></i>' +
    //                        '</div>' +
    //                    '</div>'
    //    };
    //});

    function init() {
        //////VARIABLES//////
        var regions = "";
        var tempSelectedRegions = new Array();
        var selectedRegions = new Array();


        //////Calls before loading///////////
        mapHover();


        ///////Wait for loading////////////
        $().ready(function () {

            ////All cards events//////
            cardsEvents();

            ///Load current client location////
            getCurrentLocation();

            ///All buttons events////
            btnEvents();
        });

        ///////////GENERAL FUNCTION/////////////

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


        /////////////////CARDS////////////////
        function cardsEvents() {
            $(".type-card").click(function () {
                var position = $(this).offset();
                cardSelected($(this), position);
            });
            $(".type-selected-container i").click(function () {
                closeType();
            });
        }

        function cardSelected(selected, position) {
            var type = selected.find("span").html();
            var icon_container = $(".type-selected-container").find(".icon-type");
            $(".type-card-container > div").stop(true, true).animate({ width: 0, height: 0 }, 500, function () { $(this).hide(); });
            $(".type-selected-container").show();
            $(".type-selected-container").stop(true, true).animate({ width: "20%", height: "7rem" }, 500, function () {
                $(this).find("h4").html(type);
                $(".type-selected-container").stop(true, true).animate({ width: "100%", height: "10rem" }, 500);
            });
            var icon = "fa-car";
            switch (type) {
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
            loadJson(file, type);
        }

        function closeType() {
            $(".type-selected-container").hide();
            $(".type-card-container > div").attr("style", "");
            $("#filter").fadeOut("slow");
        }

        function loadJson(file, type) {
            $.getJSON("/Content/Data/" + file + ".json", function (data) {
                var items = [];
                /*$.each( data, function( key, val ) {
                    items.push( "<li id='" + key + "'>" + val + "</li>" );
                });
        
                $( "<ul/>", {
                    "class": "my-new-list",
                    html: items.join( "" )
                }).appendTo( "body" );*/
            });
        }


        ///////////////LOCATION/////////////

        function getCurrentLocation() {
            $.get("http://ipinfo.io", function (response) {
                loadCurrentLocation(response.country, response.region);
            }, "jsonp");
        }
        function loadCurrentLocation(country, region) {
            $.getJSON("/Content/Data/Maps/" + country + "/Regions.json", function (data) {
                regions = data;
                var info = getObjects(data, "name", region)[0];
                $("#filter-card-location h4").html(info["name-real"]);
                verifySVGMap(info["short-name"], 'filter-map-small');
                verifySVGMap(info["short-name"], 'filter-map');
                $(".regions-selected-container ul").append("<li class='region-selected' vid='" + info["short-name"] + "'>" + info["name-real"] + "</li>");
                selectedRegions.push(info["short-name"]);
                tempSelectedRegions.push(info["short-name"]);
            });
        }


        /////////////////////////SVG//////////////////////

        function verifySVGMap(region, map) {
            var svgDoc = document.getElementById(map).getSVGDocument();
            if (svgDoc == null) {
                document.getElementById(map).addEventListener('load', function () {
                    fillRegion(region, map);
                });
            }
            else {
                fillRegion(region, map);
            }
        }

        function fillRegion(region, map) {
            var svg = document.getElementById(map).contentDocument;
            svg.getElementById('svg3919').setAttribute("viewBox", "120 0 850 850");
            var paths = svg.getElementsByTagName('path');
            for (var i = 0; i < paths.length; i++) {
                //if(paths[i].id == region){
                if ($.inArray(paths[i].id, selectedRegions) >= 0) {
                    paths[i].setAttribute("selected", "true");
                    paths[i].style.fill = "aquamarine";
                }
            }
        }
        function mapHover() {
            mouseHoverMap();
            document.getElementById('filter-map').addEventListener('load', function () {
                mouseHoverMap();
            });
        }
        function mouseHoverMap() {
            var svgDoc = document.getElementById("filter-map").getSVGDocument();
            if (svgDoc != null) {
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
            }
        }
        function highlightPath() {
            if ($(this).attr("selected") != "true")
                this.style.fill = "green";
        }
        function unhighlightPath() {
            if ($(this).attr("selected") != "true")
                this.style.fill = "#333333";
        }
        function cleanMap(map) {
            var svg = document.getElementById(map).contentDocument;
            var paths = svg.getElementsByTagName('path');
            for (var i = 0; i < paths.length; i++) {
                paths[i].style.fill = "#333333";
                paths[i].setAttribute("selected", "false");
            }
        }
        function hidhlightRegions(map, regions) {
            var svg = document.getElementById(map).contentDocument;
            var paths = svg.getElementsByTagName('path');
            for (var i = 0; i < paths.length; i++) {
                if ($.inArray(paths[i].id, regions) >= 0) {
                    paths[i].style.fill = "aquamarine";
                    paths[i].setAttribute("selected", "true");
                }
            }
        }
        function selectPath(e) {
            var this_region = getObjects(regions, "short-name", this.id)[0];
            if ($.inArray(this_region["short-name"], tempSelectedRegions) < 0) //Regions unselected
            {
                tempSelectedRegions.push(this_region["short-name"]);
                $(".regions-selected-container ul").append("<li class='region-selected' vid='" + this_region["short-name"] + "'>" + this_region["name-real"] + "</li>");
                this.setAttribute("selected", "true");
                this.style.fill = "aquamarine";
            }
            else {
                var temRegions = new Array();
                temRegions = jQuery.grep(tempSelectedRegions, function (a) {
                    return a !== this_region["short-name"];
                });
                tempSelectedRegions = selectedRegions;
                tempSelectedRegions = temRegions;
                $(".regions-selected-container ul").find("li[vid='" + this_region["short-name"] + "']").remove();
                this.setAttribute("selected", "false");
                this.style.fill = "#333333";
            }
        }

        ///////////////////BUTTONS//////////////////

        function btnEvents() {
            var filter_open = false;
            $(".body-hide-popup").click(function () {
                if (filter_open) {
                    filter_open.find(".filter-card-big").fadeOut(200);
                    $(".body-hide-popup").hide();
                }
            });
            $(".filter-card .btn-edit").click(function () {
                $(".body-hide-popup").show();
                var filter = $("#" + $(this).attr("vid"));
                filter.stop(true, true).animate({ "z-index": 3 }, 200, function () {
                    filter.find(".filter-card-big").fadeIn(200).css('display', 'table');
                });
                filter_open = filter;
            });
            $("#filter-card-location .filter-card-big .btn-close").click(function () {
                filter_open.find(".filter-card-big").fadeOut(200);
                $(".body-hide-popup").hide();
                tempSelectedRegions = new Array();
                $(".regions-selected-container ul").html("");
                $.each(selectedRegions, function (i, e) {
                    var this_region = getObjects(regions, "short-name", e)[0];
                    $(".regions-selected-container ul").append("<li class='region-selected' vid='" + this_region["short-name"] + "'>" + this_region["name-real"] + "</li>");
                });
                cleanMap("filter-map");
                hidhlightRegions("filter-map", selectedRegions);
                tempSelectedRegions = selectedRegions;
            });
            $("#filter-card-location .filter-card-big .btn-check").click(function () {
                filter_open.find(".filter-card-big").fadeOut(200);
                $(".body-hide-popup").hide();
                selectedRegions = tempSelectedRegions;
                cleanMap("filter-map");
                hidhlightRegions("filter-map", selectedRegions);
                cleanMap("filter-map-small");
                hidhlightRegions("filter-map-small", selectedRegions);
                if (selectedRegions.length > 1) {
                    $("#filter-card-location .filter-card-small h4").html("Varios");
                }
                else {
                    if (selectedRegions.length == 1) {
                        var this_region = getObjects(regions, "short-name", selectedRegions[0])[0];
                        $("#filter-card-location .filter-card-small h4").html(this_region["name-real"]);
                    }
                    else {
                        $("#filter-card-location .filter-card-small h4").html("Seleccionar Region");
                    }
                }
            });
        }
    }

    return {
        Init: init
    };

}(jQuery));
