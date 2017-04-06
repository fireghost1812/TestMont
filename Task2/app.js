//Подключаем Angular с точкой входа = див с ng-app
// подключаем контроллер в этом же диве
angular.module('sortApp', [])
  .controller('mainController', function($scope) {
    $scope.sortType        = 'name'; // значение сортировки по умолчанию
    $scope.sortReverse     = false;  // обратная сортировка
    $scope.search          = '';     // значение поиска по умолчанию для каждого фильтра ng-model
    $scope.searchData      = '';
    $scope.searchDataUntil = '';
    $scope.searchClient    = '';
    $scope.searchStatus    = '';
    // список с данными в виде объекта(сюда должны приходить данные из БД)
    // отображаем его в ng-repeat
    $scope.orders = [
      { offer: 'DGR65025415', created: '17.12.2010', amount: 250000,validUntil: '',status: 'На размещении', comment: 'Срок окончания не установлен' },
      { offer: 'DGRRTTTT65025487815', created: '01.10.2000', amount: 40000,validUntil: '25.04.2005',status: 'Действует', comment: '' },
      { offer: 'ERERDR65025415', created: '27.02.2006', amount: 72100,validUntil:'31.03.2009',status: 'В обработке', comment: 'Нет формы' },
      { offer: 'SDFSDG7583753', created: '22.04.2015', amount: 655000,validUntil:'13.04.2017',status: 'Обновляется', comment: 'Денег нет, но вы держитесь' },
      { offer: 'DGTRTR65025415', created: '17.12.2010', amount: 250000,validUntil: '',status: 'На размещении', comment: 'Срок окончания не установлен' },
      { offer: 'DGRDFRTTTT65025487815', created: '11.10.2002', amount: 40500,validUntil: '25.04.2004',status: 'Действует', comment: '' },
      { offer: 'ER45ERDR65025415', created: '27.12.2016', amount: 722100,validUntil:'21.07.2019',status: 'В обработке', comment: 'Нет формы' },
      { offer: 'SD678FSDG7583753', created: '22.05.2010', amount: 155000,validUntil:'13.04.2017',status: 'Обновляется', comment: 'Денег нет, но вы держитесь' }
    ];
  });