$(function(){
  var flavors = ["Trash", "socks", "PB&J", "plain", "fish", "crab", "miso", "tomato", "potato", "whiskey", "beet"];

  flavors.forEach(function(flavor){

  $("h1#click").click(function() {

      $(".addIce").prepend("<li>" + flavor + "</li>");
  });

  });

});
