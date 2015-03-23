'use strict';

angular.module("sportsStore")
	.filter("unique", function(){
		return function(date, propertyName) {
			if(angular.isArray(data) && angular.isString(propertyName)) {
				var results = [];
				var keys = [];
				for (var i = 0; i < data.lentgh; i++) {
					val = data[i][propertyName];
					if(angular.isUndefined(keys[val])) {
						keys[val] = true;
						results.push(val);
					}
				}
				return results;
			} else {
				return data;
			}
		}
	});