(function() {
'use strict';

    angular
        .module('app')
        .controller('SampleModalCtrl', SampleModalController);

    SampleModalController.$inject = ['$http', '$uibModalInstance', 'items', 'count'];
    function SampleModalController($http, $uibModalInstance, items, count) {
        var vm = this;
        
        console.log(items);

        vm.ok = function(){
            $uibModalInstance.close(vm.selected.item); 
        };

        vm.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };

        vm.selectItem = function(item){
            // $event.preventDefault(); 
            vm.selected.item = item;            
        }

        vm.items = [
            { hello: 'world' },
            { hello: 'hello' }
        ];

        vm.selected = {};

        vm.selected.item = vm.items[0];

        activate();

        ////////////////

        function activate() { 


        }
    }
})();