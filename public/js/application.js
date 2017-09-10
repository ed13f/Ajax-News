$(document).ready(function() {

  // Upvote a post
  $('.upvote-button').on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    var $form = $this.closest('form')
    var $pointsSpan = $this.closest('article').find('span.points');
    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      $this.css('color', 'red');
      $pointsSpan.html(response.votes);
    })
  })

  // Delete a post
  $('input.delete').on('click', function(event) {
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
      $('div.post-container').append(response);
    })
  })



});
