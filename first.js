$.noConflict()
jQuery(document).ready(function($){
setInterval(function(){
        if($(".current").next("img").length>0){
            $(".current").next("img").addClass("current")
            $(".current").first().removeClass("current")

        }

        else{
            $(".slides").find("img").first().addClass("current")
            $(".current").last().removeClass("current")
        }




} ,2000)
})
$(document).ready(function(){
    $(".subnavbtn").mouseenter(function(){
      $(".subnav-content").SlideDown("slow");
    });
});