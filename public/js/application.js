$(document).ready(function() {

  // Upvote a post
  $('.post-container').on('submit', '.upvote-form', function(event) {
    event.preventDefault();
    var $form = $(this);
    var $pointsSpan = $form.closest('article').find('span.points');
    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      $form.children('button').css('color', 'red');
      $pointsSpan.html(response.votes);
    })
  })

  // Delete a post
  $('.post-container').on('click', 'input.delete', function(event) {
    event.preventDefault();
    var $this = $(this);
    var $form = $this.closest('form');
    $.ajax({
      url: $form.attr('action'),
      method: 'DELETE',
      data: $form.serialize()
    }).done(function(response) {
      $this.closest('article').hide();
    })
  })

  // Create a post
  $('form#posts').on('submit', function(event) {
    event.preventDefault();
    var $form = $(this);
    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response){
      console.log(response);
      $('article').last().append(response);
    })
  })

});
