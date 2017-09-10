$(document).ready(function() {

  $('.upvote-button').on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    var $form = $this.closest('form')
    $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()
    }).done(function(response) {
      $this.css('color', 'red');
      console.log(response);
      var $span = $this.closest('article').find('span.points');
      $span.html(response.votes);
    })
  })

});
