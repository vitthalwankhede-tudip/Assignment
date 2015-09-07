
$(document).ready(function(){
   
$("p.readMore").click(function(){
        $("p.readLess").show();
        $("#divMoreInfo").fadeIn(500);
        $("#divMoreInfo").css("background", "lightgreen");
     $(this).hide();
    });

$("p.readLess").click(function(){
        $("p.readMore").show();
        $("#divMoreInfo").fadeOut(500);
         $(this).hide();
    });

 $("p.flip").click(function(){
 	$("#panal").css("background", "lightgreen");
        $("#panal").slideToggle("slow");
    });

});