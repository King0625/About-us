$(document).ready(function(){
    $("#img1").hover(
        function(){            
            $("#person1").show();
            // $("#img1 img").fadeOut(100,() => {
            //     $("#img1 img").attr("src","睿紘.png").fadeIn(100);
            // });
            $("#img1 img").fadeOut(100)
            $("#img1 img").attr("src","睿紘.png").fadeIn(100)
            $("#intro").hide();           
        },
        function() {        
            $("#intro").show();
            $("#img1 img").fadeOut(100,() => {
                $("#img1 img").attr("src","炳丞.png").fadeIn(100);
            }); 
            ;         
            $("#person1").hide();            
        }
    );
    $("#img2").hover(
        function(){            
            $("#person2").show();
            $("#intro").hide();           
        },
        function() {        
            $("#intro").show();
            $("#person2").hide();            
        }
    );
    $("#img3").hover(
        function(){            
            $("#person3").show();
            $("#intro").hide();           
        },
        function() {        
            $("#intro").show();
            $("#person3").hide();            
        }
    );
    $("#img4").hover(
        function(){            
            $("#person4").show();
            $("#intro").hide();           
        },
        function() {        
            $("#intro").show();
            $("#person4").hide();            
        }
    );
    $("#img5").hover(
        function(){            
            $("#person5").show();
            $("#intro").hide();           
        },
        function() {        
            $("#intro").show();
            $("#person5").hide();            
        }
    );
    
});