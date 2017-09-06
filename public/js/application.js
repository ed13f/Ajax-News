$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
$(".vote-button").on("click", function(event) {
  event.preventDefault();
  var $vote = $(this)
  var $article = $(this).closest("article").attr('id');

  $.ajax({
    url:"/posts/"+$article+"/vote",
    method:"POST",

  }).done(function(response) {
    $vote.css("color", "red");
    $("article#"+$article).children().children(".points").text(response);
  })

  $("a.delete").click(function(event){
    event.preventDefault();
    var xyz = $(this).closest("article").attr('id');
    $.ajax({
      url: "/posts/"+xyz,
      method: "DELETE",
    }).done(function(){
    $("article#"+xyz).remove();
  })
  })
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
