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

      $.ajax({
        url: url,
        type: "DELETE"
      })
      .done(function(response){
        $article.remove();
      });
    });
});
