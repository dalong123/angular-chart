(function () {

  'use strict';

  function DebugController() {
    var vm = this;

    vm.options = {
      data: [
        {data1: 30, value: 10}
      ],
      dimensions: {
        data1: {
          axis: 'y'
        },
        value: {
          type: 'bar',
          label: true,
          displayFormat: d3.format("$,")
        }
      },
      chart: {
        zoom: {
          enabled: true
        }
      }
    };

    vm.updateChart = function () {
      vm.options.chart.size = {
        height: 300 + Math.random() * 100
      };
      console.log('new options', vm.options);
    };

    vm.updateData = function () {
      vm.options.data.push({data1: Math.random() * 100});
    };

    vm.updateSchema = function () {
      vm.options.schema = {
        data1: {}
      };
    };

    vm.updateState = function () {
      vm.options.state = {
        zoom: {
          range: [-0.5, 0.5]
        }
      };
    };

  }

  angular
    .module('AngularChartDebug')
    .controller('DebugController', DebugController);

})();
