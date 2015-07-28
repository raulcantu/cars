var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.showChilds = function(item){
		item.active = !item.active;
	};
	
	$scope.menu = [
		{
			name: "Option 1",
			active: false,
			submenu: [
				{
					name: 'submenu 1',
					active: false
				}
			]
		},
		{
			name: "Option 2",
			active: false,
			submenu: [
				{
					name: 'submenu 1',
					active: false
				},
				{
					name: 'submenu 2',
					active: false
				}
			]
		},
		{
			name: "Option 3",
			active: false,
			submenu: [
				{
					name: 'submenu 1',
					active: false
				}
			]
		},
		{
			name: "Option 4",
			active: false,
			submenu: [
				{
					name: 'submenu 1',
					active: false
				},
				{
					name: 'submenu 2',
					active: false
				},
				{
					name: 'submenu 3',
					active: false
				}
			]
		},
		{
			name: "Option 5",
			active: false,
			submenu: [
				{
					name: 'submenu 1',
					active: false
				},
				{
					name: 'submenu 2',
					active: false
				}
			]
		}
	];
    
    $scope.cards = [
        {
            title: 'Title 1',
            description: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            imageUrl: 'img/washedout.png',
            imageTitle: 'Image',
            imageAlt: 'Paracosm Image',
            buttons: [
                {
                    title: 'Action 1' ,
                    directives: '',
                    action: ''
                }
            ]
        },
        {
            title: 'Title 2',
            description: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            imageUrl: 'img/washedout.png',
            imageTitle: 'Image',
            imageAlt: 'Paracosm Image',
            buttons: [
                {
                    title: 'Action 1' ,
                    directives: '',
                    action: ''
                }
            ]
        },
        {
            title: 'Title 3',
            description: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            imageUrl: 'img/washedout.png',
            imageTitle: 'Image',
            imageAlt: 'Paracosm Image',
            buttons: [
                {
                    title: 'Action 1' ,
                    directives: '',
                    action: ''
                }
            ]
        },
        {
            title: 'Title 4',
            description: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...",
            imageUrl: 'img/washedout.png',
            imageTitle: 'Image',
            imageAlt: 'Paracosm Image',
            buttons: [
                {
                    title: 'Action 1' ,
                    directives: '',
                    action: ''
                }
            ]
        }
            
    ];

}]);
