$ (document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#corgi-showing").toggle();
    $("#corgi-hidden").toggle();
  });
});
