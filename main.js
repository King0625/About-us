$(document).ready(()=>{
    $("#img1").hover(
        ()=>{            
            $("#person1").show();
            $("#img1 img").fadeOut(700,() => {
                $("#img1 img").attr("src","炳丞2.png").fadeIn(700);
            });
            $("#intro").hide();           
        },
        ()=>{        
            $("#intro").show();
            $("#img1 img").fadeOut(100,() => {
                $("#img1 img").attr("src","炳丞.png").fadeIn(100);
            });  
            $("#person1").hide();            
        }
    );
    $("#img2").hover(
        ()=>{            
            $("#person2").show();
            $("#img2 img").fadeOut(700,() => {
                $("#img2 img").attr("src","睿紘2.png").fadeIn(700);
            });
            $("#intro").hide();           
        },
        ()=>{        
            $("#intro").show();
            $("#img2 img").fadeOut(100,() => {
                $("#img2 img").attr("src","睿紘.png").fadeIn(100);
            });
            $("#person2").hide();            
        }
    );
    $("#img3").hover(
        ()=>{            
            $("#person3").show();
            $("#img3 img").fadeOut(700,() => {
                $("#img3 img").attr("src","伯瑋2.png").fadeIn(700);
            });
            $("#intro").hide();           
        },
        ()=>{        
            $("#intro").show();
            $("#img3 img").fadeOut(100,() => {
                $("#img3 img").attr("src","伯瑋.png").fadeIn(100);
            });
            $("#person3").hide();            
        }
    );
    $("#img4").hover(
        ()=>{            
            $("#person4").show();
            $("#img4 img").fadeOut(700,() => {
                $("#img4 img").attr("src","立壕2.png").fadeIn(700);
            });
            $("#intro").hide();           
        },
        ()=>{        
            $("#intro").show();
            $("#img4 img").fadeOut(100,() => {
                $("#img4 img").attr("src","立壕.png").fadeIn(100);
            });
            $("#person4").hide();            
        }
    );
    $("#img5").hover(
        ()=>{            
            $("#person5").show();
            $("#img5 img").fadeOut(700,() => {
                $("#img5 img").attr("src","友鈞2.png").fadeIn(700);
            });
            $("#intro").hide();           
        },
        ()=>{        
            $("#intro").show();
            $("#img5 img").fadeOut(100,() => {
                $("#img5 img").attr("src","友鈞.png").fadeIn(100);
            });
            $("#person5").hide();            
        }
    );
    
});