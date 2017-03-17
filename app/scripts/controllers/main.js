'use strict';

/**
 * @ngdoc function
 * @name genUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the genUiApp
 */
angular.module('genUiApp')
  .controller('MainCtrl', function (mainService) {
    
        var $this = this;
        
        $this.config = {
            defaultWidth : '100%',
            defaultDevice : 'col-sm-',
            defaultLayout : '12'
        };
        
        //initialize
        function _init(){
            
            $this.selected = {
                width : $this.config.defaultWidth,
                layout : $this.config.defaultLayout,
                device : $this.config.defaultDevice
            };
            
            $this.rowCount = [];
            $this.colCount = [];
        }
    
        //add Row
        $this.addPanel = function(e){
            e.preventDefault();
            e.stopPropagation();
            
            $this.rowCount.push("1");
            
            var $layoutRatio = angular.element(e.target).attr('data-mode');
            
            console.log($layoutRatio);
            var $ratios = ($layoutRatio.indexOf(',') !== -1)?$layoutRatio.split(','):[$layoutRatio];
            /*
            $ratios.map(function(item){
                return {id:item}
            });
            */
//            $this.colCount[$this.rowCount.length-1] = ["6","6"];
            $this.colCount[$this.rowCount.length-1] = $ratios;
        
            
            console.log($this.colCount);
        };
    
        //add Row
        $this.getLayout = function(){
            $this.selectedLayout = $this.selected.device+$this.selected.layout;
            return $this.selectedLayout;
        };
        //set container width
        $this.setContainerWidth = function(){
        
        };
        
        //set device type
        $this.setDeviceSupport = function(){
        
        };
    
        //set layout
        $this.setLayout = function(){
            
            
        };
        
        _init();
  });
