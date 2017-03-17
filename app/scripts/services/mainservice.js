'use strict';

/**
 * @ngdoc service
 * @name genUiApp.mainService
 * @description
 * # mainService
 * Service in the genUiApp.
 */
angular.module('genUiApp')
  .service('mainService', function () {
    
    var screenWidth;

    this.setWidth = function(width){
      screenWidth = width;
    }

    this.getWidth = function(){
      return width;
    }


  });
