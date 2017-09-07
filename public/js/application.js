$(document).ready(function() {
  $(".upvote_form").on("submit", function(event){
    event.preventDefault();
    var $form = $(this)
    var $article = $(this).closest("article").attr('id');
    $.ajax({
      url: "/posts/"+$article+"/vote",
      method: $form.attr('method')
    })
    .done(function(response){
      $form.find(".upvote-button").css("color", "green");
      $("article#"+$article).children().children(".points").text(response);
    })
  })

  $(".delete").click(function(event){
    event.preventDefault()
    var $articleSection = $(this).closest('article')
    var $article = $(this).parent().parent().attr('id');
    $.ajax({
      url: '/posts/'+ $article,
      method: "delete"
    })
    .done(function(response) {
      $articleSection.remove();
    })
  })

  $("#posts").submit(function(event){
    event.preventDefault()
    var $form = $(this);
    var $tableData = $form.serialize()
    var $container = $form.siblings(".post_container")
    $.ajax({
      url: '/posts',
      method: "post",
      data: $tableData
    })
    .done(function(response){
      $(".post-container").append(response)
      $("#text_feild").val("")
    })
  })
  $(".post-container").delegate(".delete", "click", function(){
    $(this).closest("article")
  })
});


