$(document).ready(function() {
  let $block = null;


  $('[data-stack]').click(function() {
    if (!$block)  {
    $block = $(this).children().last().detach();
  } else if (isLegal(this) || isEmpty(this)) {

    $(this).append($block);
    $block = null;
    if (checkForWin()){$('#announce-game-won').text("Congratulations!  You're not a complete idiot!");
  }
}
  });
  function isLegal(stack) {
    return $block.data('block') < $(stack).children().last().data('block')
    // ask if the return here basically means "check this process"
  }
  function isEmpty(stack) {
    return $(stack).children().length === 0;
  }

  function checkForWin() {
    return $('[data-stack="2"]').children().length === 4 ||
    $('[data-stack="3"]').children().length === 4
  }
});
