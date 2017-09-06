$(document).ready(function() {
  $upVoteButtons = $(".upvote-button");


  $upVoteButtons.on('click',function(event){
    event.preventDefault();
    $this = $(this);

    route = $this.parent().attr('action');//'/posts/' + $this.attr('id') +'/vote';
    console.log(route);
  });
});
