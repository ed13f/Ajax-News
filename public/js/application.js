$(document).ready(function() {
  $(".post-container").delegate(".vote", "submit", function(){
  // $(".vote").submit(function(event){
    event.preventDefault();
    $form= $(this)
    $article = $form.closest("article")
    $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method"),
    })
    .done(function(response){
      $article.children("p").children(".points").text(response);
    })
  })
  $(".create_form").submit(function(event){
    event.preventDefault()
    $form = $(this)
    $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method"),
      data:$form.serialize()
    })
    .done(function(response){
      $(".post-container").append(response);
      $(".text_field").val("");
    })
  })
  $(".post-container").delegate(".delete_form", "click", function(event){
    event.preventDefault();
    $form = $(this)
    $article = $(this).closest("article");
    $.ajax({
      url: $form.attr("action"),
      method: $form.attr("method"),
      data: $form.serialize()
    })
    .done(function(){
      $article.remove();
    })
  })
});
