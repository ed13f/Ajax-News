$(document).ready(function() {

  // Upvote
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
      console.log(response);
      $pointsSpan.html(response.votes);
    })
  })

  // Delete
  $('input.delete').on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    var $form = $this.closest('form');
    $.ajax({
      url: $form.attr('action'),
      // method: $form.attr('method'),
      method: 'DELETE',
      data: $form.serialize()
    }).done(function(response) {
      $this.closest('article').hide();
      console.log(response);
    })
  })

});
