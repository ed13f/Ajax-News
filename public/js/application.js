$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $( ".post-container" ).on("click", "button.vote-button", function(e) {
    e.preventDefault();

    var type = $(this).parent().attr("method");
    var url = $(this).parent().attr("action");
    var this_placeholder = $(this);

    $.ajax({
     type: type,
     url: url,
   })
   .done(function(response) {
     $(this_placeholder).parent().siblings("p").children(".points").text(response);
     $(this_placeholder).css("color","red");
   })
  });

  $(".post-container").on("click", "form a.delete", function(e) {
    e.preventDefault();
    var type = "delete";
    var url = $(this).parent().attr("action");
    $.ajax({
     type: type,
     url: url,
    })
    $(this).parents("article").remove();
  });

  $( "#posts" ).submit(function(e) {
    e.preventDefault();

    var type = $(this).attr("method");
    var url = $(this).attr("action");
    var data = $(this).serialize();

    $.ajax({
     type: type,
     url: url,
     data: data
   })
   .done(function(response) {
      $(".post-container").append(response);
   })
  });
});
