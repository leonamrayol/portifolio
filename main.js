let visible = false;

function toggle() {
  if (!visible) {
    document.getElementById('opt').style.visibility = 'visible';
    visible = true;
    $('.option').toggleClass('option-active');
  } else {
    document.getElementById('opt').style.visibility = 'hidden';
    visible = false;
  }
}

$("#button-m").click(function() {
  $('.transform').toggleClass('transform-active');
});
