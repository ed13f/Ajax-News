$(document).ready(function() {
  $upVoteButtons = $(".upvote-button");


  $upVoteButtons.on('click',function(event){
    event.preventDefault();
    $this = $(this);

    route = $this.parent().attr('action');
    console.log(route);

    var $ajaxRequest = $.ajax({
      url: route,
      method: 'post',
      data: 'text'
    })

    $ajaxRequest.done(function(response) {
      console.log(response);
    });

  }); // $upVoteButtons
}); // $(document)
