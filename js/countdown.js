var weddingDateStr = "2016/02/17";
var weddingDate = new Date(weddingDateStr);

var updateCountdownCallback = function(event) {
  $(this).html(event.strftime("%-D day%!D, %H hour%!H, %M minute%!M, %S second%!S"));
};

var finishedCountdownCallback = function(event) {
  $(".countdown-timer-text").hide();
  $(this).html("Ravi and Yadu were married on " + weddingDate.toDateString());
};

$(".countdown-timer").countdown(weddingDateStr)
  .on("update.countdown", updateCountdownCallback)
  .on("finish.countdown", finishedCountdownCallback);
