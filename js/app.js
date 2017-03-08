var app = angular.module('HellApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.nome =  '';
    $scope.sobrenome =  '';
    $scope.exibirConteudo = function(texto){
        alert(texto);
    }
});
