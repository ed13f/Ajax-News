$(document).ready(function() {
  $(".post-container").delegate(".vote", "submit", function(event){
    event.preventDefault();
    $form = $(this)
    $article = $form.closest("article")
    $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method")
    })
    .done(function(response){
      $($article).find(".points").text(response)
    })
  })
  $(".post-container").delegate(".delete", "submit", function(event){
    event.preventDefault();
    $form = $(this);
    $article = $form.closest("article")
    $.ajax({
      url: $form.attr("action"),
      method: "delete"
    })
    .done(function(response){
      $article.hide();
    })
  })
  $("#posts").submit(function(event){
    event.preventDefault()
    $form = $(this)
    $.ajax({
      url: $form.attr("action"),
      method:$form.attr("method"),
      data: $form.serialize()
    })
    .done(function(response){
      if (response == "") {
        $(".input").attr("placeholder", "Text field cannot be left blank");
      } else {
        $(".input").val("");
        $(".input").attr("placeholder", "title");
        $(".post-container").append(response);
      }
    })
  })
});
