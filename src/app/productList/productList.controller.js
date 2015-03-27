'use strict';

angular.module("sportsStore")
	.constant("ProductListActiveClass", "btn-primary")
	.controller("ProductListCtrl", function($filter, ProductListActiveClass){
		var selectedCategory = null;
		this.selectCategory = function (newCategory) {
			selectedCategory = newCategory;
		}

		this.categoryFilterFn = function(product) {
			return selectedCategory == null ||
				product.category == selectedCategory;
		}

		this.getCategoryClass = function(category) {
			return selectedCategory == category ? ProductListActiveClass : "";
		}

	});

