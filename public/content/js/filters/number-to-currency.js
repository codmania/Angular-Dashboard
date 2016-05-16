app.filter('zCurrency', ["$filter", function ($filter) {
    return function(amount, currencySymbol){
        if (amount == null || amount == 0)
            return '-';
        else
            return $filter('currency')(amount, '$', 0);
    };
}]);