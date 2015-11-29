var wedding = (function (document, window) {
  "use strict";
  var _initHeroText = function() {
    $("#MAIN .hero-title").arctext({radius: 1000});
    $("#MAIN .hero-subtitle").arctext({radius: 5000, dir: -1});
  }
  , _initCountdown = function() {
    var weddingDate = new Date("2016/02/17 04:00:00 GMT+0530")
    , updateCountdownCallback
    , finishedCountdownCallback
    ;

    updateCountdownCallback = function(event) {
      $(this).html(event.strftime("%-D day%!D, %H hour%!H, %M minute%!M, %S second%!S"));
    };

    finishedCountdownCallback = function(event) {
      var istOffset = 330 // +0530
        , currOffset = new Date().getTimezoneOffset()
        , istTime = new Date(weddingDate.getTime() + (istOffset + currOffset) * 60 * 1000)
      ;
      $(".countdown-timer-text").hide();
      $(this).html("Yadu and Ravi were married on " + istTime.toDateString());
    };

    $(".countdown-timer").countdown(weddingDate)
      .on("update.countdown", updateCountdownCallback)
      .on("finish.countdown", finishedCountdownCallback);
  }
  ;

  return {
    init : function() {
      _initHeroText();
      _initCountdown();
    }
  };
}(document, window));

wedding.init();
