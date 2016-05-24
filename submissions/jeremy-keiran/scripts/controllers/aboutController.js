(function(module) {
  var aboutController = {};

  aboutController.index = function() {

    repos.requestRepos(repoView.index);
    $('#about').show().siblings().hide();
    // TODO DONE: Call the function that loads (or 'requests') our repo data.
    //  Pass in some view function as a higher order callback, so our repos
    //  will render after the data is loaded.

  };

  module.aboutController = aboutController;
})(window);
