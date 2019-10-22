$ (document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#corgi-showing").slideToggle();
    $("#corgi-hidden").slideToggle();
  });

  $("#light-button").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("#dark-button").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
});
