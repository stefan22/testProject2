githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);










// githubUserSearch.controller('GitUserSearchController', [ '$resource',function($resource) {
//
//   var searchResource = $resource('https://api.github.com/search/users');
//
//   var self = this;
//
//   self.doSearch = function (){
//     self.searchResult = searchResource.get(
//       { q: self.searchTerm }
//     );
//   };
//
// }]); //GitUserSearchController
//
