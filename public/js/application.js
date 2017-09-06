$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
$(".inline").on("submit", function(event){
    event.preventDefault()
    var form = $(this)
    var points = $(this).siblings("p").children(".points")
    var vote = $(this).find("button")
    vote.css("color","red")
    $.ajax({
      url: form.attr("action"),
      method: form.attr("method")
    })
    .done(function(response){
      $(points).html(response)
    })
  })
});
