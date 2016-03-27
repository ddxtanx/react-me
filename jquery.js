$(document).ready(function() {
            $('.tooltip').tooltipster();
            $("#hello").click(function(){
              alert("Help");
              $("#difficulty").css('display', 'block');
            });
});
