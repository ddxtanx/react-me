$(function(id) {
    $(id).css('font-size', '1em');

    while( $('#'+id+' div').height() > $('#'+'id').height() ) {
        $('#'+id +'div').css('font-size', (parseInt($('#'+id +'div').css('font-size')) - 1) + "px" );
    }
  });
  
