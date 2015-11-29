var wedding = (function (document, window) {
  var _initTabs = function() {
    $("#MAIN_NAV a"). click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  }
  , _initHeroText = function() {
    $("#home .hero-title").arctext({radius: 2000});
    $("#home .hero-subtitle").arctext({radius: 4000, dir: -1});
  }
  ;

  return {
    init : function() {
      _initTabs();
      _initHeroText();
    }
  };
}(document, window));

wedding.init();
