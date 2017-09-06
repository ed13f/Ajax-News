$(document).ready(function() {
  $(".post-container").on("submit", ".inline", function(event) {
    event.preventDefault();
    let $upvoteForm = $(this);
    let $upvoteButton = $upvoteForm.find(".upvote-button");
    let url = $upvoteForm.attr("action");
    let type = $upvoteForm.attr("method");
    let $points = $upvoteForm.closest("article").find(".points");

    $.ajax({
      url: url,
      type: type
    })
    .done(function(response) {
      $points.replaceWith(response.points);
      $upvoteButton.css("color", "lightgreen");
    })
  });

  $(".post-container").on("submit", ".delete", function(event){
      event.preventDefault();
      let $deleteForm = $(this)
      let $article = $deleteForm.closest("article");
      let url = $deleteForm.attr("action");
      // let type = $deleteForm.attr("method"); //version 2
      // let data = $deleteForm.serialize(); // version 2

      $.ajax({
        url: url,
        type: "DELETE" // version 1 you would delete this for version 2
        // type: type, //version 2
        // data: data //version 2
      })
      .done(function(response){
        $article.remove();
      });
    });

    $("#posts_form").on("submit", function(event){
    event.preventDefault();
    var $appendPost = $(this);
    var url = $appendPost.attr("action");
    var type = $appendPost.attr("method");
    var data = $appendPost.serialize();
    $.ajax({
      url: url,
      type: type,
      data: data
    })
    .done(function(response){
      console.log(response.post)
      $(".post-container").append(response.post);
      $appendPost.trigger("reset");
    });
  });
});
