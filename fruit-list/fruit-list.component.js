angular.module("fruitList").component('fruitList', {
    templateUrl:'fruit-list/fruit-list.template.html',
    controller: ['$http',function FruitListController($http) {
     var self = this;
		self.orderProp = 'age';

		$http.get('data/fruits.json').then(function(response) {
			self.fruits = response.data;
		});
    }]
  });