;(function () {

    angular
        .module('devhub-test')
        .controller('MainController', MainController)
        .controller('UserController', UserController);

    MainController.$inject = ['$scope', 'QueryService', '$location', 'NgTableParams'];
    UserController.$inject = ['$scope', 'QueryService', '$routeParams', '$route', '$window'];

    function MainController($scope, QueryService, $location, NgTableParams) {


        $scope.tableParams = new NgTableParams({
            page: 1,
            count: 10,
        }, {
            getData: function (params) {
                return QueryService.query('GET', 'posts', params, {})
                    .then((data) => {
                        params.total(data.inlineCount);
                        $scope.params = params;
                        return $scope.users = data.results;
                    });
            }
        });


        $scope.openUser = (id) => {
            console.log(id);
            $location.path('user/' + id);
        }

        $scope.confirmDelete = (item) => {
            $scope.contactToDelete = item;
        }

        $scope.delteContact = (item) => {
            QueryService.deleteUser(item.id)
                .then(id => $scope.users = $scope.users.filter(u => u.id != id))
        }

        $scope.createContact = () => {
            let usr = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                middlename: $scope.middlename,
                phone: $scope.phone,
                email: $scope.email,
                avatar: $scope.avatar
            }

            QueryService.createUser(usr)
                .then((f) => {
                    console.log(f)
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 10,
                    }, {
                        getData: function (params) {
                            return QueryService.query('GET', 'posts', params, {})
                                .then((data) => {
                                    params.total(data.inlineCount);
                                    return $scope.users = data.results;
                                });
                        }
                    });
                    $scope.firstname = '';
                    $scope.lastname = '';
                    $scope.middlename = '';
                    $scope.phone = '';
                    $scope.email = '';
                    $scope.avatar = '';
                })
        }


    }

    function UserController($scope, QueryService, $routeParams, $route, $window) {

        QueryService.getUser($routeParams.id)
            .then((user) => {
                $scope.user = user[0];
                console.log($scope.user);
            })

        $scope.back = () => {
            $window.history.back();
        }

    }

})();
