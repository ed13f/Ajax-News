$(document).ready(function() {
  $upVoteButtons = $(".upvote-button");


  $upVoteButtons.on('click',function(event){
    event.preventDefault();
    $this = $(this);

    route = $this.parent().attr('action');

    var $ajaxRequest = $.ajax({
      url: route,
      method: 'post',
      data: 'html'
    })

    $ajaxRequest.done(function(response) {
      $parentOfInsertLocation = $this.parent().parent().children('p')
      $totalPointsDisplay = $parentOfInsertLocation.children().filter('.points');
      debugger
      // $totalPointsDisplay.remove();
      $this.css('color', 'red');
      // $parentOfInsertLocation.prepend(response);
      $totalPointsDisplay.text(response);
      console.log(response);
    });

  }); // $upVoteButtons
}); // $(document)
