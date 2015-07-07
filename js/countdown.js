var weddingDate = new Date("2016/02/17 00:00:00 GMT+0530");

var updateCountdownCallback = function(event) {
  $(this).html(event.strftime("%-D day%!D, %H hour%!H, %M minute%!M, %S second%!S"));
};

var finishedCountdownCallback = function(event) {
  $(".countdown-timer-text").hide();
  $(this).html("Ravi and Yadu were married on " + weddingDate.toUTCString());
};

$(".countdown-timer").countdown(weddingDate)
  .on("update.countdown", updateCountdownCallback)
  .on("finish.countdown", finishedCountdownCallback);
