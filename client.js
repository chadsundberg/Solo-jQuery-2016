var colorArray = ['red', 'yellow', 'green', 'blue']
var numberOfColors = 4;




$(document).ready(function(){

  var clicks = 0;
  // addCubesToPage();

  $('.color-button').on('click', function(){
    // var colorOfCubeSelected = $(this).data();
    // console.log($(this).data().color);
    clicks += 1;
    var newColorCube = $('<div>');
    newColorCube.css('background-color', $(this).data().color);
    newColorCube.addClass('color-cube');
    newColorCube.data('colorOfCube', $(this).data().color);
    $('.container').append(newColorCube);
    document.getElementById($(this).data().color).innerHTML = clicks;

  });





});

// function addCubesToPage() {
//   $('.container').empty();
//   for (var i = 0; i < colorArray.length; i++) {
//     var newColorCube = $('<div>');
//     newColorCube.css('background-color', colorArray[i]);
//     newColorCube.addClass('color-cube');
//     newColorCube.data('colorOfCube', colorArray[i]);
//     $('.container').append(newColorCube);
//   }
// }
