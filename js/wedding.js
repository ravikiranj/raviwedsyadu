var wedding = (function (document, window) {
  var t = 1
    , s = 2
  ;

  return {
    init : function() {
      $("#MAIN_NAV a"). click(function(e) {
        e.preventDefault();
        $(this).tab("show");
      })
    }
  };
}(document, window));

wedding.init();
