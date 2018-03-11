function loadPage(filename) {
	$( "#main" ).load(filename);
}

$(function() {
  var root = null;
  var useHash = true;
  var hash = '#';
  var router = new Navigo(root, useHash, hash);

  router
    .on({
      'profile/:id': function (context) {
        console.log(context);
        loadPage('profile.html');
      },
      'about': function () {
        loadPage('about-us.html');
      },
      '*': function () {
        loadPage('homepage.html')
      }
    })
    .resolve();
});


